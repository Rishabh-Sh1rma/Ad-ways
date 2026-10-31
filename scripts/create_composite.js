import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function createComposite() {
  const width = 1200;
  const height = 825; // 16:11 aspect ratio matching the card container!

  // Resize images to fit neatly in a dashboard grid
  // Top left: 371 leads table (image_dafcbacf.png)
  const img1 = await sharp('public/assets/aistudio/image_dafcbacf.png')
    .resize({ width: 720, fit: 'inside' })
    .toBuffer();
  const meta1 = await sharp(img1).metadata();

  // Top right: 23 booked calls snippet (image_264d2f98.png)
  const img4 = await sharp('public/assets/aistudio/image_264d2f98.png')
    .resize({ height: 420, fit: 'inside' })
    .toBuffer();
  const meta4 = await sharp(img4).metadata();

  // Bottom left: 41 leads (image_5c1ccec0.png)
  const img2 = await sharp('public/assets/aistudio/image_5c1ccec0.png')
    .resize({ width: 560, fit: 'inside' })
    .toBuffer();
  const meta2 = await sharp(img2).metadata();

  // Bottom middle: B2B CBO campaign (image_1a05a095.png)
  const img3 = await sharp('public/assets/aistudio/image_1a05a095.png')
    .resize({ width: 560, fit: 'inside' })
    .toBuffer();
  const meta3 = await sharp(img3).metadata();

  // Dashboard pipeline (image_72dd64bd.png)
  const img5 = await sharp('public/assets/aistudio/image_72dd64bd.png')
    .resize({ width: 340, fit: 'inside' })
    .toBuffer();
  const meta5 = await sharp(img5).metadata();

  // Let's create an elegant dark composite canvas
  const canvas = sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 10, g: 10, b: 12, alpha: 1 },
    },
  });

  // Compose with rounded corners and dark borders
  const compositeList = [
    { input: img1, top: 40, left: 40 },
    { input: img2, top: 220, left: 40 },
    { input: img3, top: 480, left: 40 },
    { input: img4, top: 40, left: 640 },
    { input: img5, top: 480, left: 820 },
  ];

  await canvas
    .composite(compositeList)
    .webp({ quality: 90 })
    .toFile('public/images/meta-win-3-composite.webp');

  console.log('✓ Created meta-win-3-composite.webp');
}

createComposite().catch(console.error);
