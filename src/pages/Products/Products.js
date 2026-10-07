/**
 * Products Management Page Component (with Variant Generator)
 */
import { store } from '../../data/mockData.js';
import { createButton } from '../../components/ui/Button.js';
import { createBadge } from '../../components/ui/Badge.js';
import { createModal } from '../../components/ui/Modal.js';
import { toast } from '../../components/ui/Toast.js';

export function renderProducts(initialParams = {}) {
  const container = document.createElement('div');
  container.className = 'page-container';

  let searchQuery = '';
  let selectedCategory = 'ALL';
  let selectedBrand = 'ALL';

  // Page Header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Product Catalog & Variants</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Manage products, pricing, minimum reorder thresholds, and size variants.</p>
    </div>
    <div id="prod-header-actions"></div>
  `;

  const addProductBtn = createButton({
    text: 'Add New Product',
    icon: 'plus',
    variant: 'primary',
    size: 'sm',
    onClick: () => openAddProductModal()
  });
  headerDiv.querySelector('#prod-header-actions').appendChild(addProductBtn);
  container.appendChild(headerDiv);

  // Main Card
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  container.appendChild(mainCard);

  // Filter Bar
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

  filterBar.querySelector('#prod-search-input').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProductsList();
  });
  filterBar.querySelector('#prod-category-select').addEventListener('change', (e) => {
    selectedCategory = e.target.value;
    renderProductsList();
  });
  filterBar.querySelector('#prod-brand-select').addEventListener('change', (e) => {
    selectedBrand = e.target.value;
    renderProductsList();
  });

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
        <td>
          <span style="font-weight: 500;">${p.variants.length} Variants</span>
          <div style="font-size: 0.7rem; color: var(--text-secondary);">${p.variants.map(v => v.size).filter((v, i, a) => a.indexOf(v) === i).join(', ')}</div>
        </td>
        <td style="font-weight: 600; color: ${totalStock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">${totalStock} units</td>
        <td style="color: var(--text-secondary);">${p.minStock}</td>
        <td>${createBadge({ label: p.status, variant: 'success' }).outerHTML}</td>
      `;
      tbody.appendChild(tr);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Add Product Modal with Live Variant Generator
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
          <select class="form-select" id="new-prod-cat">
            ${store.data.categories.map(c => `<option value="${c}">${c}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Brand</label>
          <select class="form-select" id="new-prod-brand">
            ${store.data.brands.map(b => `<option value="${b}">${b}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Purchase Price (₹)</label>
          <input type="number" class="form-input" id="new-prod-pprice" value="500">
        </div>
        <div class="form-group">
          <label class="form-label">Selling Price (₹)</label>
          <input type="number" class="form-input" id="new-prod-sprice" value="1299">
        </div>
        <div class="form-group">
          <label class="form-label">Min Stock Threshold</label>
          <input type="number" class="form-input" id="new-prod-min" value="10">
        </div>
        <div class="form-group">
          <label class="form-label">Primary Supplier</label>
          <select class="form-select" id="new-prod-supplier">
            ${store.data.suppliers.map(s => `<option value="${s.name}">${s.name}</option>`).join('')}
          </select>
        </div>
      </div>

      <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
        <h4 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">Variant Matrix Generator</h4>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Select sizes and initial stock.</p>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <div style="flex: 1;">
            <label class="form-label">Colors</label>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.25rem;">
              ${store.data.colors.map(c => `
                <label style="font-size: 0.8rem; display: flex; align-items: center; gap: 0.25rem; background: var(--bg-secondary); padding: 0.25rem 0.5rem; border-radius: 4px;">
                  <input type="checkbox" class="color-checkbox" value="${c}" checked> ${c}
                </label>
              `).join('')}
            </div>
          </div>
          <div style="flex: 1;">
            <label class="form-label">Sizes</label>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.25rem;">
              ${store.data.sizes.map(s => `
                <label style="font-size: 0.8rem; display: flex; align-items: center; gap: 0.25rem; background: var(--bg-secondary); padding: 0.25rem 0.5rem; border-radius: 4px;">
                  <input type="checkbox" class="size-checkbox" value="${s}" checked> ${s}
                </label>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    const cancelBtn = createButton({ text: 'Cancel', variant: 'secondary', onClick: () => modal.closeModal() });
    const saveBtn = createButton({
      text: 'Create Product',
      variant: 'primary',
      onClick: () => {
        const name = modalEl.querySelector('#new-prod-name').value.trim();
        const category = modalEl.querySelector('#new-prod-cat').value;
        const brand = modalEl.querySelector('#new-prod-brand').value;
        const purchasePrice = parseFloat(modalEl.querySelector('#new-prod-pprice').value);
        const sellingPrice = parseFloat(modalEl.querySelector('#new-prod-sprice').value);
        const minStock = parseInt(modalEl.querySelector('#new-prod-min').value, 10);
        const supplier = modalEl.querySelector('#new-prod-supplier').value;

        if (!name) {
          toast.show({ message: 'Please enter a product name', type: 'danger' });
          return;
        }

        const selectedColors = Array.from(modalEl.querySelectorAll('.color-checkbox:checked')).map(cb => cb.value);
        const selectedSizes = Array.from(modalEl.querySelectorAll('.size-checkbox:checked')).map(cb => cb.value);

        if (selectedColors.length === 0 || selectedSizes.length === 0) {
          toast.show({ message: 'Please select at least one color and size variant', type: 'danger' });
          return;
        }

        // Generate Variant SKUs
        const prefix = name.substring(0, 3).toUpperCase();
        const variants = [];
        selectedColors.forEach(color => {
          selectedSizes.forEach(size => {
            variants.push({
              sku: `${prefix}-${color.substring(0, 3).toUpperCase()}-${size}`,
              
              size,
              stock: 0,
              damaged: 0,
              daysInStock: 0
            });
          });
        });

        const newProd = {
          id: `PROD-${Date.now().toString().slice(-3)}`,
          name,
          category,
          brand,
          description: `${name} by ${brand}`,
          purchasePrice,
          sellingPrice,
          minStock,
          supplier,
          status: 'Active',
          variants
        };

        store.addProduct(newProd);
        toast.show({ message: `Added ${name} with ${variants.length} variant SKUs`, type: 'success' });
        modal.closeModal();
        renderProductsList();
      }
    });

    const modal = createModal({
      title: 'Add New Product Catalog Item',
      bodyElement: modalEl,
      footerButtons: [cancelBtn, saveBtn]
    });
  }

  if (initialParams.openAddModal) {
    setTimeout(openAddProductModal, 100);
  }

  renderProductsList();
  return container;
}
