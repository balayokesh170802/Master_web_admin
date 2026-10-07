/**
 * Inventory Management Page Component
 */
import { store } from '../../data/mockData.js';
import { createButton } from '../../components/ui/Button.js';
import { createBadge } from '../../components/ui/Badge.js';
import { createModal } from '../../components/ui/Modal.js';
import { toast } from '../../components/ui/Toast.js';

export function renderInventory() {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  let activeTab = 'inventory'; // 'inventory' | 'movements'
  let searchQuery = '';
  let selectedCategory = 'ALL';
  let selectedStatus = 'ALL';

  // Page Header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Stock Inventory & Movements</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Track real-time sellable stock, damaged stock isolation, and inventory audit logs.</p>
    </div>
    <div id="inv-header-actions"></div>
  `;

  const headerActions = headerDiv.querySelector('#inv-header-actions');
  const adjustBtn = createButton({
    text: 'Stock Audit / Adjust',
    icon: 'sliders-horizontal',
    variant: 'secondary',
    size: 'sm',
    onClick: () => openStockAdjustModal()
  });
  headerActions.appendChild(adjustBtn);
  container.appendChild(headerDiv);

  // Summary Metrics Bar
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
    <div class="card" style="padding: 0.6rem 1rem; flex: 1; min-width: 140px;">
      <div style="font-size: 0.75rem; color: var(--text-secondary);">Slow Moving (90d+)</div>
      <div style="font-size: 1.15rem; font-weight: 600; color: var(--status-info);">${metrics.slowMovingCount} items</div>
    </div>
  `;
  container.appendChild(summaryBar);

  // Tabs Container
  const tabsDiv = document.createElement('div');
  tabsDiv.className = 'tab-list';
  tabsDiv.innerHTML = `
    <button class="tab-button ${activeTab === 'inventory' ? 'active' : ''}" id="tab-btn-inv">Current Inventory Table</button>
    <button class="tab-button ${activeTab === 'movements' ? 'active' : ''}" id="tab-btn-mov">Stock Movement Log</button>
  `;
  container.appendChild(tabsDiv);

  // Main Card Content
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  container.appendChild(mainCard);

  function renderTabContent() {
    mainCard.innerHTML = '';

    if (activeTab === 'inventory') {
      // Filter & Search Bar
      const filterBar = document.createElement('div');
      filterBar.className = 'filter-bar';
      filterBar.style.marginBottom = '1.25rem';
      filterBar.innerHTML = `
        <div class="search-box">
          <i data-lucide="search" class="search-icon" style="width: 16px; height: 16px;"></i>
          <input type="text" class="form-input" id="inv-search-input" placeholder="Search by Product name, Size, Category..." value="${searchQuery}">
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
            <option value="DAMAGED" ${selectedStatus === 'DAMAGED' ? 'selected' : ''}>Has Damaged</option>
          </select>
        </div>
      `;

      filterBar.querySelector('#inv-search-input').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderTableRows();
      });
      filterBar.querySelector('#inv-category-select').addEventListener('change', (e) => {
        selectedCategory = e.target.value;
        renderTableRows();
      });
      filterBar.querySelector('#inv-status-select').addEventListener('change', (e) => {
        selectedStatus = e.target.value;
        renderTableRows();
      });

      mainCard.appendChild(filterBar);

      // Table
      const tableResp = document.createElement('div');
      tableResp.className = 'table-responsive';
      tableResp.innerHTML = `
        <table class="admin-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Size</th>
              <th>Available Stock</th>
              <th>Damaged</th>
              <th>Min Stock</th>
              <th>Stock Value</th>
              <th>Days in Stock</th>
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
      // Stock Movement Log Tab
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
                <th>User / System</th>
              </tr>
            </thead>
            <tbody>
              ${store.data.stockMovements.map(m => {
                let badgeVariant = 'secondary';
                if (m.type === 'Stock In') badgeVariant = 'success';
                if (m.type === 'Sale') badgeVariant = 'info';
                if (m.type === 'Damage') badgeVariant = 'danger';
                if (m.type === 'Adjustment') badgeVariant = 'warning';

                return `
                  <tr>
                    <td style="color: var(--text-secondary);">${m.date}</td>
                    <td>${createBadge({ label: m.type, variant: badgeVariant }).outerHTML}</td>
                    <td style="font-weight: 500;">${m.product}</td>
                    <td style="font-family: monospace;">${m.sku}</td>
                    <td style="font-weight: 600; color: ${m.quantity > 0 ? 'var(--status-success)' : 'var(--status-danger)'};">
                      ${m.quantity > 0 ? `+${m.quantity}` : m.quantity}
                    </td>
                    <td style="font-family: monospace; font-size: 0.8rem; color: var(--text-secondary);">${m.reference}</td>
                    <td style="color: var(--text-secondary);">${m.user}</td>
                  </tr>
                `;
              }).join('')}
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

    // Flatten product variants for table view
    const rows = [];
    store.data.products.forEach(p => {
      p.variants.forEach(v => {
        // Apply filters
        const q = searchQuery.toLowerCase();
        const matchesSearch = !q || p.name.toLowerCase().includes(q) || v.sku.toLowerCase().includes(q) ;
        const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;

        let statusKey = 'NORMAL';
        if (v.stock === 0) statusKey = 'OUT';
        else if (v.stock <= p.minStock) statusKey = 'LOW';
        else if (v.damaged > 0) statusKey = 'DAMAGED';

        const matchesStatus = selectedStatus === 'ALL' || selectedStatus === statusKey;

        if (matchesSearch && matchesCat && matchesStatus) {
          rows.push({ product: p, variant: v, statusKey });
        }
      });
    });

    if (rows.length === 0) {
      tbody.innerHTML = `<tr><td colspan="11" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No inventory records match the selected filters.</td></tr>`;
      return;
    }

    rows.forEach(({ product, variant, statusKey }) => {
      const tr = document.createElement('tr');

      let badgeVariant = 'success';
      let badgeLabel = 'Available';
      if (statusKey === 'OUT') { badgeVariant = 'danger'; badgeLabel = 'Out of Stock'; }
      else if (statusKey === 'LOW') { badgeVariant = 'warning'; badgeLabel = 'Low Stock'; }

      const stockVal = variant.stock * product.purchasePrice;

      tr.innerHTML = `
        <td>
          <div style="font-weight: 600;">${product.name}</div>
          <div style="font-size: 0.725rem; color: var(--text-secondary);">${product.brand}</div>
        </td>
        <td style="font-family: monospace; font-weight: 500;">${variant.sku}</td>
        <td>${createBadge({ label: product.category, variant: 'secondary' }).outerHTML}</td>
        <td>${variant.size === 'Standard' ? 'No Size (Standard)' : variant.size}</td>
        <td>
          <span style="font-weight: 600; color: ${variant.stock === 0 ? 'var(--status-danger)' : 'var(--text-primary)'};">
            ${variant.stock} units
          </span>
        </td>
        <td>
          ${variant.damaged > 0 
            ? `<span class="badge badge-danger">${variant.damaged} damaged</span>` 
            : '<span style="color: var(--text-tertiary);">0</span>'}
        </td>
        <td style="color: var(--text-secondary);">${product.minStock}</td>
        <td>₹${stockVal.toLocaleString()}</td>
        <td>
          <span style="${(variant.daysInStock || 0) >= 90 ? 'color: var(--status-warning-text); font-weight: 600;' : 'color: var(--text-secondary);'}">
            ${variant.daysInStock || 15} days
          </span>
        </td>
        <td>${createBadge({ label: badgeLabel, variant: badgeVariant }).outerHTML}</td>
        <td>
          <button class="btn btn-ghost btn-sm quick-adj-btn" data-sku="${variant.sku}" style="padding: 0.25rem 0.5rem;">
            <i data-lucide="edit-2" style="width: 14px; height: 14px;"></i> Adjust
          </button>
        </td>
      `;

      tr.querySelector('.quick-adj-btn').addEventListener('click', () => {
        openStockAdjustModal(variant.sku, variant.stock);
      });

      tbody.appendChild(tr);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Stock Adjust Modal Handler
  function openStockAdjustModal(defaultSku = '', defaultStock = 0) {
    const formHtml = `
      <div class="form-group">
        <label class="form-label">Select Product Variant SKU</label>
        <select class="form-select" id="adj-sku-select">
          ${store.data.products.flatMap(p => p.variants.map(v => `<option value="${v.sku}" ${v.sku === defaultSku ? 'selected' : ''}>${v.sku} — ${p.name} (${v.size}) [Current: ${v.stock}]</option>`)).join('')}
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
          <option value="Supplier Return">Supplier Return</option>
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

    const modal = createModal({
      title: 'Manual Stock Audit / Adjustment',
      bodyElement: bodyEl,
      footerButtons: [cancelBtn, saveBtn]
    });
  }

  // Event Listeners for Tabs
  tabsDiv.querySelector('#tab-btn-inv').addEventListener('click', () => {
    activeTab = 'inventory';
    tabsDiv.querySelector('#tab-btn-inv').classList.add('active');
    tabsDiv.querySelector('#tab-btn-mov').classList.remove('active');
    renderTabContent();
  });
  tabsDiv.querySelector('#tab-btn-mov').addEventListener('click', () => {
    activeTab = 'movements';
    tabsDiv.querySelector('#tab-btn-mov').classList.add('active');
    tabsDiv.querySelector('#tab-btn-inv').classList.remove('active');
    renderTabContent();
  });

  renderTabContent();
  return container;
}
