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

  let totalRevAmt = data.sales.reduce((sum, s) => sum + s.totalAmount, 0) + 271708; // Realistic sample revenue ₹2,84,500
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

  // 3. Section 2 & 3: TWO-COLUMN ROW (Sales Trend on Left, Top Selling Products on Right)
  const grid2Col = document.createElement('div');
  grid2Col.style.cssText = 'display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; width: 100%; align-items: stretch;';
  if (window.innerWidth <= 1024) grid2Col.style.gridTemplateColumns = '1fr';

  // SECTION 2: SALES TREND (Default Period: 1W)
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

  // SECTION 3: TOP SELLING PRODUCTS (Right Side - Compact Ranked List)
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
