import fitz
import os
import glob

pdf_path = r"C:\Users\Atharva Sharma\Downloads\Burgundy and White Simple Minimalist Furniture Product Catalog Booklet_20260805_231942_0000.pdf"
out_dir = r"C:\Users\Atharva Sharma\OneDrive\Desktop\pure space 4\public\products"

if not os.path.exists(out_dir):
    os.makedirs(out_dir)
    pass

doc = fitz.open(pdf_path)

for page_index in range(len(doc)):
    page = doc[page_index]
    for image_index, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        image_name = f"new_product_{page_index+1}_{image_index}.{image_ext}"
        image_path = os.path.join(out_dir, image_name)
        
        with open(image_path, "wb") as f:
            f.write(image_bytes)
            
        print(f"Saved {image_path}")

print("Extraction complete.")
