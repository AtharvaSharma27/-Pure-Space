import fitz
import os

pdf_path = r"C:\Users\Atharva Sharma\Downloads\Untitled document (12).pdf"
out_dir = r"c:\Users\Atharva Sharma\OneDrive\Desktop\pure space 5\public\products"

if not os.path.exists(out_dir):
    os.makedirs(out_dir)

doc = fitz.open(pdf_path)

count = 1
for i in range(len(doc)):
    page = doc[i]
    images = page.get_images(full=True)
    if images:
        for img_index, img in enumerate(images):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Save the image
            image_filename = f"untitled_product_{count}.{image_ext}"
            image_filepath = os.path.join(out_dir, image_filename)
            with open(image_filepath, "wb") as f:
                f.write(image_bytes)
            print(f"Extracted {image_filename} from page {i+1}")
            count += 1
    else:
        # No image found on page, we can try to render the page itself as an image if needed
        # but let's try standard extraction first
        pass
        
print("Extraction complete.")
