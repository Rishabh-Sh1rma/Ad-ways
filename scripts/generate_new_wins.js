import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images');

// 1. Josh SVG (3.5k closed deal)
const joshSvg = `
<svg width="800" height="1060" viewBox="0 0 800 1060" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="1060" fill="#000000" />
  
  <!-- Header Bar -->
  <g fill="#007aff">
    <path d="M 40 45 L 25 60 L 40 75" stroke="#007aff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="50" y="66" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="28" font-weight="600" fill="#007aff">37</text>
  </g>
  
  <!-- Avatar -->
  <circle cx="400" cy="55" r="42" fill="#8e8e93" />
  <text x="400" y="68" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="40" font-weight="600" fill="#ffffff" text-anchor="middle">J</text>
  <text x="400" y="125" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="22" font-weight="600" fill="#ffffff" text-anchor="middle">Josh &#x203A;</text>
  
  <!-- FaceTime Icon -->
  <rect x="715" y="42" width="40" height="28" rx="6" fill="#007aff" />
  <polygon points="760,49 778,38 778,74 760,63" fill="#007aff" />

  <!-- Subhead -->
  <text x="400" y="195" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="18" fill="#8e8e93" text-anchor="middle">iMessage</text>
  <text x="400" y="235" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="20" font-weight="500" fill="#8e8e93" text-anchor="middle">Today 3:24 PM</text>

  <!-- Bubble 1 (Josh): Hey just closed a deal for 3.5k! -->
  <rect x="40" y="270" width="540" height="74" rx="36" fill="#26252a" />
  <text x="75" y="318" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="29" fill="#ffffff">Hey just closed a deal for 3.5k! &#127881;</text>

  <!-- Bubble 2 (Josh): Detailed review -->
  <rect x="40" y="365" width="670" height="420" rx="36" fill="#26252a" />
  <text x="75" y="425" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="27" fill="#ffffff" line-height="1.4">
    <tspan x="75" dy="0">Honestly it's crazy how much of a</tspan>
    <tspan x="75" dy="46">difference going from just volume of</tspan>
    <tspan x="75" dy="46">leads to quality leads has made. We're</tspan>
    <tspan x="75" dy="46">closing at a much higher rate now and</tspan>
    <tspan x="75" dy="46">actually getting jobs out of the leads</tspan>
    <tspan x="75" dy="46">instead of chasing a bunch of people</tspan>
    <tspan x="75" dy="46">who aren't serious.</tspan>
    <tspan x="75" dy="54">Thanks Rishabh.</tspan>
  </text>

  <!-- Bubble 3 (Rishabh sent blue) -->
  <rect x="290" y="815" width="470" height="120" rx="36" fill="#007aff" />
  <text x="325" y="865" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="27" fill="#ffffff">
    <tspan x="325" dy="0">It is the thing I would like to</tspan>
    <tspan x="325" dy="44">preach most to clients.</tspan>
  </text>
  
  <text x="755" y="965" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="18" fill="#8e8e93" text-anchor="end">Delivered</text>
</svg>
`;

// 2. Gavin SVG (5x business in 6 months)
const gavinSvg = `
<svg width="800" height="1160" viewBox="0 0 800 1160" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="1160" fill="#000000" />
  
  <!-- Header Bar -->
  <g fill="#007aff">
    <path d="M 40 45 L 25 60 L 40 75" stroke="#007aff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="50" y="66" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="28" font-weight="600" fill="#007aff">469</text>
  </g>
  
  <!-- Avatar -->
  <circle cx="400" cy="55" r="42" fill="#3a3a3c" />
  <text x="400" y="68" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="34" font-weight="600" fill="#ffffff" text-anchor="middle">GS</text>
  <text x="400" y="125" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="22" font-weight="600" fill="#ffffff" text-anchor="middle">Gavin &#x203A;</text>

  <!-- Sent bubble 1 -->
  <rect x="550" y="180" width="210" height="66" rx="33" fill="#007aff" />
  <text x="580" y="224" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="28" fill="#ffffff">Bro please</text>

  <!-- Sent bubble 2 -->
  <rect x="250" y="260" width="510" height="68" rx="34" fill="#007aff" />
  <text x="280" y="304" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="28" fill="#ffffff">And if you can on my Google &#128591;</text>
  <text x="755" y="355" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="18" fill="#8e8e93" text-anchor="end">Delivered</text>

  <!-- Yesterday timestamp -->
  <text x="400" y="420" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="20" font-weight="500" fill="#8e8e93" text-anchor="middle">Yesterday 2:24 PM</text>

  <!-- Thumbs up & Tap in sticker -->
  <text x="60" y="550" font-size="80">&#128077;&#127995;</text>
  <rect x="420" y="480" width="160" height="74" rx="14" fill="#ffffff" />
  <text x="500" y="530" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="34" font-weight="bold" fill="#000000" text-anchor="middle">Tap in</text>

  <!-- Today timestamp -->
  <text x="400" y="630" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="20" font-weight="500" fill="#8e8e93" text-anchor="middle">Today 7:49 PM</text>

  <!-- Received bubble (5x my business) -->
  <rect x="40" y="670" width="670" height="120" rx="36" fill="#26252a" />
  <text x="75" y="720" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="28" fill="#ffffff">
    <tspan x="75" dy="0">You dead ass 5x my business</tspan>
    <tspan x="75" dy="44">I just did the math &#129315;</tspan>
  </text>

  <!-- Bottom Message Bar -->
  <rect x="0" y="870" width="800" height="290" fill="#121212" />
  <circle cx="70" cy="920" r="28" fill="#2c2c2e" />
  <text x="70" y="930" font-size="32" fill="#ffffff" text-anchor="middle">+</text>
  <rect x="120" y="892" width="550" height="56" rx="28" fill="#1c1c1e" stroke="#38383a" stroke-width="1.5" />
  <text x="155" y="930" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="24" fill="#636366">iMessage</text>
  <!-- Mic icon -->
  <circle cx="730" cy="920" r="24" fill="#2c2c2e" />
</svg>
`;

async function run() {
  await sharp(Buffer.from(joshSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'win-8.webp'));
  console.log('✓ Created win-8.webp (Josh $3,500 deal)');

  await sharp(Buffer.from(gavinSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'win-9.webp'));
  console.log('✓ Created win-9.webp (Gavin 5x business)');
}

run();
