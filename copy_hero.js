import fs from 'fs';
import path from 'path';

const src = 'C:\\Users\\Atharva Sharma\\.gemini\\antigravity-ide\\brain\\98ea5bf9-294c-47f1-bf73-f37d5d48b6be\\media__1781446430295.png';
const dest = 'C:\\Users\\Atharva Sharma\\OneDrive\\Desktop\\pure space 3\\public\\images\\hero-products-new.png';

try {
  // Ensure destination directory exists
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
  console.log('✅ Hero image copied successfully to:', dest);
} catch (err) {
  console.error('❌ Error:', err.message);
}
