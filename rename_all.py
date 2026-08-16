import os

# Update PhenylShowcase.jsx to replace ANY "Lemongrass Phenyl" with "Lemon Phenyl"
with open('src/components/Products/PhenylShowcase.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("fullName: 'Lemongrass Phenyl'", "fullName: 'Lemon Phenyl'")

with open('src/components/Products/PhenylShowcase.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Update products.js to replace "Lemongrass Phenyl" with "Lemon Phenyl"
with open('src/data/products.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('"Lemongrass Phenyl"', '"Lemon Phenyl"')
content = content.replace('"Lemongrass Phenyl 5Ltr"', '"Lemon Phenyl 5Ltr"')

with open('src/data/products.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Renamed everywhere.")
