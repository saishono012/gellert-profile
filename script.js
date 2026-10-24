(() => {
  const root = document.documentElement;
  const button = document.getElementById('themeToggle');
  const icon = button.querySelector('.theme-icon');
  const label = button.querySelector('.theme-label');
  const themes = ['light', 'dark', 'forum'];
  const themeLabels = {light: {icon: '☾'},dark: {icon: '◐'},forum: {icon: '☀'}};
  function setTheme(theme) {root.dataset.theme = theme;
  const next = themeLabels[theme];icon.textContent = next.icon;label.textContent = next.label;button.setAttribute('aria-label',`Переключить оформление: ${next.label}`);}setTheme('light');button.addEventListener('click', () => {
  const current = root.dataset.theme || 'light';
  const index = themes.indexOf(current);
  const next = themes[(index + 1) % themes.length];setTheme(next);});})();
