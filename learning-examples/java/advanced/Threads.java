public class Threads {
    // Thread sınıfından türetme
    static class MyThread extends Thread {
        private String name;
        
        public MyThread(String name) {
            this.name = name;
        }
        
        @Override
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println(name + " çalışıyor: " + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    System.out.println(e.getMessage());
                }
            }
        }
    }
    
    // Runnable arayüzünü uygulama
    static class MyRunnable implements Runnable {
        private String name;
        
        public MyRunnable(String name) {
            this.name = name;
        }
        
        @Override
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println(name + " çalışıyor: " + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    System.out.println(e.getMessage());
                }
            }
        }
    }
    
    // Senkronize metod örneği
    static class Counter {
        private int count = 0;
        
        public synchronized void increment() {
            count++;
        }
        
        public int getCount() {
            return count;
        }
    }
    
    public static void main(String[] args) throws InterruptedException {
        // Thread sınıfı kullanımı
        MyThread thread1 = new MyThread("Thread 1");
        thread1.start();
        
        // Runnable arayüzü kullanımı
        Thread thread2 = new Thread(new MyRunnable("Thread 2"));
        thread2.start();
        
        // Lambda ile thread oluşturma
        Thread thread3 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Lambda Thread çalışıyor: " + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    System.out.println(e.getMessage());
                }
            }
        });
        thread3.start();
        
        // Ana thread'in diğer thread'leri beklemesi
        thread1.join();
        thread2.join();
        thread3.join();
        
        System.out.println("Tüm thread'ler tamamlandı!");
    }
} 