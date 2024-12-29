// Soyut banka hesabı sınıfı
public abstract class AbstractBankAccount implements Account {
    protected String accountNumber;
    protected String ownerName;
    protected double balance;
    protected static int totalAccounts = 0;

    public AbstractBankAccount(String ownerName, double initialBalance) {
        this.accountNumber = generateAccountNumber();
        this.ownerName = ownerName;
        this.balance = initialBalance;
        totalAccounts++;
    }

    protected String generateAccountNumber() {
        return "ACC" + System.currentTimeMillis();
    }

    @Override
    public double getBalance() {
        return balance;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public abstract double calculateInterest();
} 