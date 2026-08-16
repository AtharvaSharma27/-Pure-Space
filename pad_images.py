from PIL import Image

for f in ['public/products/extracted_page0.png', 'public/products/extracted_page1.png']:
    img = Image.open(f)
    width, height = img.size
    
    # Increase canvas size by 50% to add whitespace padding
    new_width = int(width * 1.5)
    new_height = int(height * 1.5)
    
    # Create a new white image
    new_img = Image.new("RGB", (new_width, new_height), (255, 255, 255))
    
    # Paste the original image in the center
    offset_x = (new_width - width) // 2
    offset_y = (new_height - height) // 2
    new_img.paste(img, (offset_x, offset_y))
    
    new_img.save(f)
