import fs from 'fs';
import { glob } from 'glob';

const IMAGE_DIR = 'images';

// Matches standard Markdown image syntax: ![alt text](/images/photo.jpg)
const IMAGE_REGEX = /!\[([^\]]*)\]\(\/?(images\/[^)]+)\)/g;

async function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(IMAGE_REGEX)];

  if (matches.length === 0) return;

  let assigns = '';
  let updated = content;

  matches.forEach((match, i) => {
    const [full, alt, src] = match;
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