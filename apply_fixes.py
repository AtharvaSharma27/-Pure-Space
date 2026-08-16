import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# 1. PhenylShowcase.jsx image and Premium replacements
replace_in_file('src/components/Products/PhenylShowcase.jsx', [
    ('image: \'/products/pdf9_img0_0.png\',', 'image: \'/products/extracted_page1.png\','),
    ('image: \'/products/pdf9_img1_0.png\',', 'image: \'/products/extracted_page0.png\','),
    ('Premium White Phenyl', 'White Phenyl'),
    ('Premium Lavender Phenyl', 'Lavender Phenyl'),
    ('Premium Lemongrass Phenyl', 'Lemongrass Phenyl'),
    ('Premium Kapoor Phenyl', 'Kapoor Phenyl'),
    ('Premium Rose Phenyl', 'Rose Phenyl'),
    ('name: \'Premium Lemongrass\',', 'name: \'Lemon\','),
    ('name: \'Premium Lemon\',', 'name: \'Lemon\',')
])

# 2. ShowcaseCard.jsx
replace_in_file('src/components/Products/ShowcaseCard.jsx', [
    ('className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"', 
     'className="w-full h-full object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"')
])

# 3. products.js
replace_in_file('src/data/products.js', [
    ('Premium White Phenyl', 'White Phenyl'),
    ('Premium Lavender Phenyl', 'Lavender Phenyl'),
    ('Premium Lemongrass Phenyl', 'Lemongrass Phenyl'),
    ('Premium Kapoor Phenyl', 'Kapoor Phenyl'),
    ('Premium Rose Phenyl', 'Rose Phenyl')
])

# 4. ProductsSection.jsx
replace_in_file('src/components/Products/ProductsSection.jsx', [
    ('Premium White Phenyl', 'White Phenyl'),
    ('Premium Phenyl Range', 'Phenyl Range')
])

# 5. Hero.jsx (Since "Premium" might have been replaced improperly, wait, did I replace anything there?)
# No, Hero.jsx just says "India's premium range...". It shouldn't be touched.

print("Done replacing.")
