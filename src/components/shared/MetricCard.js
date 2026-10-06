/**
 * Metric Card Component for Top KPIs
 */
export function createMetricCard({ label, value, subtext = null, icon = null, variant = 'default', onClick = null }) {
  const card = document.createElement('div');
  card.className = `metric-card ${onClick ? 'metric-card-clickable' : ''}`;
  
  let borderColor = 'var(--border-color)';
  if (variant === 'danger') borderColor = 'var(--status-danger-border)';
  if (variant === 'warning') borderColor = 'var(--status-warning-border)';
  if (variant === 'success') borderColor = 'var(--status-success-border)';

  card.style.borderColor = borderColor;

  let iconHtml = '';
  if (icon) {
    iconHtml = `<i data-lucide="${icon}" style="width: 16px; height: 16px; color: var(--text-secondary);"></i>`;
  }

  card.innerHTML = `
    <div class="metric-header">
      <span>${label}</span>
      ${iconHtml}
    </div>
    <div class="metric-value">${value}</div>
    ${subtext ? `<div class="metric-footer">${subtext}</div>` : ''}
  `;
  
  if (onClick) {
    card.addEventListener('click', onClick);
  }

  return card;
}
