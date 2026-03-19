import pandas as pd
import json

file_path = r'C:\Users\User\Downloads\PUT Method Field Description (1).xlsx'
df = pd.read_excel(file_path, header=None)

# Column 0: API Name
# Column 1: Method
# Column 2: Field
# Column 4: Description (Alias)

df[0] = df[0].ffill()

mapping = {}

RENAME_MAP = {
    'PartyLedgerId': 'PartyLedgerCode',
    'ProductId': 'ProductName',
    'BranchId': 'BranchCode',
    'VoucherId': 'VoucherName'
}

for index, row in df.iterrows():
    api_name = str(row[0]).strip()
    if api_name == 'nan' or 'API Name' in api_name or 'nan' == str(row[2]):
        continue
    
    field_name = str(row[2]).strip()
    field_name = RENAME_MAP.get(field_name, field_name)
    
    field_type = str(row[3]).strip()
    description = str(row[4]).strip()
    
    if field_name == 'nan' or description == 'nan' or field_name == 'Field':
        continue
        
    if api_name not in mapping:
        mapping[api_name] = {}
    
    mapping[api_name][field_name] = {
        "desc": description,
        "type": field_type if field_type != 'nan' else 'String'
    }

with open('put_fields.json', 'w', encoding='utf-8') as f:
    json.dump(mapping, f, indent=2, ensure_ascii=False)
