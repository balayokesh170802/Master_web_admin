/**
 * Purchases / Stock In Management Component
 * Implements strict Quality Check flow: Good Qty vs Damaged Qty isolation.
 */
import { store } from '../../data/mockData.js';
import { createButton } from '../../components/ui/Button.js';
import { createBadge } from '../../components/ui/Badge.js';
import { createModal } from '../../components/ui/Modal.js';
import { toast } from '../../components/ui/Toast.js';

export function renderPurchases(initialParams = {}) {
  const container = document.createElement('div');
  container.className = 'page-container';

  let activeTab = 'purchases'; // 'purchases' | 'damaged'

  // Header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Purchases & Stock In</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Receive inventory shipments, run quality checks, and isolate damaged stock.</p>
    </div>
    <div id="pur-header-actions"></div>
  `;

  const addStockBtn = createButton({
    text: '+ Stock In / Receive Shipment',
    icon: 'truck',
    variant: 'primary',
    size: 'sm',
    onClick: () => openStockInModal()
  });
  headerDiv.querySelector('#pur-header-actions').appendChild(addStockBtn);
  container.appendChild(headerDiv);

  // Tabs
  const tabsDiv = document.createElement('div');
  tabsDiv.className = 'tab-list';
  tabsDiv.innerHTML = `
    <button class="tab-button ${activeTab === 'purchases' ? 'active' : ''}" id="pur-tab-btn">Purchase Invoices Log</button>
    <button class="tab-button ${activeTab === 'damaged' ? 'active' : ''}" id="dmg-tab-btn">Damaged Stock Register (${store.data.damagedStockRegister.length})</button>
  `;
  container.appendChild(tabsDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  container.appendChild(mainCard);

  function renderContent() {
    mainCard.innerHTML = '';

    if (activeTab === 'purchases') {
      mainCard.innerHTML = `
        <div style="margin-bottom: 1rem;">
          <h3 class="card-title">Completed Stock-In Invoices</h3>
        </div>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Purchase ID</th>
                <th>Supplier</th>
                <th>Invoice No</th>
                <th>Received Date</th>
                <th>Items Count</th>
                <th>Total Received Qty</th>
                <th>Invoice Amount</th>
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
    } else {
      mainCard.innerHTML = `
        <div style="margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <h3 class="card-title" style="color: var(--status-danger);">Damaged Stock Register</h3>
            <p style="font-size: 0.78rem; color: var(--text-secondary);">Isolated unsellable items received damaged during stock intake.</p>
          </div>
          ${createBadge({ label: 'Unsellable Inventory', variant: 'danger' }).outerHTML}
        </div>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Damage ID</th>
                <th>Product Name</th>
                <th>SKU</th>
                <th>Qty</th>
                <th>Supplier</th>
                <th>Invoice / Ref</th>
                <th>Date</th>
                <th>Damage Reason</th>
              </tr>
            </thead>
            <tbody>
              ${store.data.damagedStockRegister.length === 0 
                ? `<tr><td colspan="8" style="text-align: center; padding: 2rem; color: var(--text-secondary);">No damaged stock logged.</td></tr>`
                : store.data.damagedStockRegister.map(d => `
                  <tr>
                    <td style="font-family: monospace; font-weight: 500; font-size: 0.8rem;">${d.id}</td>
                    <td style="font-weight: 600;">${d.product}</td>
                    <td style="font-family: monospace;">${d.sku}</td>
                    <td><span style="font-weight: 700; color: var(--status-danger);">${d.quantity}</span></td>
                    <td style="color: var(--text-secondary);">${d.supplier}</td>
                    <td style="font-family: monospace; font-size: 0.8rem;">${d.purchaseId}</td>
                    <td style="color: var(--text-secondary);">${d.date}</td>
                    <td style="color: var(--status-danger-text); font-size: 0.825rem;">${d.reason}</td>
                  </tr>
                `).join('')
              }
            </tbody>
          </table>
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // Multi-step Quality Check Stock In Modal
  function openStockInModal() {
    let selectedSkuList = [];
    
    // Build options for product selector
    const allVariants = store.data.products.flatMap(p => p.variants.map(v => ({
      productName: p.name,
      sku: v.sku,
      
      size: v.size,
      price: p.purchasePrice
    })));

    const modalBody = document.createElement('div');
    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Supplier *</label>
          <select class="form-select" id="stock-supplier">
            ${store.data.suppliers.map(s => `<option value="${s.name}">${s.name}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Supplier Invoice Number *</label>
          <input type="text" class="form-input" id="stock-invoice" value="INV-${Math.floor(1000 + Math.random()*9000)}">
        </div>
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label">Stock Intake Date</label>
          <input type="date" class="form-input" id="stock-date" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>

      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
          <h4 style="font-size: 0.9rem; font-weight: 600;">Product Intake & Quality Check</h4>
          <span style="font-size: 0.75rem; color: var(--text-secondary);">Separate usable vs damaged quantities</span>
        </div>

        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
          <select class="form-select" id="add-item-sku-select" style="flex: 1;">
            ${allVariants.map(v => `<option value="${v.sku}">${v.sku} — ${v.productName} (${v.size})</option>`).join('')}
          </select>
          <button class="btn btn-secondary btn-sm" id="btn-add-sku-row">Add Item</button>
        </div>

        <div class="table-responsive">
          <table class="admin-table" style="font-size: 0.8rem;">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Received Qty</th>
                <th>Good (Sellable)</th>
                <th>Damaged (Isolated)</th>
                <th>Unit Price</th>
              </tr>
            </thead>
            <tbody id="stock-in-items-tbody"></tbody>
          </table>
        </div>
      </div>
    `;

    const itemsTbody = modalBody.querySelector('#stock-in-items-tbody');

    function renderItemRows() {
      itemsTbody.innerHTML = '';
      if (selectedSkuList.length === 0) {
        itemsTbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 1rem;">No items added yet. Click 'Add Item' above.</td></tr>`;
        return;
      }

      selectedSkuList.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td style="font-family: monospace; font-weight: 500;">${item.sku}</td>
          <td>
            <input type="number" class="form-input qty-input" data-index="${index}" data-field="received" value="${item.received}" min="1" style="width: 70px; padding: 0.25rem 0.4rem;">
          </td>
          <td>
            <input type="number" class="form-input qty-input" data-index="${index}" data-field="good" value="${item.good}" min="0" style="width: 70px; padding: 0.25rem 0.4rem; color: var(--status-success); font-weight: 600;">
          </td>
          <td>
            <input type="number" class="form-input qty-input" data-index="${index}" data-field="damaged" value="${item.damaged}" min="0" style="width: 70px; padding: 0.25rem 0.4rem; color: var(--status-danger); font-weight: 600;">
          </td>
          <td>₹${item.price}</td>
        `;
        itemsTbody.appendChild(tr);
      });

      itemsTbody.querySelectorAll('.qty-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.index, 10);
          const field = e.target.dataset.field;
          const val = parseInt(e.target.value, 10) || 0;

          selectedSkuList[idx][field] = val;
          if (field === 'received') {
            // default good = received
            selectedSkuList[idx].good = val - selectedSkuList[idx].damaged;
          } else if (field === 'damaged') {
            selectedSkuList[idx].good = Math.max(0, selectedSkuList[idx].received - val);
          }
          renderItemRows();
        });
      });
    }

    modalBody.querySelector('#btn-add-sku-row').addEventListener('click', () => {
      const selectedSku = modalBody.querySelector('#add-item-sku-select').value;
      const found = allVariants.find(v => v.sku === selectedSku);
      if (found && !selectedSkuList.some(i => i.sku === selectedSku)) {
        selectedSkuList.push({
          productId: found.productName,
          product: found.productName,
          sku: found.sku,
          received: 20,
          good: 20,
          damaged: 0,
          price: found.price,
          damageReason: "Factory stain / tearing"
        });
        renderItemRows();
      }
    });

    // Add first item by default
    if (allVariants.length > 0) {
      selectedSkuList.push({
        product: allVariants[0].productName,
        sku: allVariants[0].sku,
        received: 20,
        good: 20,
        damaged: 0,
        price: allVariants[0].price,
        damageReason: "Quality check defect"
      });
      renderItemRows();
    }

    const cancelBtn = createButton({ text: 'Cancel', variant: 'secondary', onClick: () => modal.closeModal() });
    const confirmBtn = createButton({
      text: 'Confirm Stock In & Quality Check',
      variant: 'primary',
      onClick: () => {
        const supplier = modalBody.querySelector('#stock-supplier').value;
        const invoiceNumber = modalBody.querySelector('#stock-invoice').value.trim();
        const date = modalBody.querySelector('#stock-date').value;

        if (!invoiceNumber) {
          toast.show({ message: 'Please enter invoice number', type: 'danger' });
          return;
        }

        if (selectedSkuList.length === 0) {
          toast.show({ message: 'Please add at least one product item', type: 'danger' });
          return;
        }

        store.addStockIn({
          supplier,
          invoiceNumber,
          date,
          items: selectedSkuList
        });

        toast.show({ message: `Successfully recorded Stock-In for ${invoiceNumber}`, type: 'success' });
        modal.closeModal();
        renderContent();
      }
    });

    const modal = createModal({
      title: 'Receive Stock Shipment (Quality Intake Flow)',
      bodyElement: modalBody,
      footerButtons: [cancelBtn, confirmBtn]
    });
  }

  // Tab listeners
  tabsDiv.querySelector('#pur-tab-btn').addEventListener('click', () => {
    activeTab = 'purchases';
    tabsDiv.querySelector('#pur-tab-btn').classList.add('active');
    tabsDiv.querySelector('#dmg-tab-btn').classList.remove('active');
    renderContent();
  });

  tabsDiv.querySelector('#dmg-tab-btn').addEventListener('click', () => {
    activeTab = 'damaged';
    tabsDiv.querySelector('#dmg-tab-btn').classList.add('active');
    tabsDiv.querySelector('#pur-tab-btn').classList.remove('active');
    renderContent();
  });

  if (initialParams.openStockInModal) {
    setTimeout(openStockInModal, 100);
  }

  renderContent();
  return container;
}
