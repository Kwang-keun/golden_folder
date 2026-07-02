function authBasePath() {
  return location.pathname.includes('/pages/') ? '' : 'pages/';
}

function closeAdminGateOverlay(overlay) {
  overlay.remove();
}

function openAdminMenu() {
  const base = authBasePath();
  const overlay = document.createElement('div');
  overlay.className = 'admin-gate-overlay';
  overlay.innerHTML = `
    <div class="admin-gate-box">
      <h3>회원 메뉴</h3>
      <p>회원 로그인 / 회원가입 페이지로 이동합니다.</p>
      <div class="admin-gate-menu">
        <a href="${base}market-login.html" class="btn btn-primary">로그인</a>
        <a href="${base}market-signup.html" class="admin-gate-link">회원가입</a>
      </div>
      <div class="admin-gate-actions">
        <button type="button" class="admin-gate-btn admin-gate-btn--ghost" data-close>닫기</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector('[data-close]').addEventListener('click', () => closeAdminGateOverlay(overlay));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeAdminGateOverlay(overlay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('admin-gate-link');
  if (!link) return;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    openAdminMenu();
  });
});
