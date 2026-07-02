function closeAdminGateOverlay(overlay) {
  overlay.remove();
}

function openAdminMenu() {
  const overlay = document.createElement('div');
  overlay.className = 'admin-gate-overlay';
  overlay.innerHTML = `
    <div class="admin-gate-box">
      <h3>회원 서비스</h3>
      <p>회원 로그인 / 회원가입 기능은 현재 준비 중입니다. 서비스 오픈 후 이용하실 수 있습니다.</p>
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
