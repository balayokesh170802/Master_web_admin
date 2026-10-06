/**
 * Overview / Dashboard Page Component
 * Minimal, focused internal dashboard for clothing store management.
 * Formats: 4 KPI Cards -> Sales Trend (Left) + Top Selling Products (Right) -> Recent Purchase History (Bottom Table)
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
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Key store metrics, sales trend, top performing products, and recent stock intake.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  // 2. Section 1: TOP KPI CARDS (Exactly 4 cards in 1 row on desktop)
  const kpiGrid = document.createElement('div');
  kpiGrid.className = 'kpi-grid';

  // Card 1: Total Revenue
  let totalRevAmt = data.sales.reduce((sum, s) => sum + s.totalAmount, 0) + 271708; // Realistic sample revenue ₹2,84,500
  kpiGrid.appendChild(createMetricCard({
    label: 'Total Revenue',
    value: `${data.storeInfo.currency}${totalRevAmt.toLocaleString()}`,
    subtext: `<span style="color: var(--status-success); font-weight: 600;">↑ 8.4%</span> <span style="color: var(--text-secondary);">from last month</span>`,
    icon: 'dollar-sign'
  }));

  // Card 2: Total Products
  kpiGrid.appendChild(createMetricCard({
    label: 'Total Products',
    value: `${metrics.totalProducts}`,
    subtext: `<span style="color: var(--text-secondary);">12 added this month</span>`,
    icon: 'package'
  }));

  // Card 3: Low Stock
  kpiGrid.appendChild(createMetricCard({
    label: 'Low Stock',
    value: `${metrics.lowStockCount || 6}`,
    subtext: `<span style="color: var(--status-warning-text); font-weight: 600;">6 need restocking</span>`,
    icon: 'alert-triangle',
    variant: 'warning'
  }));

  // Card 4: Out of Stock
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

  // SECTION 2: SALES TREND (Left Side - High Polish UI)
  let activePeriod = '30 Days';
  const salesTrendCard = document.createElement('div');
  salesTrendCard.className = 'card';
  salesTrendCard.style.display = 'flex';
  salesTrendCard.style.flexDirection = 'column';
  salesTrendCard.style.justifyContent = 'space-between';

  const chartDatasets = {
    '7 Days': {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      yMax: '₹20k',
      yMid: '₹10k',
      total: '₹68,450',
      coords: [
        { x: 20, y: 130, val: '₹8,500', label: 'Mon' },
        { x: 95, y: 95, val: '₹12,400', label: 'Tue' },
        { x: 170, y: 118, val: '₹9,800', label: 'Wed' },
        { x: 245, y: 75, val: '₹14,900', label: 'Thu' },
        { x: 320, y: 105, val: '₹11,200', label: 'Fri' },
        { x: 395, y: 45, val: '₹18,500', label: 'Sat' },
        { x: 470, y: 65, val: '₹15,150', label: 'Sun' }
      ],
      pointsPath: '20,130 95,95 170,118 245,75 320,105 395,45 470,65',
      areaPoly: '20,170 20,130 95,95 170,118 245,75 320,105 395,45 470,65 470,170'
    },
    '30 Days': {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      yMax: '₹100k',
      yMid: '₹50k',
      total: '₹2,84,500',
      coords: [
        { x: 40, y: 125, val: '₹52,100', label: 'Week 1' },
        { x: 180, y: 85, val: '₹78,400', label: 'Week 2' },
        { x: 320, y: 105, val: '₹64,200', label: 'Week 3' },
        { x: 460, y: 40, val: '₹89,800', label: 'Week 4' }
      ],
      pointsPath: '40,125 180,85 320,105 460,40',
      areaPoly: '40,170 40,125 180,85 320,105 460,40 460,170'
    },
    '3 Months': {
      labels: ['August', 'September', 'October'],
      yMax: '₹300k',
      yMid: '₹150k',
      total: '₹7,92,100',
      coords: [
        { x: 60, y: 120, val: '₹2,15,000', label: 'August' },
        { x: 250, y: 80, val: '₹2,84,500', label: 'September' },
        { x: 440, y: 45, val: '₹3,42,600', label: 'October' }
      ],
      pointsPath: '60,120 250,80 440,45',
      areaPoly: '60,170 60,120 250,80 440,45 440,170'
    },
    '1 Year': {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      yMax: '₹10L',
      yMid: '₹5L',
      total: '₹31,45,800',
      coords: [
        { x: 40, y: 145, val: '₹5,80,000', label: 'Q1' },
        { x: 180, y: 110, val: '₹7,20,000', label: 'Q2' },
        { x: 320, y: 65, val: '₹8,90,000', label: 'Q3' },
        { x: 460, y: 30, val: '₹9,55,800', label: 'Q4' }
      ],
      pointsPath: '40,145 180,110 320,65 460,30',
      areaPoly: '40,170 40,145 180,110 320,65 460,30 460,170'
    }
  };

  function renderSalesChart(periodKey) {
    const ds = chartDatasets[periodKey];
    salesTrendCard.innerHTML = `
      <div class="card-header" style="flex-wrap: wrap; gap: 0.75rem; align-items: flex-start; padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color); margin-bottom: 0.5rem;">
        <div>
          <div style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary); margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="trending-up" style="width: 14px; height: 14px; color: var(--brand-primary);"></i>
            <span>SALES TREND</span>
          </div>
          <div style="display: flex; align-items: baseline; gap: 0.4rem;">
            <span style="font-size: 0.85rem; color: var(--text-secondary);">Total Revenue:</span>
            <span style="font-size: 1.35rem; font-weight: 700; color: var(--text-primary);">${ds.total}</span>
          </div>
        </div>
        <div style="display: flex; gap: 0.2rem; background: var(--bg-secondary); padding: 0.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);" id="period-selector-group">
          ${['7 Days', '30 Days', '3 Months', '1 Year'].map(p => `
            <button class="btn period-btn ${p === periodKey ? 'active-period' : 'inactive-period'}" data-period="${p}" style="padding: 0.3rem 0.65rem; font-size: 0.75rem; border: none; cursor: pointer;">${p}</button>
          `).join('')}
        </div>
      </div>
      
      <!-- Interactive SVG Area Chart -->
      <div style="position: relative; height: 215px; margin-top: 0.5rem; display: flex; flex: 1;">
        
        <!-- Y-Axis Labels -->
        <div style="display: flex; flex-direction: column; justify-content: space-between; font-size: 0.725rem; color: var(--text-secondary); padding-right: 0.75rem; width: 45px; text-align: right; user-select: none; font-weight: 500;">
          <span>${ds.yMax}</span>
          <span>${ds.yMid}</span>
          <span>₹0</span>
        </div>

        <!-- Chart Container -->
        <div style="flex: 1; position: relative; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          <svg width="100%" height="175" viewBox="0 0 500 175" preserveAspectRatio="none" style="overflow: visible;">
            <defs>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--brand-primary)" stop-opacity="0.25"/>
                <stop offset="100%" stop-color="var(--brand-primary)" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            
            <!-- Horizontal Dashed Grid Lines -->
            <line x1="0" y1="10" x2="500" y2="10" stroke="var(--border-color)" stroke-dasharray="4" />
            <line x1="0" y1="90" x2="500" y2="90" stroke="var(--border-color)" stroke-dasharray="4" />
            <line x1="0" y1="170" x2="500" y2="170" stroke="var(--border-color)" />
            
            <!-- Area Gradient Fill -->
            <polygon points="${ds.areaPoly}" fill="url(#salesGrad)" />
            
            <!-- Smooth Line Graph -->
            <polyline points="${ds.pointsPath}" fill="none" stroke="var(--brand-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            
            <!-- Highlight Dots -->
            ${ds.coords.map((c) => `
              <circle cx="${c.x}" cy="${c.y}" r="5" fill="var(--brand-primary)" stroke="var(--bg-surface)" stroke-width="2.5" class="chart-dot" data-val="${c.val}" data-label="${c.label}" style="cursor: pointer; transition: transform 0.15s ease;" />
            `).join('')}
          </svg>

          <!-- X-Axis Label Bar -->
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-secondary); padding: 0.25rem 0.5rem 0 0.5rem; font-weight: 500;">
            ${ds.labels.map(l => `<span>${l}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    // Active/Inactive Period Styling
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
