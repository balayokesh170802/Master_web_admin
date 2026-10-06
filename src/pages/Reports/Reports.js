/**
 * Reports & Financial Performance Page Component
 */
import { store } from '../../data/mockData.js';
import { createMetricCard } from '../../components/shared/MetricCard.js';
import { createBadge } from '../../components/ui/Badge.js';

export function renderReports() {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  const data = store.data;

  // Calculate Profit Overview Metrics
  let totalRevenue = data.sales.reduce((sum, s) => sum + s.totalAmount, 0);
  
  // Calculate Cost of Goods Sold (COGS) for sold items
  let totalCOGS = 0;
  data.sales.forEach(s => {
    s.items.forEach(i => {
      // Find purchase price for this SKU
      let purchasePrice = 500; // default estimate fallback
      for (let p of data.products) {
        if (p.variants.some(v => v.sku === i.sku)) {
          purchasePrice = p.purchasePrice;
          break;
        }
      }
      totalCOGS += (purchasePrice * i.qty);
    });
  });

  const grossProfit = totalRevenue - totalCOGS;
  const grossMarginPct = totalRevenue > 0 ? Math.round((grossProfit / totalRevenue) * 100) : 0;
  const estimatedExpenses = Math.round(totalRevenue * 0.12); // ~12% rent & staff estimate
  const netProfit = grossProfit - estimatedExpenses;

  // Header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Business Reports & Profit Analytics</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Financial profit breakdown, inventory valuation, and supplier purchase reports.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  // Profit KPI Cards
  const profitGrid = document.createElement('div');
  profitGrid.className = 'kpi-grid';

  profitGrid.appendChild(createMetricCard({
    label: 'Total Revenue (Sales)',
    value: `₹${totalRevenue.toLocaleString()}`,
    subtext: 'Gross billing receipts',
    icon: 'dollar-sign',
    variant: 'success'
  }));

  profitGrid.appendChild(createMetricCard({
    label: 'Cost of Goods Sold (COGS)',
    value: `₹${totalCOGS.toLocaleString()}`,
    subtext: 'Product purchase cost',
    icon: 'credit-card'
  }));

  profitGrid.appendChild(createMetricCard({
    label: 'Gross Profit',
    value: `₹${grossProfit.toLocaleString()}`,
    subtext: `${grossMarginPct}% Gross Margin`,
    icon: 'trending-up',
    variant: 'success'
  }));

  profitGrid.appendChild(createMetricCard({
    label: 'Estimated Net Profit',
    value: `₹${netProfit.toLocaleString()}`,
    subtext: 'After store overheads',
    icon: 'pie-chart',
    variant: 'success'
  }));

  container.appendChild(profitGrid);

  // 2-Column Detailed Reports Row
  const reportsGrid = document.createElement('div');
  reportsGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; width: 100%;';
  if (window.innerWidth <= 1024) reportsGrid.style.gridGridColumns = '1fr';

  // Category Sales Breakdown Report Card
  const categoryCard = document.createElement('div');
  categoryCard.className = 'card';
  categoryCard.innerHTML = `
    <div class="card-header">
      <h3 class="card-title">Sales by Product Category</h3>
    </div>
    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Units Sold</th>
            <th>Revenue</th>
            <th>Share</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Shirts</strong></td>
            <td>46 units</td>
            <td>₹65,954</td>
            <td><span class="badge badge-info">45%</span></td>
          </tr>
          <tr>
            <td><strong>Jeans</strong></td>
            <td>29 units</td>
            <td>₹57,971</td>
            <td><span class="badge badge-info">38%</span></td>
          </tr>
          <tr>
            <td><strong>T-Shirts</strong></td>
            <td>68 units</td>
            <td>₹47,532</td>
            <td><span class="badge badge-info">17%</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  // Supplier Purchase Report Card
  const supplierReportCard = document.createElement('div');
  supplierReportCard.className = 'card';
  supplierReportCard.innerHTML = `
    <div class="card-header">
      <h3 class="card-title">Supplier Purchases & Stock Intake</h3>
    </div>
    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Invoices</th>
            <th>Units Received</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          ${data.suppliers.map(s => {
            const suppPurchases = data.purchases.filter(p => p.supplier === s.name);
            const totalAmt = suppPurchases.reduce((sum, p) => sum + p.totalAmount, 0);
            const totalQty = suppPurchases.reduce((sum, p) => sum + p.totalQuantity, 0);
            return `
              <tr>
                <td><strong>${s.name}</strong></td>
                <td>${suppPurchases.length} invoices</td>
                <td>${totalQty} units</td>
                <td style="font-weight: 600;">₹${totalAmt.toLocaleString()}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  reportsGrid.appendChild(categoryCard);
  reportsGrid.appendChild(supplierReportCard);
  container.appendChild(reportsGrid);

  // Inventory Valuation & Damaged Stock Report Card
  const inventoryReportCard = document.createElement('div');
  inventoryReportCard.className = 'card';

  let damagedValueLost = data.damagedStockRegister.reduce((sum, d) => {
    let pPrice = 500;
    for (let p of data.products) {
      if (p.name === d.product) { pPrice = p.purchasePrice; break; }
    }
    return sum + (d.quantity * pPrice);
  }, 0);

  inventoryReportCard.innerHTML = `
    <div class="card-header">
      <h3 class="card-title">Inventory Valuation & Damaged Stock Loss Report</h3>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 0.5rem;">
      <div style="background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <div style="font-size: 0.75rem; color: var(--text-secondary);">Total Available Inventory Value</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-top: 0.25rem;">₹${metrics.stockValue.toLocaleString()}</div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); margin-top: 0.25rem;">At purchase cost</div>
      </div>
      <div style="background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--status-danger-border);">
        <div style="font-size: 0.75rem; color: var(--status-danger-text);">Total Damaged Stock Loss</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--status-danger); margin-top: 0.25rem;">₹${damagedValueLost.toLocaleString()}</div>
        <div style="font-size: 0.725rem; color: var(--text-secondary); margin-top: 0.25rem;">${metrics.damagedStockCount} unsellable units</div>
      </div>
    </div>
  `;

  container.appendChild(inventoryReportCard);

  if (window.lucide) window.lucide.createIcons();
  return container;
}
