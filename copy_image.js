import fs from 'fs';
const src = 'C:\\Users\\Atharva Sharma\\.gemini\\antigravity-ide\\brain\\66dc6a3d-f7f6-4df7-b4ff-1a8becf831ab\\media__1781446015303.png';
const dest = 'C:\\Users\\Atharva Sharma\\OneDrive\\Desktop\\pure space 3\\public\\images\\hero-products-new.png';
fs.copyFileSync(src, dest);
console.log('Copy successful!');
