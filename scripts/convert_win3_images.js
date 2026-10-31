import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images');
const sourceFiles = [
  'image_dafcbacf.png',
  'image_5c1ccec0.png',
  'image_1a05a095.png',
  'image_264d2f98.png',
  'image_72dd64bd.png',
];

async function convert() {
  for (let i = 0; i < sourceFiles.length; i++) {
    const src = path.resolve('public/assets/aistudio', sourceFiles[i]);
    const dest = path.join(outputDir, `meta-win-3-${i + 1}.webp`);
    await sharp(src)
      .webp({ quality: 88, effort: 4 })
      .toFile(dest);
    const stat = fs.statSync(dest);
    console.log(`Converted ${sourceFiles[i]} -> meta-win-3-${i + 1}.webp (${Math.round(stat.size / 1024)} KB)`);
  }
}

convert();
