const SUPABASE_URL = 'https://hcsfqkwtbracogkigffr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc2Zxa3d0YnJhY29na2lnZmZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMTQ1NjQsImV4cCI6MjA5Nzc5MDU2NH0.v5yZLv-VbH6MVzcMOixQa6BwdRbZUulZRzxEyudYF8s';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// pages/*.html sit next to market-login.html/market-signup.html;
// pages at the site root need the "pages/" prefix.
function authBasePath() {
  return location.pathname.includes('/pages/') ? '' : 'pages/';
}

async function getUser() {
  const { data: { user } } = await db.auth.getUser();
  return user;
}

async function signOut() {
  await db.auth.signOut();
  await updateNav();
}

async function updateNav() {
  const navAuth = document.getElementById('nav-auth');
  if (!navAuth) return;
  const user = await getUser();
  const base = authBasePath();
  if (user) {
    navAuth.innerHTML = `
      <a href="${base}mypage.html" class="nav__auth-link">마이페이지</a>
      <span class="nav__auth-email">${user.email}</span>
      <button onclick="signOut()" class="nav__auth-link nav__auth-logout">로그아웃</button>
    `;
  } else {
    navAuth.innerHTML = '';
  }
}
