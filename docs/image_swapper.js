import fs from 'fs';
import { glob } from 'glob';

// Matches <a ...><img ... src="images/..." ... alt="..." .../></a>
// Captures src and alt from the img tag, ignores the anchor href
const IMAGE_REGEX = /<a\b[^>]*>\s*<img\b[^>]*\bsrc=["']([^"']*images\/[^"']+)["'][^>]*\balt=["']([^"']*)["'][^>]*\/?>\s*<\/a>/gi;

// Also try alt before src order
const IMAGE_REGEX_ALT_FIRST = /<a\b[^>]*>\s*<img\b[^>]*\balt=["']([^"']*)["'][^>]*\bsrc=["']([^"']*images\/[^"']+)["'][^>]*\/?>\s*<\/a>/gi;

async function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Normalize src to always be relative (strip leading slash)
  const normalizesrc = (src) => src.replace(/^\//, '');

  // Collect all matches, handling both src-first and alt-first attribute orders
  const matches = [];

  for (const match of content.matchAll(IMAGE_REGEX)) {
    matches.push({ full: match[0], src: normalizesrc(match[1]), alt: match[2] });
  }

  for (const match of content.matchAll(IMAGE_REGEX_ALT_FIRST)) {
    // Avoid duplicates already caught by the first regex
    if (!matches.find(m => m.full === match[0])) {
      matches.push({ full: match[0], src: normalizeSource(match[2]), alt: match[1] });
    }
  }

  if (matches.length === 0) return;

  let assigns = '';
  let updated = content;

  matches.forEach(({ full, src, alt }, i) => {
    const varName = `img${i + 1}`;

    assigns += `{% assign ${varName} = site.data.image_manifest["${src}"] %}\n`;

    updated = updated.replace(
      full,
      `{% include slider_img_srcset.html src="${src}" alt="${alt}" manifest=${varName} %}`
    );
  });

  // Prepend assigns to the content after the front matter
  updated = updated.replace(/^(---[\s\S]+?---\n)/, `$1\n${assigns}`);

  fs.writeFileSync(filePath, updated);
  console.log(`✓ ${filePath} — replaced ${matches.length} image(s)`);
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