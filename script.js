(() => {
  function initThemeSwitch() {
    const root = document.documentElement;
    const button = document.getElementById('themeToggle');
    if (!button) return;
    const icon = button.querySelector('.theme-icon');
    const label = button.querySelector('.theme-label');
    function applyTheme(theme) {
      theme = theme === 'light' ? 'light' : 'dark';
      root.dataset.theme = theme;
      const nextLabel = theme === 'dark' ? 'Светлая тема' : 'Тёмная тема';
      icon.textContent = theme === 'dark' ? '☀' : '☾';
      label.textContent = nextLabel;
      button.setAttribute('aria-label', `Включить: ${nextLabel.toLowerCase()}`);
      button.setAttribute('title', nextLabel);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    }
    applyTheme(root.dataset.theme);
    button.addEventListener('click', () => {
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeSwitch, { once: true });
  } else {
    initThemeSwitch();
  }
})();
