// FAQ accordion
function toggleFaq(btn) {
  const item = btn.parentElement;
  const ans = item.querySelector('.faq-a');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-a').style.maxHeight = '0';
  });
  if (!isOpen) {
    item.classList.add('open');
    ans.style.maxHeight = ans.scrollHeight + 'px';
  }
}

// Sample modal
function openSampleModal() {
  document.getElementById('sampleModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSampleModal(e) {
  if (!e || e.target === document.getElementById('sampleModal')) {
    document.getElementById('sampleModal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Buy modal
function openBuyModal(name, price) {
  document.getElementById('buyModalSubtitle').textContent = name;
  document.getElementById('buyModalItem').textContent = name;
  document.getElementById('buyModalPrice').textContent = '₩' + price;
  document.getElementById('buyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeBuyModal(e) {
  if (!e || e.target === document.getElementById('buyModal')) {
    document.getElementById('buyModal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Escape key closes modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeSampleModal(); closeBuyModal();
  }
});

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

// 사업분야 드롭다운 (main.js의 initNavDropdown과 동일한 로직)
(function () {
  const dropdown = document.querySelector('.nav__dropdown');
  const toggle = document.querySelector('.nav__dropdown-toggle');
  if (!dropdown || !toggle) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
