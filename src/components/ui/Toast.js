/**
 * Toast Notification Manager
 */
class ToastManager {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  }

  show({ message, type = 'success', duration = 3000 }) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = 'check-circle-2';
    let iconColor = 'var(--status-success)';
    if (type === 'danger') {
      icon = 'alert-circle';
      iconColor = 'var(--status-danger)';
    } else if (type === 'warning') {
      icon = 'alert-triangle';
      iconColor = 'var(--status-warning)';
    } else if (type === 'info') {
      icon = 'info';
      iconColor = 'var(--status-info)';
    }

    toast.innerHTML = `
      <i data-lucide="${icon}" style="width: 18px; height: 18px; color: ${iconColor}; flex-shrink: 0;"></i>
      <span style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary);">${message}</span>
    `;

    this.container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, duration);
  }
}

export const toast = new ToastManager();
