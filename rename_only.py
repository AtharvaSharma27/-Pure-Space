import os

with open('src/components/Products/PhenylShowcase.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# We only want to replace fullName: 'Lemongrass Phenyl' for the Lemon variants
# For variants1L, index 2:
#   {
#     name: 'Lemon',
#     fullName: 'Lemongrass Phenyl',
to_replace_1L = """  {
    name: 'Lemon',
    fullName: 'Lemongrass Phenyl',"""

replacement_1L = """  {
    name: 'Lemon',
    fullName: 'Lemon Phenyl',"""

content = content.replace(to_replace_1L, replacement_1L)

with open('src/components/Products/PhenylShowcase.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced fullName for Lemon in PhenylShowcase.jsx")
