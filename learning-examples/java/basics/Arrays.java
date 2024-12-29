public class Arrays {
    public static void main(String[] args) {
        // Tek boyutlu dizi
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Dizi oluşturma
        String[] fruits = new String[3];
        fruits[0] = "Elma";
        fruits[1] = "Armut";
        fruits[2] = "Muz";
        
        // Çok boyutlu dizi
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        // Dizi üzerinde iterasyon
        System.out.println("Sayılar:");
        for (int number : numbers) {
            System.out.println(number);
        }
        
        // Dizi metodları
        java.util.Arrays.sort(numbers);
        int index = java.util.Arrays.binarySearch(numbers, 3);
        
        // Matris işlemleri
        System.out.println("\nMatris:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
        
        // ArrayList kullanımı
        java.util.ArrayList<String> list = new java.util.ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("JavaScript");
        
        System.out.println("\nProgramlama Dilleri:");
        for (String lang : list) {
            System.out.println(lang);
        }
    }
} 