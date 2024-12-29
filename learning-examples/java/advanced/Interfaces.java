// Arayüz ve çoklu kalıtım örneği
public class Interfaces {
    // İlk arayüz
    public interface Drawable {
        void draw();
        default void clear() {
            System.out.println("Temizleniyor...");
        }
    }
    
    // İkinci arayüz
    public interface Resizable {
        void resize(int width, int height);
    }
    
    // Arayüzleri uygulayan sınıf
    public static class Shape implements Drawable, Resizable {
        private String name;
        private int width;
        private int height;
        
        public Shape(String name, int width, int height) {
            this.name = name;
            this.width = width;
            this.height = height;
        }
        
        @Override
        public void draw() {
            System.out.println(name + " çiziliyor... Boyut: " + width + "x" + height);
        }
        
        @Override
        public void resize(int width, int height) {
            this.width = width;
            this.height = height;
            System.out.println("Yeni boyut: " + width + "x" + height);
        }
    }
    
    // Fonksiyonel arayüz
    @FunctionalInterface
    public interface Calculable {
        double calculate(double x, double y);
    }
    
    public static void main(String[] args) {
        Shape rectangle = new Shape("Dikdörtgen", 100, 50);
        rectangle.draw();
        rectangle.resize(200, 100);
        rectangle.clear();
        
        // Lambda ifadesi ile fonksiyonel arayüz kullanımı
        Calculable add = (x, y) -> x + y;
        Calculable multiply = (x, y) -> x * y;
        
        System.out.println("Toplam: " + add.calculate(5, 3));
        System.out.println("Çarpım: " + multiply.calculate(5, 3));
    }
} 