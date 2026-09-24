import json
from jinja2 import Environment, FileSystemLoader

# 1. Load the JSON data (assuming it was pulled from your private repo)
with open('resume.json', 'r') as file:
    resume_data = json.load(file)

# 2. Set up Jinja2 to look in the current directory for templates
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template('template.html')

# 3. Render the template with the JSON data
output_html = template.render(resume_data)

# 4. Save the compiled HTML to a file ready for S3 upload
with open('index.html', 'w') as file:
    file.write(output_html)

print("index.html successfully generated!")