import os
import glob

replacements = {
    # 1L
    '/products/new_product_10_0.png': '/products/final_product_1.png',
    '/products/new_product_11_0.png': '/products/final_product_2.png',
    '/products/extracted_page0.png': '/products/final_product_5.png',
    '/products/pdf5_product_4.png': '/products/final_product_5.png',
    '/products/pdf5_product_5.png': '/products/final_product_2.png',
    
    # 5L
    '/products/pdf8_img1_0.png': '/products/final_product_12.png',
    '/products/pdf5_product_3.png': '/products/final_product_6.png',
    '/products/pdf5_product_2.png': '/products/final_product_13.png',
    '/products/new_product_2_0.png': '/products/final_product_8.png',
    '/products/lemon_cleaner_extracted.png': '/products/final_product_11.png',
    '/products/power_wipe_extracted.png': '/products/final_product_7.png',
    
    # Others
    '/products/new_product_8_0.png': '/products/final_product_3.png',
    '/products/pdf8_img0_0.png': '/products/final_product_4.png',
    '/products/new_product_7_0.png': '/products/final_product_9.png',
    '/products/pdf6_product_1.png': '/products/final_product_9.png',
    '/products/new_product_6_0.png': '/products/final_product_10.png',
    '/products/pdf5_product_6.png': '/products/final_product_10.png',
}

files_to_update = [
    r"c:\Users\Atharva Sharma\OneDrive\Desktop\pure space 5\src\data\products.js",
    r"c:\Users\Atharva Sharma\OneDrive\Desktop\pure space 5\src\components\Products\PhenylShowcase.jsx",
    r"c:\Users\Atharva Sharma\OneDrive\Desktop\pure space 5\src\components\Products\LiquidShowcase.jsx",
]

for filepath in files_to_update:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for old, new in replacements.items():
            content = content.replace(old, new)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")
    else:
        print(f"File not found: {filepath}")
