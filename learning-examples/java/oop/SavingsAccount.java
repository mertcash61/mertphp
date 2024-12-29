// Tasarruf hesabı
public class SavingsAccount extends AbstractBankAccount {
    private double interestRate;
    private static final double MINIMUM_BALANCE = 1000;

    public SavingsAccount(String ownerName, double initialBalance, double interestRate) {
        super(ownerName, initialBalance);
        this.interestRate = interestRate;
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
        if (amount > 0 && (balance - amount) >= MINIMUM_BALANCE) {
            balance -= amount;
            System.out.println(amount + " TL çekildi. Yeni bakiye: " + balance + " TL");
        } else {
            throw new IllegalArgumentException("Geçersiz miktar veya minimum bakiye sınırı aşıldı");
        }
    }

    @Override
    public double calculateInterest() {
        return balance * interestRate;
    }

    @Override
    public String getAccountInfo() {
        return String.format("Tasarruf Hesabı - Hesap No: %s, Sahibi: %s, Bakiye: %.2f TL, Faiz Oranı: %.2f%%",
                accountNumber, ownerName, balance, interestRate * 100);
    }
} 