import urllib.request
import re
import json

html = urllib.request.urlopen('https://delicate-bunny-9ee35f.netlify.app/').read().decode('utf-8')
js_files = re.findall(r'src=\"(.*?\.js)\"', html)
print("Found JS files:", js_files)

if js_files:
    js_url = 'https://delicate-bunny-9ee35f.netlify.app' + js_files[0]
    print("Fetching JS:", js_url)
    js_content = urllib.request.urlopen(js_url).read().decode('utf-8')
    with open('netlify_js.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Saved netlify_js.js, length:", len(js_content))
else:
    print("No JS files found.")
