// Kalıtım ve Polimorfizm örneği
public class Inheritance {
    // Ana sınıf
    public static abstract class Animal {
        protected String name;
        protected int age;
        
        public Animal(String name, int age) {
            this.name = name;
            this.age = age;
        }
        
        // Soyut metod
        public abstract void makeSound();
        
        // Normal metod
        public void displayInfo() {
            System.out.println("İsim: " + name + ", Yaş: " + age);
        }
    }
    
    // Alt sınıf
    public static class Dog extends Animal {
        private String breed;
        
        public Dog(String name, int age, String breed) {
            super(name, age);
            this.breed = breed;
        }
        
        @Override
        public void makeSound() {
            System.out.println("Hav hav!");
        }
        
        @Override
        public void displayInfo() {
            super.displayInfo();
            System.out.println("Irk: " + breed);
        }
    }
    
    // Alt sınıf
    public static class Cat extends Animal {
        private boolean isIndoor;
        
        public Cat(String name, int age, boolean isIndoor) {
            super(name, age);
            this.isIndoor = isIndoor;
        }
        
        @Override
        public void makeSound() {
            System.out.println("Miyav!");
        }
        
        public void scratch() {
            System.out.println(name + " tırmalıyor!");
        }
    }
    
    public static void main(String[] args) {
        Dog dog = new Dog("Karabaş", 3, "Golden");
        Cat cat = new Cat("Pamuk", 2, true);
        
        // Polimorfizm
        Animal[] animals = {dog, cat};
        
        for (Animal animal : animals) {
            animal.displayInfo();
            animal.makeSound();
            System.out.println();
        }
        
        // Özel metod çağırma
        cat.scratch();
    }
} 