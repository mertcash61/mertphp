// Modern JavaScript Sınıf Örneği
class UIController {
    constructor() {
        this.elements = {
            navbar: document.querySelector('.navbar'),
            menuButton: document.querySelector('.menu-button'),
            darkModeToggle: document.querySelector('.dark-mode-toggle')
        };
        
        this.initializeEventListeners();
        this.checkDarkMode();
    }

    initializeEventListeners() {
        // Menü kontrolü
        this.elements.menuButton?.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Dark mode toggle
        this.elements.darkModeToggle?.addEventListener('click', () => {
            this.toggleDarkMode();
        });

        // Scroll olayları
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    toggleMenu() {
        this.elements.navbar.classList.toggle('active');
    }

    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }

    checkDarkMode() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
    }

    handleScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            this.elements.navbar.classList.add('scrolled');
        } else {
            this.elements.navbar.classList.remove('scrolled');
        }
    }
}

// Form Validasyon Sınıfı
class FormValidator {
    constructor(formElement) {
        this.form = formElement;
        this.initializeValidation();
    }

    initializeValidation() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.submitForm();
            }
        });
    }

    validateForm() {
        let isValid = true;
        const inputs = this.form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            if (!this.validateInput(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateInput(input) {
        const value = input.value.trim();
        
        if (input.required && !value) {
            this.showError(input, 'Bu alan zorunludur');
            return false;
        }

        if (input.type === 'email' && !this.isValidEmail(value)) {
            this.showError(input, 'Geçerli bir email adresi giriniz');
            return false;
        }

        this.removeError(input);
        return true;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        this.removeError(input);
        input.parentElement.appendChild(errorDiv);
        input.classList.add('error');
    }

    removeError(input) {
        const errorDiv = input.parentElement.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        input.classList.remove('error');
    }

    async submitForm() {
        try {
            const formData = new FormData(this.form);
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                this.showSuccess('Form başarıyla gönderildi!');
                this.form.reset();
            } else {
                throw new Error('Form gönderilemedi');
            }
        } catch (error) {
            this.showError(this.form, 'Bir hata oluştu. Lütfen tekrar deneyin.');
        }
    }
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // UI Controller'ı başlat
    const ui = new UIController();

    // Form validasyonunu başlat
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        new FormValidator(contactForm);
    }
}); 