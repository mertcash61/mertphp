// Test sınıfı
public class BankDemo {
    public static void main(String[] args) {
        try {
            // Hesaplar oluştur
            SavingsAccount savings = new SavingsAccount("Mert Doğanay", 5000, 0.05);
            CheckingAccount checking = new CheckingAccount("Ali Yılmaz", 2000, 1000);

            // Tasarruf hesabı işlemleri
            System.out.println(savings.getAccountInfo());
            savings.deposit(1000);
            savings.withdraw(500);
            System.out.println("Yıllık Faiz: " + savings.calculateInterest() + " TL\n");

            // Vadesiz hesap işlemleri
            System.out.println(checking.getAccountInfo());
            checking.deposit(500);
            checking.withdraw(3000); // Kredi limitini kullanır
            
        } catch (IllegalArgumentException e) {
            System.out.println("Hata: " + e.getMessage());
        }
    }
} 