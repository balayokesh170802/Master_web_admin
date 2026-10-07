/**
 * Overview / Dashboard Page Component
 * Minimal, focused internal dashboard for clothing store management.
 * Formats: 4 KPI Cards -> Sales Trend (Left) + Top Selling Products (Right) -> Recent Sales History (Bottom Table)
 */
import { store } from '../../data/mockData.js';
import { createMetricCard } from '../../components/shared/MetricCard.js';
import { createButton } from '../../components/ui/Button.js';
import { createBadge } from '../../components/ui/Badge.js';

export function renderOverview(onNavigate) {
  const container = document.createElement('div');
  container.className = 'page-container';

  const metrics = store.getMetrics();
  const data = store.data;

  // 1. Page Header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">Store Overview</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Key store metrics, sales trend, top performing products, and recent customer sales.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  // 2. Section 1: TOP KPI CARDS (Exactly 4 cards in 1 row on desktop)
  const kpiGrid = document.createElement('div');
  kpiGrid.className = 'kpi-grid';

  const lowCount = metrics.lowStockCount;
  const outCount = metrics.outOfStockCount;
  const totalStockUnits = metrics.totalStock;
  const totalRevenue = data.sales.reduce((sum, s) => sum + s.totalAmount, 0);

  kpiGrid.appendChild(createMetricCard({
    label: 'Total Revenue',
    value: `₹${totalRevenue.toLocaleString('en-IN')}`,
    subtext: `<span style="color: var(--status-success); font-weight: 600;">↑ +18.4%</span> <span style="color: var(--text-secondary);">across ${data.sales.length} sales orders</span>`,
    icon: 'dollar-sign',
    onClick: () => onNavigate('sales')
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Total Products',
    value: `${totalStockUnits} Units`,
    subtext: `<span style="color: var(--text-secondary);">Across ${data.products.length} catalog products</span>`,
    icon: 'package',
    onClick: () => onNavigate('products')
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Low Stock',
    value: `${lowCount} Items`,
    subtext: `<span style="color: var(--status-warning-text); font-weight: 600;">${lowCount} items</span> <span style="color: var(--text-secondary);">below min threshold</span>`,
    icon: 'alert-triangle',
    variant: 'warning',
    onClick: () => onNavigate('inventory', { status: 'LOW' })
  }));

  kpiGrid.appendChild(createMetricCard({
    label: 'Out of Stock',
    value: `${outCount} Items`,
    subtext: `<span style="color: var(--status-danger-text); font-weight: 600;">${outCount} items</span> <span style="color: var(--text-secondary);">require immediate PO</span>`,
    icon: 'alert-circle',
    variant: 'danger',
    onClick: () => onNavigate('inventory', { status: 'OUT' })
  }));

  container.appendChild(kpiGrid);

  // 3. Section 2 & 3: TWO-COLUMN ROW (Sales Trend on Left, Top Selling Products on Right)
  const grid2Col = document.createElement('div');
  grid2Col.style.cssText = 'display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; width: 100%; align-items: start;';
  if (window.innerWidth <= 1024) grid2Col.style.gridTemplateColumns = '1fr';

  // SECTION 2: SALES TREND (Unstretched, Perfectly Aligned Mon to Sun SVG Graph)
  let activePeriod = '1W';
  const salesTrendCard = document.createElement('div');
  salesTrendCard.className = 'card';

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
        { x: 25, y: 101, val: '₹70,000', label: 'Mon' },
        { x: 100, y: 87, val: '₹72,500', label: 'Tue' },
        { x: 175, y: 68, val: '₹75,800', label: 'Wed' },
        { x: 250, y: 77, val: '₹74,200', label: 'Thu' },
        { x: 325, y: 52, val: '₹78,600', label: 'Fri' },
        { x: 400, y: 37, val: '₹81,200', label: 'Sat' },
        { x: 475, y: 30, val: '₹82,450', label: 'Sun' }
      ],
      pointsPath: '25,101 100,87 175,68 250,77 325,52 400,37 475,30',
      areaPoly: '25,130 25,101 100,87 175,68 250,77 325,52 400,37 475,30 475,130 25,130'
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
        { x: 40, y: 100, val: '₹2,20,000', label: 'Week 1' },
        { x: 185, y: 75, val: '₹2,45,000', label: 'Week 2' },
        { x: 330, y: 58, val: '₹2,62,000', label: 'Week 3' },
        { x: 460, y: 32, val: '₹2,84,500', label: 'Week 4' }
      ],
      pointsPath: '40,100 185,75 330,58 460,32',
      areaPoly: '40,130 40,100 185,75 330,58 460,32 460,130 40,130'
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
        { x: 50, y: 75, val: '₹6,80,000', label: 'August' },
        { x: 250, y: 52, val: '₹7,40,000', label: 'September' },
        { x: 450, y: 22, val: '₹7,92,100', label: 'October' }
      ],
      pointsPath: '50,75 250,52 450,22',
      areaPoly: '50,130 50,75 250,52 450,22 450,130 50,130'
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
        { x: 40, y: 80, val: '₹24,00,000', label: 'Q1' },
        { x: 185, y: 65, val: '₹26,50,000', label: 'Q2' },
        { x: 330, y: 45, val: '₹29,00,000', label: 'Q3' },
        { x: 460, y: 22, val: '₹31,45,800', label: 'Q4' }
      ],
      pointsPath: '40,80 185,65 330,45 460,22',
      areaPoly: '40,130 40,80 185,65 330,45 460,22 460,130 40,130'
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
      <div style="display: flex; justify-content: space-between; font-size: 0.775rem; color: var(--text-secondary); margin-bottom: 0.5rem; padding: 0 0.25rem;">
        <div>${ds.startRevLabel}: <strong style="color: var(--text-primary); font-weight: 600;">${ds.startRevVal}</strong></div>
        <div>${ds.endRevLabel}: <strong style="color: var(--text-primary); font-weight: 600;">${ds.endRevVal}</strong></div>
      </div>

      <!-- Perfectly Aligned SVG Chart Canvas -->
      <div style="position: relative; height: 160px; display: flex; align-items: stretch; margin-top: 0.25rem;">
        <div style="display: flex; flex-direction: column; justify-content: space-between; font-size: 0.7rem; color: var(--text-secondary); padding-right: 0.6rem; width: 45px; text-align: right; font-weight: 500; height: 130px;">
          <span>${ds.yMax}</span>
          <span>${ds.yMid}</span>
          <span>₹0</span>
        </div>

        <div style="flex: 1; position: relative; display: flex; flex-direction: column;">
          <svg width="100%" height="155" viewBox="0 0 500 155" style="overflow: visible;">
            <defs>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--brand-primary)" stop-opacity="0.22"/>
                <stop offset="100%" stop-color="var(--brand-primary)" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <line x1="0" y1="15" x2="500" y2="15" stroke="var(--border-color)" stroke-dasharray="4" vector-effect="non-scaling-stroke" />
            <line x1="0" y1="72" x2="500" y2="72" stroke="var(--border-color)" stroke-dasharray="4" vector-effect="non-scaling-stroke" />
            <line x1="0" y1="130" x2="500" y2="130" stroke="var(--border-color)" vector-effect="non-scaling-stroke" />
            
            <polygon points="${ds.areaPoly}" fill="url(#salesGrad)" />
            <polyline points="${ds.pointsPath}" fill="none" stroke="var(--brand-primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
            
            ${ds.coords.map(c => `
              <circle cx="${c.x}" cy="${c.y}" r="5" fill="var(--brand-primary)" stroke="var(--bg-surface)" stroke-width="2.5">
                <title>${c.label}: ${c.val}</title>
              </circle>
              <text x="${c.x}" y="152" text-anchor="middle" fill="var(--text-secondary)" font-size="12" font-weight="500">${c.label}</text>
            `).join('')}
          </svg>
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

  // SECTION 3: TOP SELLING PRODUCTS (Right Side - Compact Ranked List)
  const topSellingCard = document.createElement('div');
  topSellingCard.className = 'card';
  topSellingCard.style.display = 'flex';
  topSellingCard.style.flexDirection = 'column';
  topSellingCard.style.justifyContent = 'space-between';

  const topSellingMap = {};
  data.sales.forEach(s => {
    s.items.forEach(item => {
      if (!topSellingMap[item.product]) {
        topSellingMap[item.product] = { name: item.product, units: 0, revenue: 0 };
      }
      topSellingMap[item.product].units += item.qty;
      topSellingMap[item.product].revenue += item.amount;
    });
  });
  const topSellingList = Object.values(topSellingMap)
    .sort((a, b) => b.units - a.units)
    .slice(0, 5);

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
        ${topSellingList.map((p, idx) => `
          <div class="top-selling-item" data-product-name="${p.name}" style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; padding: 0.35rem 0.5rem; border-radius: var(--radius-sm); transition: background-color 0.15s ease; ${idx < topSellingList.length - 1 ? 'border-bottom: 1px solid var(--border-color);' : ''}">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-weight: 700; font-size: 0.85rem; color: ${idx === 0 ? 'var(--brand-primary)' : 'var(--text-secondary)'}; background: ${idx === 0 ? 'var(--brand-soft)' : 'var(--bg-secondary)'}; width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">0${idx + 1}</span>
              <div>
                <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">${p.name}</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${p.units} sold</div>
              </div>
            </div>
            <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">₹${p.revenue.toLocaleString('en-IN')}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  topSellingCard.querySelectorAll('.top-selling-item').forEach(item => {
    item.addEventListener('click', () => {
      onNavigate('products', { openProduct: item.dataset.productName });
    });
  });

  topSellingCard.querySelector('.view-all-products-btn').addEventListener('click', () => onNavigate('sales'));
  grid2Col.appendChild(topSellingCard);

  container.appendChild(grid2Col);

  // 4. Section 4: RECENT SALES HISTORY (Full Width Table)
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
            <th>Customer</th>
            <th>Date & Time</th>
            <th>Items</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${salesList.map(s => `
            <tr>
              <td style="font-weight: 600; color: var(--text-primary);">${s.customer}</td>
              <td style="color: var(--text-secondary); font-size: 0.8rem;">${s.date}</td>
              <td style="color: var(--text-secondary);">${s.itemCount} item${s.itemCount > 1 ? 's' : ''}</td>
              <td style="font-weight: 600; color: var(--text-primary);">₹${s.totalAmount.toLocaleString()}</td>
              <td>${createBadge({ label: s.paymentMethod, variant: 'secondary' }).outerHTML}</td>
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
