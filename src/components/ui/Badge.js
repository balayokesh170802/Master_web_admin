/**
 * Reusable Status Badge Component
 */
export function createBadge({ label, variant = 'secondary', icon = null }) {
  const badge = document.createElement('span');
  badge.className = `badge badge-${variant}`;
  
  let html = '';
  if (icon) {
    html += `<i data-lucide="${icon}" style="width: 12px; height: 12px;"></i>`;
  }
  html += `<span>${label}</span>`;
  badge.innerHTML = html;
  
  return badge;
}
