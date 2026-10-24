document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const button = document.getElementById("themeToggle");
  if (button) {
  const icon = button.querySelector(".theme-icon");
  const themes = ["light", "dark", "forum"];
  const themeInfo = {light: {icon: "☾"},dark: {icon: "◐",},forum: {icon: "☀"}};
  function applyTheme(theme) {root.setAttribute("data-theme", theme);
  if (icon) {icon.textContent = themeInfo[theme].icon;}
  if (label) {label.textContent = themeInfo[theme].label;}button.setAttribute("aria-pressed",theme === "dark" ? "true" : "false");}
  const initialTheme = themes.includes(root.dataset.theme)? root.dataset.theme: "light";applyTheme(initialTheme);button.addEventListener("click", () => {
  const currentTheme = root.dataset.theme || "light";
  const currentIndex = themes.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themes.length;applyTheme(themes[nextIndex]);});}document.querySelectorAll(".art-card img").forEach((img) => {img.addEventListener("error", () => {img.alt = img.alt || "Иллюстрация персонажа";img.classList.add("image-missing");});});});
