/**
 * Sidebar Navigation Component
 * Features exact 8 navigation modules specified
 */
export const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: 'layout-dashboard' },
  { id: 'inventory', label: 'Inventory', icon: 'boxes' },
  { id: 'products', label: 'Products', icon: 'shirt' },
  { id: 'purchases', label: 'Purchases / Stock In', icon: 'truck' },
  { id: 'sales', label: 'Sales', icon: 'shopping-cart' },
  { id: 'customers', label: 'Customers', icon: 'users' },
  { id: 'reports', label: 'Reports', icon: 'bar-chart-3' },
  { id: 'settings', label: 'Settings', icon: 'settings' }
];

export function createSidebar(activeNavId, onNavigate) {
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
