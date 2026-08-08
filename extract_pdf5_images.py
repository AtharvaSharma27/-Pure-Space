import fitz
import os

pdf_path = r"C:\Users\Atharva Sharma\Downloads\Untitled document (5).pdf"
out_dir = r"C:\Users\Atharva Sharma\OneDrive\Desktop\pure space 4\public\products"

if not os.path.exists(out_dir):
    os.makedirs(out_dir)

doc = fitz.open(pdf_path)

for page_index in range(len(doc)):
    page = doc[page_index]
    for image_index, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        image_name = f"pdf5_product_{page_index+1}.{image_ext}"
        image_path = os.path.join(out_dir, image_name)
        
        with open(image_path, "wb") as f:
            f.write(image_bytes)
            
        print(f"Saved {image_path}")

print("Extraction complete.")
