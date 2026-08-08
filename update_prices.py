import re

file_path = r"C:\Users\Atharva Sharma\OneDrive\Desktop\pure space 4\src\data\products.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace any price value with "Contact for Best Price"
new_content = re.sub(r'"price":\s*".*?"', r'"price": "Contact for Best Price"', content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated prices in products.js")
