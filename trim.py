from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    return im.crop(bbox) if bbox else im

for f in ['public/products/extracted_page0.png', 'public/products/extracted_page1.png']:
    img = Image.open(f)
    trim(img).save(f)
