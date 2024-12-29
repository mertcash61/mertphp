class FormHandler {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.initializeForm();
    }

    initializeForm() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.addInputValidation();
    }

    addInputValidation() {
        this.form.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        
        if (field.required && !value) {
            return this.showError(field, 'Bu alan zorunludur');
        }

        if (field.type === 'email' && !this.isValidEmail(value)) {
            return this.showError(field, 'Geçerli bir email adresi giriniz');
        }

        return true;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showError(field, message) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    clearError(field) {
        field.classList.remove('error');
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            await this.submitForm();
        }
    }

    validateForm() {
        let isValid = true;
        this.form.querySelectorAll('input, textarea').forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        return isValid;
    }

    async submitForm() {
        try {
            const formData = new FormData(this.form);
            const response = await fetch(this.form.action, {
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
            this.showError(this.form, error.message);
        }
    }
} 