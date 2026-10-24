(() => {
  const root = document.documentElement;
  const button = document.getElementById('themeToggle');
  const icon = button.querySelector('.theme-icon');
  const label = button.querySelector('.theme-label');
  const saved = null; // No storage required; iframe-friendly and self-contained.
  function setTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    button.setAttribute('aria-pressed', String(dark));
    icon.textContent = dark ? '☀' : '☾';
    label.textContent = dark ? 'Светлая тема' : 'Тёмная тема';
  }
  setTheme('light');
  button.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
})();