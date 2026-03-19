import os

def global_rename():
    root_dir = r'C:\Users\User\..gemini\antigravity\scratch\api-docs'
    # Actually use absolute paths for safety
    target_files = [
        r'C:\Users\User\.gemini\antigravity\scratch\api-docs\app.js',
        r'C:\Users\User\.gemini\antigravity\scratch\api-docs\data.js',
        r'C:\Users\User\.gemini\antigravity\scratch\api-docs\put_fields.json',
        r'C:\Users\User\.gemini\antigravity\scratch\api-docs\test-collection.json'
    ]
    
    renames = {
        'PartyLedgerId': 'PartyLedgerCode',
        'ProductId': 'ProductName',
        'BranchId': 'BranchCode',
        'VoucherId': 'VoucherName'
    }
    
    for file_path in target_files:
        if not os.path.exists(file_path):
            print(f"Skipping {file_path} (not found)")
            continue
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        for old, new in renames.items():
            content = content.replace(old, new)
            
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")

if __name__ == "__main__":
    global_rename()
