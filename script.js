/* Переключатель тем профиля Геллерта Карн’Вэйна */
(() => {
  function initThemeSwitch() {
    const root = document.documentElement;

    const button =
      document.getElementById('themeToggle') ||
      document.querySelector('.theme-toggle');

    if (!button) {
      console.error(
        '[Gellert Profile] Кнопка темы не найдена. ' +
        'Проверь id="themeToggle" в index.html.'
      );
      return;
    }

    const icon = button.querySelector('.theme-icon');
    const label = button.querySelector('.theme-label');

    // Порядок переключения тем
    const themes = ['light', 'dark', 'forum'];

    const labels = {
      light: {
        icon: '☾',
      },
      dark: {
        icon: '◐',
      },
      forum: {
        icon: '☀',
      }
    };

    // Применение выбранной темы
    function applyTheme(theme) {
      if (!themes.includes(theme)) {
        theme = 'light';
      }

      root.setAttribute('data-theme', theme);

      if (icon) {
        icon.textContent = labels[theme].icon;
      }

      if (label) {
        label.textContent = labels[theme].text;
      }

      button.setAttribute(
        'aria-label',
        `Переключить оформление. Сейчас: ${theme}`
      );

      button.setAttribute(
        'aria-pressed',
        theme === 'dark' ? 'true' : 'false'
      );
    }

    // Устанавливаем начальную тему
    const savedTheme = root.getAttribute('data-theme');

    applyTheme(
      themes.includes(savedTheme) ? savedTheme : 'light'
    );

    // Не добавляем обработчик повторно
    if (button.dataset.themeSwitchReady === 'true') {
      return;
    }

    button.dataset.themeSwitchReady = 'true';

    // Переключение темы по нажатию
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const current = root.getAttribute('data-theme') || 'light';
      const currentIndex = themes.indexOf(current);
      const nextIndex = (currentIndex + 1) % themes.length;

      applyTheme(themes[nextIndex]);
    });

    // Обработка ошибок загрузки изображений
    document.querySelectorAll('.art-card img').forEach((img) => {
      img.addEventListener('error', () => {
        img.alt = img.alt || 'Иллюстрация персонажа';
        img.classList.add('image-missing');
      });
    });
  }

  // Дожидаемся загрузки HTML
  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initThemeSwitch,
      { once: true }
    );
  } else {
    initThemeSwitch();
  }
})();
