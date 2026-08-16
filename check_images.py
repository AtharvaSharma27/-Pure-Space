import pytesseract
from PIL import Image

try:
    img4 = Image.open(r"C:\Users\Atharva Sharma\OneDrive\Desktop\pure space 5\public\products\untitled_product_4.jpeg")
    text4 = pytesseract.image_to_string(img4)
    print("--- Image 4 Text ---")
    print(text4)
except Exception as e:
    print("Error with Image 4:", e)

try:
    img5 = Image.open(r"C:\Users\Atharva Sharma\OneDrive\Desktop\pure space 5\public\products\untitled_product_5.jpeg")
    text5 = pytesseract.image_to_string(img5)
    print("--- Image 5 Text ---")
    print(text5)
except Exception as e:
    print("Error with Image 5:", e)
