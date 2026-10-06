/**
 * Reusable Button Component
 */
export function createButton({ text, icon = null, variant = 'primary', size = 'md', onClick = null, type = 'button', extraClass = '' }) {
  const btn = document.createElement('button');
  btn.type = type;
  btn.className = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${extraClass}`.trim();
  
  let content = '';
  if (icon) {
    content += `<i data-lucide="${icon}" style="width: 16px; height: 16px;"></i>`;
  }
  if (text) {
    content += `<span>${text}</span>`;
  }
  btn.innerHTML = content;
  
  if (onClick) {
    btn.addEventListener('click', onClick);
  }
  
  return btn;
}
