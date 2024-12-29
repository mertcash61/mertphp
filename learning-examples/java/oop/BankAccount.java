public class BankAccount {
    // Private değişkenler (encapsulation)
    private String accountNumber;
    private String ownerName;
    private double balance;
    private static int totalAccounts = 0;

    // Constructor
    public BankAccount(String ownerName, double initialBalance) {
        this.accountNumber = generateAccountNumber();
        this.ownerName = ownerName;
        this.balance = initialBalance;
        totalAccounts++;
    }

    // Private yardımcı metod
    private String generateAccountNumber() {
        return "ACC" + System.currentTimeMillis();
    }

    // Para yatırma metodu
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(amount + " TL yatırıldı. Yeni bakiye: " + balance + " TL");
        } else {
            throw new IllegalArgumentException("Geçersiz miktar");
        }
    }

    // Para çekme metodu
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println(amount + " TL çekildi. Yeni bakiye: " + balance + " TL");
        } else {
            throw new IllegalArgumentException("Geçersiz miktar veya yetersiz bakiye");
        }
    }

    // Getter metodları
    public double getBalance() {
        return balance;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    // Static metod
    public static int getTotalAccounts() {
        return totalAccounts;
    }

    // toString metodu override
    @Override
    public String toString() {
        return "Hesap Bilgileri:\n" +
               "Hesap No: " + accountNumber + "\n" +
               "Sahibi: " + ownerName + "\n" +
               "Bakiye: " + balance + " TL";
    }

    // Test için main metodu
    public static void main(String[] args) {
        try {
            // Hesap oluşturma
            BankAccount account1 = new BankAccount("Mert Doğanay", 1000);
            BankAccount account2 = new BankAccount("Ali Yılmaz", 500);

            // İşlemler
            System.out.println(account1);
            account1.deposit(500);
            account1.withdraw(200);

            System.out.println("\n" + account2);
            account2.deposit(1000);
            account2.withdraw(300);

            // Toplam hesap sayısı
            System.out.println("\nToplam hesap sayısı: " + getTotalAccounts());

        } catch (IllegalArgumentException e) {
            System.out.println("Hata: " + e.getMessage());
        }
    }
} 