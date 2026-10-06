/**
 * Sales Management Page Component (with Future POS Payload Inspector)
 */
import { store } from '../../data/mockData.js';
import { createButton } from '../../components/ui/Button.js';
import { createBadge } from '../../components/ui/Badge.js';
import { createModal } from '../../components/ui/Modal.js';
import { toast } from '../../components/ui/Toast.js';

export function renderSales() {
  const container = document.createElement('div');
  container.className = 'page-container';

  let activeView = 'list'; // 'list' | 'pos-json'

  // Header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Sales & POS Billing Records</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Track customer transactions, payment methods, and automated inventory deductions.</p>
    </div>
    <div style="display: flex; gap: 0.5rem;" id="sales-header-actions"></div>
  `;

  const actions = headerDiv.querySelector('#sales-header-actions');
  actions.appendChild(createButton({
    text: 'Inspect Billing API Schema',
    icon: 'code',
    variant: 'secondary',
    size: 'sm',
    onClick: () => toggleView()
  }));
  actions.appendChild(createButton({
    text: '+ Record New Sale',
    icon: 'shopping-cart',
    variant: 'primary',
    size: 'sm',
    onClick: () => openRecordSaleModal()
  }));
  container.appendChild(headerDiv);

  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  container.appendChild(mainCard);

  function toggleView() {
    activeView = activeView === 'list' ? 'pos-json' : 'list';
    renderContent();
  }

  function renderContent() {
    mainCard.innerHTML = '';

    if (activeView === 'list') {
      mainCard.innerHTML = `
        <div style="margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
          <h3 class="card-title">Completed Sales Bills</h3>
          <span style="font-size: 0.8rem; color: var(--text-secondary);">${store.data.sales.length} total bills</span>
        </div>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Bill Number</th>
                <th>Date & Time</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Items Count</th>
                <th>Total Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="sales-tbody">
              ${store.data.sales.map(s => `
                <tr>
                  <td style="font-family: monospace; font-weight: 600;">${s.id}</td>
                  <td style="color: var(--text-secondary);">${s.date}</td>
                  <td style="font-weight: 500;">${s.customer}</td>
                  <td style="color: var(--text-secondary); font-size: 0.8rem;">${s.phone}</td>
                  <td>${s.itemCount} items</td>
                  <td style="font-weight: 600; color: var(--text-primary);">₹${s.totalAmount.toLocaleString()}</td>
                  <td>${createBadge({ label: s.paymentMethod, variant: 'secondary' }).outerHTML}</td>
                  <td>${createBadge({ label: s.status, variant: 'success' }).outerHTML}</td>
                  <td>
                    <button class="btn btn-ghost btn-sm view-bill-btn" data-id="${s.id}">
                      <i data-lucide="eye" style="width: 14px; height: 14px;"></i> View
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;

      mainCard.querySelectorAll('.view-bill-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const billId = e.currentTarget.dataset.id;
          const sale = store.data.sales.find(s => s.id === billId);
          if (sale) openBillDetailsModal(sale);
        });
      });

    } else {
      // Future POS Integration Schema View
      const samplePayload = {
        integrationVersion: "v1.0-POS",
        event: "SALE_COMPLETED",
        timestamp: new Date().toISOString(),
        payload: store.data.sales[0] || {}
      };

      mainCard.innerHTML = `
        <div style="margin-bottom: 1rem;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <h3 class="card-title">Future Billing / POS API Schema Specification</h3>
            ${createBadge({ label: 'Ready for Integration', variant: 'info' }).outerHTML}
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.35rem;">
            This web admin system is pre-architected to receive automatic webhook payloads from the store's physical POS terminal.
          </p>
        </div>

        <div style="background-color: var(--bg-main); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
          <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem;">Sample Incoming Webhook Data Payload</div>
          <pre style="font-family: monospace; font-size: 0.825rem; color: var(--text-primary); overflow-x: auto; max-height: 400px;">${JSON.stringify(samplePayload, null, 2)}</pre>
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // Record Sale Modal
  function openRecordSaleModal() {
    const allVariants = store.data.products.flatMap(p => p.variants.map(v => ({
      productName: p.name,
      sku: v.sku,
      color: v.color,
      size: v.size,
      price: p.sellingPrice,
      availableStock: v.stock
    })));

    const modalBody = document.createElement('div');
    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Customer Name</label>
          <input type="text" class="form-input" id="sale-cust-name" placeholder="Walk-in Customer" value="Walk-in Customer">
        </div>
        <div class="form-group">
          <label class="form-label">Customer Phone</label>
          <input type="text" class="form-input" id="sale-cust-phone" placeholder="+91 98765 43210">
        </div>
        <div class="form-group">
          <label class="form-label">Payment Method</label>
          <select class="form-select" id="sale-payment-method">
            <option value="UPI">UPI / GPay / PhonePe</option>
            <option value="Cash">Cash</option>
            <option value="Card">Credit / Debit Card</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Bill Reference / No</label>
          <input type="text" class="form-input" id="sale-bill-no" value="BILL-2026-${Math.floor(1000 + Math.random()*9000)}">
        </div>
      </div>

      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
        <label class="form-label">Select Purchased Product SKU</label>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
          <select class="form-select" id="sale-sku-select" style="flex: 1;">
            ${allVariants.map(v => `<option value="${v.sku}" ${v.availableStock === 0 ? 'disabled' : ''}>${v.sku} — ${v.productName} (${v.color}/${v.size}) [In Stock: ${v.availableStock}]</option>`).join('')}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Quantity</label>
          <input type="number" class="form-input" id="sale-qty" value="1" min="1">
        </div>
      </div>
    `;

    const cancelBtn = createButton({ text: 'Cancel', variant: 'secondary', onClick: () => modal.closeModal() });
    const confirmBtn = createButton({
      text: 'Record Sale & Deduct Inventory',
      variant: 'primary',
      onClick: () => {
        const custName = modalBody.querySelector('#sale-cust-name').value.trim() || 'Walk-in Customer';
        const phone = modalBody.querySelector('#sale-cust-phone').value.trim();
        const paymentMethod = modalBody.querySelector('#sale-payment-method').value;
        const billNumber = modalBody.querySelector('#sale-bill-no').value.trim();
        const sku = modalBody.querySelector('#sale-sku-select').value;
        const qty = parseInt(modalBody.querySelector('#sale-qty').value, 10);

        const foundVar = allVariants.find(v => v.sku === sku);
        if (!foundVar) {
          toast.show({ message: 'Selected SKU not found', type: 'danger' });
          return;
        }

        if (foundVar.availableStock < qty) {
          toast.show({ message: `Insufficient stock! Only ${foundVar.availableStock} units available for ${sku}`, type: 'danger' });
          return;
        }

        store.addSale({
          billNumber,
          customerName: custName,
          phone,
          paymentMethod,
          items: [
            { sku: foundVar.sku, qty, price: foundVar.price, discount: 0 }
          ]
        });

        toast.show({ message: `Sale ${billNumber} recorded successfully! Inventory updated.`, type: 'success' });
        modal.closeModal();
        renderContent();
      }
    });

    const modal = createModal({
      title: 'Record New Customer Sale',
      bodyElement: modalBody,
      footerButtons: [cancelBtn, confirmBtn]
    });
  }

  // Bill Details Modal
  function openBillDetailsModal(sale) {
    const modalBody = document.createElement('div');
    modalBody.innerHTML = `
      <div style="background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1rem; font-size: 0.85rem;">
        <div style="display: flex; justify-content: space-between;"><strong>Bill No:</strong> <span style="font-family: monospace;">${sale.id}</span></div>
        <div style="display: flex; justify-content: space-between; margin-top: 0.25rem;"><strong>Customer:</strong> <span>${sale.customer} (${sale.phone})</span></div>
        <div style="display: flex; justify-content: space-between; margin-top: 0.25rem;"><strong>Date & Time:</strong> <span>${sale.date}</span></div>
        <div style="display: flex; justify-content: space-between; margin-top: 0.25rem;"><strong>Payment Method:</strong> <span>${sale.paymentMethod}</span></div>
      </div>

      <h4 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">Purchased Items</h4>
      <div class="table-responsive">
        <table class="admin-table" style="font-size: 0.8rem;">
          <thead>
            <tr>
              <th>Item</th>
              <th>SKU</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${sale.items.map(item => `
              <tr>
                <td style="font-weight: 500;">${item.product}</td>
                <td style="font-family: monospace;">${item.sku}</td>
                <td>${item.qty}</td>
                <td>₹${item.price}</td>
                <td style="font-weight: 600;">₹${item.amount}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); font-size: 1.1rem; font-weight: 700;">
        <span>Final Total:</span>
        <span style="color: var(--brand-primary);">₹${sale.totalAmount.toLocaleString()}</span>
      </div>
    `;

    const closeBtn = createButton({ text: 'Close', variant: 'secondary', onClick: () => modal.closeModal() });
    const modal = createModal({
      title: `Sale Details — ${sale.id}`,
      bodyElement: modalBody,
      footerButtons: [closeBtn]
    });
  }

  renderContent();
  return container;
}
