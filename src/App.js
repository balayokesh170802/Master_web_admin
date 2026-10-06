/**
 * Master Web Admin — Unified Application Script
 * Compatible with file:// protocol (double-clicking index.html directly) AND http:// localhost dev servers.
 */

// ==========================================
// 1. MOCK DATA & REACTIVE STORE MANAGER
// ==========================================
const initialData = {
  storeInfo: {
    name: "Apex Fashion Store",
    branch: "Main Street Branch #01",
    currency: "₹",
    currencyCode: "INR",
    phone: "+91 98765 43210",
    email: "manager@apexfashion.com",
    address: "124 Commerce Avenue, Fashion District, City",
    defaultMinStock: 10
  },

  categories: ["Shirts", "T-Shirts", "Jeans", "Trousers", "Hoodies"],
  brands: ["ClassicFit", "UrbanWear", "DenimCo", "EssentialStudio"],
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "White", "Navy", "Beige", "Olive"],

  suppliers: [
    { id: "SUP-01", name: "Apex Apparel Ltd", contact: "Rajesh Kumar (+91 98111 22334)", city: "Tirupur" },
    { id: "SUP-02", name: "SilkRoute Fabrics", contact: "Anita Sharma (+91 98222 33445)", city: "Surat" },
    { id: "SUP-03", name: "Urban Thread Co", contact: "Vikram Singh (+91 98333 44556)", city: "Ludhiana" }
  ],

  products: [
    {
      id: "PROD-101",
      name: "Classic Oxford Shirt",
      category: "Shirts",
      brand: "ClassicFit",
      description: "100% Cotton button-down Oxford shirt suitable for daily formal and casual wear.",
      purchasePrice: 650,
      sellingPrice: 1499,
      minStock: 12,
      supplier: "Apex Apparel Ltd",
      status: "Active",
      variants: [
        { sku: "OXF-BLK-S", color: "Black", size: "S", stock: 18, damaged: 1, daysInStock: 25 },
        { sku: "OXF-BLK-M", color: "Black", size: "M", stock: 4, damaged: 0, daysInStock: 40 },
        { sku: "OXF-BLK-L", color: "Black", size: "L", stock: 0, damaged: 2, daysInStock: 15 },
        { sku: "OXF-WHT-M", color: "White", size: "M", stock: 22, damaged: 0, daysInStock: 12 },
        { sku: "OXF-WHT-L", color: "White", size: "L", stock: 15, damaged: 1, daysInStock: 10 }
      ]
    },
    {
      id: "PROD-102",
      name: "Premium Cotton T-Shirt",
      category: "T-Shirts",
      brand: "UrbanWear",
      description: "220 GSM combed cotton crewneck t-shirt with pre-shrunk fabric.",
      purchasePrice: 280,
      sellingPrice: 699,
      minStock: 20,
      supplier: "SilkRoute Fabrics",
      status: "Active",
      variants: [
        { sku: "TSH-WHT-S", color: "White", size: "S", stock: 35, damaged: 0, daysInStock: 8 },
        { sku: "TSH-WHT-M", color: "White", size: "M", stock: 28, damaged: 1, daysInStock: 14 },
        { sku: "TSH-BLK-L", color: "Black", size: "L", stock: 2, damaged: 0, daysInStock: 95 },
        { sku: "TSH-NAV-XL", color: "Navy", size: "XL", stock: 0, damaged: 0, daysInStock: 60 }
      ]
    },
    {
      id: "PROD-103",
      name: "Slim Fit Denim Jeans",
      category: "Jeans",
      brand: "DenimCo",
      description: "Stretch denim 5-pocket jeans with stone wash finish.",
      purchasePrice: 850,
      sellingPrice: 1999,
      minStock: 10,
      supplier: "Urban Thread Co",
      status: "Active",
      variants: [
        { sku: "JNS-NAV-M", color: "Navy", size: "M", stock: 14, damaged: 0, daysInStock: 18 },
        { sku: "JNS-NAV-L", color: "Navy", size: "L", stock: 8, damaged: 1, daysInStock: 22 },
        { sku: "JNS-BLK-M", color: "Black", size: "M", stock: 3, damaged: 0, daysInStock: 102 }
      ]
    },
    {
      id: "PROD-104",
      name: "Regular Fit Chino Trousers",
      category: "Trousers",
      brand: "ClassicFit",
      description: "Breathable cotton stretch trousers for everyday comfort.",
      purchasePrice: 600,
      sellingPrice: 1399,
      minStock: 15,
      supplier: "Apex Apparel Ltd",
      status: "Active",
      variants: [
        { sku: "TRS-BEI-M", color: "Beige", size: "M", stock: 25, damaged: 0, daysInStock: 16 },
        { sku: "TRS-BEI-L", color: "Beige", size: "L", stock: 19, damaged: 0, daysInStock: 19 },
        { sku: "TRS-NAV-S", color: "Navy", size: "S", stock: 5, damaged: 0, daysInStock: 34 }
      ]
    },
    {
      id: "PROD-105",
      name: "Essential Fleece Hoodie",
      category: "Hoodies",
      brand: "EssentialStudio",
      description: "Heavyweight fleece lined hoodie with kangaroo pocket.",
      purchasePrice: 750,
      sellingPrice: 1799,
      minStock: 8,
      supplier: "Urban Thread Co",
      status: "Active",
      variants: [
        { sku: "HD-OLV-L", color: "Olive", size: "L", stock: 12, damaged: 2, daysInStock: 110 },
        { sku: "HD-BLK-M", color: "Black", size: "M", stock: 16, damaged: 0, daysInStock: 14 }
      ]
    }
  ],

  damagedStockRegister: [
    {
      id: "DMG-1001",
      product: "Classic Oxford Shirt",
      sku: "OXF-BLK-L",
      quantity: 2,
      supplier: "Apex Apparel Ltd",
      purchaseId: "PUR-2026-088",
      date: "2026-10-02",
      reason: "Stained collar fabric from supplier packing",
      notes: "Isolated from inventory immediately during quality check."
    },
    {
      id: "DMG-1002",
      product: "Essential Fleece Hoodie",
      sku: "HD-OLV-L",
      quantity: 2,
      supplier: "Urban Thread Co",
      purchaseId: "PUR-2026-092",
      date: "2026-09-28",
      reason: "Defective zipper mechanism",
      notes: "Claim submitted to supplier for credit memo."
    },
    {
      id: "DMG-1003",
      product: "Slim Fit Denim Jeans",
      sku: "JNS-NAV-L",
      quantity: 1,
      supplier: "Urban Thread Co",
      purchaseId: "PUR-2026-092",
      date: "2026-09-28",
      reason: "Seam tear along back pocket",
      notes: "Retained for supplier inspection."
    }
  ],

  stockMovements: [
    {
      id: "MOV-5001",
      date: "2026-10-06 10:30 AM",
      product: "Classic Oxford Shirt",
      sku: "OXF-WHT-M",
      type: "Sale",
      quantity: -2,
      reference: "BILL-2026-1004",
      user: "Staff - Priya"
    },
    {
      id: "MOV-5002",
      date: "2026-10-05 04:15 PM",
      product: "Classic Oxford Shirt",
      sku: "OXF-WHT-M",
      type: "Stock In",
      quantity: 20,
      reference: "PUR-2026-095",
      user: "Manager - Suresh"
    },
    {
      id: "MOV-5003",
      date: "2026-10-05 04:15 PM",
      product: "Classic Oxford Shirt",
      sku: "OXF-BLK-L",
      type: "Damage",
      quantity: 2,
      reference: "PUR-2026-095",
      user: "Manager - Suresh"
    }
  ],

  purchases: [
    {
      id: "PUR-2026-095",
      supplier: "Apex Apparel Ltd",
      invoiceNumber: "INV-APX-8842",
      date: "2026-10-05",
      productCount: 2,
      totalQuantity: 40,
      totalAmount: 26000,
      status: "Completed",
      items: [
        { product: "Classic Oxford Shirt", sku: "OXF-WHT-M", received: 20, good: 20, damaged: 0, price: 650 },
        { product: "Classic Oxford Shirt", sku: "OXF-BLK-L", received: 20, good: 18, damaged: 2, price: 650 }
      ]
    },
    {
      id: "PUR-2026-092",
      supplier: "Urban Thread Co",
      invoiceNumber: "INV-UTC-4109",
      date: "2026-09-28",
      productCount: 2,
      totalQuantity: 30,
      totalAmount: 24000,
      status: "Completed",
      items: [
        { product: "Essential Fleece Hoodie", sku: "HD-OLV-L", received: 15, good: 13, damaged: 2, price: 750 },
        { product: "Slim Fit Denim Jeans", sku: "JNS-NAV-L", received: 15, good: 14, damaged: 1, price: 850 }
      ]
    }
  ],

  sales: [
    {
      id: "BILL-2026-1004",
      date: "Oct 6, 10:30 AM",
      customer: "Amit Verma",
      phone: "+91 98123 45678",
      itemCount: 2,
      totalAmount: 2998,
      paymentMethod: "UPI",
      status: "Completed",
      items: [
        { product: "Classic Oxford Shirt", sku: "OXF-WHT-M", qty: 2, price: 1499, discount: 0, amount: 2998 }
      ]
    },
    {
      id: "BILL-2026-1003",
      date: "Oct 6, 09:15 AM",
      customer: "Kavita Reddy",
      phone: "+91 97654 32109",
      itemCount: 1,
      totalAmount: 1999,
      paymentMethod: "Card",
      status: "Completed",
      items: [
        { product: "Slim Fit Denim Jeans", sku: "JNS-NAV-M", qty: 1, price: 1999, discount: 0, amount: 1999 }
      ]
    },
    {
      id: "BILL-2026-1002",
      date: "Oct 5, 05:45 PM",
      customer: "Rohan Gupta",
      phone: "+91 99887 76655",
      itemCount: 3,
      totalAmount: 2097,
      paymentMethod: "Cash",
      status: "Completed",
      items: [
        { product: "Premium Cotton T-Shirt", sku: "TSH-WHT-S", qty: 3, price: 699, discount: 0, amount: 2097 }
      ]
    },
    {
      id: "BILL-2026-1001",
      date: "Oct 4, 03:20 PM",
      customer: "Sneha Patel",
      phone: "+91 98765 11223",
      itemCount: 2,
      totalAmount: 3198,
      paymentMethod: "UPI",
      status: "Completed",
      items: [
        { product: "Regular Fit Chino Trousers", sku: "TRS-BEI-M", qty: 1, price: 1399, discount: 0, amount: 1399 },
        { product: "Essential Fleece Hoodie", sku: "HD-BLK-M", qty: 1, price: 1799, discount: 0, amount: 1799 }
      ]
    }
  ],

  customers: [
    { id: "CUST-01", name: "Amit Verma", phone: "+91 98123 45678", ordersCount: 4, lastPurchase: "2026-10-06", totalSpend: 8996 },
    { id: "CUST-02", name: "Kavita Reddy", phone: "+91 97654 32109", ordersCount: 2, lastPurchase: "2026-10-06", totalSpend: 4498 },
    { id: "CUST-03", name: "Rohan Gupta", phone: "+91 99887 76655", ordersCount: 3, lastPurchase: "2026-10-05", totalSpend: 5597 },
    { id: "CUST-04", name: "Sneha Patel", phone: "+91 98765 11223", ordersCount: 5, lastPurchase: "2026-10-04", totalSpend: 11495 }
  ],

  users: [
    { id: "USR-01", name: "Suresh Menon", role: "Store Owner / Admin", email: "suresh@apexfashion.com", status: "Active" },
    { id: "USR-02", name: "Priya Nair", role: "Billing Staff", email: "priya@apexfashion.com", status: "Active" }
  ]
};

class StoreManager {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('master_web_admin_data')) || initialData;
    this.listeners = [];
  }

  save() {
    try {
      localStorage.setItem('master_web_admin_data', JSON.stringify(this.data));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.data));
  }

  getMetrics() {
    let totalProducts = this.data.products.length;
    let totalStock = 0;
    let damagedStockCount = 0;
    let stockValue = 0;
    let lowStockCount = 0;
    let outOfStockCount = 0;

    this.data.products.forEach(p => {
      p.variants.forEach(v => {
        totalStock += (v.stock || 0);
        damagedStockCount += (v.damaged || 0);
        stockValue += ((v.stock || 0) * (p.purchasePrice || 0));

        if (v.stock === 0) {
          outOfStockCount++;
        } else if (v.stock <= p.minStock) {
          lowStockCount++;
        }
      });
    });

    const todaySales = this.data.sales.reduce((sum, s) => sum + s.totalAmount, 0);

    return {
      todaySales,
      totalProducts,
      totalStock,
      lowStockCount,
      outOfStockCount,
      damagedStockCount,
      stockValue
    };
  }

  addStockIn(purchasePayload) {
    let totalQty = 0;
    let totalAmount = 0;

    purchasePayload.items.forEach(item => {
      totalQty += item.received;
      totalAmount += (item.good * item.price);

      const product = this.data.products.find(p => p.name === item.product || p.id === item.productId);
      if (product) {
        const variant = product.variants.find(v => v.sku === item.sku);
        if (variant) {
          variant.stock += item.good;
          variant.damaged += item.damaged;

          this.data.stockMovements.unshift({
            id: `MOV-${Date.now()}-${Math.floor(Math.random()*1000)}`,
            date: new Date().toLocaleString(),
            product: product.name,
            sku: item.sku,
            type: 'Stock In',
            quantity: item.good,
            reference: purchasePayload.invoiceNumber,
            user: 'Manager'
          });

          if (item.damaged > 0) {
            this.data.stockMovements.unshift({
              id: `MOV-DMG-${Date.now()}`,
              date: new Date().toLocaleString(),
              product: product.name,
              sku: item.sku,
              type: 'Damage',
              quantity: item.damaged,
              reference: purchasePayload.invoiceNumber,
              user: 'Manager'
            });

            this.data.damagedStockRegister.unshift({
              id: `DMG-${Date.now()}`,
              product: product.name,
              sku: item.sku,
              quantity: item.damaged,
              supplier: purchasePayload.supplier,
              purchaseId: purchasePayload.invoiceNumber,
              date: purchasePayload.date,
              reason: item.damageReason || "Damaged during shipment quality check",
              notes: item.damageNotes || "Isolated from available sellable stock."
            });
          }
        }
      }
    });

    this.data.purchases.unshift({
      id: `PUR-${Date.now().toString().slice(-4)}`,
      supplier: purchasePayload.supplier,
      invoiceNumber: purchasePayload.invoiceNumber,
      date: purchasePayload.date,
      productCount: purchasePayload.items.length,
      totalQuantity: totalQty,
      totalAmount: totalAmount,
      status: 'Completed',
      items: purchasePayload.items
    });
    this.save();
  }

  addSale(salePayload) {
    let totalAmt = 0;
    const saleItems = [];

    salePayload.items.forEach(item => {
      let finalAmt = (item.price * item.qty) - (item.discount || 0);
      totalAmt += finalAmt;

      let foundProd = null;
      let foundVariant = null;

      for (let p of this.data.products) {
        let v = p.variants.find(v => v.sku === item.sku);
        if (v) {
          foundProd = p;
          foundVariant = v;
          break;
        }
      }

      if (foundVariant) {
        foundVariant.stock = Math.max(0, foundVariant.stock - item.qty);

        this.data.stockMovements.unshift({
          id: `MOV-SALE-${Date.now()}`,
          date: new Date().toLocaleString(),
          product: foundProd.name,
          sku: item.sku,
          type: 'Sale',
          quantity: -item.qty,
          reference: salePayload.billNumber || `BILL-${Date.now().toString().slice(-4)}`,
          user: 'Staff'
        });
      }

      saleItems.push({
        product: foundProd ? foundProd.name : item.sku,
        sku: item.sku,
        qty: item.qty,
        price: item.price,
        discount: item.discount || 0,
        amount: finalAmt
      });
    });

    const billNo = salePayload.billNumber || `BILL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    this.data.sales.unshift({
      id: billNo,
      date: new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }),
      customer: salePayload.customerName || "Walk-in Customer",
      phone: salePayload.phone || "-",
      itemCount: salePayload.items.length,
      totalAmount: totalAmt,
      paymentMethod: salePayload.paymentMethod || 'UPI',
      status: 'Completed',
      items: saleItems
    });

    this.save();
  }

  addProduct(prod) {
    this.data.products.unshift(prod);
    this.save();
  }

  adjustStock(sku, newStock, reason) {
    for (let p of this.data.products) {
      let v = p.variants.find(v => v.sku === sku);
      if (v) {
        let diff = newStock - v.stock;
        v.stock = newStock;

        this.data.stockMovements.unshift({
          id: `MOV-ADJ-${Date.now()}`,
          date: new Date().toLocaleString(),
          product: p.name,
          sku: sku,
          type: 'Adjustment',
          quantity: diff,
          reference: reason || 'Manual Audit',
          user: 'Admin'
        });
        break;
      }
    }
    this.save();
  }
}

const store = new StoreManager();

// ==========================================
// 2. UI HELPER COMPONENTS
// ==========================================
function createButton({ text, icon = null, variant = 'primary', size = 'md', onClick = null, type = 'button', extraClass = '' }) {
  const btn = document.createElement('button');
  btn.type = type;
  btn.className = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${extraClass}`.trim();
  
  let content = '';
  if (icon) content += `<i data-lucide="${icon}" style="width: 16px; height: 16px;"></i>`;
  if (text) content += `<span>${text}</span>`;
  btn.innerHTML = content;
  
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
}

function createBadge({ label, variant = 'secondary', icon = null }) {
  const badge = document.createElement('span');
  badge.className = `badge badge-${variant}`;
  let html = '';
  if (icon) html += `<i data-lucide="${icon}" style="width: 12px; height: 12px;"></i>`;
  html += `<span>${label}</span>`;
  badge.innerHTML = html;
  return badge;
}

function createMetricCard({ label, value, subtext = null, icon = null, variant = 'default' }) {
  const card = document.createElement('div');
  card.className = 'metric-card';
  
  let borderColor = 'var(--border-color)';
  if (variant === 'danger') borderColor = 'var(--status-danger-border)';
  if (variant === 'warning') borderColor = 'var(--status-warning-border)';
  if (variant === 'success') borderColor = 'var(--status-success-border)';
  card.style.borderColor = borderColor;

  let iconHtml = icon ? `<i data-lucide="${icon}" style="width: 16px; height: 16px; color: var(--text-secondary);"></i>` : '';

  card.innerHTML = `
    <div class="metric-header">
      <span>${label}</span>
      ${iconHtml}
    </div>
    <div class="metric-value">${value}</div>
    ${subtext ? `<div class="metric-footer">${subtext}</div>` : ''}
  `;
  return card;
}

function createModal({ title, bodyElement, footerButtons = [], onClose = null }) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  
  const modal = document.createElement('div');
  modal.className = 'modal-content';
  
  const header = document.createElement('div');
  header.className = 'modal-header';
  header.innerHTML = `
    <h3 class="card-title" style="font-weight: 600; font-size: 1.1rem; color: var(--text-primary);">${title}</h3>
    <button class="btn btn-ghost btn-sm close-modal-btn" style="padding: 0.25rem;">
      <i data-lucide="x" style="width: 18px; height: 18px;"></i>
    </button>
  `;
  
  const body = document.createElement('div');
  body.className = 'modal-body';
  if (typeof bodyElement === 'string') body.innerHTML = bodyElement;
  else if (bodyElement instanceof HTMLElement) body.appendChild(bodyElement);
  
  const footer = document.createElement('div');
  footer.className = 'modal-footer';
  footerButtons.forEach(btn => footer.appendChild(btn));
  
  modal.appendChild(header);
  modal.appendChild(body);
  modal.appendChild(footer);
  overlay.appendChild(modal);
  
  const closeModal = () => {
    overlay.remove();
    if (onClose) onClose();
  };
  
  header.querySelector('.close-modal-btn').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  
  document.body.appendChild(overlay);
  if (window.lucide) window.lucide.createIcons();

  return { overlay, closeModal };
}

const toast = {
  show({ message, type = 'success', duration = 3000 }) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const t = document.createElement('div');
    t.className = 'toast';
    let icon = type === 'danger' ? 'alert-circle' : (type === 'warning' ? 'alert-triangle' : 'check-circle-2');
    let color = type === 'danger' ? 'var(--status-danger)' : (type === 'warning' ? 'var(--status-warning)' : 'var(--status-success)');

    t.innerHTML = `
      <i data-lucide="${icon}" style="width: 18px; height: 18px; color: ${color}; flex-shrink: 0;"></i>
      <span style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary);">${message}</span>
    `;

    container.appendChild(t);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(10px)';
      t.style.transition = 'all 0.2s ease';
      setTimeout(() => t.remove(), 200);
    }, duration);
  }
};

// ==========================================
// 3. LAYOUT COMPONENTS
// ==========================================
const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: 'layout-dashboard' },
  { id: 'inventory', label: 'Inventory', icon: 'boxes' },
  { id: 'products', label: 'Products', icon: 'shirt' },
  { id: 'purchases', label: 'Purchases / Stock In', icon: 'truck' },
  { id: 'sales', label: 'Sales', icon: 'shopping-cart' },
  { id: 'customers', label: 'Customers', icon: 'users' },
  { id: 'reports', label: 'Reports', icon: 'bar-chart-3' },
  { id: 'settings', label: 'Settings', icon: 'settings' }
];

function createSidebar(activeNavId, onNavigate) {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  
  const header = document.createElement('div');
  header.className = 'sidebar-header';
  header.innerHTML = `
    <div class="brand-badge">M</div>
    <div>
      <div class="brand-title">Master Admin</div>
      <div class="brand-subtitle">Apex Store #01</div>
    </div>
  `;
  
  const nav = document.createElement('nav');
  nav.className = 'sidebar-nav';
  
  NAV_ITEMS.forEach(item => {
    const btn = document.createElement('button');
    btn.className = `nav-item ${item.id === activeNavId ? 'active' : ''}`;
    btn.innerHTML = `
      <i data-lucide="${item.icon}" style="width: 18px; height: 18px;"></i>
      <span>${item.label}</span>
    `;
    btn.addEventListener('click', () => onNavigate(item.id));
    nav.appendChild(btn);
  });
  
  sidebar.appendChild(header);
  sidebar.appendChild(nav);
  return sidebar;
}

function createTopbar(activeTitle, onThemeToggle) {
  const topbar = document.createElement('header');
  topbar.className = 'topbar';
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  
  topbar.innerHTML = `
    <div class="topbar-left">
      <h1 class="page-title" style="font-size: 1.35rem;">${activeTitle}</h1>
    </div>
    <div class="topbar-right">
      <div style="font-size: 0.8rem; background: var(--bg-secondary); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 0.4rem;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--status-success);"></span>
        <span style="font-weight: 500; color: var(--text-secondary);">Store #01 • Online</span>
      </div>
      
      <button class="btn btn-secondary btn-sm theme-toggle-btn" title="Toggle Light/Dark Mode" style="padding: 0.45rem;">
        <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" style="width: 16px; height: 16px;"></i>
      </button>

      <div style="display: flex; align-items: center; gap: 0.6rem; padding-left: 0.5rem; border-left: 1px solid var(--border-color);">
        <div style="width: 32px; height: 32px; border-radius: 50%; background-color: var(--brand-primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.85rem;">
          SM
        </div>
        <div style="display: flex; flex-direction: column;">
          <span style="font-size: 0.85rem; font-weight: 600; line-height: 1.2;">Suresh Menon</span>
          <span style="font-size: 0.725rem; color: var(--text-secondary);">Store Owner</span>
        </div>
      </div>
    </div>
  `;
  
  topbar.querySelector('.theme-toggle-btn').addEventListener('click', onThemeToggle);
  return topbar;
}

// ==========================================
// 4. PAGE RENDERERS
// ==========================================

// OVERVIEW PAGE
function renderOverview(onNavigate) {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  const data = store.data;

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Store Overview</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Key store metrics, sales trend, top performing products, and recent stock intake.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  // 4 KPI Cards
  const kpiGrid = document.createElement('div');
  kpiGrid.className = 'kpi-grid';

  let totalRevAmt = data.sales.reduce((sum, s) => sum + s.totalAmount, 0) + 271708;
  kpiGrid.appendChild(createMetricCard({
    label: 'Total Revenue',
    value: `${data.storeInfo.currency}${totalRevAmt.toLocaleString()}`,
    subtext: `<span style="color: var(--status-success); font-weight: 600;">↑ 8.4%</span> <span style="color: var(--text-secondary);">from last month</span>`,
    icon: 'dollar-sign'
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Total Products',
    value: `${metrics.totalProducts}`,
    subtext: `<span style="color: var(--text-secondary);">12 added this month</span>`,
    icon: 'package'
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Low Stock',
    value: `${metrics.lowStockCount || 6}`,
    subtext: `<span style="color: var(--status-warning-text); font-weight: 600;">6 need restocking</span>`,
    icon: 'alert-triangle',
    variant: 'warning'
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Out of Stock',
    value: `${metrics.outOfStockCount || 2}`,
    subtext: `<span style="color: var(--status-danger-text); font-weight: 600;">2 more than last month</span>`,
    icon: 'alert-circle',
    variant: 'danger'
  }));

  container.appendChild(kpiGrid);

  // 2-Column Row (Sales Trend & Top Selling)
  const grid2Col = document.createElement('div');
  grid2Col.style.cssText = 'display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; width: 100%; align-items: stretch;';
  if (window.innerWidth <= 1024) grid2Col.style.gridTemplateColumns = '1fr';

  let activePeriod = '1W';
  const salesTrendCard = document.createElement('div');
  salesTrendCard.className = 'card';
  salesTrendCard.style.display = 'flex';
  salesTrendCard.style.flexDirection = 'column';
  salesTrendCard.style.justifyContent = 'space-between';

  const chartDatasets = {
    '1W': {
      periodLabel: '1W',
      startRevLabel: 'Start of Week',
      startRevVal: '₹70,000',
      endRevLabel: 'End of Week',
      endRevVal: '₹82,450',
      revDiff: '+₹12,450',
      revGrowth: '+17.8%',
      isRevPositive: true,
      cogs: '₹55,000',
      profitLabel: 'Profit',
      profitVal: '+₹27,450',
      profitMargin: '33.3%',
      isProfit: true,
      yMax: '₹85k',
      yMid: '₹75k',
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      coords: [
        { x: 20, y: 140, val: '₹70,000', label: 'Mon' },
        { x: 95, y: 122, val: '₹72,500', label: 'Tue' },
        { x: 170, y: 98, val: '₹75,800', label: 'Wed' },
        { x: 245, y: 110, val: '₹74,200', label: 'Thu' },
        { x: 320, y: 78, val: '₹78,600', label: 'Fri' },
        { x: 395, y: 55, val: '₹81,200', label: 'Sat' },
        { x: 470, y: 45, val: '₹82,450', label: 'Sun' }
      ],
      pointsPath: '20,140 95,122 170,98 245,110 320,78 395,55 470,45',
      areaPoly: '20,170 20,140 95,122 170,98 245,110 320,78 395,55 470,45 470,170 20,170'
    },
    '1M': {
      periodLabel: '1M',
      startRevLabel: 'Start of Month',
      startRevVal: '₹2,20,000',
      endRevLabel: 'End of Month',
      endRevVal: '₹2,84,500',
      revDiff: '+₹64,500',
      revGrowth: '+29.3%',
      isRevPositive: true,
      cogs: '₹1,85,000',
      profitLabel: 'Profit',
      profitVal: '+₹99,500',
      profitMargin: '35.0%',
      isProfit: true,
      yMax: '₹300k',
      yMid: '₹250k',
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      coords: [
        { x: 40, y: 145, val: '₹2,20,000', label: 'Week 1' },
        { x: 180, y: 110, val: '₹2,45,000', label: 'Week 2' },
        { x: 320, y: 85, val: '₹2,62,000', label: 'Week 3' },
        { x: 460, y: 40, val: '₹2,84,500', label: 'Week 4' }
      ],
      pointsPath: '40,145 180,110 320,85 460,40',
      areaPoly: '40,170 40,145 180,110 320,85 460,40 460,170 40,170'
    },
    '3M': {
      periodLabel: '3M',
      startRevLabel: 'Start of 3M',
      startRevVal: '₹6,80,000',
      endRevLabel: 'End of 3M',
      endRevVal: '₹7,92,100',
      revDiff: '+₹1,12,100',
      revGrowth: '+16.5%',
      isRevPositive: true,
      cogs: '₹5,10,000',
      profitLabel: 'Profit',
      profitVal: '+₹2,82,100',
      profitMargin: '35.6%',
      isProfit: true,
      yMax: '₹800k',
      yMid: '₹700k',
      labels: ['August', 'September', 'October'],
      coords: [
        { x: 60, y: 140, val: '₹6,80,000', label: 'August' },
        { x: 250, y: 90, val: '₹7,40,000', label: 'September' },
        { x: 440, y: 45, val: '₹7,92,100', label: 'October' }
      ],
      pointsPath: '60,140 250,90 440,45',
      areaPoly: '60,170 60,140 250,90 440,45 440,170 60,170'
    },
    '1Y': {
      periodLabel: '1Y',
      startRevLabel: 'Start of Year',
      startRevVal: '₹24,00,000',
      endRevLabel: 'End of Year',
      endRevVal: '₹31,45,800',
      revDiff: '+₹7,45,800',
      revGrowth: '+31.1%',
      isRevPositive: true,
      cogs: '₹20,50,000',
      profitLabel: 'Profit',
      profitVal: '+₹10,95,800',
      profitMargin: '34.8%',
      isProfit: true,
      yMax: '₹32L',
      yMid: '₹26L',
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      coords: [
        { x: 40, y: 145, val: '₹24,00,000', label: 'Q1' },
        { x: 180, y: 110, val: '₹26,50,000', label: 'Q2' },
        { x: 320, y: 70, val: '₹29,00,000', label: 'Q3' },
        { x: 460, y: 35, val: '₹31,45,800', label: 'Q4' }
      ],
      pointsPath: '40,145 180,110 320,70 460,35',
      areaPoly: '40,170 40,145 180,110 320,70 460,35 460,170 40,170'
    }
  };

  function renderSalesChart(periodKey) {
    const ds = chartDatasets[periodKey];
    salesTrendCard.innerHTML = `
      <div class="card-header" style="flex-wrap: wrap; gap: 0.75rem; align-items: center; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); margin-bottom: 0.75rem;">
        <div>
          <h3 class="card-title" style="font-size: 1.05rem; font-weight: 600;">Sales Trend</h3>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.15rem;">Revenue performance & gross profit summary</div>
        </div>
        
        <!-- Period Selectors: 1W, 1M, 3M, 1Y -->
        <div style="display: flex; gap: 0.2rem; background: var(--bg-secondary); padding: 0.2rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          ${['1W', '1M', '3M', '1Y'].map(p => `
            <button class="btn period-btn" data-period="${p}" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; font-weight: 600; border: none; cursor: pointer;">${p}</button>
          `).join('')}
        </div>
      </div>

      <!-- Financial Summary Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 0.75rem;">
        <div>
          <div style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; color: var(--text-secondary);">Total Revenue</div>
          <div style="display: flex; align-items: baseline; gap: 0.5rem; margin-top: 0.15rem; flex-wrap: wrap;">
            <span style="font-size: 1.45rem; font-weight: 700; color: var(--text-primary); letter-spacing: -0.02em;">${ds.endRevVal}</span>
            <span style="font-size: 0.825rem; font-weight: 600; color: ${ds.isRevPositive ? 'var(--status-success)' : 'var(--status-danger)'}; display: inline-flex; align-items: center; gap: 0.25rem;">
              ${ds.isRevPositive ? '↑' : '↓'} ${ds.revDiff} (${ds.revGrowth}) <span style="color: var(--text-secondary); font-weight: 400;">· ${ds.periodLabel}</span>
            </span>
          </div>
        </div>

        <!-- Profit / Loss Box -->
        <div style="text-align: right;">
          <div style="font-size: 0.725rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; color: var(--text-secondary);">${ds.profitLabel}</div>
          <div style="font-size: 1.15rem; font-weight: 700; color: ${ds.isProfit ? 'var(--status-success)' : 'var(--status-danger)'}; margin-top: 0.15rem;">
            ${ds.profitVal}
          </div>
          <div style="font-size: 0.725rem; font-weight: 600; color: ${ds.isProfit ? 'var(--status-success)' : 'var(--status-danger)'};">
            ${ds.profitMargin} margin
          </div>
        </div>
      </div>

      <!-- Start vs End Period Benchmarks -->
      <div style="display: flex; justify-content: space-between; font-size: 0.775rem; color: var(--text-secondary); margin-bottom: 0.35rem; padding: 0 0.25rem;">
        <div>${ds.startRevLabel}: <strong style="color: var(--text-primary); font-weight: 600;">${ds.startRevVal}</strong></div>
        <div>${ds.endRevLabel}: <strong style="color: var(--text-primary); font-weight: 600;">${ds.endRevVal}</strong></div>
      </div>

      <!-- Chart Graphics -->
      <div style="position: relative; height: 165px; display: flex; flex: 1; margin-top: 0.25rem;">
        <div style="display: flex; flex-direction: column; justify-content: space-between; font-size: 0.7rem; color: var(--text-secondary); padding-right: 0.6rem; width: 45px; text-align: right; font-weight: 500;">
          <span>${ds.yMax}</span>
          <span>${ds.yMid}</span>
          <span>₹0</span>
        </div>

        <div style="flex: 1; position: relative; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          <svg width="100%" height="135" viewBox="0 0 500 135" preserveAspectRatio="none" style="overflow: visible;">
            <defs>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--brand-primary)" stop-opacity="0.22"/>
                <stop offset="100%" stop-color="var(--brand-primary)" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <line x1="0" y1="10" x2="500" y2="10" stroke="var(--border-color)" stroke-dasharray="4" />
            <line x1="0" y1="70" x2="500" y2="70" stroke="var(--border-color)" stroke-dasharray="4" />
            <line x1="0" y1="130" x2="500" y2="130" stroke="var(--border-color)" />
            
            <polygon points="${ds.areaPoly}" fill="url(#salesGrad)" />
            <polyline points="${ds.pointsPath}" fill="none" stroke="var(--brand-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            
            ${ds.coords.map(c => `<circle cx="${c.x}" cy="${c.y}" r="4.5" fill="var(--brand-primary)" stroke="var(--bg-surface)" stroke-width="2" />`).join('')}
          </svg>
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-secondary); padding: 0.2rem 0.4rem 0 0.4rem; font-weight: 500;">
            ${ds.labels.map(l => `<span>${l}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    salesTrendCard.querySelectorAll('.period-btn').forEach(btn => {
      const p = btn.dataset.period;
      if (p === periodKey) {
        btn.style.backgroundColor = 'var(--brand-primary)';
        btn.style.color = '#ffffff';
        btn.style.fontWeight = '600';
        btn.style.borderRadius = 'var(--radius-sm)';
      } else {
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'var(--text-secondary)';
        btn.style.fontWeight = '500';
      }

      btn.addEventListener('click', (e) => {
        activePeriod = e.target.dataset.period;
        renderSalesChart(activePeriod);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  renderSalesChart(activePeriod);
  grid2Col.appendChild(salesTrendCard);

  // Top Selling Products Card
  const topSellingCard = document.createElement('div');
  topSellingCard.className = 'card';
  topSellingCard.style.display = 'flex';
  topSellingCard.style.flexDirection = 'column';
  topSellingCard.style.justifyContent = 'space-between';

  topSellingCard.innerHTML = `
    <div>
      <div class="card-header" style="margin-bottom: 0.75rem; padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color);">
        <div>
          <div style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary); margin-bottom: 0.25rem;">BESTSELLERS</div>
          <h3 class="card-title">Top Selling Products</h3>
        </div>
        <button class="btn btn-ghost btn-sm view-all-products-btn" style="font-size: 0.775rem; padding: 0.25rem 0.5rem; color: var(--brand-primary); font-weight: 600;">View all</button>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.55rem; border-bottom: 1px solid var(--border-color);">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.85rem; color: var(--brand-primary); background: var(--brand-soft); width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">01</span>
            <div>
              <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">Classic Oxford Shirt</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">84 sold</div>
            </div>
          </div>
          <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">₹83,916</div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.55rem; border-bottom: 1px solid var(--border-color);">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-secondary); background: var(--bg-secondary); width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">02</span>
            <div>
              <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">Premium Cotton T-Shirt</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">72 sold</div>
            </div>
          </div>
          <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">₹64,728</div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.55rem; border-bottom: 1px solid var(--border-color);">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-secondary); background: var(--bg-secondary); width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">03</span>
            <div>
              <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">Slim Fit Denim</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">58 sold</div>
            </div>
          </div>
          <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">₹84,622</div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.55rem; border-bottom: 1px solid var(--border-color);">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-secondary); background: var(--bg-secondary); width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">04</span>
            <div>
              <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">Regular Fit Trousers</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">46 sold</div>
            </div>
          </div>
          <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">₹55,154</div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-secondary); background: var(--bg-secondary); width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">05</span>
            <div>
              <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">Essential Hoodie</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">32 sold</div>
            </div>
          </div>
          <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">₹31,968</div>
        </div>
      </div>
    </div>
  `;

  topSellingCard.querySelector('.view-all-products-btn').addEventListener('click', () => onNavigate('products'));
  grid2Col.appendChild(topSellingCard);

  container.appendChild(grid2Col);

  // Section 4: RECENT SALES HISTORY
  const salesHistoryCard = document.createElement('div');
  salesHistoryCard.className = 'card';
  const salesList = data.sales.slice(0, 5);

  salesHistoryCard.innerHTML = `
    <div class="card-header">
      <div>
        <h3 class="card-title">Recent Sales History</h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary);">Latest customer billing transactions & sales receipts</p>
      </div>
      <button class="btn btn-ghost btn-sm view-all-sales-btn" style="font-size: 0.775rem; color: var(--brand-primary); font-weight: 600;">View all</button>
    </div>

    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Bill Number</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Payment Method</th>
            <th>Amount</th>
            <th>Date & Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${salesList.map(s => `
            <tr>
              <td style="font-family: monospace; font-weight: 600;">${s.id}</td>
              <td style="font-weight: 500;">${s.customer}</td>
              <td style="color: var(--text-secondary);">${s.itemCount} item${s.itemCount > 1 ? 's' : ''}</td>
              <td>${createBadge({ label: s.paymentMethod, variant: 'secondary' }).outerHTML}</td>
              <td style="font-weight: 600; color: var(--text-primary);">₹${s.totalAmount.toLocaleString()}</td>
              <td style="color: var(--text-secondary); font-size: 0.8rem;">${s.date}</td>
              <td>${createBadge({ label: s.status, variant: 'success' }).outerHTML}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  salesHistoryCard.querySelector('.view-all-sales-btn').addEventListener('click', () => onNavigate('sales'));
  container.appendChild(salesHistoryCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// INVENTORY PAGE
function renderInventory() {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  let activeTab = 'inventory';
  let searchQuery = '';
  let selectedCategory = 'ALL';
  let selectedStatus = 'ALL';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Stock Inventory & Movements</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Track real-time sellable stock, damaged stock isolation, and inventory audit logs.</p>
    </div>
    <div id="inv-header-actions"></div>
  `;

  const adjustBtn = createButton({
    text: 'Stock Audit / Adjust',
    icon: 'sliders-horizontal',
    variant: 'secondary',
    size: 'sm',
    onClick: () => openStockAdjustModal()
  });
  headerDiv.querySelector('#inv-header-actions').appendChild(adjustBtn);
  container.appendChild(headerDiv);

  const summaryBar = document.createElement('div');
  summaryBar.style.cssText = 'display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;';
  summaryBar.innerHTML = `
    <div class="card" style="padding: 0.6rem 1rem; flex: 1; min-width: 140px;">
      <div style="font-size: 0.75rem; color: var(--text-secondary);">Available Stock</div>
      <div style="font-size: 1.15rem; font-weight: 600; color: var(--status-success);">${metrics.totalStock} units</div>
    </div>
    <div class="card" style="padding: 0.6rem 1rem; flex: 1; min-width: 140px;">
      <div style="font-size: 0.75rem; color: var(--text-secondary);">Low Stock</div>
      <div style="font-size: 1.15rem; font-weight: 600; color: var(--status-warning);">${metrics.lowStockCount} items</div>
    </div>
    <div class="card" style="padding: 0.6rem 1rem; flex: 1; min-width: 140px;">
      <div style="font-size: 0.75rem; color: var(--text-secondary);">Out of Stock</div>
      <div style="font-size: 1.15rem; font-weight: 600; color: var(--status-danger);">${metrics.outOfStockCount} items</div>
    </div>
    <div class="card" style="padding: 0.6rem 1rem; flex: 1; min-width: 140px;">
      <div style="font-size: 0.75rem; color: var(--text-secondary);">Damaged Stock</div>
      <div style="font-size: 1.15rem; font-weight: 600; color: var(--status-danger);">${metrics.damagedStockCount} units</div>
    </div>
  `;
  container.appendChild(summaryBar);

  const tabsDiv = document.createElement('div');
  tabsDiv.className = 'tab-list';
  tabsDiv.innerHTML = `
    <button class="tab-button ${activeTab === 'inventory' ? 'active' : ''}" id="tab-btn-inv">Current Inventory Table</button>
    <button class="tab-button ${activeTab === 'movements' ? 'active' : ''}" id="tab-btn-mov">Stock Movement Log</button>
  `;
  container.appendChild(tabsDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  container.appendChild(mainCard);

  function renderTabContent() {
    mainCard.innerHTML = '';
    if (activeTab === 'inventory') {
      const filterBar = document.createElement('div');
      filterBar.className = 'filter-bar';
      filterBar.style.marginBottom = '1.25rem';
      filterBar.innerHTML = `
        <div class="search-box">
          <i data-lucide="search" class="search-icon" style="width: 16px; height: 16px;"></i>
          <input type="text" class="form-input" id="inv-search-input" placeholder="Search by SKU, Product name, Color..." value="${searchQuery}">
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <select class="form-select" id="inv-category-select" style="width: 160px;">
            <option value="ALL">All Categories</option>
            ${store.data.categories.map(c => `<option value="${c}" ${selectedCategory === c ? 'selected' : ''}>${c}</option>`).join('')}
          </select>
          <select class="form-select" id="inv-status-select" style="width: 160px;">
            <option value="ALL">All Statuses</option>
            <option value="NORMAL" ${selectedStatus === 'NORMAL' ? 'selected' : ''}>Normal</option>
            <option value="LOW" ${selectedStatus === 'LOW' ? 'selected' : ''}>Low Stock</option>
            <option value="OUT" ${selectedStatus === 'OUT' ? 'selected' : ''}>Out of Stock</option>
          </select>
        </div>
      `;

      filterBar.querySelector('#inv-search-input').addEventListener('input', (e) => { searchQuery = e.target.value; renderTableRows(); });
      filterBar.querySelector('#inv-category-select').addEventListener('change', (e) => { selectedCategory = e.target.value; renderTableRows(); });
      filterBar.querySelector('#inv-status-select').addEventListener('change', (e) => { selectedStatus = e.target.value; renderTableRows(); });

      mainCard.appendChild(filterBar);

      const tableResp = document.createElement('div');
      tableResp.className = 'table-responsive';
      tableResp.innerHTML = `
        <table class="admin-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Size / Color</th>
              <th>Available Stock</th>
              <th>Damaged</th>
              <th>Min Stock</th>
              <th>Stock Value</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="inventory-tbody"></tbody>
        </table>
      `;
      mainCard.appendChild(tableResp);
      renderTableRows();
    } else {
      mainCard.innerHTML = `
        <div style="margin-bottom: 1rem;">
          <h3 class="card-title">Stock Movement History</h3>
          <p style="font-size: 0.78rem; color: var(--text-secondary);">Audit log of all stock increases, sales deductions, damages, and manual adjustments.</p>
        </div>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Movement Type</th>
                <th>Product</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Reference / Doc</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              ${store.data.stockMovements.map(m => `
                <tr>
                  <td style="color: var(--text-secondary);">${m.date}</td>
                  <td>${createBadge({ label: m.type, variant: m.type === 'Stock In' ? 'success' : (m.type === 'Sale' ? 'info' : 'danger') }).outerHTML}</td>
                  <td style="font-weight: 500;">${m.product}</td>
                  <td style="font-family: monospace;">${m.sku}</td>
                  <td style="font-weight: 600; color: ${m.quantity > 0 ? 'var(--status-success)' : 'var(--status-danger)'};">${m.quantity > 0 ? `+${m.quantity}` : m.quantity}</td>
                  <td style="font-family: monospace; font-size: 0.8rem; color: var(--text-secondary);">${m.reference}</td>
                  <td style="color: var(--text-secondary);">${m.user}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function renderTableRows() {
    const tbody = mainCard.querySelector('#inventory-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const rows = [];
    store.data.products.forEach(p => {
      p.variants.forEach(v => {
        const q = searchQuery.toLowerCase();
        const matchesSearch = !q || p.name.toLowerCase().includes(q) || v.sku.toLowerCase().includes(q) || v.color.toLowerCase().includes(q);
        const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
        let statusKey = v.stock === 0 ? 'OUT' : (v.stock <= p.minStock ? 'LOW' : 'NORMAL');
        const matchesStatus = selectedStatus === 'ALL' || selectedStatus === statusKey;

        if (matchesSearch && matchesCat && matchesStatus) rows.push({ product: p, variant: v, statusKey });
      });
    });

    if (rows.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No inventory records match the selected filters.</td></tr>`;
      return;
    }

    rows.forEach(({ product, variant, statusKey }) => {
      const tr = document.createElement('tr');
      let badgeVariant = statusKey === 'OUT' ? 'danger' : (statusKey === 'LOW' ? 'warning' : 'success');
      let badgeLabel = statusKey === 'OUT' ? 'Out of Stock' : (statusKey === 'LOW' ? 'Low Stock' : 'Available');

      tr.innerHTML = `
        <td>
          <div style="font-weight: 600;">${product.name}</div>
          <div style="font-size: 0.725rem; color: var(--text-secondary);">${product.brand}</div>
        </td>
        <td style="font-family: monospace; font-weight: 500;">${variant.sku}</td>
        <td>${createBadge({ label: product.category, variant: 'secondary' }).outerHTML}</td>
        <td>${variant.color} / ${variant.size}</td>
        <td><span style="font-weight: 600; color: ${variant.stock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${variant.stock} units</span></td>
        <td>${variant.damaged > 0 ? `<span class="badge badge-danger">${variant.damaged} damaged</span>` : '<span style="color: var(--text-tertiary);">0</span>'}</td>
        <td style="color: var(--text-secondary);">${product.minStock}</td>
        <td>₹${(variant.stock * product.purchasePrice).toLocaleString()}</td>
        <td>${createBadge({ label: badgeLabel, variant: badgeVariant }).outerHTML}</td>
        <td>
          <button class="btn btn-ghost btn-sm quick-adj-btn" data-sku="${variant.sku}" style="padding: 0.25rem 0.5rem;">
            <i data-lucide="edit-2" style="width: 14px; height: 14px;"></i> Adjust
          </button>
        </td>
      `;

      tr.querySelector('.quick-adj-btn').addEventListener('click', () => openStockAdjustModal(variant.sku, variant.stock));
      tbody.appendChild(tr);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function openStockAdjustModal(defaultSku = '', defaultStock = 0) {
    const formHtml = `
      <div class="form-group">
        <label class="form-label">Select Product Variant SKU</label>
        <select class="form-select" id="adj-sku-select">
          ${store.data.products.flatMap(p => p.variants.map(v => `<option value="${v.sku}" ${v.sku === defaultSku ? 'selected' : ''}>${v.sku} — ${p.name} (${v.color}/${v.size}) [Current: ${v.stock}]</option>`)).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">New Usable Available Stock Quantity</label>
        <input type="number" class="form-input" id="adj-new-stock" value="${defaultStock}" min="0">
      </div>
      <div class="form-group">
        <label class="form-label">Audit / Adjustment Reason</label>
        <select class="form-select" id="adj-reason-select">
          <option value="Physical Stock Audit Correction">Physical Stock Audit Correction</option>
          <option value="Stock Damaged In Store">Stock Damaged In Store</option>
          <option value="Sample / Display Unit">Sample / Display Unit</option>
        </select>
      </div>
    `;

    const bodyEl = document.createElement('div');
    bodyEl.innerHTML = formHtml;

    const cancelBtn = createButton({ text: 'Cancel', variant: 'secondary', onClick: () => modal.closeModal() });
    const saveBtn = createButton({
      text: 'Save Adjustment',
      variant: 'primary',
      onClick: () => {
        const sku = bodyEl.querySelector('#adj-sku-select').value;
        const newStock = parseInt(bodyEl.querySelector('#adj-new-stock').value, 10);
        const reason = bodyEl.querySelector('#adj-reason-select').value;
        if (isNaN(newStock) || newStock < 0) {
          toast.show({ message: 'Please enter a valid stock quantity', type: 'danger' });
          return;
        }
        store.adjustStock(sku, newStock, reason);
        toast.show({ message: `Updated stock for ${sku} to ${newStock} units`, type: 'success' });
        modal.closeModal();
        renderTabContent();
      }
    });

    const modal = createModal({ title: 'Manual Stock Audit / Adjustment', bodyElement: bodyEl, footerButtons: [cancelBtn, saveBtn] });
  }

  tabsDiv.querySelector('#tab-btn-inv').addEventListener('click', () => { activeTab = 'inventory'; renderTabContent(); });
  tabsDiv.querySelector('#tab-btn-mov').addEventListener('click', () => { activeTab = 'movements'; renderTabContent(); });

  renderTabContent();
  return container;
}

// PRODUCTS PAGE
function renderProducts() {
  const container = document.createElement('div');
  container.className = 'page-container';

  let searchQuery = '';
  let selectedCategory = 'ALL';
  let selectedBrand = 'ALL';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Product Catalog & Variants</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Manage products, pricing, minimum reorder thresholds, and size/color variant SKUs.</p>
    </div>
    <div id="prod-header-actions"></div>
  `;

  const addProductBtn = createButton({ text: 'Add New Product', icon: 'plus', variant: 'primary', size: 'sm', onClick: () => openAddProductModal() });
  headerDiv.querySelector('#prod-header-actions').appendChild(addProductBtn);
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  container.appendChild(mainCard);

  const filterBar = document.createElement('div');
  filterBar.className = 'filter-bar';
  filterBar.style.marginBottom = '1.25rem';
  filterBar.innerHTML = `
    <div class="search-box">
      <i data-lucide="search" class="search-icon" style="width: 16px; height: 16px;"></i>
      <input type="text" class="form-input" id="prod-search-input" placeholder="Search by Product Name, SKU..." value="${searchQuery}">
    </div>
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      <select class="form-select" id="prod-category-select" style="width: 160px;">
        <option value="ALL">All Categories</option>
        ${store.data.categories.map(c => `<option value="${c}">${c}</option>`).join('')}
      </select>
      <select class="form-select" id="prod-brand-select" style="width: 160px;">
        <option value="ALL">All Brands</option>
        ${store.data.brands.map(b => `<option value="${b}">${b}</option>`).join('')}
      </select>
    </div>
  `;

  filterBar.querySelector('#prod-search-input').addEventListener('input', (e) => { searchQuery = e.target.value; renderProductsList(); });
  filterBar.querySelector('#prod-category-select').addEventListener('change', (e) => { selectedCategory = e.target.value; renderProductsList(); });
  filterBar.querySelector('#prod-brand-select').addEventListener('change', (e) => { selectedBrand = e.target.value; renderProductsList(); });

  mainCard.appendChild(filterBar);

  const tableResp = document.createElement('div');
  tableResp.className = 'table-responsive';
  tableResp.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Purchase Price</th>
          <th>Selling Price</th>
          <th>Margin</th>
          <th>Variants Count</th>
          <th>Total Stock</th>
          <th>Min Level</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody id="products-tbody"></tbody>
    </table>
  `;
  mainCard.appendChild(tableResp);

  function renderProductsList() {
    const tbody = mainCard.querySelector('#products-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const filtered = store.data.products.filter(p => {
      const q = searchQuery.toLowerCase();
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.variants.some(v => v.sku.toLowerCase().includes(q));
      const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchesBrand = selectedBrand === 'ALL' || p.brand === selectedBrand;
      return matchesQuery && matchesCat && matchesBrand;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No products found in catalog.</td></tr>`;
      return;
    }

    filtered.forEach(p => {
      const totalStock = p.variants.reduce((sum, v) => sum + (v.stock || 0), 0);
      const margin = Math.round(((p.sellingPrice - p.purchasePrice) / p.sellingPrice) * 100);

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="font-weight: 600; font-size: 0.925rem;">${p.name}</div>
          <div style="font-size: 0.725rem; color: var(--text-secondary); font-family: monospace;">ID: ${p.id}</div>
        </td>
        <td>${createBadge({ label: p.category, variant: 'secondary' }).outerHTML}</td>
        <td style="color: var(--text-secondary);">${p.brand}</td>
        <td>₹${p.purchasePrice}</td>
        <td style="font-weight: 600;">₹${p.sellingPrice}</td>
        <td><span style="color: var(--status-success); font-weight: 600;">${margin}%</span></td>
        <td><span style="font-weight: 500;">${p.variants.length} Variants</span></td>
        <td style="font-weight: 600; color: ${totalStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${totalStock} units</td>
        <td style="color: var(--text-secondary);">${p.minStock}</td>
        <td>${createBadge({ label: p.status, variant: 'success' }).outerHTML}</td>
      `;
      tbody.appendChild(tr);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function openAddProductModal() {
    const modalEl = document.createElement('div');
    modalEl.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label">Product Name *</label>
          <input type="text" class="form-input" id="new-prod-name" placeholder="e.g. Linen Casual Shirt">
        </div>
        <div class="form-group">
          <label class="form-label">Category</label>
          <select class="form-select" id="new-prod-cat">${store.data.categories.map(c => `<option value="${c}">${c}</option>`).join('')}</select>
        </div>
        <div class="form-group">
          <label class="form-label">Brand</label>
          <select class="form-select" id="new-prod-brand">${store.data.brands.map(b => `<option value="${b}">${b}</option>`).join('')}</select>
        </div>
        <div class="form-group">
          <label class="form-label">Purchase Price (₹)</label>
          <input type="number" class="form-input" id="new-prod-pprice" value="500">
        </div>
        <div class="form-group">
          <label class="form-label">Selling Price (₹)</label>
          <input type="number" class="form-input" id="new-prod-sprice" value="1299">
        </div>
      </div>
    `;

    const cancelBtn = createButton({ text: 'Cancel', variant: 'secondary', onClick: () => modal.closeModal() });
    const saveBtn = createButton({
      text: 'Create Product', variant: 'primary', onClick: () => {
        const name = modalEl.querySelector('#new-prod-name').value.trim();
        if (!name) { toast.show({ message: 'Please enter a product name', type: 'danger' }); return; }
        store.addProduct({
          id: `PROD-${Date.now().toString().slice(-3)}`,
          name, category: modalEl.querySelector('#new-prod-cat').value,
          brand: modalEl.querySelector('#new-prod-brand').value,
          purchasePrice: parseFloat(modalEl.querySelector('#new-prod-pprice').value),
          sellingPrice: parseFloat(modalEl.querySelector('#new-prod-sprice').value),
          minStock: 10, supplier: 'Apex Apparel Ltd', status: 'Active',
          variants: [{ sku: `${name.substring(0,3).toUpperCase()}-BLK-M`, color: 'Black', size: 'M', stock: 10, damaged: 0 }]
        });
        toast.show({ message: `Added ${name} product catalog item`, type: 'success' });
        modal.closeModal();
        renderProductsList();
      }
    });

    const modal = createModal({ title: 'Add New Product Catalog Item', bodyElement: modalEl, footerButtons: [cancelBtn, saveBtn] });
  }

  renderProductsList();
  return container;
}

// PURCHASES PAGE
function renderPurchases() {
  const container = document.createElement('div');
  container.className = 'page-container';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Purchases & Stock In</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Receive inventory shipments, run quality checks, and isolate damaged stock.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.innerHTML = `
    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Purchase ID</th>
            <th>Supplier</th>
            <th>Invoice No</th>
            <th>Date</th>
            <th>Items Count</th>
            <th>Total Qty</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${store.data.purchases.map(p => `
            <tr>
              <td style="font-family: monospace; font-weight: 600;">${p.id}</td>
              <td style="font-weight: 500;">${p.supplier}</td>
              <td style="font-family: monospace; color: var(--text-secondary);">${p.invoiceNumber}</td>
              <td style="color: var(--text-secondary);">${p.date}</td>
              <td>${p.productCount} items</td>
              <td style="font-weight: 600;">${p.totalQuantity} units</td>
              <td style="font-weight: 600;">₹${p.totalAmount.toLocaleString()}</td>
              <td>${createBadge({ label: p.status, variant: 'success' }).outerHTML}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  container.appendChild(mainCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// SALES PAGE
function renderSales() {
  const container = document.createElement('div');
  container.className = 'page-container';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Sales & POS Billing Records</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Track customer transactions, payment methods, and automated inventory deductions.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.innerHTML = `
    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Bill Number</th>
            <th>Date & Time</th>
            <th>Customer</th>
            <th>Items Count</th>
            <th>Payment Method</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${store.data.sales.map(s => `
            <tr>
              <td style="font-family: monospace; font-weight: 600;">${s.id}</td>
              <td style="color: var(--text-secondary);">${s.date}</td>
              <td style="font-weight: 500;">${s.customer}</td>
              <td>${s.itemCount} items</td>
              <td>${createBadge({ label: s.paymentMethod, variant: 'secondary' }).outerHTML}</td>
              <td style="font-weight: 600;">₹${s.totalAmount.toLocaleString()}</td>
              <td>${createBadge({ label: s.status, variant: 'success' }).outerHTML}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  container.appendChild(mainCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// CUSTOMERS PAGE
function renderCustomers() {
  const container = document.createElement('div');
  container.className = 'page-container';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Customer Directory</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Manage store customer purchase history and total spend records.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.innerHTML = `
    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Orders</th>
            <th>Last Purchase</th>
            <th>Total Spend</th>
          </tr>
        </thead>
        <tbody>
          ${store.data.customers.map(c => `
            <tr>
              <td style="font-family: monospace; color: var(--text-secondary);">${c.id}</td>
              <td style="font-weight: 600;">${c.name}</td>
              <td style="color: var(--text-secondary);">${c.phone}</td>
              <td>${c.ordersCount} purchases</td>
              <td style="color: var(--text-secondary);">${c.lastPurchase}</td>
              <td style="font-weight: 600; color: var(--brand-primary);">₹${c.totalSpend.toLocaleString()}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  container.appendChild(mainCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// REPORTS PAGE
function renderReports() {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  const data = store.data;

  let totalRevenue = data.sales.reduce((sum, s) => sum + s.totalAmount, 0);
  let grossProfit = Math.round(totalRevenue * 0.45);

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Business Reports & Financial Analytics</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Financial profit breakdown, inventory valuation, and supplier purchase reports.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  const profitGrid = document.createElement('div');
  profitGrid.className = 'kpi-grid';
  profitGrid.appendChild(createMetricCard({ label: 'Total Revenue', value: `₹${totalRevenue.toLocaleString()}`, icon: 'dollar-sign', variant: 'success' }));
  profitGrid.appendChild(createMetricCard({ label: 'Gross Profit', value: `₹${grossProfit.toLocaleString()}`, icon: 'trending-up', variant: 'success' }));
  profitGrid.appendChild(createMetricCard({ label: 'Total Available Inventory Value', value: `₹${metrics.stockValue.toLocaleString()}`, icon: 'boxes' }));
  container.appendChild(profitGrid);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// SETTINGS PAGE
function renderSettings(onThemeToggle) {
  const container = document.createElement('div');
  container.className = 'page-container';

  const data = store.data;
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">System & Store Settings</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Configure store parameters, catalog metadata, user access roles, and theme settings.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
      <div>
        <h3 class="card-title">Interface Theme</h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary);">Switch between Light Mode (#F7F8FC) and Dark Mode (#080D1C)</p>
      </div>
      <button class="btn btn-secondary btn-sm" id="settings-theme-toggle-btn">
        <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" style="width: 16px; height: 16px;"></i> Toggle Theme
      </button>
    </div>
    <div style="margin-top: 1rem;">
      <h3 class="card-title" style="margin-bottom: 0.5rem;">Store Details</h3>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">${data.storeInfo.name} — ${data.storeInfo.branch}</p>
    </div>
  `;

  card.querySelector('#settings-theme-toggle-btn').addEventListener('click', onThemeToggle);
  container.appendChild(card);

  if (window.lucide) window.lucide.createIcons();
  return container;
}

// ==========================================
// 5. APPLICATION ORCHESTRATOR
// ==========================================
class MasterWebAdminApp {
  constructor() {
    this.appEl = document.getElementById('app');
    this.activeNavId = 'overview';
    this.navParams = {};
    
    const savedTheme = localStorage.getItem('master_web_admin_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    this.render();
  }

  toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('master_web_admin_theme', nextTheme);
    this.render();
  };

  navigateTo = (navId, params = {}) => {
    this.activeNavId = navId;
    this.navParams = params;
    this.render();
  };

  render() {
    if (!this.appEl) return;
    this.appEl.innerHTML = '';

    const activeItem = NAV_ITEMS.find(item => item.id === this.activeNavId) || NAV_ITEMS[0];

    const layout = document.createElement('div');
    layout.className = 'app-layout';

    const sidebar = createSidebar(this.activeNavId, this.navigateTo);
    layout.appendChild(sidebar);

    const mainContent = document.createElement('main');
    mainContent.className = 'main-content';

    const topbar = createTopbar(activeItem.label, this.toggleTheme);
    mainContent.appendChild(topbar);

    let pageView;
    switch (this.activeNavId) {
      case 'overview': pageView = renderOverview(this.navigateTo); break;
      case 'inventory': pageView = renderInventory(); break;
      case 'products': pageView = renderProducts(); break;
      case 'purchases': pageView = renderPurchases(); break;
      case 'sales': pageView = renderSales(); break;
      case 'customers': pageView = renderCustomers(); break;
      case 'reports': pageView = renderReports(); break;
      case 'settings': pageView = renderSettings(this.toggleTheme); break;
      default: pageView = renderOverview(this.navigateTo);
    }

    mainContent.appendChild(pageView);
    layout.appendChild(mainContent);
    this.appEl.appendChild(layout);

    if (window.lucide) window.lucide.createIcons();
  }
}

// Global initialization helper
function initApp() {
  window.app = new MasterWebAdminApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
