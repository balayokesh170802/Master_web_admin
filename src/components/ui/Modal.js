/**
 * Reusable Modal Dialog Component
 */
export function createModal({ title, bodyElement, footerButtons = [], onClose = null }) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  
  const modal = document.createElement('div');
  modal.className = 'modal-content';
  
  // Header
  const header = document.createElement('div');
  header.className = 'modal-header';
  header.innerHTML = `
    <h3 class="card-title" style="font-weight: 600; font-size: 1.1rem; color: var(--text-primary);">${title}</h3>
    <button class="btn btn-ghost btn-sm close-modal-btn" style="padding: 0.25rem;">
      <i data-lucide="x" style="width: 18px; height: 18px;"></i>
    </button>
  `;
  
  // Body
  const body = document.createElement('div');
  body.className = 'modal-body';
  if (typeof bodyElement === 'string') {
    body.innerHTML = bodyElement;
  } else if (bodyElement instanceof HTMLElement) {
    body.appendChild(bodyElement);
  }
  
  // Footer
  const footer = document.createElement('div');
  footer.className = 'modal-footer';
  
  footerButtons.forEach(btn => {
    footer.appendChild(btn);
  });
  
  modal.appendChild(header);
  modal.appendChild(body);
  modal.appendChild(footer);
  overlay.appendChild(modal);
  
  const closeModal = () => {
    overlay.remove();
    if (onClose) onClose();
  };
  
  header.querySelector('.close-modal-btn').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  
  document.body.appendChild(overlay);
  if (window.lucide) window.lucide.createIcons();

  return { overlay, closeModal };
}
