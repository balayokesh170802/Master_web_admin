/**
 * Customers Management Page Component
 */
import { store } from '../../data/mockData.js';
import { createButton } from '../../components/ui/Button.js';
import { createBadge } from '../../components/ui/Badge.js';
import { createModal } from '../../components/ui/Modal.js';

export function renderCustomers() {
  const container = document.createElement('div');
  container.className = 'page-container';

  // Header
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
  container.appendChild(mainCard);

  mainCard.innerHTML = `
    <div style="margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
      <h3 class="card-title">Registered Store Customers</h3>
      <span style="font-size: 0.8rem; color: var(--text-secondary);">${store.data.customers.length} customers</span>
    </div>

    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Total Orders</th>
            <th>Last Purchase</th>
            <th>Total Spend</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${store.data.customers.map(c => `
            <tr>
              <td style="font-family: monospace; color: var(--text-secondary);">${c.id}</td>
              <td style="font-weight: 600;">${c.name}</td>
              <td style="color: var(--text-secondary); font-size: 0.825rem;">${c.phone}</td>
              <td>${c.ordersCount} purchases</td>
              <td style="color: var(--text-secondary);">${c.lastPurchase}</td>
              <td style="font-weight: 600; color: var(--brand-primary);">₹${c.totalSpend.toLocaleString()}</td>
              <td>
                <button class="btn btn-ghost btn-sm view-cust-btn" data-name="${c.name}">
                  <i data-lucide="history" style="width: 14px; height: 14px;"></i> History
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  mainCard.querySelectorAll('.view-cust-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.currentTarget.dataset.name;
      openCustomerHistoryModal(name);
    });
  });

  function openCustomerHistoryModal(customerName) {
    const custSales = store.data.sales.filter(s => s.customer.toLowerCase() === customerName.toLowerCase());

    const modalBody = document.createElement('div');
    modalBody.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <h4 style="font-size: 0.95rem; font-weight: 600;">Past Purchase Bills for ${customerName}</h4>
      </div>
      <div class="table-responsive">
        <table class="admin-table" style="font-size: 0.8rem;">
          <thead>
            <tr>
              <th>Bill No</th>
              <th>Date</th>
              <th>Items</th>
              <th>Payment</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${custSales.length === 0 
              ? `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 1.5rem;">No recent bills found.</td></tr>`
              : custSales.map(s => `
                <tr>
                  <td style="font-family: monospace; font-weight: 500;">${s.id}</td>
                  <td style="color: var(--text-secondary);">${s.date}</td>
                  <td>${s.itemCount} items</td>
                  <td>${s.paymentMethod}</td>
                  <td style="font-weight: 600;">₹${s.totalAmount}</td>
                </tr>
              `).join('')
            }
          </tbody>
        </table>
      </div>
    `;

    const closeBtn = createButton({ text: 'Close', variant: 'secondary', onClick: () => modal.closeModal() });
    const modal = createModal({
      title: `Customer Record — ${customerName}`,
      bodyElement: modalBody,
      footerButtons: [closeBtn]
    });
  }

  if (window.lucide) window.lucide.createIcons();
  return container;
}
