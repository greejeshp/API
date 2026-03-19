import pandas as pd
import json

try:
    file_path = r'C:\Users\User\Downloads\PUT Method Field Description (1).xlsx'
    df = pd.read_excel(file_path, header=None)

    # Column 0: API Name
    # Column 4: Description
    # Only if Column 2 (Field) is NaN - using the same logic as parse_put_fields.py
    
    df[0] = df[0].ffill()
    
    mapping = {}
    for index, row in df.iterrows():
        api_name = str(row[0]).strip()
        field_name = str(row[2]).strip()
        desc = str(row[4]).strip()
        
        # We want the API-level description, which is in rows where field is NaN/null
        if api_name and desc and api_name.lower() != 'nan' and desc.lower() != 'nan' and field_name.lower() == 'nan':
            if api_name not in mapping or len(desc) > len(mapping.get(api_name, '')):
                 mapping[api_name] = desc

    # Format as JavaScript dictionary string
    js_str = "  const exactOverrides = {\n"
    for k, v in mapping.items():
        # escape quotes
        v_clean = v.replace("'", "\\'").replace("\n", " ").replace("\r", "")
        js_str += f"    '{k}': '{v_clean}',\n"
    js_str += "  };\n"

    with open(r'C:\Users\User\.gemini\antigravity\scratch\api-docs\excel_overrides.js', 'w', encoding='utf-8') as f:
        f.write(js_str)

    print(f"Success! Generated {len(mapping)} overrides.")

except Exception as e:
    print(f"Error processing Excel file: {e}")

except Exception as e:
    print(f"Error processing Excel file: {e}")
