public class Variables {
    public static void main(String[] args) {
        // Temel veri tipleri
        byte myByte = 127;
        short myShort = 32767;
        int myInt = 2147483647;
        long myLong = 9223372036854775807L;
        
        float myFloat = 3.14f;
        double myDouble = 3.14159265359;
        
        boolean isTrue = true;
        char myChar = 'A';
        
        // String (Referans tip)
        String myString = "Merhaba Java!";
        
        // Sabitler
        final double PI = 3.14159;
        
        // Tip dönüşümleri
        int intValue = (int) myDouble;
        double doubleValue = myInt;
        
        // Değişken değerlerini yazdırma
        System.out.println("byte değeri: " + myByte);
        System.out.println("short değeri: " + myShort);
        System.out.println("int değeri: " + myInt);
        System.out.println("long değeri: " + myLong);
        System.out.println("float değeri: " + myFloat);
        System.out.println("double değeri: " + myDouble);
        System.out.println("boolean değeri: " + isTrue);
        System.out.println("char değeri: " + myChar);
        System.out.println("String değeri: " + myString);
    }
} 