class Utils {
    // Debounce fonksiyonu
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle fonksiyonu
    static throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // LocalStorage yardımcısı
    static storage = {
        set(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        get(key) {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        },
        remove(key) {
            localStorage.removeItem(key);
        }
    }

    // URL parametrelerini al
    static getQueryParams() {
        return Object.fromEntries(
            new URLSearchParams(window.location.search).entries()
        );
    }

    // Rastgele ID oluştur
    static generateId(length = 10) {
        return Math.random().toString(36).substring(2, length + 2);
    }

    // Tarihi formatla
    static formatDate(date) {
        return new Intl.DateTimeFormat('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    }
} 