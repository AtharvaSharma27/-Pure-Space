from PIL import Image

def standardize(path):
    img = Image.open(path)
    
    # We want a standard square aspect ratio to match Pine (1024x1024)
    target_width, target_height = 1024, 1024
    
    # Create a new white background image
    new_img = Image.new("RGB", (target_width, target_height), (255, 255, 255))
    
    # Find the scaling factor to fit the image into the target size with 10% padding
    pad = 0.1
    max_w = target_width * (1 - pad)
    max_h = target_height * (1 - pad)
    
    # Calculate scale
    scale = min(max_w / img.width, max_h / img.height)
    new_w = int(img.width * scale)
    new_h = int(img.height * scale)
    
    # Resize original image
    resized_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Paste into center
    offset_x = (target_width - new_w) // 2
    offset_y = (target_height - new_h) // 2
    new_img.paste(resized_img, (offset_x, offset_y))
    
    new_img.save(path, optimize=True)

standardize('public/products/extracted_page0.png')
standardize('public/products/extracted_page1.png')
