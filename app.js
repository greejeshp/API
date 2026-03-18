/**
 * Pivotal ERP API Documentation — Enhanced Rendering Logic
 * Entity-grouped navigation with collapsible sidebar, Xero-style descriptions.
 * Last Updated: 2026-03-17 17:05
 */

// ─── Entity → Description Map (Xero-style) ───────────────────────────────────
const ENTITY_DESCRIPTIONS = {
  "Ledger Group": "Ledger Groups form the backbone of your chart of accounts. They classify every ledger into categories such as Assets, Liabilities, Income, and Expenses. Use these endpoints to retrieve the full hierarchy of groups and to build dynamic account selection UIs. For high-volume integrations, we recommend caching the ledger group hierarchy locally and refreshing it on demand.",
  "Ledger": "Ledgers represent individual account heads — parties, banks, income, or expense accounts. This set of endpoints lets you create, update, search, and retrieve ledger details, including statutory and statutory tax registration information. Use the <code>autocomplete</code> endpoint for real-time search in your own UI components.",
  "Currency": "The Currency module allows you to manage multi-currency ledger mappings. Use these endpoints to retrieve currency names linked to specific ledgers, enabling multi-currency transaction flows in international business environments.",
  "Salesman": "Salesmen are the primary field-level agents in the ERP. Use these endpoints to retrieve salesman-wise party lists, manage agent profiles, view GPS locations, and map parties to a salesman hierarchy for reporting and route planning.",
  "DebtorType": "Debtor Types categorise trade debtors by their channel or business type (e.g., Wholesaler, Retailer). This endpoint supports the creation and retrieval of debtor type classifications used for sales analysis and credit limit management.",
  "CreditorType": "Creditor Types help segment vendors and suppliers by category. Manage creditor type definitions through standard PUT and POST endpoints to ensure consistent vendor reporting.",
  "VoucherMode": "Voucher Modes define payment and receipt channel options such as Cash, Cheque, or Bank Transfer. Use these GET-style endpoints to retrieve all configured voucher modes by voucher type, ensuring accurate payment allocation during voucher entry.",
  "BG": "Bank Guarantees (BG) are financial instruments issued in favour of creditors. These endpoints let you create BG records, attach scanned documents, and track status, amount, and expiry details for financial compliance.",
  "PDC": "Post-Dated Cheques (PDC) track future-dated instruments received from or issued to parties. Save PDC records with cheque details and attach scanned copies through multipart endpoints to manage future receivables and payables.",
  "Receipt": "Receipt vouchers record incoming payments and are a critical component of accounts receivable. Use these endpoints to create receipts with cost-centre allocations, bill references, and TDS/VAT details for comprehensive accounting.",
  "Journal": "Journal entries are manual accounting adjustments that directly debit and credit ledger accounts. These endpoints support full double-entry journals with multiple ledger lines, narration, and file attachments for audit trails.",
  "CashBank": "Cash and Bank Book endpoints return a chronological ledger of all cash and bank transactions within a specific date range. Use these for building reconciliation views and real-time treasury dashboards.",
  "BankReconcilliation": "Bank Reconciliation matches your ERP bank ledger entries against the physical bank statement. Supply a date range and ledger ID to retrieve outstanding and matched transactions for accurate financial reporting.",
  "Ledgervoucher": "Ledger Voucher reports return a summarised statement of transactions for a specific ledger account over a period, including opening and closing balances. This is the primary tool for party account statements and reconciliation.",
  "LedgerVoucherDetails": "Returns the line-level details of every voucher posted against a ledger. Useful for building drill-down views in your application from a ledger summary into the underlying transaction level.",
  "Daybook": "The Day Book is a chronological record of all vouchers posted on a given day across all modules. Filter by branch, voucher type, or posting status to audit daily activity and verify data entry accuracy.",
  "ProductGroup": "Product Groups organise your inventory catalogue into logical brand or category hierarchies. Create group structures and retrieve tree-level summaries for use in complex inventory reports and warehousing modules.",
  "productCategory": "Product Categories provide a secondary classification layer below Product Groups. Use these endpoints to create new category nodes and assign aliases for improved product searchability.",
  "ProductCompany": "Product Company stores the brand or manufacturer of a product. This allows inventory filtering by supplier or brand, and is essential for competitor analysis and brand-wise sales reporting.",
  "Product": "Products are the fundamental inventory units. These endpoints cover the full product lifecycle: creation, rate assignment, opening stock entry, and retrieval of current transaction history and stock status.",
  "Unit": "Units of Measure define how products are counted, weighed, or measured (e.g., Kgs, Nos, Boxes). Manage units with decimal precision and aliases via PUT endpoints to ensure consistent inventory tracking.",
  "SalesOrder": "Sales Orders capture confirmed customer orders before final billing. Retrieve pending summaries, generate email notifications to agents, and access order-level details for fulfilment and production planning.",
  "SalesInvoice": "Sales Invoices are the primary billing documents for revenue recognition. Create abbreviated or full invoices with line items, VAT/TDS breakdowns, and cost-centre allocations for financial compliance.",
  "SalesReturn": "Sales Return vouchers (Credit Notes) record goods returned by customers against a previous invoice. Endpoints mirror the Sales Invoice structure with credit-note semantics for seamless accounting.",
  "StockJournalOpening": "Stock Journal Opening endpoints record the initial on-hand inventory quantities and valuation at the start of a fiscal period. Use these during initial system setup or year-end migrations.",
  "Consumption": "Consumption entries track raw material or stock items consumed in production or internal operations. Post consumption journals with product, quantity, and godown details for accurate stock valuation.",
  "Cost Center / Class": "Cost Centers and Classes allow you to track expenses and revenues by department, project, or location. Use these endpoints to retrieve structural dimensions for cost-allocated vouchers and departmental reporting.",
  "Purchase Invoice": "Purchase Invoices record goods or services received from vendors (Accounts Payable). Manage the full procurement billing cycle: creation, itemization, and statutory tax breakdowns.",
  "GPS / Location": "Real-time tracking and geo-location services for field agents. Use these endpoints to update salesman positions and retrieve coordinate history for mapping and route verification.",
  "Salesman / Profile": "Agent and salesman profile management. Retrieve agent details, status, and related party mappings for security and field-force management.",
  "Expenses": "Field expense tracking for mobile agents. Manage expense categories and retrieve claim details for salesmen to ensure accurate reimbursement and expense auditing.",
  "Route Visits": "Monitor field visits and route adherence. Log visit start/end times and track waiting durations at customer outlets to optimize field-force productivity.",
  "Outlet / Customer": "Customer and outlet management for field agents. Create new customers on the fly and update outlet address or contact details for real-time CRM updates.",
  "Dashboard": "Executive summary data and business intelligence. Fetch aggregated metrics for various business reports and interactive dashboard widgets for decision support.",
  "Company / Config": "System-wide settings and company profile details. Includes general configuration and company list retrieval for multi-branch and multi-company environments.",
  "User / Branch": "User and branch management for security and access control. Retrieve branch lists, user details, and handle password updates for system administration.",
  "Notifications": "Communication and alerting services. Send SMS notifications and manage OneSignal push notification logs for real-time user engagement.",
  "IRD API / Compliance": "Compliance and regulatory endpoints for tax authorities. Includes IRD API testing and bill verification services to ensure legal compliance.",
  "Transaction Management": "Tools for auditing and managing the full voucher lifecycle. Includes posting logs, edit retrieval, and deletion of transactions with full audit trails.",
  "Custom Data & Reporting": "Flexible data retrieval and custom report generation using RDL layouts. Manage exports, email custom reports, and run structured data queries.",
  "Dynamic Data / AI": "Advanced dynamic data handling and AI-driven interfaces. Use these for non-static data structures and intelligent data processing within the ERP ecosystem.",
};

// ─── Entity → Folder + Keyword Map ───────────────────────────────────────────
// Maps each entity to the folder it lives in + keywords to match endpoint names
const ENTITY_MAP = [
  // Account module entities
  { entity: "Ledger Group",          module: "Account",   keywords: ["ledgergroup", "getledgergrouplist", "getledgergroupsummary", "saveldggrp"] },
  { entity: "Ledger",                module: "Account",   keywords: ["saveledger", "autocompleteledger", "getledgerdetail", "ledgerdetails", "salesmanwiseledger", "salesmanwisepartylist", "getdebtortype", "savedebtortype", "savedebtorroute", "getarealist","getpartyageing","getpartyduesbill","getledgercategory","getledgerchannel","getledgervoucher","printledgervoucher","costcenterclosi","ledgervoucher","billwiseageing","aging","commonnarration", "genericledger"] },
  { entity: "Currency",              module: "Account",   keywords: ["currency"] },
  { entity: "Salesman",              module: "Account",   keywords: ["saveagent","getagentlist","salesmanwise"] },
  { entity: "DebtorType",            module: "Account",   keywords: ["debtortype","savedebtortype","getdebtortype"] },
  { entity: "CreditorType",          module: "Account",   keywords: ["creditortype"] },
  { entity: "VoucherMode",           module: "Account",   keywords: ["voucher","vouchermode","getvouchermodes","getallvouchermodes"] },
  { entity: "BG",                    module: "Account",   keywords: ["savebg"] },
  { entity: "PDC",                   module: "Account",   keywords: ["savepdc","getpdclist"] },
  { entity: "Receipt",               module: "Account",   keywords: ["savereceipt","savelocalreceipt"] },
  { entity: "Journal",               module: "Account",   keywords: ["savejournal"] },
  { entity: "CashBank",              module: "Account",   keywords: ["cashbank","getcashbankbook"] },
  { entity: "BankReconcilliation",   module: "Account",   keywords: ["bankreconcil","getbankreconciliation"] },
  { entity: "Ledgervoucher",         module: "Account",   keywords: ["getledgervoucher","ledgervoucher"] },
  { entity: "LedgerVoucherDetails",  module: "Account",   keywords: ["getledgervoucherdet","ledgervoucherdet"] },
  { entity: "Daybook",               module: "Account",   keywords: ["daybook","getdaybook"] },
  // Inventory module entities
  { entity: "ProductGroup",          module: "Inventory", keywords: ["saveproductgroup","getproductgrouplist","getproductgroupsummary"] },
  { entity: "productCategory",       module: "Inventory", keywords: ["saveproductcategories","productcategor"] },
  { entity: "ProductCompany",        module: "Inventory", keywords: ["saveproductcompany","competitorcompany","getallcompetitor","competitorproduct"] },
  { entity: "Product",               module: "Inventory", keywords: ["saveproduct","getproductdetail","productdetails","getproductcurrentstatus","productcurrentstat","autocompleteproduct","getproductfor","getproductbrand","getproductvoucher","productvoucher","stauts"] },
  { entity: "Unit",                  module: "Inventory", keywords: ["saveunit"] },
  { entity: "SalesOrder",            module: "Inventory", keywords: ["salesorder","pendingso","pendingpo","getpendingso","paemail","baemail","dailysales","salesemail","getcrlimit","pendingsalesorder","expiredparty"] },
  { entity: "SalesInvoice",          module: "Inventory", keywords: ["salesinvoice","abbsales","addsales","salesinvoicedetails","paymentterms","dailyoutstock","billstockemail"] },
  { entity: "SalesReturn",           module: "Inventory", keywords: ["salesreturn"] },
  { entity: "StockJournalOpening",   module: "Inventory", keywords: ["stockjournal","stockjournalopen","savestockjournal"] },
  { entity: "Consumption",           module: "Inventory", keywords: ["consumption"] },
  { entity: "Purchase Invoice",      module: "Inventory", keywords: ["purchaseinvoice"] },
  { entity: "Cost Center / Class",   module: "Account",   keywords: ["costclasslist","costcenter"] },
  // Agent module mappings
  { entity: "GPS / Location",        module: "Agent",     keywords: ["gps","geolocation","geoloc","missinglocation", "gpsdata"] },
  { entity: "Salesman / Profile",    module: "Agent",     keywords: ["getnameforgps","getprofile","getpartylist","salesmanprofile","parentuserid", "salesmaninfo"] },
  { entity: "Expenses",              module: "Agent",     keywords: ["expense","expcategory","exp_get","exp_claim"] },
  { entity: "Route Visits",          module: "Agent",     keywords: ["startvisit","waitingfrom","routevisit","routeplan","start route visit"] },
  { entity: "Outlet / Customer",     module: "Agent",     keywords: ["newcustomer","updateoutletaddress","ledgeraddress"] },
  { entity: "Orders / No-Order",     module: "Agent",     keywords: ["noorder","no order"] },
  { entity: "CDR / Call Records",    module: "Agent",     keywords: ["cdr"] },
  { entity: "Sales Receipts",        module: "Agent",     keywords: ["sales receipt"] },
  // Employee module mappings
  { entity: "Leave Management",      module: "Employee",  keywords: ["leavetype","leaveapprove","addleaverequest","leavebalance","leavereq","leaave"] },
  { entity: "Attendance",            module: "Employee",  keywords: ["attendance","myteam"] },
  { entity: "Payroll",               module: "Employee",  keywords: ["payslip"] },
  { entity: "Asset Requests",        module: "Employee",  keywords: ["assetrequest"] },
  // General module mappings
  { entity: "Dashboard",             module: "General",   keywords: ["getdashboard","dashboardtypes","dashboard","todaysales"] },
  { entity: "IRD API / Compliance",  module: "General",   keywords: ["irdapi"] },
  { entity: "Transaction Management", module: "General",   keywords: ["posttransaction","canceltransaction","gettranpostlog","gettransactionforedit","deltransaction"] },
  { entity: "Custom Data & Reporting", module: "General",   keywords: ["customdata","exportcustom","emailcustom","print custom"] },
  { entity: "Dynamic Data / AI",     module: "General",   keywords: ["dynamicai","dynamicdata","customaction"] },
  { entity: "Company / Config",      module: "General",   keywords: ["companylist","getcompanydetail","generalconfig","isvalidcompany","staticvalues","getcompanyperiod"] },
  { entity: "User / Branch",         module: "General",   keywords: ["isvaliduser","getuserdetail","branchlist","updatepwd", "userbranch"] },
  { entity: "Notifications",         module: "General",   keywords: ["notification","sms","onesignal", "pushnotification"] },
];

// ─── Reports & Misc (non-entity) ─────────────────────────────────────────────
const REPORT_KEYWORDS = ["vatregister","statutoryreport","stockreport","rdlreport","sendrdl","defaultrpt","weeklysal","monthlyprojection","competitorsalesrpt","getcompetitorsales","getgodownforstockdem"];

// ─── Folder-level collapsible groups (for Agent, Employee, General etc.) ─────
const MODULE_DESCRIPTIONS = {
  "Account":   "Core accounting endpoints managing ledgers, vouchers, journal entries, receipts, and statutory reporting.",
  "Inventory": "Inventory management endpoints for products, sales orders, invoices, stock movements, and reporting.",
  "Agent":     "Field agent and salesman GPS tracking, customer visits, sales receipts, and expense claim endpoints.",
  "Employee":  "HR and payroll endpoints including leave management, attendance tracking, pay slips, and asset requests.",
  "General":   "System-wide endpoints for company config, dashboard data, notifications, custom data exports, and transaction management.",
  "Auth":      "Authentication endpoints to obtain and refresh Bearer tokens used by all secured API calls.",
  "Wallet":    "Digital wallet and QR payment endpoints (e.g., Fonepay integration).",
  "WebSocket": "Real-time WebSocket endpoints for live push notifications and messaging.",
};

// ─── Utilities ────────────────────────────────────────────────────────────────
function getMethodColorClass(method) {
  switch ((method || 'GET').toUpperCase()) {
    case 'GET':    return 'get';
    case 'POST':   return 'post';
    case 'PUT':    return 'put';
    case 'DELETE': return 'delete';
    default:       return 'get';
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function matchEndpointToEntity(endpointName) {
  const key = endpointName.toLowerCase().replace(/[\s_-]/g, '');
  for (const mapping of ENTITY_MAP) {
    for (const kw of mapping.keywords) {
      if (key.includes(kw.toLowerCase().replace(/[\s_-]/g, ''))) {
        return mapping;
      }
    }
  }
  return null;
}

function isReportEndpoint(endpointName) {
  const key = endpointName.toLowerCase().replace(/[\s_-]/g, '');
  return REPORT_KEYWORDS.some(rk => key.includes(rk));
}

// ─── Main Documentation Render ────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.defaultPostmanData !== 'undefined') {
    renderDocumentation(window.defaultPostmanData);
  }

  document.getElementById('postman-upload').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.name.endsWith('.json')) {
      alert('Please upload a valid Postman Collection JSON file (.json).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        // Validate it's a Postman collection
        if (!parsed.info || !parsed.item || !Array.isArray(parsed.item)) {
          alert('Invalid Postman Collection. File must contain "info" and "item" arrays at the top level.');
          return;
        }
        renderDocumentation(parsed);
        showToast(`✅ Collection "${parsed.info.name || 'Unnamed'}" loaded successfully!`);
      } catch (err) {
        console.error('[Upload Error]', err);
        alert(`Failed to parse JSON file.\n\nError: ${err.message}`);
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    // Filter endpoint nav-items
    document.querySelectorAll('.nav-item').forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(term) ? 'flex' : 'none';
    });
    // Show/hide static-nav-items (overview, summary links)
    document.querySelectorAll('.static-nav-item').forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(term) ? 'flex' : 'none';
    });
    // Show group if any item inside matches
    document.querySelectorAll('.sidebar-group').forEach(group => {
      const hasVisible = [...group.querySelectorAll('.nav-item, .static-nav-item')].some(i => i.style.display !== 'none');
      group.style.display = hasVisible ? 'block' : 'none';
    });
    if (!term) {
      document.querySelectorAll('.sidebar-group').forEach(g => g.style.display = '');
      document.querySelectorAll('.nav-item, .static-nav-item').forEach(i => i.style.display = '');
    }
  });

  // Sidebar controls: Expand/Collapse All
  const expandBtn = document.getElementById('expand-all-btn');
  const collapseBtn = document.getElementById('collapse-all-btn');

  if (expandBtn) expandBtn.addEventListener('click', () => toggleSidebar(true));
  if (collapseBtn) collapseBtn.addEventListener('click', () => toggleSidebar(false));
});

/**
 * Toggles all collapsible groups in the sidebar.
 * @param {boolean} expand - True to expand all, false to collapse all.
 */
function toggleSidebar(expand) {
  console.log(`[Sidebar] Absolute Toggle: ${expand ? 'Expanding' : 'Collapsing'} all sections.`);
  
  // 1. Target all group bodies (Modules and Entities)
  const allBodies = document.querySelectorAll('.sidebar-group-body, .entity-group-body');
  allBodies.forEach(body => {
    body.style.display = expand ? 'block' : 'none';
  });

  // 2. Correctly toggle chevron and header states
  // Module headers use 'collapsed' class (rotated -90 when collapsed)
  const moduleHeaders = document.querySelectorAll('.sidebar-group-header');
  moduleHeaders.forEach(header => {
    header.classList.toggle('collapsed', !expand);
  });

  // Entity headers use 'open' class (chevron rotates 180 when open)
  const entityHeaders = document.querySelectorAll('.entity-group-header');
  entityHeaders.forEach(header => {
    header.classList.toggle('open', expand);
  });

  // 3. Highlight the active state of buttons if needed (optional UI polish)
  const expandBtn = document.getElementById('expand-all-btn');
  const collapseBtn = document.getElementById('collapse-all-btn');
  if (expandBtn && collapseBtn) {
    expandBtn.style.color = expand ? 'var(--xero-blue)' : 'var(--text-tertiary)';
    collapseBtn.style.color = !expand ? 'var(--xero-blue)' : 'var(--text-tertiary)';
  }
}

// ─── Build Entity Buckets from All Items ──────────────────────────────────────
// ─── Company-specific folders to exclude from the public documentation ─────
const BLOCKED_FOLDERS = ['Dugar'];

function buildEntityBuckets(allFolders) {
  const entityBuckets = {};
  const extraFolders = {};

  // Recursive helper to collect all endpoint items from possibly-nested folders
  function collectEndpoints(items) {
    const result = [];
    (items || []).forEach(item => {
      if (item.request) {
        result.push(item);
      } else if (item.item) {
        // Sub-folder: recurse
        result.push(...collectEndpoints(item.item));
      }
    });
    return result;
  }

  for (const folder of allFolders) {
    const folderName = folder.name;

    // Skip company-specific or blocked folders
    if (BLOCKED_FOLDERS.includes(folderName)) continue;

    const items = collectEndpoints(folder.item);

    // Modules to be sub-categorized by entity
    const subModules = ['Account', 'Inventory', 'Agent', 'Employee', 'General'];

    if (subModules.includes(folderName)) {
      items.forEach(reqItem => {
        if (!reqItem.request) return;

        if (isReportEndpoint(reqItem.name)) {
          const reportKey = `${folderName} Reports`;
          if (!extraFolders[reportKey]) extraFolders[reportKey] = [];
          extraFolders[reportKey].push({ ...reqItem, _folder: folderName });
          return;
        }

        const match = matchEndpointToEntity(reqItem.name);
        if (match) {
          if (!entityBuckets[match.entity]) {
            entityBuckets[match.entity] = { module: match.module, endpoints: [] };
          }
          entityBuckets[match.entity].endpoints.push(reqItem);
        } else {
          // unmatched → put in folder-level
          const rest = `${folderName} (Other)`;
          if (!extraFolders[rest]) extraFolders[rest] = [];
          extraFolders[rest].push(reqItem);
        }
      });
    } else {
      // Other folders go in extraFolders directly
      extraFolders[folderName] = items.filter(i => i.request);
    }
  }

  return { entityBuckets, extraFolders };
}

// ─── Build Sidebar Collapsible HTML ──────────────────────────────────────────
function buildSidebar(entityBuckets, extraFolders, navContainer) {
  navContainer.innerHTML = '';

  // ── 1. OVERVIEW section ──────────────────────────────────────────────────────
  const overviewGroup = createCollapsibleGroup('Overview', '', true);
  navContainer.appendChild(overviewGroup);
  const overviewBody = overviewGroup.querySelector('.sidebar-group-body');

  const overviewLinks = [
    { icon: '📖', label: 'Introduction',     anchor: 'overview-intro' },
    { icon: '🧩', label: 'Core Entities',    anchor: 'overview-entities' },
    { icon: '🔐', label: 'Authentication',   anchor: 'overview-auth' },
    { icon: '⚠️',  label: 'Error Codes',     anchor: 'overview-errors' },
    { icon: '⏱️', label: 'Rate Limiting',    anchor: 'overview-rate' },
  ];

  overviewLinks.forEach(({ icon, label, anchor }) => {
    const a = document.createElement('a');
    a.className = 'static-nav-item';
    a.href = `#${anchor}`;
    a.innerHTML = `<span class="static-nav-icon">${icon}</span>${label}`;
    a.addEventListener('click', () => {
      document.querySelectorAll('.static-nav-item, .nav-item').forEach(n => n.classList.remove('active'));
      a.classList.add('active');
    });
    overviewBody.appendChild(a);
  });

  // ── 2. ENDPOINTS SUMMARY section ─────────────────────────────────────────────
  const summaryGroup = createCollapsibleGroup('Endpoint Index', '', true);
  navContainer.appendChild(summaryGroup);
  const summaryBody = summaryGroup.querySelector('.sidebar-group-body');

  // Build quick-jump links to each module's summary section
  const summaryModules = [
    { label: 'Account Module',   anchor: 'summary-Account',   count: Object.values(entityBuckets).filter(b => b.module === 'Account').reduce((s, b) => s + b.endpoints.length, 0) },
    { label: 'Inventory Module', anchor: 'summary-Inventory', count: Object.values(entityBuckets).filter(b => b.module === 'Inventory').reduce((s, b) => s + b.endpoints.length, 0) },
    ...Object.keys(extraFolders).filter(k => extraFolders[k].length).map(k => ({ label: k, anchor: `summary-${k.replace(/\s+/g, '-')}`, count: extraFolders[k].length })),
  ];

  summaryModules.forEach(({ label, anchor, count }) => {
    const a = document.createElement('a');
    a.className = 'static-nav-item';
    a.href = `#${anchor}`;
    a.innerHTML = `<span class="static-nav-icon">⚡</span><span class="static-nav-label">${label}</span><span class="summary-count">${count}</span>`;
    a.addEventListener('click', () => {
      document.querySelectorAll('.static-nav-item, .nav-item').forEach(n => n.classList.remove('active'));
      a.classList.add('active');
    });
    summaryBody.appendChild(a);
  });

  // A single "View All" link that scrolls to the summary section
  const allLink = document.createElement('a');
  allLink.className = 'static-nav-item view-all-link';
  allLink.href = '#endpoints-summary-section';
  allLink.innerHTML = `<span class="static-nav-icon">📋</span>All Endpoints Table`;
  summaryBody.appendChild(allLink);

  // ── 3. Separator ─────────────────────────────────────────────────────────────
  const sep = document.createElement('div');
  sep.className = 'sidebar-separator';
  sep.innerHTML = '<span>API Reference</span>';
  navContainer.appendChild(sep);

  // ── 4. Module → Entity → Endpoint groups ─────────────────────────────────────
  const modules = {};
  for (const [entityName, bucket] of Object.entries(entityBuckets)) {
    if (!modules[bucket.module]) modules[bucket.module] = [];
    modules[bucket.module].push(entityName);
  }

  for (const [moduleName, entities] of Object.entries(modules)) {
    const moduleGroup = createCollapsibleGroup(moduleName, MODULE_DESCRIPTIONS[moduleName] || '');
    navContainer.appendChild(moduleGroup);
    const moduleBody = moduleGroup.querySelector('.sidebar-group-body');

    for (const entityName of entities) {
      const bucket = entityBuckets[entityName];
      if (!bucket.endpoints.length) continue;
      const entityGroup = createEntitySubGroup(entityName, bucket.endpoints.length);
      moduleBody.appendChild(entityGroup);
      const entityBody = entityGroup.querySelector('.entity-group-body');
      bucket.endpoints.forEach(ep => entityBody.appendChild(createNavItem(ep, entityName)));
    }
  }

  // Extra folders
  for (const [folderName, endpoints] of Object.entries(extraFolders)) {
    if (!endpoints.length) continue;
    const folderGroup = createCollapsibleGroup(folderName, MODULE_DESCRIPTIONS[folderName] || '', false);
    navContainer.appendChild(folderGroup);
    const body = folderGroup.querySelector('.sidebar-group-body');
    endpoints.forEach(ep => body.appendChild(createNavItem(ep, folderName)));
  }
}

function createCollapsibleGroup(title, subtitle, expanded = true) {
  const group = document.createElement('div');
  group.className = 'sidebar-group';

  group.innerHTML = `
    <button class="sidebar-group-header ${expanded ? '' : 'collapsed'}">
      <span class="sidebar-group-title">${title}</span>
      <svg class="chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="sidebar-group-body" style="${expanded ? '' : 'display:none'}"></div>
  `;

  const btn = group.querySelector('.sidebar-group-header');
  const body = group.querySelector('.sidebar-group-body');
  btn.addEventListener('click', () => {
    const isOpen = body.style.display !== 'none';
    body.style.display = isOpen ? 'none' : 'block';
    btn.classList.toggle('collapsed', isOpen);
  });

  return group;
}

function createEntitySubGroup(entityName, count) {
  const group = document.createElement('div');
  group.className = 'entity-group';

  group.innerHTML = `
    <button class="entity-group-header">
      <span class="entity-group-title">${entityName}</span>
      <span class="entity-count">${count}</span>
      <svg class="chevron-small" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="entity-group-body" style="display:none"></div>
  `;

  const btn = group.querySelector('.entity-group-header');
  const body = group.querySelector('.entity-group-body');
  btn.addEventListener('click', () => {
    const isOpen = body.style.display !== 'none';
    body.style.display = isOpen ? 'none' : 'block';
    btn.classList.toggle('open', !isOpen);
  });

  return group;
}

function createNavItem(reqItem, context) {
  const method = reqItem.request?.method || 'GET';
  const methodCls = getMethodColorClass(method);
  const endpointId = reqItem._endpointId;

  const navLink = document.createElement('a');
  navLink.className = 'nav-item';
  navLink.href = `#${endpointId}`;
  navLink.dataset.endpointId = endpointId;
  navLink.innerHTML = `
    <span class="nav-method-pill ${methodCls}-pill">${method}</span>
    <span class="nav-endpoint-name" title="${reqItem.name}">${reqItem.name}</span>
  `;

  navLink.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    navLink.classList.add('active');
    // Open parent entity group body
    const entityBody = navLink.closest('.entity-group-body');
    if (entityBody) {
      entityBody.style.display = 'block';
      entityBody.closest('.entity-group')?.querySelector('.entity-group-header')?.classList.add('open');
    }
  });

  return navLink;
}

// ─── Main Render ──────────────────────────────────────────────────────────────
function renderDocumentation(data) {
  const xeroDescription = `
# Introduction

Welcome to the **Pivotal ERP API**. You can use this REST API to connect your own applications with our core accounting, inventory, and reporting systems.

# Core Entities

| Module | Entity | Description |
|--------|--------|-------------|
| Account | Ledger Group | Chart of accounts structure. |
| Account | Ledger | Individual accounts, customers, or vendors. |
| Account | Journal | Manual double-entry journal vouchers. |
| Account | Receipt | Incoming payment records. |
| Account | BG / PDC | Bank Guarantees and Post-Dated Cheques. |
| Account | Bank Reconciliation | Match ERP entries with bank statements. |
| Inventory | Product | Items, inventory, and stock info. |
| Inventory | Sales Invoice | Customer bills and invoices. |
| Inventory | Sales Order | Saved customer orders before billing. |
| Inventory | Consumption | Raw material usage logs. |

# Authentication

All requests need a **Bearer token** in the header. It looks like this:

\`Authorization: Bearer <your_token>\`

Get a token by calling the **Auth → GetToken** endpoint. Tokens expire, so make sure your app handles refreshing them.

# Error Codes

| Code | Meaning |
|------|---------|
| 200 | Success — Everything worked. |
| 400 | Bad Request — You might be missing a required field or sent bad JSON. |
| 401 | Unauthorized — Your token is missing or expired. |
| 403 | Forbidden — You don't have permission to do this. |
| 500 | Server Error — Something broke on our end. |

# Rate Limiting

We don't currently enforce strict rate limits. That said, please batch your requests when possible and avoid hitting the API in tight loops to keep things fast for everyone.
`;

  document.getElementById('intro-section').innerHTML = `
    <div class="intro-hero">
      <div class="intro-badge">API Reference</div>
      <h1>${data.info.name || 'Pivotal ERP API'}</h1>
      <p class="intro-subtitle">Documentation for integrating with Pivotal ERP's accounting and inventory modules.</p>
    </div>
    <div class="markdown-body" id="overview-intro">
      <h1 id="overview-intro-h">Getting Started</h1>
      <p>This API lets you read and write data directly into Pivotal ERP. We use standard HTTP requests and JSON.</p>

      <h3>Base URL</h3>
      <p>Point all your requests here:</p>
      <div class="code-wrapper"><pre><code>https://api.pivotalerp.com/v1</code></pre></div>

      <h2 id="overview-entities">Entity Framework</h2>
      <p>Data in Pivotal ERP is organized into modules. Most entities support standard create, read, update, and delete actions.</p>
      <table><thead><tr><th>Module</th><th>Key Entities</th><th>What it's for</th></tr></thead><tbody>
        <tr><td><strong>Account</strong></td><td>Ledgers, Journals, Receipts</td><td>Financials, tracking payments, and chart of accounts.</td></tr>
        <tr><td><strong>Inventory</strong></td><td>Products, Invoices, Orders</td><td>Stock, sales, and purchasing.</td></tr>
        <tr><td><strong>Agent</strong></td><td>GPS, Routes, Expenses</td><td>Field agent tracking and expense claims.</td></tr>
        <tr><td><strong>Employee</strong></td><td>Attendance, Leave, Payroll</td><td>HR and payroll records.</td></tr>
        <tr><td><strong>General</strong></td><td>Config, Users, Reports</td><td>System settings and data exports.</td></tr>
      </tbody></table>

      <h2 id="overview-auth">Authentication</h2>
      <p>We use Bearer tokens to secure the API. You need to pass a valid token in the <code>Authorization</code> header of every request.</p>
      
      <h3>How to get a token</h3>
      <ol>
        <li>Ask your admin for your API credentials.</li>
        <li>Call the <code>Auth → GetToken</code> endpoint with those credentials to get a Bearer token.</li>
        <li>Pass the token in your headers:</li>
      </ol>
      <div class="code-wrapper"><pre><code>Authorization: Bearer YOUR_TOKEN_HERE</code></pre></div>

      <h2 id="overview-errors">Errors</h2>
      <p>A successful request returns a <code>200 OK</code> with JSON. If something goes wrong, we'll return a standard HTTP error code and a message explaining what happened.</p>

      <h2 id="overview-rate">Best Practices</h2>
      <p>To keep your integration reliable, we suggest following these tips:</p>
      <ul>
        <li><strong>Don't spam calls:</strong> Avoid sending hundreds of requests per second.</li>
        <li><strong>Use batches:</strong> If you need to sync a lot of data, use bulk endpoints if they're available.</li>
        <li><strong>Cache locally:</strong> Save slow-changing data (like units or categories) on your side and sync it once a day.</li>
      </ul>

      <h2 id="overview-pagination">Pagination</h2>
      <p>Endpoints that return lists are paginated. You can control the pages by passing these parameters in your query string or JSON body:</p>
      <table>
        <thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>pageSize</code></td><td>number</td><td>How many records to return at once (Default: 50).</td></tr>
          <tr><td><code>pageNumber</code></td><td>number</td><td>Which page to get (Starts at 1).</td></tr>
        </tbody>
      </table>

      <h2 id="overview-idempotency">Idempotency</h2>
      <p>If you're creating important records (like invoices or payments), network timeouts can be scary. To prevent accidentally creating a record twice, send an <code>Idempotency-Key</code> header.</p>
      <ul>
        <li>Set the header to a unique string (like a UUID) for your specific transaction.</li>
        <li>If we see the same key twice within 24 hours, we'll just return the exact same success response we sent the first time, without double-booking anything.</li>
      </ul>
    </div>
  `;

  const navContainer  = document.getElementById('nav-content');
  const contentContainer = document.getElementById('endpoints-container');
  contentContainer.innerHTML = '';

  if (!data.item || !Array.isArray(data.item)) return;

  // ── Assign stable IDs to every endpoint first ──
  let globalIdx = 0;
  
  // Flatten nested Postman folder structures (handles v2 and v2.1 collections)
  function flattenItems(items, folderName, fi) {
    (items || []).forEach((ep, ei) => {
      if (ep.item && Array.isArray(ep.item)) {
        // Sub-folder — recurse but keep top-level folder name for entity mapping
        flattenItems(ep.item, folderName, fi);
      } else if (ep.request) {
        ep._endpointId = `ep-${fi}-${ei}`;
        ep._globalIdx = globalIdx++;
      }
    });
  }

  data.item.forEach((folder, fi) => {
    flattenItems(folder.item, folder.name, fi);
  });

  // ── Build entity buckets ──
  const { entityBuckets, extraFolders } = buildEntityBuckets(data.item);

  // ── Build sidebar ──
  buildSidebar(entityBuckets, extraFolders, navContainer);

  // ── Render Endpoints Summary Section ──
  renderEndpointsSummary(entityBuckets, extraFolders, contentContainer);

  // ── Render Sub-Categorized Modules (Account, Inventory, Agent, Employee, General) ──
  const subModules = ['Account', 'Inventory', 'Agent', 'Employee', 'General'];

  subModules.forEach(modName => {
    const modEntities = ENTITY_MAP.filter(m => m.module === modName).map(m => m.entity);
    const hasEndpoints = modEntities.some(en => entityBuckets[en]?.endpoints.length);
    
    // Only render if there's a matching description or endpoints
    if (hasEndpoints || MODULE_DESCRIPTIONS[modName]) {
      contentContainer.insertAdjacentHTML('beforeend', `
        <div class="module-section-header" id="module-${modName}">
          <span class="module-badge">MODULE</span>
          <h2>${modName}</h2>
          <p>${MODULE_DESCRIPTIONS[modName] || ''}</p>
        </div>
      `);

      modEntities.forEach(entityName => {
        const bucket = entityBuckets[entityName];
        if (bucket && bucket.endpoints.length) {
          renderEntitySection(entityName, bucket, contentContainer);
        }
      });
      
      // Handle "Other" endpoints for this module if any
      const otherKey = `${modName} (Other)`;
      if (extraFolders[otherKey] && extraFolders[otherKey].length) {
        contentContainer.insertAdjacentHTML('beforeend', `
          <div class="entity-section-header" id="entity-${otherKey.replace(/\s+/g,'-')}">
            <h3 class="entity-heading">${otherKey}</h3>
          </div>
        `);
        extraFolders[otherKey].forEach(ep => {
          contentContainer.insertAdjacentHTML('beforeend', createEndpointBlock(ep));
        });
      }
    }
  });

  // Render extra folders
  for (const [folderName, endpoints] of Object.entries(extraFolders)) {
    if (!endpoints.length) continue;
    contentContainer.insertAdjacentHTML('beforeend', `
      <div class="module-section-header" id="module-${folderName.replace(/\s+/g,'-')}">
        <span class="module-badge">MODULE</span>
        <h2>${folderName}</h2>
        <p>${MODULE_DESCRIPTIONS[folderName] || ''}</p>
      </div>
    `);
    endpoints.forEach(ep => {
      contentContainer.insertAdjacentHTML('beforeend', createEndpointBlock(ep));
    });
  }

  if (window.Prism) Prism.highlightAll();

  // Initialize Right Navigation (TOC & ScrollSpy)
  buildTableOfContents();
}

// ─── Endpoints Summary Section ────────────────────────────────────────────────
function renderEndpointsSummary(entityBuckets, extraFolders, container) {
  const ENTITY_ORDER = ENTITY_MAP.map(m => m.entity);

  // Build rows per module
  const buildModuleRows = (moduleName) => {
    return ENTITY_ORDER
      .filter(en => entityBuckets[en]?.module === moduleName && entityBuckets[en].endpoints.length)
      .flatMap(en => {
        const bucket = entityBuckets[en];
        return bucket.endpoints.map(ep => {
          const method = ep.request?.method || 'GET';
          const url = ep.request?.url?.raw || ep.request?.url || '—';
          const mc = getMethodColorClass(method);
          const desc = generateShortDesc(ep.name, method);
          return `<tr>
            <td><a href="#${ep._endpointId}" class="sum-ep-link">${ep.name}</a></td>
            <td><span class="method-badge ${mc}-bg" style="font-size:0.6rem;padding:2px 7px">${method}</span></td>
            <td class="sum-url">${url.replace(/\{\{URL\}\}/g, BASE_URL)}</td>
            <td class="sum-desc">${desc}</td>
          </tr>`;
        });
      }).join('');
  };

  const buildExtraRows = (folderName, endpoints) => endpoints.map(ep => {
    const method = ep.request?.method || 'GET';
    const url = ep.request?.url?.raw || ep.request?.url || '—';
    const mc = getMethodColorClass(method);
    const desc = generateShortDesc(ep.name, method);
    return `<tr>
      <td><a href="#${ep._endpointId}" class="sum-ep-link">${ep.name}</a></td>
      <td><span class="method-badge ${mc}-bg" style="font-size:0.6rem;padding:2px 7px">${method}</span></td>
      <td class="sum-url">${url.replace(/\{\{URL\}\}/g, BASE_URL)}</td>
      <td class="sum-desc">${desc}</td>
    </tr>`;
  }).join('');

  const totalCount = Object.values(entityBuckets).reduce((s, b) => s + b.endpoints.length, 0)
    + Object.values(extraFolders).reduce((s, eps) => s + eps.length, 0);

  let html = `
    <div class="summary-section" id="endpoints-summary">
      <div class="summary-header">
        <div>
          <div class="module-badge">QUICK REFERENCE</div>
          <h2>All Endpoints</h2>
          <p>${totalCount} endpoints across ${Object.keys(entityBuckets).length + Object.keys(extraFolders).length} groups</p>
        </div>
      </div>`;

  const subModules = ['Account', 'Inventory', 'Agent', 'Employee', 'General'];

  subModules.forEach(modName => {
    const modEntities = ENTITY_MAP.filter(m => m.module === modName).map(m => m.entity);
    const count = modEntities.reduce((s, en) => s + (entityBuckets[en]?.endpoints.length || 0), 0);
    if (count > 0) {
      html += `
        <div class="summary-module-block" id="summary-${modName}">
          <div class="summary-module-label">
            <span class="summary-module-name">${modName} Module</span>
            <span class="summary-module-count">${count} endpoints</span>
          </div>
          <table class="summary-table">
            <thead><tr><th>Name</th><th>Method</th><th>URL</th><th>Description</th></tr></thead>
            <tbody>${buildModuleRows(modName)}</tbody>
          </table>
        </div>`;
    }
  });

  for (const [folderName, endpoints] of Object.entries(extraFolders)) {
    if (!endpoints.length) continue;
    const safeId = `summary-${folderName.replace(/\s+/g, '-')}`;
    html += `
      <div class="summary-module-block" id="${safeId}">
        <div class="summary-module-label">
          <span class="summary-module-name">${folderName}</span>
          <span class="summary-module-count">${endpoints.length} endpoints</span>
        </div>
        <table class="summary-table">
          <thead><tr><th>Name</th><th>Method</th><th>URL</th><th>Description</th></tr></thead>
          <tbody>${buildExtraRows(folderName, endpoints)}</tbody>
        </table>
      </div>`;
  }

  html += `</div>`;
  container.insertAdjacentHTML('beforeend', html);
}

// ─── Entity Section ───────────────────────────────────────────────────────────
function renderEntitySection(entityName, bucket, container) {
  const desc = ENTITY_DESCRIPTIONS[entityName] || '';
  const safeId = `entity-${bucket.module}-${entityName}`.replace(/\s+/g, '-');
  container.insertAdjacentHTML('beforeend', `
    <div class="entity-section-header" id="${safeId}">
      <h3 class="entity-heading">${entityName}</h3>
      ${desc ? `<p class="entity-desc">${desc}</p>` : ''}
    </div>
  `);
  bucket.endpoints.forEach(ep => {
    container.insertAdjacentHTML('beforeend', createEndpointBlock(ep));
  });
}

// ─── Base URL ─────────────────────────────────────────────────────────────────
const BASE_URL = 'https://mktdemo.dynamicerp.online';

// ─── Auto-Generated / Server-Managed Fields to Strip ─────────────────────────
// These fields are set by the server and MUST NOT be sent in request bodies.
const AUTO_FIELDS = new Set([
  // Primary key variants
  'id', 'Id', 'ID',
  // Audit timestamps
  'createdat', 'CreatedAt', 'createddate', 'CreatedDate',
  'updatedat', 'UpdatedAt', 'updateddate', 'UpdatedDate',
  'modifiedat', 'ModifiedAt', 'modifieddate', 'ModifiedDate',
  // Audit user references
  'createdby', 'CreatedBy', 'createdbyid', 'CreatedById',
  'updatedby', 'UpdatedBy', 'modifiedby', 'ModifiedBy',
  // Soft-delete and system flags
  'isdeleted', 'IsDeleted', 'isactive', 'IsActive',
  // Concurrency tokens
  'rowversion', 'RowVersion', 'timestamp', 'Timestamp',
  // Server-assigned sequence / version
  'seqno', 'SeqNo', 'version', 'Version',
  // Redundant IDs that are auto-generated
  'voucherid', 'ledgerid', 'id_auto'
]);

// Check if a field key should be stripped
function isAutoField(key) {
  // Exact match
  if (AUTO_FIELDS.has(key)) return true;
  const kl = key.toLowerCase();
  // Exact lowercase match
  if (AUTO_FIELDS.has(kl)) return true;
  // Patterns: the field IS the entity's own primary key (not a foreign key)
  // Rule: a bare "Id" alone, or names ending with "Id" that are equal to a known
  // auto-generated suffix — we do NOT strip foreign-key references like LedgerId.
  // We only strip the entity's own PK, typically just "Id".
  if (kl === 'id') return true;
  // Strip pure audit date/time patterns
  if (/(createdat|createdon|createddate|updatedat|updatedon|updateddate|modifiedat|modifiedon|modifieddate)$/i.test(key)) return true;
  if (/(createdby|updatedby|modifiedby)(id)?$/i.test(key)) return true;
  if (/^(isdeleted|isactive|rowversion|timestamp|seqno)$/i.test(key)) return true;
  return false;
}

// Strip auto fields from a plain object (non-mutating)
function stripAutoFields(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  if (Array.isArray(obj)) return obj.map(stripAutoFields);
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([k]) => !isAutoField(k))
      .map(([k, v]) => [k, stripAutoFields(v)])
  );
}

// ─── Endpoint Block Builder ────────────────────────────────────────────────────
function createEndpointBlock(reqItem) {
  const r = reqItem.request;
  if (!r) return '';
  const method = r.method || 'GET';
  const methodCls = getMethodColorClass(method);
  const id = reqItem._endpointId || `ep-${Math.random().toString(36).slice(2)}`;
  const urlRaw = r.url?.raw || (typeof r.url === 'string' ? r.url : '—');

  // Auth badge
  let authHTML = '';
  if (r.auth && r.auth.type && r.auth.type !== 'noauth') {
    authHTML = `<span class="auth-chip">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      Bearer Token Required
    </span>`;
  } else if (r.auth?.type === 'noauth') {
    authHTML = `<span class="auth-chip auth-chip-open">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
      No Authentication Required
    </span>`;
  }

  // Build body
  let paramsHTML = '';
  let formattedJson = null;

  if (r.body) {
    if (r.body.mode === 'raw' && r.body.raw) {
      const raw = r.body.raw.trim();
      let parsedObj = null;
      
      // Pass 1: Strict JSON
      try { parsedObj = JSON.parse(raw); } catch (e) {}
      
      // Pass 2: Remove trailing commas and comments
      if (!parsedObj) {
        try {
          let clean = raw.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').replace(/,\s*([\]}])/g, '$1');
          parsedObj = JSON.parse(clean);
        } catch (e) {}
      }
      
      // Pass 3: Fix unquoted keys
      if (!parsedObj) {
        try {
          let fixed = raw.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?\s*:/g, '"$2":').replace(/'/g, '"');
          parsedObj = JSON.parse(fixed);
        } catch (e) {}
      }

      if (parsedObj) {
        parsedObj = stripAutoFields(parsedObj);
        formattedJson = JSON.stringify(parsedObj, null, 2);
        paramsHTML = buildParamsTable(parsedObj, id, "Request Body Parameters", 0, reqItem.name);
      } else {
        formattedJson = raw;
      }
    } else if (r.body.mode === 'formdata' && r.body.formdata?.length) {
      // Build table from formdata, collect JSON payload
      const fields = {};
      const rows = r.body.formdata
        .filter(fd => !isAutoField(fd.key))   // ← strip auto fields from formdata
        .map(fd => {
        let desc = generateFieldDesc(fd.key);
        if (fd.type === 'file') {
          return `<tr><td>${fd.key}</td><td><span class="type-pill">file</span></td><td><span class="muted">Binary attachment</span></td><td>${desc}</td></tr>`;
        }
        if (fd.value && fd.value.trim().startsWith('{')) {
          try {
            let fixed = fd.value.replace(/([a-zA-Z_][a-zA-Z0-9_]*)[\s]*:/g, '"$1":').replace(/'/g, '"');
            const parsed = stripAutoFields(JSON.parse(fixed));
            formattedJson = JSON.stringify(parsed, null, 2);
            Object.assign(fields, parsed);
          } catch { formattedJson = fd.value; }
          return `<tr><td>${fd.key}</td><td><span class="type-pill">json</span></td><td><span class="muted">(JSON body — see example below)</span></td><td>${desc}</td></tr>`;
        }
        return `<tr><td>${fd.key}</td><td><span class="type-pill">${fd.type}</span></td><td>${fd.value || '—'}</td><td>${desc}</td></tr>`;
      }).join('');
      if (rows) {
        paramsHTML = `<div class="section-label">Request Body (multipart/form-data)</div>
          <table class="params-table"><thead><tr><th>Field</th><th>Type</th><th>Example Value</th><th>Description</th></tr></thead><tbody>${rows}</tbody></table>`;
          
        if (Object.keys(fields).length > 0) {
          // Append the nested table for the JSON payload cleanly
          paramsHTML += buildParamsTable(fields, id, "Embedded JSON Properties", 1, reqItem.name);
        }
      }
    }
  }

  // Query params
  const queryParams = r.url?.query;
  let queryHTML = '';
  if (queryParams?.length) {
    const rows = queryParams.map(q => `<tr><td>${q.key}</td><td><span class="type-pill">query</span></td><td>${q.value || '—'}</td></tr>`).join('');
    queryHTML = `<div class="section-label">Query Parameters</div>
      <table class="params-table"><thead><tr><th>Parameter</th><th>Type</th><th>Default</th></tr></thead><tbody>${rows}</tbody></table>`;
  }

  // Code block
  let codeHTML = '';
  if (formattedJson) {
    const escaped = formattedJson.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    codeHTML = `
      <div class="section-label">Example Request Body</div>
      <div class="code-wrapper">
        <div class="code-header">
          <div class="code-header-left">
            <span class="code-lang">JSON</span>
            <button class="curl-btn" onclick="copyCurl(this, '${method}', '${urlRaw.replace(/\{\{URL\}\}/g, BASE_URL)}')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 17l6-6-6-6M12 19h8"/></svg>
              Copy as cURL
            </button>
          </div>
          <button class="copy-btn" onclick="copyCode(this)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copy JSON
          </button>
        </div>
        <pre><code class="language-json">${escaped}</code></pre>
      </div>`;
  }

  return `
    <div class="endpoint-card" id="${id}">
      <div class="endpoint-card-inner">
        <div class="endpoint-top">
          <h4 class="card-title">${reqItem.name}</h4>
          ${authHTML}
        </div>
        <div class="url-block">
          <span class="method-badge ${methodCls}-bg">${method}</span>
          <span class="url-path">${urlRaw.replace(/\{\{URL\}\}/g, BASE_URL)}</span>
        </div>
        <div class="markdown-body card-desc">
          ${r.description ? marked.parse(r.description) : `<p>${generateShortDesc(reqItem.name, method, true)}</p>`}
        </div>
        ${queryHTML}
        ${codeHTML}
        ${paramsHTML}
      </div>
    </div>
  `;
}

function buildParamsTable(obj, parentId = '', rootName = "Request Body Parameters", level = 0, endpointName = '') {
  if (typeof obj !== 'object' || obj === null) return '';
  
  if (Array.isArray(obj)) {
    if (obj.length > 0 && typeof obj[0] === 'object' && obj[0] !== null) {
      return buildParamsTable(obj[0], parentId, `${rootName} (Array of Objects)`, level, endpointName);
    }
    return '';
  }
  
  let html = '';
  const subTables = [];
  
  const rows = Object.entries(obj).map(([k, v]) => {
    const type = Array.isArray(v) ? 'array' : typeof v;
    let display = '';
    let desc = generateFieldDesc(k);
    
    if (type === 'array') {
      if (v.length > 0 && typeof v[0] === 'object' && v[0] !== null) {
        const subId = `${parentId}-${k}`;
        display = `<a href="#${subId}" class="sum-ep-link" style="text-decoration:underline;color:var(--xero-blue)">See ${k}</a>`;
        desc = `Collection of ${k} elements.`;
        subTables.push({ key: k, data: v[0], type: 'array', subId });
      } else {
        display = `<span class="muted">[array]</span>`;
      }
    } else if (type === 'object' && v !== null) {
      const subId = `${parentId}-${k}`;
      display = `<a href="#${subId}" class="sum-ep-link" style="text-decoration:underline;color:var(--xero-blue)">See ${k}</a>`;
      desc = `Detailed ${k} object.`;
      subTables.push({ key: k, data: v, type: 'object', subId });
    } else {
      display = String(v);
      // specific user request: blank out example values for Get Ledger Group List
      if (endpointName.replace(/\s+/g, '').toLowerCase() === 'getledgergrouplist') {
        display = '';
      }
    }
    
    return `<tr><td>${k}</td><td><span class="type-pill">${type}</span></td><td>${display}</td><td>${desc}</td></tr>`;
  }).join('');
  
  if (!rows) return ''; // Don't render empty tables
  
  const titleHtml = level === 0 
    ? `<div class="section-label">${rootName}</div>`
    : `<div class="section-label" id="${parentId}" style="margin-top:20px; font-size: 0.85rem; color: var(--xero-mid-blue);">↳ ${rootName}</div>`;
    
  html += `${titleHtml}<table class="params-table"><thead><tr><th>Field</th><th>Type</th><th>Example Value</th><th>Description</th></tr></thead><tbody>${rows}</tbody></table>`;
  
  // Render nested tables immediately below
  for (const sub of subTables) {
    const subTitle = sub.type === 'array' ? `${sub.key} (Array Item)` : `${sub.key} (Object)`;
    html += buildParamsTable(sub.data, sub.subId, subTitle, level + 1, endpointName);
  }
  
  return html;
}

function generateFieldDesc(key) {
  const kl = key.toLowerCase();
  
  if (kl === 'vouchername') return "The type of accounting voucher being created (e.g., <code>SalesInvoice</code>, <code>PurchaseOrder</code>). Determines how the transaction is categorized in the system.";
  if (kl === 'narration') return "A free-text memo or note attached to the voucher, often used for discounts, adjustments, or internal remarks (e.g., <code>4%DISCOUNT</code>).";
  if (kl === 'voucherdate') return "The date and time the voucher was issued, in <code>YYYY-MM-DD HH:MM:SS.mmm</code> format. Used for ledger posting and reporting purposes.";
  if (kl === 'partyledgerid') return "The unique numeric ID of the customer or vendor ledger account this transaction is associated with. Must correspond to an existing party in the system.";
  
  if (kl === 'searchby' || kl === 'searchvalue') return "Type what you're looking for to filter the results.";
  if (kl === 'ledgertype' || kl === 'ledgergroupid') return "The ID of the ledger or account group.";
  if (kl === 'voucherid' || kl === 'vouchertype') return "Details about the voucher, like its type and date.";
  if (kl === 'datefrom' || kl === 'dateto') return "Used to filter records between specific dates.";
  if (kl === 'reporttype') return "Tells the API which report format you need.";
  if (kl === 'branchid') return "The ID of the branch or location.";
  if (kl === 'refno') return "A user-defined reference number for tracking this transaction externally (e.g., an invoice or order number like <code>SBD-01270</code>).";
  if (kl === 'api_responseid') return "The identifier returned or echoed back in the API response to help correlate the request with its result. Typically mirrors <code>RefNo</code>.";
  if (kl === 'itemallocationcoll') return "An array of <code>ItemAllocationColl</code> objects representing the individual line items, their quantities, warehouse allocations, and related details for this voucher.";
  if (kl === 'lineitems' || kl === 'details') return "The line items in this transaction.";
  if (kl === 'productid' || kl === 'itemid') return "The ID of the product or item.";
  if (kl === 'actualqty' || kl === 'billedqty' || kl === 'quantity') return "The actual quantity of the item.";
  if (kl === 'rate' || kl === 'price' || kl === 'unitprice') return "The price per unit.";
  if (kl === 'salesinvoicedetail') return "A nested object containing the full financial breakdown of the sales invoice, including tax, totals, payment terms, and other invoice-level metadata.";
  if (kl === 'billingaddress' || kl === 'shippingdetails') return "Extra customer and billing details.";
  if (kl === 'salestaxno' || kl === 'pan' || kl === 'vat') return "The company's tax registration number (VAT/PAN).";
  
  if (kl.endsWith('id')) {
    const noun = key.replace(/([A-Z])/g, ' $1').replace(/id/ig, '').trim().toLowerCase();
    return `The ID of the ${noun || 'record'}.`;
  }
  if (kl.includes('name') || kl === 'buyes') return "The name or label.";
  if (kl.includes('date') || kl.includes('time')) return "A date or time (usually YYYY-MM-DD).";
  if (kl.includes('amount') || kl.includes('discount') || kl.includes('tax') || kl.includes('total')) return "The monetary value or amount.";
  if (kl.includes('qty')) return "The quantity number.";
  if (kl.includes('code') || kl.includes('no') || kl.includes('number')) return "The code or serial number.";
  if (kl.includes('status') || kl.includes('isactive') || kl.includes('isdeleted') || kl.includes('istax') || kl.startsWith('is')) return "A true/false flag or status indicator (like Active or Deleted).";
  if (kl.includes('remarks') || kl.includes('desc') || kl.includes('memo') || kl.includes('notes')) return "Any extra notes or remarks.";
  if (kl.includes('phone') || kl.includes('mobile') || kl.includes('tel')) return "The phone number.";
  if (kl.includes('email')) return "The contact's email address.";
  if (kl.includes('address') || kl.includes('city') || kl.includes('state') || kl.includes('country') || kl.includes('zip')) return "The physical or billing address info.";
  if (kl.includes('type') || kl.includes('category')) return "Indicates the type or category of the record.";
  if (kl.includes('level') || kl.includes('hierarchy') || kl.includes('parent')) return "Used to organize records into a hierarchy tree.";
  if (kl.includes('file') || kl.includes('attachment') || kl.includes('image') || kl.includes('photo')) return "The file, image, or attachment data.";
  
  if (key) return `The ${key.replace(/([A-Z])/g, ' $1').toLowerCase().trim()}.`;
  return "";
}

function copyCode(btn) {
  const code = btn.closest('.code-wrapper').querySelector('code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
    setTimeout(() => btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy JSON`, 2000);
  });
}

function copyCurl(btn, method, url) {
  let curl = `curl --location --request ${method} '${url}' \\\n--header 'Authorization: Bearer <YOUR_TOKEN>' \\\n--header 'Content-Type: application/json'`;
  
  if (method !== 'GET') {
    const codeEl = btn.closest('.code-wrapper')?.querySelector('code');
    if (codeEl && codeEl.innerText.trim()) {
      try {
        const rawJson = codeEl.innerText.trim();
        const minified = JSON.stringify(JSON.parse(rawJson));
        curl += ` \\\n--data-raw '${minified}'`;
      } catch (e) {
        // Fallback if parsing fails
        curl += ` \\\n--data-raw '${codeEl.innerText.trim()}'`;
      }
    }
  }
  
  navigator.clipboard.writeText(curl).then(() => {
    const original = btn.innerHTML;
    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
    btn.style.background = "#10b981"; // success green
    btn.style.color = "white";
    btn.style.borderColor = "#10b981";
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style = "";
    }, 2000);
  });
}

function generateShortDesc(name, method, verbose = false) {
  const cleanName = name.replace(/([A-Z])/g, ' $1').toLowerCase().trim();
  const noun = cleanName.replace(/get|list|summary|save|add|details|delete|update/g, '').trim() || 'record';
  
  const isListRetrieval = cleanName.includes('list') || cleanName.includes('summary') || cleanName.includes('search') || cleanName.includes('report') || cleanName.includes('all');
  const isRetrieval = method === 'GET' || method === 'POST';
  
  let baseDesc = "";
  let businessOverview = "";

  if (isRetrieval) {
    if (isListRetrieval) {
      baseDesc = `Retrieves a paginated list of ${noun} records.`;
      businessOverview = `Use this endpoint to query multiple records and build summary reporting views.`;
    } else {
      baseDesc = `Retrieves the details of a specific ${noun}.`;
      businessOverview = `Use this endpoint to fetch the complete structured profile for a single record using its unique identifier.`;
    }
  } else if (method === 'PUT') {
    baseDesc = `Creates or updates a ${noun} record.`;
    businessOverview = `Use this endpoint to securely record a new transaction or overwrite an existing entity in the core system.`;
  } else if (method === 'DELETE') {
    baseDesc = `Permanently deletes the specified ${noun}.`;
    businessOverview = `This action removes the record from the active database and cannot be undone.`;
  } else {
    baseDesc = `Executes the ${cleanName} operation.`;
    businessOverview = `Use this endpoint to interact with the system via standard HTTP methods.`;
  }

  if (verbose) {
    const entity = matchEndpointToEntity(name)?.entity || 'system';
    const entityDesc = ENTITY_DESCRIPTIONS[entity] || '';
    
    return `<strong>${baseDesc}</strong><br><br>${businessOverview} Integrating this endpoint allows your application to programmatically manage <strong>${entity}</strong> workflows.${entityDesc ? `<br><br><span style="border-left: 3px solid var(--xero-blue); padding-left: 12px; display: block; color: var(--text-secondary); background: var(--hover-bg); padding: 10px 15px; border-radius: 4px;"><em><strong>Business Context:</strong> ${entityDesc}</em></span>` : ''}`;
  }
  
  return baseDesc;
}

// ─── Right Navigation (Table of Contents & ScrollSpy) ─────────────────────────
function buildTableOfContents() {
  const container = document.getElementById('right-nav-content');
  if (!container) return;
  container.innerHTML = '';
  
  // Select all major headers inside the content-area
  const headers = document.querySelectorAll('.content-area h1#overview-intro-h, .content-area h2, .content-area .entity-heading');
  
  if (headers.length === 0) return;
  
  headers.forEach(header => {
    // Ensure the header has an ID so we can link to it
    if (!header.id) {
      const parentId = header.closest('.entity-section-header')?.id;
      if (parentId) {
        header.id = parentId + '-h';
      } else {
        header.id = 'sec-' + Math.random().toString(36).substring(2, 9);
      }
    }
    
    // Determine hierarchy level
    const isMainSection = header.tagName.toLowerCase() !== 'h3';
    
    const link = document.createElement('a');
    link.className = 'toc-link';
    link.href = '#' + header.id;
    link.textContent = header.textContent.trim();
    
    if (!isMainSection) {
      link.style.paddingLeft = '24px'; // Indent sub-sections (entities)
      link.style.opacity = '0.85';
    } else {
      link.style.fontWeight = '600';
      link.style.marginTop = '6px';
    }
    
    // Smooth scroll on click (overriding default anchor behavior slightly for smoothness)
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#' + header.id);
      if (target) {
        // Find the scrollable container and scroll to target
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    
    container.appendChild(link);
  });
  
  initScrollSpy();
}

function initScrollSpy() {
  const headers = Array.from(document.querySelectorAll('.content-area h1#overview-intro-h, .content-area h2, .content-area .entity-heading'));
  const tocLinks = document.querySelectorAll('.toc-link');
  
  if (headers.length === 0 || tocLinks.length === 0) return;
  
  const contentArea = document.querySelector('.content-area');
  
  contentArea.addEventListener('scroll', () => {
    let currentActive = null;
    
    // Find the header closest to the top
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        const rect = header.getBoundingClientRect();
        
        // If the header is above or near the top of the viewport
        if (rect.top <= 180) {
            currentActive = header;
        } else {
            break; 
        }
    }
    
    if (!currentActive && headers.length > 0) {
        currentActive = headers[0];
    }
    
    if (currentActive) {
      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentActive.id) {
          link.classList.add('active');
          // Auto-scroll the right-nav if the active link gets out of view
          const navContainer = document.getElementById('right-nav-content');
          const linkRect = link.getBoundingClientRect();
          const navRect = navContainer.getBoundingClientRect();
          if (linkRect.top < navRect.top || linkRect.bottom > navRect.bottom) {
             link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      });
    }
  }, { passive: true });
  
  // Trigger once to set initial state
  contentArea.dispatchEvent(new Event('scroll'));
}
