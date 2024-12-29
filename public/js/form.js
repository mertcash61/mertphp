class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.initializeForm();
    }

    initializeForm() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.addInputValidation();
    }

    addInputValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.removeError(input));
        });
    }

    validateField(field) {
        if (!field.value.trim()) {
            this.showError(field, 'Bu alan zorunludur');
            return false;
        }

        if (field.type === 'email' && !this.isValidEmail(field.value)) {
            this.showError(field, 'Geçerli bir e-posta adresi giriniz');
            return false;
        }

        this.removeError(field);
        return true;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showError(field, message) {
        this.removeError(field);
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    removeError(field) {
        field.classList.remove('error');
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await this.sendFormData(data);
            if (response.success) {
                this.showSuccess('Mesajınız başarıyla gönderildi!');
                this.form.reset();
            } else {
                throw new Error('Form gönderilemedi');
            }
        } catch (error) {
            this.showError(this.form, 'Bir hata oluştu. Lütfen tekrar deneyin.');
        }
    }

    async sendFormData(data) {
        // Burada gerçek API çağrısı yapılacak
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ success: true });
            }, 1000);
        });
    }

    showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        this.form.appendChild(successDiv);

        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
}

// Form sınıfını başlat
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm('contactForm');
}); 