class AnimationController {
    constructor() {
        this.observers = new Map();
        this.initializeObservers();
    }

    initializeObservers() {
        // Görünüm animasyonları için observer
        const fadeObserver = new IntersectionObserver(
            (entries) => this.handleFadeAnimation(entries),
            { threshold: 0.1 }
        );

        // Elementleri gözlemle
        document.querySelectorAll('.fade-in').forEach(element => {
            fadeObserver.observe(element);
        });
    }

    handleFadeAnimation(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }

    // Özel animasyon ekleme
    addCustomAnimation(element, animationName, duration = '0.6s') {
        element.style.animation = `${animationName} ${duration} ease forwards`;
    }

    // Animasyon kaldırma
    removeAnimation(element) {
        element.style.animation = 'none';
    }
} 