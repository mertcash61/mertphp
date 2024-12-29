public class Loops {
    public static void main(String[] args) {
        // for döngüsü
        System.out.println("For Döngüsü:");
        for (int i = 0; i < 5; i++) {
            System.out.println("Sayı: " + i);
        }
        
        // while döngüsü
        System.out.println("\nWhile Döngüsü:");
        int count = 0;
        while (count < 3) {
            System.out.println("Count: " + count);
            count++;
        }
        
        // do-while döngüsü
        System.out.println("\nDo-While Döngüsü:");
        int x = 0;
        do {
            System.out.println("X: " + x);
            x++;
        } while (x < 3);
        
        // foreach döngüsü
        System.out.println("\nForeach Döngüsü:");
        String[] fruits = {"Elma", "Armut", "Muz"};
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // İç içe döngüler
        System.out.println("\nİç İçe Döngüler:");
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.print(i * j + " ");
            }
            System.out.println();
        }
        
        // break ve continue
        System.out.println("\nBreak ve Continue:");
        for (int i = 0; i < 10; i++) {
            if (i == 3) continue;
            if (i == 7) break;
            System.out.println(i);
        }
    }
} 