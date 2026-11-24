(() => {
    function initThemeSwitch() {
        const root = document.documentElement;
        const button = document.getElementById("themeToggle");

        if (!button) {
            console.error("Theme button not found");
            return;
        }

        const icon = button.querySelector(".theme-icon");
        const label = button.querySelector(".theme-label");

        const themes = ["light", "dark", "forum"];

        const settings = {
            light: {
                icon: "☾",
                label: "Тёмная тема"
            },
            dark: {
                icon: "◐",
                label: "Фон форума"
            },
            forum: {
                icon: "☀",
                label: "Светлая тема"
            }
        };

        function setTheme(theme) {
            root.dataset.theme = theme;

            icon.textContent = settings[theme].icon;
            label.textContent = settings[theme].label;

            button.setAttribute(
                "aria-label",
                "Следующая тема: " + settings[theme].label
            );
        }

        setTheme(
            themes.includes(root.dataset.theme)
                ? root.dataset.theme
                : "light"
        );

        button.addEventListener("click", function () {
            const current = root.dataset.theme;
            const index = themes.indexOf(current);
            const next = themes[(index + 1) % themes.length];

            setTheme(next);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initThemeSwitch,
            { once: true }
        );
    } else {
        initThemeSwitch();
    }
})();
