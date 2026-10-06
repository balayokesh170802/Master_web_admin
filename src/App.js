/**
 * Master Web Admin Main Application Orchestrator
 */
import { createSidebar, NAV_ITEMS } from './components/layout/Sidebar.js';
import { createTopbar } from './components/layout/Topbar.js';
import { renderOverview } from './pages/Overview/Overview.js';
import { renderInventory } from './pages/Inventory/Inventory.js';
import { renderProducts } from './pages/Products/Products.js';
import { renderPurchases } from './pages/Purchases/Purchases.js';
import { renderSales } from './pages/Sales/Sales.js';
import { renderCustomers } from './pages/Customers/Customers.js';
import { renderReports } from './pages/Reports/Reports.js';
import { renderSettings } from './pages/Settings/Settings.js';

class App {
  constructor() {
    this.appEl = document.getElementById('app');
    this.activeNavId = 'overview';
    this.navParams = {};
    
    // Theme initialization
    const savedTheme = localStorage.getItem('master_web_admin_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    this.render();
  }

  toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('master_web_admin_theme', nextTheme);
    this.render();
  };

  navigateTo = (navId, params = {}) => {
    this.activeNavId = navId;
    this.navParams = params;
    this.render();
  };

  render() {
    this.appEl.innerHTML = '';

    const activeItem = NAV_ITEMS.find(item => item.id === this.activeNavId) || NAV_ITEMS[0];

    const layout = document.createElement('div');
    layout.className = 'app-layout';

    // Sidebar
    const sidebar = createSidebar(this.activeNavId, this.navigateTo);
    layout.appendChild(sidebar);

    // Main Content Column
    const mainContent = document.createElement('main');
    mainContent.className = 'main-content';

    // Topbar
    const topbar = createTopbar(activeItem.label, this.toggleTheme);
    mainContent.appendChild(topbar);

    // Page View Container
    let pageView;
    switch (this.activeNavId) {
      case 'overview':
        pageView = renderOverview(this.navigateTo);
        break;
      case 'inventory':
        pageView = renderInventory(this.navParams);
        break;
      case 'products':
        pageView = renderProducts(this.navParams);
        break;
      case 'purchases':
        pageView = renderPurchases(this.navParams);
        break;
      case 'sales':
        pageView = renderSales(this.navParams);
        break;
      case 'customers':
        pageView = renderCustomers(this.navParams);
        break;
      case 'reports':
        pageView = renderReports(this.navParams);
        break;
      case 'settings':
        pageView = renderSettings(this.toggleTheme);
        break;
      default:
        pageView = renderOverview(this.navigateTo);
    }

    mainContent.appendChild(pageView);
    layout.appendChild(mainContent);
    this.appEl.appendChild(layout);

    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

// Instantiate App when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
