import os
import re

files = [
    r"c:\Users\Atharva Sharma\OneDrive\Desktop\pure space 4\src\components\Hero.jsx",
    r"c:\Users\Atharva Sharma\OneDrive\Desktop\pure space 4\src\components\Navbar.jsx",
    r"c:\Users\Atharva Sharma\OneDrive\Desktop\pure space 4\src\components\Products\ProductCard.jsx",
    r"c:\Users\Atharva Sharma\OneDrive\Desktop\pure space 4\src\components\Products\ProductModal.jsx",
]

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # For static images in Hero and Navbar
        content = re.sub(r'src="/(images/[^"]+)"', r'src={`${import.meta.env.BASE_URL}\1`}', content)
        
        # For dynamic images in ProductCard and ProductModal
        content = content.replace('src={product.image}', 'src={product.image.startsWith("/") ? `${import.meta.env.BASE_URL}${product.image.slice(1)}` : product.image}')

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Updated image srcs for GitHub Pages")
