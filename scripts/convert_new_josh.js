import path from 'path';
import sharp from 'sharp';

async function convert() {
  // Convert new Josh 35k screenshot to WebP replacing win-8.webp
  await sharp('public/assets/aistudio/image_2ad9611c.png')
    .webp({ quality: 90 })
    .toFile('public/images/win-8.webp');
  console.log('✓ Successfully converted new Josh 35k screenshot to win-8.webp');

  // Also convert image_1730aec9.png in case needed
  await sharp('public/assets/aistudio/image_1730aec9.png')
    .webp({ quality: 90 })
    .toFile('public/images/meta-campaign-visit.webp');
  console.log('✓ Converted meta-campaign-visit.webp');
}

convert();
