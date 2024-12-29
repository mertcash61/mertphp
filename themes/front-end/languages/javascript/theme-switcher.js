class ThemeSwitcher {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.initializeTheme();
        this.addEventListeners();
    }

    initializeTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        if (this.theme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    addEventListeners() {
        const themeToggle = document.querySelector('#theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        document.documentElement.setAttribute('data-theme', this.theme);
        document.body.classList.toggle('dark-mode');
        
        // Tema değişikliği olayını yayınla
        window.dispatchEvent(new CustomEvent('themeChange', {
            detail: { theme: this.theme }
        }));
    }

    // Tema durumunu kontrol et
    isDarkMode() {
        return this.theme === 'dark';
    }

    // Belirli bir temayı zorla
    setTheme(theme) {
        if (theme === 'dark' || theme === 'light') {
            this.theme = theme;
            this.initializeTheme();
        }
    }
} 