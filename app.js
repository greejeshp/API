/**
 * Pivotal ERP API Documentation — Enhanced Rendering Logic
 * Entity-grouped navigation with collapsible sidebar, Xero-style descriptions.
 * Last Updated: 2026-03-17 16:30
 */

// ─── Entity → Description Map (Xero-style) ───────────────────────────────────
const ENTITY_DESCRIPTIONS = {
  "Ledger Group": "Ledger Groups form the backbone of your chart of accounts. They classify every ledger into categories such as Assets, Liabilities, Income, and Expenses. Use these endpoints to retrieve the full hierarchy of groups and to build dynamic account selection UIs.",
  "Ledger": "Ledgers represent individual account heads — parties, banks, income, or expense accounts. This set of endpoints lets you create, update, search, and retrieve ledger details, including statutory and statutory tax registration information.",
  "Currency": "The Currency module allows you to manage multi-currency ledger mappings. Retrieve currency names linked to ledgers for use in cross-border transaction flows.",
  "Salesman": "Salesmen are the primary field-level agents in the ERP. Use these endpoints to retrieve salesman-wise party lists, manage agent profiles, view GPS locations, and map parties to a salesman hierarchy.",
  "DebtorType": "Debtor Types categorise trade debtors by their channel or business type (e.g., Wholesaler, Retailer). This endpoint supports creation and retrieval of debtor type classifications.",
  "CreditorType": "Creditor Types help segment vendors and suppliers by category. Manage creditor type definitions through PUT and POST endpoints.",
  "VoucherMode": "Voucher Modes define payment and receipt channel options such as Cash, Cheque, or Bank Transfer. Use GET-style endpoints to retrieve all configured voucher modes by voucher type.",
  "BG": "Bank Guarantees (BG) are financial instruments issued in favour of creditors. These endpoints let you create BG records, attach scanned documents, and track status, amount, and expiry details.",
  "PDC": "Post-Dated Cheques (PDC) track future-dated instruments received from or issued to parties. Save PDC records with cheque details and attach scanned copies through multipart endpoints.",
  "Receipt": "Receipt vouchers record incoming payments and are a critical component of accounts receivable. Use these endpoints to create receipts with cost-centre allocations, bill references, and TDS/VAT details.",
  "Journal": "Journal entries are manual accounting adjustments that directly debit and credit ledger accounts. These endpoints support full double-entry journals with multiple ledger lines, narration, and file attachments.",
  "CashBank": "Cash and Bank Book endpoints return a chronological ledger of all cash and bank transactions within a date range. Use these for reconciliation views and treasury dashboards.",
  "BankReconcilliation": "Bank Reconciliation matches your ERP bank ledger entries against the physical bank statement. Supply a date range and ledger ID to retrieve outstanding and matched transactions.",
  "Ledgervoucher": "Ledger Voucher reports return a summarised statement of transactions for a specific ledger account over a period, including opening and closing balances. Used in account statements and party confirmations.",
  "LedgerVoucherDetails": "Returns the line-level details of every voucher posted against a ledger. Useful for building drill-down views from a ledger summary into the underlying transactions.",
  "Daybook": "The Day Book is a chronological record of all vouchers posted on a given day across all modules. Filter by branch, voucher type, or posting status to audit daily activity.",
  "ProductGroup": "Product Groups organise your inventory catalogue into logical brand/category hierarchies. Create group structures and retrieve tree-level summaries for use in inventory reports.",
  "productCategory": "Product Categories provide a secondary classification layer below Product Groups. Use PUT endpoints to create new category nodes and assign aliases.",
  "ProductCompany": "Product Company stores the brand or manufacturer of a product. This allows inventory filtering by supplier or brand, and is used in competitor analysis reports.",
  "Product": "Products are the fundamental inventory units. These endpoints cover full product lifecycle management: creation, rate assignment, opening stock entry, and retrieval of current status and transaction history.",
  "Unit": "Units of Measure define how products are counted, weighed, or measured. Manage units with decimal precision and aliases via PUT endpoints.",
  "SalesOrder": "Sales Orders capture confirmed customer orders before billing. Retrieve pending summaries, generate email notifications to agents, and access order-level details for fulfilment workflows.",
  "SalesInvoice": "Sales Invoices are the primary billing documents. Create abbreviated or full invoices with line items, discounts, VAT/TDS breakdowns, and cost-centre allocations.",
  "SalesReturn": "Sales Return vouchers record goods returned by customers against a previously issued invoice. Endpoints mirror the Sales Invoice structure with credit-note semantics.",
  "StockJournalOpening": "Stock Journal Opening endpoints record the initial on-hand inventory quantities and valuation at the start of a fiscal period. Used during year-start setup or branch stock transfers.",
  "Consumption": "Consumption entries track raw material or stock items consumed in production or operations. Post consumption journals with product, quantity, and godown details.",
  "Cost Center / Class": "Cost Centers and Classes allow you to track expenses and revenues by department, project, or location. Use these endpoints to retrieve structural dimensions for cost-allocated vouchers.",
  "Purchase Invoice": "Purchase Invoices record goods or services received from vendors. Manage the full procurement billing cycle: creation, itemization, and statutory tax breakdowns.",
  // Agent module entities
  "GPS / Location": "Real-time tracking and geo-location services. Use these endpoints to update salesman positions and retrieve coordinate data for mapping.",
  "Salesman / Profile": "Agent and salesman profile management. Retrieve agent details, status, and related party mappings.",
  "Expenses": "Field expense tracking. Manage expense categories and retrieve claim details for salesmen on the go.",
  "Route Visits": "Monitor field visits and route adherence. Log visit start/end times and track waiting durations at customer outlets.",
  "Outlet / Customer": "Customer and outlet management for agents. Create new customers and update outlet address or contact details.",
  // Employee module entities
  "Leave Management": "End-to-end leave workflow. Request leaves, check balances, and handle approvals for various leave types.",
  "Attendance": "Time and attendance tracking. Retrieve attendance logs and manage in/out mode configurations.",
  "Payroll": "Employee compensation and benefits. Access month-wise pay slips and payroll summaries.",
  "Asset Requests": "Internal request system for company assets. Category-wise asset requests and status tracking.",
  // General module entities
  "Dashboard": "Executive summary data. Fetch aggregated metrics for various business reports and dashboard widgets.",
  "Company / Config": "System-wide settings and company profile details. Includes general configuration and company list retrieval.",
  "User / Branch": "User and branch management. Retrieve branch lists, user details, and handle password updates.",
  "Notifications": "Communication services. Send SMS notifications and manage OneSignal push notification logs.",
  "IRD API / Compliance": "Compliance and regulatory endpoints. Includes IRD API testing and bill verification services.",
};

// ─── Entity → Folder + Keyword Map ───────────────────────────────────────────
// Maps each entity to the folder it lives in + keywords to match endpoint names
const ENTITY_MAP = [
  // Account module entities
  { entity: "Ledger Group",          module: "Account",   keywords: ["ledgergroup", "getledgergrouplist", "getledgergroupsummary", "saveldggrp"] },
  { entity: "Ledger",                module: "Account",   keywords: ["saveledger", "autocompleteledger", "getledgerdetail", "ledgerdetails", "salesmanwiseledger", "salesmanwisepartylist", "getdebtortype", "savedebtortype", "savedebtorroute", "getarealist","getpartyageing","getpartyduesbill","getledgercategory","getledgerchannel","getledgervoucher","printledgervoucher","costcenterclosi","ledgervoucher","billwiseageing","aging"] },
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
  { entity: "GPS / Location",        module: "Agent",     keywords: ["gps","geolocation","geoloc"] },
  { entity: "Salesman / Profile",    module: "Agent",     keywords: ["getnameforgps","getprofile","getpartylist"] },
  { entity: "Expenses",              module: "Agent",     keywords: ["expense","expcategory","exp_get"] },
  { entity: "Route Visits",          module: "Agent",     keywords: ["startvisit","waitingfrom"] },
  { entity: "Outlet / Customer",     module: "Agent",     keywords: ["newcustomer","updateoutletaddress"] },
  // Employee module mappings
  { entity: "Leave Management",      module: "Employee",  keywords: ["leavetype","leaveapprove","addleaverequest","leavebalance","leavereq"] },
  { entity: "Attendance",            module: "Employee",  keywords: ["attendance"] },
  { entity: "Payroll",               module: "Employee",  keywords: ["payslip"] },
  { entity: "Asset Requests",        module: "Employee",  keywords: ["assetrequest"] },
  // General module mappings
  { entity: "Dashboard",             module: "General",   keywords: ["getdashboard","dashboardtypes"] },
  { entity: "Company / Config",      module: "General",   keywords: ["companylist","getcompanydetail","generalconfig","isvalidcompany"] },
  { entity: "User / Branch",         module: "General",   keywords: ["isvaliduser","getuserdetail","branchlist","updatepwd"] },
  { entity: "Notifications",         module: "General",   keywords: ["notification","sms","onesignal"] },
  { entity: "IRD API / Compliance",  module: "General",   keywords: ["irdapi"] },
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
  "Dugar":     "Client-specific endpoints for Dugar group's spare sales and job card workflows.",
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
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        renderDocumentation(JSON.parse(event.target.result));
        showToast("Collection loaded!");
      } catch (err) {
        alert("Invalid JSON file.");
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
});

// ─── Build Entity Buckets from All Items ──────────────────────────────────────
function buildEntityBuckets(allFolders) {
  const entityBuckets = {}; // entityName → { module, endpoints[] }
  const extraFolders = {}; // folderName → endpoints[] (Agent, Auth, etc.)

  for (const folder of allFolders) {
    const folderName = folder.name;
    const items = folder.item || [];

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
  // Render intro
  const xeroDescription = `
# Introduction

Welcome to the **Pivotal ERP Accounting API**. Our REST API provides programmatic access to core accounting, inventory management, and business reporting capabilities — enabling you to build custom integrations, automate workflows, and sync data between Pivotal ERP and your own systems.

# Core Entities

| Module | Entity | Description |
|--------|--------|-------------|
| Account | Ledger Group | Chart of account hierarchies |
| Account | Ledger | Individual account heads and parties |
| Account | Journal | Double-entry manual adjustments |
| Account | Receipt | Incoming payment vouchers |
| Account | BG / PDC | Bank Guarantees and Post-Dated Cheques |
| Account | Bank Reconciliation | Matching ERP entries to bank statements |
| Inventory | Product | Item catalogue and stock management |
| Inventory | Sales Invoice | Customer billing documents |
| Inventory | Sales Order | Pre-billing customer orders |
| Inventory | Consumption | Raw material usage entries |

# Authentication

All secured endpoints require a **Bearer token** in the \`Authorization\` header:

\`Authorization: Bearer <your_token>\`

Obtain a token via the **Auth → New Token** endpoint. Tokens expire and can be refreshed using **Auth → Refresh Token**.

# Error Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad Request — malformed body or missing fields |
| 401 | Unauthorized — invalid or expired token |
| 403 | Forbidden — insufficient permissions |
| 500 | Internal Server Error |

# Rate Limiting

There is currently no rate limit enforced on the API. However, it is recommended to batch bulk operations and avoid rapid-fire repeated calls in tight loops to ensure stability.
`;

  document.getElementById('intro-section').innerHTML = `
    <div class="intro-hero">
      <div class="intro-badge">REST API</div>
      <h1>${data.info.name || 'API Documentation'}</h1>
      <p class="intro-subtitle">Complete reference documentation for all endpoints.</p>
    </div>
    <div class="markdown-body" id="overview-intro">
      <h1 id="overview-intro-h">Introduction</h1>
      <p>Welcome to the <strong>Pivotal ERP Accounting API</strong>. Our REST API provides programmatic access to core accounting, inventory management, and business reporting capabilities — enabling you to build custom integrations, automate workflows, and sync data between Pivotal ERP and your own systems.</p>

      <h2 id="overview-entities">Core Entities</h2>
      <table><thead><tr><th>Module</th><th>Entity</th><th>Description</th></tr></thead><tbody>
        <tr><td>Account</td><td>Ledger Group</td><td>Chart of account hierarchies</td></tr>
        <tr><td>Account</td><td>Ledger</td><td>Individual account heads and parties</td></tr>
        <tr><td>Account</td><td>Journal</td><td>Double-entry manual adjustments</td></tr>
        <tr><td>Account</td><td>Receipt</td><td>Incoming payment vouchers</td></tr>
        <tr><td>Account</td><td>BG / PDC</td><td>Bank Guarantees and Post-Dated Cheques</td></tr>
        <tr><td>Account</td><td>Bank Reconciliation</td><td>Match ERP entries to bank statements</td></tr>
        <tr><td>Account</td><td>CashBank</td><td>Cash and bank book statements</td></tr>
        <tr><td>Account</td><td>Ledger Voucher</td><td>Party account statements</td></tr>
        <tr><td>Account</td><td>Daybook</td><td>Chronological daily voucher register</td></tr>
        <tr><td>Inventory</td><td>Product</td><td>Item catalogue and stock management</td></tr>
        <tr><td>Inventory</td><td>Sales Invoice</td><td>Customer billing documents</td></tr>
        <tr><td>Inventory</td><td>Sales Order</td><td>Pre-billing customer orders</td></tr>
        <tr><td>Inventory</td><td>Sales Return</td><td>Customer return credit notes</td></tr>
        <tr><td>Inventory</td><td>Consumption</td><td>Raw material usage entries</td></tr>
        <tr><td>Inventory</td><td>Stock Journal Opening</td><td>Year-start inventory balances</td></tr>
      </tbody></table>

      <h2 id="overview-auth">Authentication</h2>
      <p>All secured endpoints require a <strong>Bearer token</strong> in the <code>Authorization</code> header:</p>
      <p><code>Authorization: Bearer &lt;your_token&gt;</code></p>
      <p>Obtain a token via the <strong>Auth → New Token</strong> endpoint. Tokens expire and can be refreshed via <strong>Auth → Refresh Token</strong>.</p>

      <h2 id="overview-errors">Error Codes</h2>
      <table><thead><tr><th>Code</th><th>Meaning</th></tr></thead><tbody>
        <tr><td>200</td><td>Success</td></tr>
        <tr><td>400</td><td>Bad Request — malformed body or missing fields</td></tr>
        <tr><td>401</td><td>Unauthorized — invalid or expired token</td></tr>
        <tr><td>403</td><td>Forbidden — insufficient permissions</td></tr>
        <tr><td>500</td><td>Internal Server Error</td></tr>
      </tbody></table>

      <h2 id="overview-rate">Rate Limiting</h2>
      <p>There is currently no rate limit enforced. It is recommended to batch bulk operations and avoid rapid-fire repeated calls in tight loops to ensure stability.</p>
    </div>
  `;

  const navContainer  = document.getElementById('nav-content');
  const contentContainer = document.getElementById('endpoints-container');
  contentContainer.innerHTML = '';

  if (!data.item || !Array.isArray(data.item)) return;

  // ── Assign stable IDs to every endpoint first ──
  let globalIdx = 0;
  data.item.forEach((folder, fi) => {
    (folder.item || []).forEach((ep, ei) => {
      ep._endpointId = `ep-${fi}-${ei}`;
      ep._globalIdx = globalIdx++;
    });
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
          return `<tr>
            <td><span class="sum-entity-tag">${en}</span></td>
            <td><span class="method-badge ${mc}-bg" style="font-size:0.6rem;padding:2px 7px">${method}</span></td>
            <td><a href="#${ep._endpointId}" class="sum-ep-link">${ep.name}</a></td>
            <td class="sum-url">${url}</td>
          </tr>`;
        });
      }).join('');
  };

  const buildExtraRows = (folderName, endpoints) => endpoints.map(ep => {
    const method = ep.request?.method || 'GET';
    const url = ep.request?.url?.raw || ep.request?.url || '—';
    const mc = getMethodColorClass(method);
    return `<tr>
      <td><span class="sum-entity-tag">${folderName}</span></td>
      <td><span class="method-badge ${mc}-bg" style="font-size:0.6rem;padding:2px 7px">${method}</span></td>
      <td><a href="#${ep._endpointId}" class="sum-ep-link">${ep.name}</a></td>
      <td class="sum-url">${url}</td>
    </tr>`;
  }).join('');

  const totalCount = Object.values(entityBuckets).reduce((s, b) => s + b.endpoints.length, 0)
    + Object.values(extraFolders).reduce((s, eps) => s + eps.length, 0);

  let html = `
    <div class="summary-section" id="endpoints-summary-section">
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
            <thead><tr><th>Entity</th><th>Method</th><th>Name</th><th>URL</th></tr></thead>
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
          <thead><tr><th>Entity</th><th>Method</th><th>Name</th><th>URL</th></tr></thead>
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
  container.insertAdjacentHTML('beforeend', `
    <div class="entity-section-header" id="entity-${entityName.replace(/\s+/g,'-')}">
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
      try {
        let fixed = raw.replace(/([a-zA-Z_][a-zA-Z0-9_]*)[\s]*:/g, '"$1":').replace(/'/g, '"');
        const parsed = stripAutoFields(JSON.parse(fixed));
        formattedJson = JSON.stringify(parsed, null, 2);
      } catch {
        formattedJson = raw;
      }
      // Parse fields from JSON for table
      try {
        const obj = JSON.parse(formattedJson);
        paramsHTML = buildParamsTable(obj);
      } catch {}
    } else if (r.body.mode === 'formdata' && r.body.formdata?.length) {
      // Build table from formdata, collect JSON payload
      const fields = {};
      const rows = r.body.formdata
        .filter(fd => !isAutoField(fd.key))   // ← strip auto fields from formdata
        .map(fd => {
        if (fd.type === 'file') {
          return `<tr><td>${fd.key}</td><td><span class="type-pill">file</span></td><td><span class="muted">Binary attachment</span></td></tr>`;
        }
        if (fd.value && fd.value.trim().startsWith('{')) {
          try {
            let fixed = fd.value.replace(/([a-zA-Z_][a-zA-Z0-9_]*)[\s]*:/g, '"$1":').replace(/'/g, '"');
            const parsed = stripAutoFields(JSON.parse(fixed));
            formattedJson = JSON.stringify(parsed, null, 2);
            Object.assign(fields, parsed);
          } catch { formattedJson = fd.value; }
          return `<tr><td>${fd.key}</td><td><span class="type-pill">json</span></td><td><span class="muted">(JSON body — see example below)</span></td></tr>`;
        }
        return `<tr><td>${fd.key}</td><td><span class="type-pill">${fd.type}</span></td><td>${fd.value || '—'}</td></tr>`;
      }).join('');
      if (rows) {
        paramsHTML = `<div class="section-label">Request Body (multipart/form-data)</div>
          <table class="params-table"><thead><tr><th>Field</th><th>Type</th><th>Value</th></tr></thead><tbody>${rows}</tbody></table>`;
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
          <span class="code-lang">JSON</span>
          <button class="copy-btn" onclick="copyCode(this)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copy
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
        ${r.description ? `<div class="markdown-body card-desc">${marked.parse(r.description)}</div>` : ''}
        ${queryHTML}
        ${paramsHTML}
        ${codeHTML}
      </div>
    </div>
  `;
}

function buildParamsTable(obj) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return '';
  const rows = Object.entries(obj).map(([k, v]) => {
    const type = Array.isArray(v) ? 'array' : typeof v;
    const display = Array.isArray(v) ? '<span class="muted">[array]</span>' : String(v);
    return `<tr><td>${k}</td><td><span class="type-pill">${type}</span></td><td>${display}</td></tr>`;
  }).join('');
  return `<div class="section-label">Request Body Parameters</div>
    <table class="params-table"><thead><tr><th>Field</th><th>Type</th><th>Example Value</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function copyCode(btn) {
  const code = btn.closest('.code-wrapper').querySelector('code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 12 4 18"/></svg> Copied!`;
    setTimeout(() => btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy`, 2000);
  });
}
