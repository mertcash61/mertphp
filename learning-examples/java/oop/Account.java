// Ana hesap arayüzü
public interface Account {
    void deposit(double amount);
    void withdraw(double amount);
    double getBalance();
    String getAccountInfo();
} 