import json
import re

def update_app_js():
    app_js_path = r'C:\Users\User\.gemini\antigravity\scratch\api-docs\app.js'
    put_fields_path = r'C:\Users\User\.gemini\antigravity\scratch\api-docs\put_fields.json'
    excel_overrides_path = r'C:\Users\User\.gemini\antigravity\scratch\api-docs\excel_overrides.js'

    # Read new data
    with open(put_fields_path, 'r', encoding='utf-8') as f:
        put_fields = json.load(f)
    
    with open(excel_overrides_path, 'r', encoding='utf-8') as f:
        excel_overrides_content = f.read()

    # Read app.js
    with open(app_js_path, 'r', encoding='utf-8') as f:
        app_js = f.read()

    # 1. Update PUT_FIELD_OVERRIDES
    # Format put_fields as JS object
    put_fields_js = "const PUT_FIELD_OVERRIDES = " + json.dumps(put_fields, indent=2) + ";"
    
    # Use re.finditer to find the block precisely without replacing it with re.sub which has escape issues
    pattern1 = r'const PUT_FIELD_OVERRIDES = \{.*?\};'
    match1 = re.search(pattern1, app_js, re.DOTALL)
    if match1:
        start, end = match1.span()
        app_js = app_js[:start] + put_fields_js + app_js[end:]
    else:
        print("Could not find PUT_FIELD_OVERRIDES block in app.js")

    # 2. Update API_DESCRIPTION_OVERRIDES
    match_eo = re.search(r'const exactOverrides = (\{.*?\});', excel_overrides_content, re.DOTALL)
    if match_eo:
        new_exact_overrides_content = match_eo.group(1)
        # We'll use a slightly different formatting for the global constant replacement
        replacement = f"const API_DESCRIPTION_OVERRIDES = {new_exact_overrides_content};"
        
        # In app.js, target the global constant. It might have different indentation now.
        pattern2 = r'const API_DESCRIPTION_OVERRIDES = \{.*?\};'
        match2 = re.search(pattern2, app_js, re.DOTALL)
        if match2:
            start, end = match2.span()
            app_js = app_js[:start] + replacement + app_js[end:]
        else:
            print("Could not find API_DESCRIPTION_OVERRIDES block in app.js")

    # Write back to app.js
    with open(app_js_path, 'w', encoding='utf-8') as f:
        f.write(app_js)

    print("app.js updated successfully.")

if __name__ == "__main__":
    update_app_js()
