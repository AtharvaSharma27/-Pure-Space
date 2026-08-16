import os

files_to_update = [
    r"c:\Users\Atharva Sharma\OneDrive\Desktop\pure space 5\src\data\products.js",
    r"c:\Users\Atharva Sharma\OneDrive\Desktop\pure space 5\src\components\Products\PhenylShowcase.jsx",
]

for filepath in files_to_update:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # We need to change imagePlaceholderColor for White Phenyl and Kapoor Phenyl
        inside_white_or_kapoor = False
        new_lines = []
        for line in lines:
            if 'White Phenyl' in line or 'Kapoor Phenyl' in line or '"name": "White Phenyl' in line or '"name": "Kapoor Phenyl' in line or '"name": "Premium White Phenyl' in line or '"name": "Premium Kapoor Phenyl' in line:
                inside_white_or_kapoor = True
            
            if inside_white_or_kapoor and 'imagePlaceholderColor' in line:
                if ':' in line:
                    parts = line.split(':')
                    line = parts[0] + ": '#FFFFFF',\n" if "'" in parts[1] else parts[0] + ': "#FFFFFF",\n'
                inside_white_or_kapoor = False # reset after changing
                
            # safety reset if we move to next object
            if 'features' in line or 'packSize' in line:
                inside_white_or_kapoor = False
                
            new_lines.append(line)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Updated {filepath}")
    else:
        print(f"File not found: {filepath}")
