const ADMIN_GATE_PASSWORD = '0958@@';

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
      <h3>관리자 메뉴</h3>
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

function openAdminGatePrompt() {
  const overlay = document.createElement('div');
  overlay.className = 'admin-gate-overlay';
  overlay.innerHTML = `
    <div class="admin-gate-box">
      <h3>관리자 인증</h3>
      <p>비밀번호를 입력해 주세요.</p>
      <input type="password" class="admin-gate-input" autocomplete="off" placeholder="비밀번호" />
      <p class="admin-gate-error" hidden>비밀번호가 올바르지 않습니다.</p>
      <div class="admin-gate-actions">
        <button type="button" class="admin-gate-btn admin-gate-btn--ghost" data-close>취소</button>
        <button type="button" class="admin-gate-btn admin-gate-btn--primary" data-submit>확인</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const input = overlay.querySelector('.admin-gate-input');
  const error = overlay.querySelector('.admin-gate-error');
  input.focus();

  function submit() {
    if (input.value === ADMIN_GATE_PASSWORD) {
      closeAdminGateOverlay(overlay);
      openAdminMenu();
    } else {
      error.hidden = false;
      input.value = '';
      input.focus();
    }
  }

  overlay.querySelector('[data-close]').addEventListener('click', () => closeAdminGateOverlay(overlay));
  overlay.querySelector('[data-submit]').addEventListener('click', submit);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeAdminGateOverlay(overlay);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submit();
    if (e.key === 'Escape') closeAdminGateOverlay(overlay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('admin-gate-link');
  if (!link) return;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    openAdminGatePrompt();
  });
});
