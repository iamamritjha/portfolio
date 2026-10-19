/* ============================================================
   THEME TOGGLE & PERSISTENCE
============================================================ */

(function () {
  const THEME_KEY = 'amrit_portfolio_theme';
  const htmlEl = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === 'light' ? '☀️' : '🌙';
      toggleBtn.setAttribute('title', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
    }
  }

  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
})();
