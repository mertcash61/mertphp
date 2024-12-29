// Sayfa yükleme göstergesi
class PageLoader {
    constructor() {
        this.loader = document.createElement('div');
        this.loader.className = 'page-loader';
        this.loader.innerHTML = '<div class="loader-spinner"></div>';
        document.body.appendChild(this.loader);
    }

    show() {
        this.loader.style.display = 'flex';
    }

    hide() {
        this.loader.style.display = 'none';
    }
}

// Form doğrulama yardımcısı
class FormValidator {
    static validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    static validatePhone(phone) {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
    }

    static validateRequired(value) {
        return value.trim() !== '';
    }
}

// Local storage yardımcısı
class StorageHelper {
    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static get(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    static remove(key) {
        localStorage.removeItem(key);
    }

    static clear() {
        localStorage.clear();
    }
}

// URL yardımcısı
class UrlHelper {
    static getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    static updateQueryParam(param, value) {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set(param, value);
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
    }
} 