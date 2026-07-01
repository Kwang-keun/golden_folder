/**
 * VitaCore — Main JavaScript
 * Version: 1.0.0
 * Features: Nav scroll, Vitamin tabs, Product cart, Scroll reveal, Toast
 */

'use strict';

/* ─── Data ─── */
const vitaminsData = [
  {
    id: 'a', name: '비타민 A', aka: 'Retinol / β-Carotene',
    type: 'fat', typeName: '지용성',
    benefits: ['시력 보호 · 야맹증 예방', '면역계 강화', '피부·점막 재생'],
    dose: '700~900 µg RAE/일',
    emoji: '👁️'
  },
  {
    id: 'b1', name: '비타민 B1', aka: 'Thiamine',
    type: 'water', typeName: '수용성',
    benefits: ['탄수화물 에너지 대사', '신경계 기능 유지', '피로 회복'],
    dose: '1.1~1.2 mg/일',
    emoji: '⚡'
  },
  {
    id: 'b2', name: '비타민 B2', aka: 'Riboflavin',
    type: 'water', typeName: '수용성',
    benefits: ['세포 성장·발달 지원', '에너지 생성 보조', '항산화 작용'],
    dose: '1.1~1.3 mg/일',
    emoji: '🔋'
  },
  {
    id: 'b3', name: '비타민 B3', aka: 'Niacin',
    type: 'water', typeName: '수용성',
    benefits: ['DNA 복구 관여', '피부 장벽 강화', '콜레스테롤 조절'],
    dose: '14~16 mg NE/일',
    emoji: '🧬'
  },
  {
    id: 'b6', name: '비타민 B6', aka: 'Pyridoxine',
    type: 'water', typeName: '수용성',
    benefits: ['단백질·아미노산 대사', '세로토닌·도파민 합성', '면역 강화'],
    dose: '1.3~1.7 mg/일',
    emoji: '🧠'
  },
  {
    id: 'b9', name: '비타민 B9', aka: 'Folate / 엽산',
    type: 'water', typeName: '수용성',
    benefits: ['DNA·RNA 합성', '세포 분열 필수', '임산부 태아 신경 발달'],
    dose: '400~600 µg DFE/일',
    emoji: '🌱'
  },
  {
    id: 'b12', name: '비타민 B12', aka: 'Cobalamin',
    type: 'water', typeName: '수용성',
    benefits: ['신경 수초 보호', '적혈구 생성', '인지 기능 지원'],
    dose: '2.4 µg/일',
    emoji: '🔴'
  },
  {
    id: 'c', name: '비타민 C', aka: 'Ascorbic Acid',
    type: 'water', typeName: '수용성',
    benefits: ['강력한 항산화 작용', '콜라겐 합성 필수', '면역 세포 활성화'],
    dose: '75~90 mg/일 (상한 2000mg)',
    emoji: '🍊'
  },
  {
    id: 'd', name: '비타민 D', aka: 'Calciferol (D3)',
    type: 'fat', typeName: '지용성',
    benefits: ['칼슘·인 흡수 촉진', '뼈·치아 강화', '면역 조절 · 기분 안정'],
    dose: '600~2000 IU/일',
    emoji: '☀️'
  },
  {
    id: 'e', name: '비타민 E', aka: 'Tocopherol',
    type: 'fat', typeName: '지용성',
    benefits: ['세포막 항산화 보호', '노화 억제', '혈관 건강 지원'],
    dose: '15 mg α-TE/일',
    emoji: '🛡️'
  },
  {
    id: 'k', name: '비타민 K', aka: 'Phylloquinone (K1/K2)',
    type: 'fat', typeName: '지용성',
    benefits: ['혈액 응고 조절', '뼈 단백질 활성화', '동맥 석회화 예방'],
    dose: '90~120 µg/일',
    emoji: '🦴'
  },
  {
    id: 'b7', name: '비타민 B7', aka: 'Biotin',
    type: 'water', typeName: '수용성',
    benefits: ['모발·손톱 강화', '지방·단백질 대사', '혈당 조절 보조'],
    dose: '30 µg/일',
    emoji: '💇'
  }
];

const productsData = [
  {
    rank: 1, name: '마그네슘 글리시네이트', tag: '수면·근육',
    desc: '흡수율 최고 등급. 수면 질 개선과 근육 이완에 탁월한 킬레이트 형태.',
    price: '29,800', rating: 4.9, reviews: 3241, emoji: '🌙',
    rankClass: 'rank-gold'
  },
  {
    rank: 2, name: '비타민 D3+K2 5000IU', tag: '뼈·면역',
    desc: 'D3·K2 최적 시너지 조합. 칼슘 흡수를 극대화하고 뼈에 정착시킵니다.',
    price: '24,500', rating: 4.8, reviews: 2876, emoji: '☀️',
    rankClass: 'rank-gold'
  },
  {
    rank: 3, name: '오메가-3 rTG형 1200mg', tag: '심혈관·뇌',
    desc: '재에스테르화 트리글리세리드 형태. 일반 오메가-3보다 흡수율 70% 향상.',
    price: '38,000', rating: 4.8, reviews: 2103, emoji: '🐟',
    rankClass: 'rank-gold'
  },
  {
    rank: 4, name: '비타민 C 1000mg 완충형', tag: '면역·항산화',
    desc: '위장 자극 없는 완충 처리. 로즈힙 추출물 함유로 흡수 효율 극대화.',
    price: '18,900', rating: 4.7, reviews: 4521, emoji: '🍊',
    rankClass: 'rank-silver'
  },
  {
    rank: 5, name: '프로바이오틱스 50B CFU', tag: '장건강',
    desc: '18종 복합 유산균 500억 CFU. 위산·담즙 내성 코팅으로 장까지 생존.',
    price: '32,000', rating: 4.7, reviews: 1987, emoji: '🦠',
    rankClass: 'rank-silver'
  },
  {
    rank: 6, name: '콜라겐 펩타이드 5000mg', tag: '피부·관절',
    desc: '저분자 수산화 어류 콜라겐. 피부 탄력과 관절 연골 보호에 임상 검증.',
    price: '41,000', rating: 4.6, reviews: 3102, emoji: '✨',
    rankClass: 'rank-bronze'
  },
  {
    rank: 7, name: '코엔자임 Q10 200mg', tag: '항산화·에너지',
    desc: '유비퀴놀(환원형) CoQ10. 미토콘드리아 에너지 생성 직접 지원.',
    price: '45,000', rating: 4.7, reviews: 1654, emoji: '⚡',
    rankClass: 'rank-bronze'
  },
  {
    rank: 8, name: '루테인·지아잔틴 20mg', tag: '눈건강',
    desc: '황반 색소 보호 성분. 블루라이트 차단 및 야간 시력 개선에 효과적.',
    price: '22,000', rating: 4.6, reviews: 2341, emoji: '👁️',
    rankClass: 'rank-normal'
  },
  {
    rank: 9, name: '아연 피콜리네이트 25mg', tag: '면역·피부',
    desc: '흡수율 최고인 피콜리네이트 형태. 면역 강화, 상처 치유, 피부 재생.',
    price: '16,500', rating: 4.5, reviews: 1876, emoji: '🛡️',
    rankClass: 'rank-normal'
  },
  {
    rank: 10, name: '종합비타민 멀티 플러스', tag: '종합영양',
    desc: '13종 비타민 + 10종 미네랄 + 식물성 효소 복합. 하루 한 알 완전 영양.',
    price: '35,000', rating: 4.6, reviews: 5203, emoji: '💊',
    rankClass: 'rank-normal'
  }
];

const healthGoals = [
  {
    icon: '💪',
    title: '면역력 강화',
    desc: '잦은 감기, 피로, 계절 변화에 취약한 분들을 위한 면역 부스팅 솔루션.',
    tags: ['비타민 C', '비타민 D3', '아연', '프로바이오틱스']
  },
  {
    icon: '😴',
    title: '수면 개선',
    desc: '수면의 질을 높이고 깊은 잠을 도와주는 과학적으로 검증된 성분 조합.',
    tags: ['마그네슘', '멜라토닌', '비타민 B6', 'L-테아닌']
  },
  {
    icon: '✨',
    title: '피부·미용',
    desc: '안쪽부터 채우는 진짜 피부 미용. 탄력, 미백, 보습을 위한 성분들.',
    tags: ['콜라겐', '비타민 C', '비오틴', '히알루론산']
  },
  {
    icon: '🧠',
    title: '두뇌·집중력',
    desc: '인지 기능, 기억력, 집중력 향상을 위한 뇌과학 기반 영양 솔루션.',
    tags: ['오메가-3', '비타민 B12', 'CoQ10', '포스파티딜세린']
  },
  {
    icon: '🦴',
    title: '뼈·관절',
    desc: '뼈 밀도 유지와 관절 연골 보호. 활동적인 삶을 위한 구조적 지지.',
    tags: ['칼슘', '비타민 D3+K2', '콜라겐', 'MSM']
  },
  {
    icon: '❤️',
    title: '심혈관 건강',
    desc: '혈관 탄력, 혈중 지질 조절, 혈압 관리를 위한 심장 건강 패키지.',
    tags: ['오메가-3', 'CoQ10', '마그네슘', '비타민 E']
  }
];

/* ─── DOM Ready ─── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderVitamins('all');
  renderProducts();
  renderGoals();
  initScrollReveal();
  initToasts();
  initMobileMenu();
  initVitaminTabs();
  initNavDropdown();
});

/* ─── Navigation ─── */
function initNav() {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ─── Vitamin Tabs ─── */
function initVitaminTabs() {
  const tabs = document.querySelectorAll('.vitamin-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderVitamins(tab.dataset.filter);
    });
  });
}

/* ─── Render Vitamins ─── */
function renderVitamins(filter) {
  const container = document.getElementById('vitamins-grid');
  if (!container) return;

  const filtered = filter === 'all'
    ? vitaminsData
    : vitaminsData.filter(v => v.type === filter);

  container.innerHTML = '';

  filtered.forEach((v, i) => {
    const card = document.createElement('article');
    card.className = 'vitamin-card reveal';
    card.style.transitionDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <span class="vitamin-card__letter">${v.name.replace('비타민 ', '')}</span>
      <span class="vitamin-card__badge badge-${v.type}">${v.typeName}</span>
      <div class="vitamin-card__name">${v.name}</div>
      <div class="vitamin-card__aka">${v.aka}</div>
      <div class="vitamin-card__benefits">
        ${v.benefits.map(b => `
          <div class="benefit-item">
            <span class="benefit-dot"></span>
            <span>${b}</span>
          </div>
        `).join('')}
      </div>
      <div class="vitamin-card__footer">
        <span class="vitamin-card__dose">${v.dose}</span>
        <span style="font-size:1.5rem">${v.emoji}</span>
      </div>
    `;
    container.appendChild(card);
  });

  // Re-observe new cards
  observeRevealElements();
}

/* ─── Render Products ─── */
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  productsData.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'product-card reveal';
    card.style.transitionDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="product-card__rank ${p.rankClass}">#${p.rank}</div>
      <div class="product-card__img">
        <span style="position:relative;z-index:1;">${p.emoji}</span>
      </div>
      <div class="product-card__body">
        <div class="product-card__tag">${p.tag}</div>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
        <div class="product-card__meta">
          <span class="product-card__price">₩${p.price}</span>
          <span class="product-card__rating">
            ★ ${p.rating}
            <span style="color:var(--clr-text-3)">(${p.reviews.toLocaleString()})</span>
          </span>
        </div>
        <button class="product-card__add" onclick="addToCart('${p.name}')">
          장바구니 담기
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ─── Render Goals ─── */
function renderGoals() {
  const container = document.getElementById('goals-grid');
  if (!container) return;

  healthGoals.forEach((g, i) => {
    const card = document.createElement('article');
    card.className = 'goal-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="goal-card__icon">${g.icon}</div>
      <h3 class="goal-card__title">${g.title}</h3>
      <p class="goal-card__desc">${g.desc}</p>
      <div class="goal-card__items">
        ${g.tags.map(t => `<span class="goal-tag">${t}</span>`).join('')}
      </div>
    `;
    container.appendChild(card);
  });
}

/* ─── Cart ─── */
let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  document.querySelector('.nav__cart-badge').textContent = cartCount;
  showToast(`✓ ${productName} 담겼습니다`);
}

/* ─── Scroll Reveal ─── */
let revealObserver;

function initScrollReveal() {
  observeRevealElements();
}

function observeRevealElements() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ─── Toast ─── */
function initToasts() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  window._toastContainer = container;
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  window._toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3100);
}

/* ─── Mobile Menu ─── */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const links = document.querySelector('.nav__links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const isOpen = links.style.display === 'flex';
    links.style.cssText = isOpen
      ? ''
      : 'display:flex;flex-direction:column;position:absolute;top:72px;left:0;right:0;background:var(--clr-bg);padding:1.5rem;border-bottom:1px solid var(--clr-border);gap:1rem;';
  });
}

/* ─── Nav Dropdown ─── */
function initNavDropdown() {
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
}

/* ─── Newsletter ─── */
function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById('newsletter-email');
  if (input && input.value) {
    showToast(`🌿 ${input.value} 구독 완료!`);
    input.value = '';
  }
}

/* ─── Smooth scroll for anchor links ─── */
document.addEventListener('click', e => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
});
