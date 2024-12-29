// Vadesiz hesap
public class CheckingAccount extends AbstractBankAccount {
    private double overdraftLimit;

    public CheckingAccount(String ownerName, double initialBalance, double overdraftLimit) {
        super(ownerName, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(amount + " TL yatırıldı. Yeni bakiye: " + balance + " TL");
        } else {
            throw new IllegalArgumentException("Geçersiz miktar");
        }
    }

    @Override
    public void withdraw(double amount) {
        if (amount > 0 && (balance + overdraftLimit) >= amount) {
            balance -= amount;
            System.out.println(amount + " TL çekildi. Yeni bakiye: " + balance + " TL");
        } else {
            throw new IllegalArgumentException("Geçersiz miktar veya kredi limiti aşıldı");
        }
    }

    @Override
    public double calculateInterest() {
        return 0; // Vadesiz hesapta faiz yok
    }

    @Override
    public String getAccountInfo() {
        return String.format("Vadesiz Hesap - Hesap No: %s, Sahibi: %s, Bakiye: %.2f TL, Kredi Limiti: %.2f TL",
                accountNumber, ownerName, balance, overdraftLimit);
    }
} 