import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs';

// --- Configuration ---
const WIDTHS = [150, 250, 400, 800, 1200, 1600];
const QUALITY = 82;
const INPUT_DIR = 'images';
const OUTPUT_DIR = 'images';
const MANIFEST_PATH = '_data/image_manifest.json';
const EXTENSIONS = ['jpg', 'jpeg', 'JPG', 'JPEG', 'gif', 'GIF', 'png', 'PNG'];

async function processImage(inputPath) {
  const parsed = path.parse(inputPath);
  const baseName = parsed.name;
  const relativeDir = path.dirname(inputPath).replace(INPUT_DIR, '');
  const outputBase = path.join(OUTPUT_DIR, relativeDir);

  fs.mkdirSync(outputBase, { recursive: true });

  const metadata = await sharp(inputPath).metadata();
  const originalWidth = metadata.width;
  const originalHeight = metadata.height;

  const variants = [];

  // Generate resized variants
  for (const width of WIDTHS) {
    if (width > originalWidth) continue;

    const outputFile = path.join(outputBase, `${baseName}-${width}w.webp`);
    const height = Math.round(originalHeight * (width / originalWidth));

    await sharp(inputPath)
      .resize(width)
      .webp({ quality: QUALITY })
      .toFile(outputFile);

    variants.push({ width, height, file: outputFile });
    console.log(`  ✓ ${outputFile}`);
  }

  // Generate full-size WebP
  const fullSizeOutput = path.join(outputBase, `${baseName}.webp`);
  await sharp(inputPath)
    .webp({ quality: QUALITY })
    .toFile(fullSizeOutput);
  console.log(`  ✓ ${fullSizeOutput}`);

  return {
    src: inputPath,
    width: originalWidth,
    height: originalHeight,
    variants,
  };
}

async function main() {
  const pattern = `${INPUT_DIR}/**/*.{${EXTENSIONS.join(',')}}`;
  const images = await glob(pattern, { nodir: true });

  if (images.length === 0) {
    console.log(`No images found in ${INPUT_DIR}`);
    return;
  }

  console.log(`Found ${images.length} image(s) to process...\n`);

  const manifest = {};

  for (const imagePath of images) {
    console.log(`Processing: ${imagePath}`);
    const result = await processImage(imagePath);

    // Store manifest entry keyed by source path
    manifest[imagePath] = {
      width: result.width,
      height: result.height,
      variants: result.variants.map(v => ({
        width: v.width,
        height: v.height,
        file: v.file,
      })),
    };
  }

  // Write manifest
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${MANIFEST_PATH}`);
  console.log('\nDone!');
}

main().catch(console.error);