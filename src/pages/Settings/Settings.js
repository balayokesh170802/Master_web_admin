/**
 * Settings Page Component (Store Configuration & Theme Manager)
 */
import { store } from '../../data/mockData.js';
import { createButton } from '../../components/ui/Button.js';
import { createBadge } from '../../components/ui/Badge.js';
import { toast } from '../../components/ui/Toast.js';

export function renderSettings(onThemeToggle) {
  const container = document.createElement('div');
  container.className = 'page-container';

  const data = store.data;

  // Header
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;';
  headerDiv.innerHTML = `
    <div>
      <h2 class="section-heading">System & Store Settings</h2>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Configure store parameters, catalog metadata, user access roles, and theme settings.</p>
    </div>
  `;
  container.appendChild(headerDiv);

  // Settings Card
  const settingsCard = document.createElement('div');
  settingsCard.className = 'card';
  
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

  settingsCard.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      
      <!-- Theme Switcher -->
      <div style="padding-bottom: 1.25rem; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between;">
        <div>
          <h3 class="card-title">Interface Theme</h3>
          <p style="font-size: 0.78rem; color: var(--text-secondary);">Switch between Light Mode (#F7F8FC) and Dark Mode (#080D1C)</p>
        </div>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-secondary);">Current: <strong style="color: var(--text-primary);">${currentTheme.toUpperCase()}</strong></span>
          <button class="btn btn-secondary btn-sm" id="settings-theme-toggle-btn">
            <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" style="width: 16px; height: 16px;"></i> Toggle Theme
          </button>
        </div>
      </div>

      <!-- Store Info Form -->
      <div style="padding-bottom: 1.25rem; border-bottom: 1px solid var(--border-color);">
        <h3 class="card-title" style="margin-bottom: 1rem;">Store Information</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Store Name</label>
            <input type="text" class="form-input" id="cfg-store-name" value="${data.storeInfo.name}">
          </div>
          <div class="form-group">
            <label class="form-label">Branch Code / Name</label>
            <input type="text" class="form-input" id="cfg-store-branch" value="${data.storeInfo.branch}">
          </div>
          <div class="form-group">
            <label class="form-label">Currency Symbol</label>
            <input type="text" class="form-input" id="cfg-store-curr" value="${data.storeInfo.currency}">
          </div>
          <div class="form-group">
            <label class="form-label">Default Minimum Stock Alert Threshold</label>
            <input type="number" class="form-input" id="cfg-store-min" value="${data.storeInfo.defaultMinStock}">
          </div>
        </div>
        <div style="margin-top: 1rem; display: flex; justify-content: flex-end;">
          <button class="btn btn-primary btn-sm" id="save-store-cfg-btn">Save Store Settings</button>
        </div>
      </div>

      <!-- Catalog Metadata (Categories, Brands, Sizes) -->
      <div style="padding-bottom: 1.25rem; border-bottom: 1px solid var(--border-color);">
        <h3 class="card-title" style="margin-bottom: 1rem;">Clothing Metadata Configurator</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div>
            <label class="form-label">Active Categories</label>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
              ${data.categories.map(c => `<span class="badge badge-secondary">${c}</span>`).join('')}
            </div>
          </div>
          <div>
            <label class="form-label">Active Brands</label>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
              ${data.brands.map(b => `<span class="badge badge-secondary">${b}</span>`).join('')}
            </div>
          </div>
          <div>
            <label class="form-label">Supported Sizes</label>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
              ${data.sizes.map(s => `<span class="badge badge-secondary">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- User Access Control -->
      <div>
        <h3 class="card-title" style="margin-bottom: 1rem;">Store Staff Access</h3>
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${data.users.map(u => `
                <tr>
                  <td style="font-family: monospace;">${u.id}</td>
                  <td style="font-weight: 600;">${u.name}</td>
                  <td>${createBadge({ label: u.role, variant: u.role.includes('Admin') ? 'info' : 'secondary' }).outerHTML}</td>
                  <td style="color: var(--text-secondary);">${u.email}</td>
                  <td>${createBadge({ label: u.status, variant: 'success' }).outerHTML}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;

  settingsCard.querySelector('#settings-theme-toggle-btn').addEventListener('click', onThemeToggle);

  settingsCard.querySelector('#save-store-cfg-btn').addEventListener('click', () => {
    data.storeInfo.name = settingsCard.querySelector('#cfg-store-name').value;
    data.storeInfo.branch = settingsCard.querySelector('#cfg-store-branch').value;
    data.storeInfo.currency = settingsCard.querySelector('#cfg-store-curr').value;
    data.storeInfo.defaultMinStock = parseInt(settingsCard.querySelector('#cfg-store-min').value, 10);
    store.save();
    toast.show({ message: 'Store settings saved successfully!', type: 'success' });
  });

  container.appendChild(settingsCard);
  if (window.lucide) window.lucide.createIcons();

  return container;
}
