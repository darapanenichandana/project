import sys
import pytesseract
from pdf2image import convert_from_path
from PIL import Image

file_path = sys.argv[1]

def extract_from_image(path):
    img = Image.open(path)
    return pytesseract.image_to_string(img)

def extract_from_pdf(path):
    pages = convert_from_path(path)
    text = ""
    for page in pages:
        text += pytesseract.image_to_string(page)
    return text

if file_path.lower().endswith(".pdf"):
    output = extract_from_pdf(file_path)
else:
    output = extract_from_image(file_path)

print(output)