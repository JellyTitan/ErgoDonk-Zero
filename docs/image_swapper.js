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

  // Collect all matches with positions, skipping table images
  const allMatches = [];

  for (const match of content.matchAll(IMAGE_REGEX)) {
    if (!isInTable(content, match.index)) {
      allMatches.push({ full: match[0], src: normalizeSrc(match[1]), alt: match[2], index: match.index });
    }
  }

  for (const match of content.matchAll(IMAGE_REGEX_ALT_FIRST)) {
    if (!allMatches.find(m => m.full === match[0]) && !isInTable(content, match.index)) {
      allMatches.push({ full: match[0], src: normalizeSrc(match[2]), alt: match[1], index: match.index });
    }
  }

  if (allMatches.length === 0) return;

  // Sort by position in file
  allMatches.sort((a, b) => a.index - b.index);

  // Group consecutive images (only whitespace between them)
  const groups = [];
  let currentGroup = [allMatches[0]];

  for (let i = 1; i < allMatches.length; i++) {
    const prev = allMatches[i - 1];
    const curr = allMatches[i];
    const between = content.slice(prev.index + prev.full.length, curr.index);
    if (/^\s*$/.test(between)) {
      currentGroup.push(curr);
    } else {
      groups.push(currentGroup);
      currentGroup = [curr];
    }
  }
  groups.push(currentGroup);

  // Assign liquid variable names to all matches
  let varIndex = 0;
  let assigns = '';
  allMatches.forEach(m => {
    m.varName = `img${++varIndex}`;
    assigns += `{% assign ${m.varName} = site.data.image_manifest["${m.src}"] %}\n`;
  });

  // Build replacements in reverse order to preserve string positions
  let updated = content;
  for (const group of [...groups].reverse()) {
    const start = group[0].index;
    const end = group[group.length - 1].index + group[group.length - 1].full.length;

    const includeLines = group.map(m =>
      `{% include slider_img_srcset.html src="${m.src}" alt="${m.alt}" manifest=${m.varName} %}\n`
    );

    let figClass = '';
    if (group.length === 2) figClass = ' class="image-grid-2"';
    else if (group.length === 3) figClass = ' class="image-grid-3"';

    const replacement = `\n<figure${figClass}>\n${includeLines.join('')}<figcaption></figcaption>\n</figure>\n`;

    updated = updated.slice(0, start) + replacement + updated.slice(end);
  }

  // Prepend assigns to the content after the front matter
  updated = updated.replace(/^(---[\s\S]+?---\n)/, `$1\n${assigns}`);

  fs.writeFileSync(filePath, updated);
  console.log(`✓ ${filePath} — replaced ${allMatches.length} image(s)`);
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
