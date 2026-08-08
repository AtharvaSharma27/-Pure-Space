import re
import json

with open('netlify_js.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find('Liquid Hand Wash')
if idx != -1:
    context = content[idx-500:idx+2500]
    with open('extracted.txt', 'w', encoding='utf-8') as f:
        f.write(context)
    print("Saved extracted.txt")
