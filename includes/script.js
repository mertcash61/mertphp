// Bileşen Yöneticisi
class ComponentManager {
    constructor() {
        this.initializeCodePreviews();
        this.initializeClipboard();
        this.initializeAlerts();
        this.initializeAnimations();
    }

    // Kod önizleme alanlarını başlat
    initializeCodePreviews() {
        document.querySelectorAll('pre code').forEach(block => {
            // HTML karakterlerini escape et
            block.innerHTML = block.innerHTML
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
            
            // Kopyalama butonu ekle
            this.addCopyButton(block);
        });
    }

    // Kopyalama butonu ekle
    addCopyButton(block) {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = '<i class="fas fa-copy"></i>';
        button.title = 'Kodu Kopyala';

        const preBlock = block.parentElement;
        preBlock.style.position = 'relative';
        preBlock.appendChild(button);

        button.addEventListener('click', () => this.copyToClipboard(block.textContent));
    }

    // Panoya kopyalama işlevi
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showNotification('Kod kopyalandı!');
        }).catch(err => {
            console.error('Kopyalama hatası:', err);
            this.showNotification('Kopyalama başarısız!', 'error');
        });
    }

    // Bildirim göster
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // Alert'leri başlat
    initializeAlerts() {
        document.querySelectorAll('.alert').forEach(alert => {
            const closeButton = document.createElement('button');
            closeButton.className = 'alert-close';
            closeButton.innerHTML = '&times;';
            
            closeButton.addEventListener('click', () => {
                alert.style.opacity = '0';
                setTimeout(() => alert.remove(), 300);
            });

            alert.appendChild(closeButton);
        });
    }

    // Animasyonları başlat
    initializeAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.component-section').forEach(section => {
            section.classList.add('fade-in');
            observer.observe(section);
        });
    }
}

// Sayfa yüklendiğinde bileşen yöneticisini başlat
document.addEventListener('DOMContentLoaded', () => {
    new ComponentManager();
});

// Form örneği için validasyon
document.querySelector('.form-example')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    let isValid = true;

    // Basit validasyon
    for (let [key, value] of formData.entries()) {
        if (!value.trim()) {
            isValid = false;
            const input = e.target.querySelector(`[name="${key}"]`);
            input.classList.add('error');
        }
    }

    if (isValid) {
        const componentManager = new ComponentManager();
        componentManager.showNotification('Form başarıyla gönderildi!');
        e.target.reset();
    }
}); 