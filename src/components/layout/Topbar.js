/**
 * Topbar Navigation Component
 */
export function createTopbar(activeTitle, onThemeToggle) {
  const topbar = document.createElement('header');
  topbar.className = 'topbar';
  
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  
  topbar.innerHTML = `
    <div class="topbar-left">
      <h1 class="page-title" style="font-size: 1.35rem;">${activeTitle}</h1>
    </div>
    <div class="topbar-right">
      <div style="font-size: 0.8rem; background: var(--bg-secondary); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 0.4rem;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--status-success);"></span>
        <span style="font-weight: 500; color: var(--text-secondary);">Store #01 • Online</span>
      </div>
      
      <button class="btn btn-secondary btn-sm theme-toggle-btn" title="Toggle Light/Dark Mode" style="padding: 0.45rem;">
        <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" style="width: 16px; height: 16px;"></i>
      </button>

      <div style="display: flex; align-items: center; gap: 0.6rem; padding-left: 0.5rem; border-left: 1px solid var(--border-color);">
        <div style="width: 32px; height: 32px; border-radius: 50%; background-color: var(--brand-primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.85rem;">
          SM
        </div>
        <div style="display: flex; flex-direction: column;">
          <span style="font-size: 0.85rem; font-weight: 600; line-height: 1.2;">Suresh Menon</span>
          <span style="font-size: 0.725rem; color: var(--text-secondary);">Store Owner</span>
        </div>
      </div>
    </div>
  `;
  
  topbar.querySelector('.theme-toggle-btn').addEventListener('click', onThemeToggle);
  
  return topbar;
}
