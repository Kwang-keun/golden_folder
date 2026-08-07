// 장바구니: localStorage 기반 (백엔드 없음, 결제는 준비중 안내로 대체)
const CART_KEY = 'goldenkp_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function formatPrice(n) {
  return n.toLocaleString('ko-KR') + '원';
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  saveCart(cart);
  showToast(`${item.name} ${item.qty}개를 장바구니에 담았습니다.`);
}

function cartCount() {
  return getCart().reduce((sum, c) => sum + c.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const count = cartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function openCartSummary() {
  const cart = getCart();
  if (cart.length === 0) {
    alert('장바구니가 비어 있습니다.');
    return;
  }
  const lines = cart.map(c => `- ${c.name} x${c.qty} = ${formatPrice(c.price * c.qty)}`);
  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  alert(`[장바구니]\n${lines.join('\n')}\n\n합계: ${formatPrice(total)}\n\n※ 결제 기능은 준비 중입니다.`);
}

function checkoutComingSoon() {
  alert('결제 기능은 준비 중입니다. 빠른 시일 내에 오픈할 예정입니다.');
}

function showToast(message) {
  if (!window._toastContainer) {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    window._toastContainer = container;
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  window._toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3100);
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
