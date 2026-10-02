import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  { name: 'adways-logo.webp', url: 'https://i.ibb.co/0yBPKq0Q/adways-logo-variation-01-geometric-interlock.png' },
  { name: 'step-01.webp', url: 'https://i.ibb.co/RkSxRP7K/adways-step-01-exact-offer-gradient.png' },
  { name: 'step-02.webp', url: 'https://i.ibb.co/Tqv91Gxv/adways-step-02-exact-leads-gradient.png' },
  { name: 'step-03.webp', url: 'https://i.ibb.co/vCMSmZXw/adways-step-03-exact-calls-gradient.png' },
  { name: 'step-04.webp', url: 'https://i.ibb.co/Fk8WTX0g/adways-step-04-exact-convert-gradient.png' },
  
  // Client wins
  { name: 'win-1.webp', url: 'https://i.ibb.co/6JXfF0pG/upload-image-6.jpg' },
  { name: 'win-2.webp', url: 'https://i.ibb.co/sdLMKTPz/upload-image-5.jpg' },
  { name: 'win-3.webp', url: 'https://i.ibb.co/B5KJYrb9/upload-image-4.png' },
  { name: 'win-4.webp', url: 'https://i.ibb.co/DHyLZs2r/upload-image-1.jpg' },
  { name: 'win-5.webp', url: 'https://i.ibb.co/MxJZLsk7/Wilson-closed.png' },
  { name: 'win-6.webp', url: 'https://i.ibb.co/LD2rV9Dg/upload-image-2.jpg' },
  { name: 'win-7.webp', url: 'https://i.ibb.co/Y4GJ3hHt/upload-image-7.jpg' },

  // Campaign results
  { name: 'camp-1.webp', url: 'https://i.ibb.co/LX8ncVHp/cintra-1.jpg' },
  { name: 'camp-2.webp', url: 'https://i.ibb.co/V08Vkps3/cintra-2.jpg' },
  { name: 'camp-3.webp', url: 'https://i.ibb.co/Z6YphM8n/Whats-App-Image-2026-05-02-at-10-47-35-PM.jpg' },
  { name: 'camp-4.webp', url: 'https://i.ibb.co/LD81nGM3/Whats-App-Image-2026-05-02-at-10-47-37-PM-1.jpg' },
  { name: 'camp-5.webp', url: 'https://i.ibb.co/yKbnNRy/Whats-App-Image-2026-05-02-at-10-47-37-PM-2.jpg' },
  { name: 'camp-6.webp', url: 'https://i.ibb.co/PvVBLwG7/Whats-App-Image-2026-05-02-at-10-47-38-PM.jpg' },
  { name: 'camp-7.webp', url: 'https://i.ibb.co/QvZ13DL3/Whats-App-Image-2026-05-02-at-10-47-35-PM-1.jpg' },
  { name: 'camp-8.webp', url: 'https://i.ibb.co/JWpZpGPn/u.jpg' },
  { name: 'camp-9.webp', url: 'https://i.ibb.co/236Fk5q7/Whats-App-Image-2026-05-02-at-10-47-36-PM.jpg' },
  { name: 'camp-10.webp', url: 'https://i.ibb.co/hxP7rMcF/Whats-App-Image-2026-05-02-at-10-47-36-PM-1.jpg' },
  { name: 'camp-11.webp', url: 'https://i.ibb.co/Z78cLTH/Whats-App-Image-2026-05-02-at-10-47-37-PM.jpg' },
];

async function convertAll() {
  console.log('Converting all images to WebP...');
  for (const item of images) {
    const dest = path.join(outputDir, item.name);
    try {
      const response = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        }
      });
      if (!response.ok) {
        console.error(`Failed to fetch ${item.url}: ${response.statusText}`);
        continue;
      }
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await sharp(buffer)
        .webp({ quality: 82, effort: 4 })
        .toFile(dest);
      const stats = fs.statSync(dest);
      console.log(`✓ Converted ${item.name} (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`Error processing ${item.name}:`, err.message);
    }
  }
  console.log('Conversion complete!');
}

convertAll();
