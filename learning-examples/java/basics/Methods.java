public class Methods {
    // Temel metod
    public static void sayHello() {
        System.out.println("Merhaba!");
    }
    
    // Parametreli metod
    public static void greet(String name) {
        System.out.println("Merhaba " + name);
    }
    
    // Dönüş değeri olan metod
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Overloaded metod
    public static double add(double a, double b) {
        return a + b;
    }
    
    // Varargs kullanımı
    public static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    // Recursive metod
    public static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        // Metodları çağırma
        sayHello();
        greet("Mert");
        
        System.out.println("Toplam: " + add(5, 3));
        System.out.println("Ondalıklı toplam: " + add(3.14, 2.86));
        
        System.out.println("Toplam: " + sum(1, 2, 3, 4, 5));
        System.out.println("Faktöriyel: " + factorial(5));
    }
} 