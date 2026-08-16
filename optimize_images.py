import os
from PIL import Image

directory = r"C:\Users\Atharva Sharma\OneDrive\Desktop\pure space 5\public\products"
max_size = (800, 800)

for filename in os.listdir(directory):
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):
        filepath = os.path.join(directory, filename)
        try:
            with Image.open(filepath) as img:
                # Convert RGBA to RGB for JPEG if needed, but we save back to same format
                format_ = img.format
                
                # Check if we need to resize
                if img.width > max_size[0] or img.height > max_size[1]:
                    img.thumbnail(max_size, Image.Resampling.LANCZOS)
                
                # Save optimized
                if format_ == "PNG":
                    img.save(filepath, format="PNG", optimize=True)
                elif format_ in ["JPEG", "JPG"]:
                    img.save(filepath, format="JPEG", optimize=True, quality=80)
            print(f"Optimized {filename}")
        except Exception as e:
            print(f"Error optimizing {filename}: {e}")

print("All images optimized!")
