import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

replace_in_file('src/components/Products/PhenylShowcase.jsx', [
    ('Premium for use', 'Safe for daily use'),
    ('the premium quality of', 'the quality of'),
    ('Premium Variant Selector', 'Variant Selector'),
    ('Premium Properties', 'Properties')
])

replace_in_file('src/data/products.js', [
    ('Premium for use', 'Safe for daily use')
])

print("Removed remaining Premium references from Phenyls.")
