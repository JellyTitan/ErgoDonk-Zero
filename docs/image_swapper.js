import fs from 'fs';
import { glob } from 'glob';

// Matches <a ...><img ... src="images/..." ... alt="..." .../></a>
// Captures src and alt from the img tag, ignores the anchor href
const IMAGE_REGEX = /<a\b[^>]*>\s*<img\b[^>]*\bsrc=["']([^"']*images\/[^"']+)["'][^>]*\balt=["']([^"']*)["'][^>]*\/?>\s*<\/a>/gi;

// Also try alt before src order
const IMAGE_REGEX_ALT_FIRST = /<a\b[^>]*>\s*<img\b[^>]*\balt=["']([^"']*)["'][^>]*\bsrc=["']([^"']*images\/[^"']+)["'][^>]*\/?>\s*<\/a>/gi;

function isInTable(content, matchIndex) {
  const lineStart = content.lastIndexOf('\n', matchIndex) + 1;
  const lineEnd = content.indexOf('\n', matchIndex);
  const line = content.slice(lineStart, lineEnd === -1 ? content.length : lineEnd);
  return line.includes('|') || line.includes('<td');
}

async function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  const normalizeSrc = (src) => src.replace(/^\//, '');

  // Collect all matches, tagged by whether they're in a table
  const nonTableMatches = [];
  const tableMatches = [];

  for (const match of content.matchAll(IMAGE_REGEX)) {
    const entry = { full: match[0], src: normalizeSrc(match[1]), alt: match[2], index: match.index };
    isInTable(content, match.index) ? tableMatches.push(entry) : nonTableMatches.push(entry);
  }

  for (const match of content.matchAll(IMAGE_REGEX_ALT_FIRST)) {
    const alreadySeen = [...nonTableMatches, ...tableMatches].find(m => m.full === match[0]);
    if (!alreadySeen) {
      const entry = { full: match[0], src: normalizeSrc(match[2]), alt: match[1], index: match.index };
      isInTable(content, match.index) ? tableMatches.push(entry) : nonTableMatches.push(entry);
    }
  }

  if (nonTableMatches.length === 0 && tableMatches.length === 0) return;

  // Seed varIndex from any existing {% assign imgN %} in the file to avoid collisions
  const existingAssigns = [...content.matchAll(/\{%\s*assign\s+img(\d+)/g)];
  let varIndex = existingAssigns.reduce((max, m) => Math.max(max, parseInt(m[1])), 0);

  // Assign var names and build assign statements for all new matches
  const allNew = [...nonTableMatches, ...tableMatches].sort((a, b) => a.index - b.index);
  let assigns = '';
  allNew.forEach(m => {
    m.varName = `img${++varIndex}`;
    assigns += `{% assign ${m.varName} = site.data.image_manifest["${m.src}"] %}\n`;
  });

  // Build the unified replacements list
  const replacements = [];

  // Non-table: group consecutive images, wrap in <figure>
  if (nonTableMatches.length > 0) {
    nonTableMatches.sort((a, b) => a.index - b.index);
    const groups = [];
    let currentGroup = [nonTableMatches[0]];
    for (let i = 1; i < nonTableMatches.length; i++) {
      const prev = nonTableMatches[i - 1];
      const curr = nonTableMatches[i];
      const between = content.slice(prev.index + prev.full.length, curr.index);
      /^\s*$/.test(between) ? currentGroup.push(curr) : (groups.push(currentGroup), currentGroup = [curr]);
    }
    groups.push(currentGroup);

    for (const group of groups) {
      const start = group[0].index;
      const end = group[group.length - 1].index + group[group.length - 1].full.length;
      const includeLines = group.map(m =>
        `{% include slider_img_srcset.html src="${m.src}" alt="${m.alt}" manifest=${m.varName} %}\n`
      );
      let figClass = '';
      if (group.length === 2) figClass = ' class="image-grid-2"';
      else if (group.length === 3) figClass = ' class="image-grid-3"';
      replacements.push({ start, end, replacement: `\n<figure${figClass}>\n${includeLines.join('')}<figcaption></figcaption>\n</figure>\n` });
    }
  }

  // Table images: replace each inline with thumb include, no figure wrapper
  for (const m of tableMatches) {
    replacements.push({
      start: m.index,
      end: m.index + m.full.length,
      replacement: `{% include slider_img_srcset_thumb.html src="${m.src}" alt="${m.alt}" manifest=${m.varName} %}`
    });
  }

  // Apply all replacements in reverse order to preserve string positions
  let updated = content;
  replacements.sort((a, b) => b.start - a.start);
  for (const { start, end, replacement } of replacements) {
    updated = updated.slice(0, start) + replacement + updated.slice(end);
  }

  // Append new assigns after any existing ones, or after front matter if none exist
  if (existingAssigns.length > 0) {
    const lastAssignMatch = [...updated.matchAll(/\{%\s*assign\s+img\d[^\n]*\n/g)].pop();
    const insertAt = lastAssignMatch.index + lastAssignMatch[0].length;
    updated = updated.slice(0, insertAt) + assigns + updated.slice(insertAt);
  } else {
    updated = updated.replace(/^(---[\s\S]+?---\n)/, `$1\n${assigns}`);
  }

  fs.writeFileSync(filePath, updated);
  console.log(`✓ ${filePath} — replaced ${nonTableMatches.length} non-table and ${tableMatches.length} table image(s)`);
}

async function main() {
  const files = await glob('**/*.md', { ignore: ['node_modules/**', '_site/**'] });
  console.log(`Found ${files.length} Markdown files\n`);
  for (const file of files) {
    await processFile(file);
  }
  console.log('\nDone!');
}

main().catch(console.error);
