class UIAnimations {
    constructor() {
        this.initializeAnimations();
    }

    initializeAnimations() {
        this.addScrollAnimations();
        this.addHoverEffects();
        this.initializeCounters();
    }

    addScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.classList.contains('counter')) {
                        this.startCounting(entry.target);
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => observer.observe(element));
    }

    addHoverEffects() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => this.handleCardHover(e, true));
            card.addEventListener('mouseleave', (e) => this.handleCardHover(e, false));
        });
    }

    handleCardHover(e, isEntering) {
        const card = e.currentTarget;
        const icon = card.querySelector('i');
        
        if (isEntering) {
            card.style.transform = 'translateY(-10px)';
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(-10deg)';
            }
        } else {
            card.style.transform = 'translateY(0)';
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        }
    }

    initializeCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            counter.innerHTML = '0';
        });
    }

    startCounting(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 saniye
        const step = target / duration * 10;
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            counter.innerHTML = Math.round(current);

            if (current >= target) {
                counter.innerHTML = target;
                clearInterval(timer);
            }
        }, 10);
    }
}

// Animasyonları başlat
document.addEventListener('DOMContentLoaded', () => {
    new UIAnimations();
}); 