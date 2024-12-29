public class ExceptionHandling {
    // Özel exception sınıfı
    public static class InvalidAgeException extends Exception {
        public InvalidAgeException(String message) {
            super(message);
        }
    }
    
    // Exception fırlatan metod
    public static void validateAge(int age) throws InvalidAgeException {
        if (age < 0) {
            throw new InvalidAgeException("Yaş negatif olamaz!");
        }
        if (age > 120) {
            throw new InvalidAgeException("Geçersiz yaş değeri!");
        }
    }
    
    // Try-with-resources örneği
    public static void readFile(String filename) {
        try (java.io.BufferedReader reader = new java.io.BufferedReader(
                new java.io.FileReader(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (java.io.IOException e) {
            System.out.println("Dosya okuma hatası: " + e.getMessage());
        }
    }
    
    public static void main(String[] args) {
        // Try-catch örneği
        try {
            validateAge(-5);
        } catch (InvalidAgeException e) {
            System.out.println("Hata: " + e.getMessage());
        }
        
        // Multiple catch örneği
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Dizi indeks hatası: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Genel hata: " + e.getMessage());
        } finally {
            System.out.println("Finally bloğu her zaman çalışır");
        }
        
        // Dosya okuma örneği
        readFile("test.txt");
    }
} 