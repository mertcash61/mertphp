// Modern JavaScript Sınıfları

// Temel sınıf tanımı
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Instance metod
    sayHello() {
        return `Merhaba, ben ${this.name}`;
    }

    // Getter
    get birthYear() {
        return new Date().getFullYear() - this.age;
    }

    // Setter
    set birthYear(year) {
        this.age = new Date().getFullYear() - year;
    }

    // Statik metod
    static fromBirthYear(name, year) {
        return new Person(name, new Date().getFullYear() - year);
    }
}

// Kalıtım örneği
class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }

    study() {
        return `${this.name} ${this.school}'da okuyor`;
    }
}

// Private alan kullanımı
class BankAccount {
    #balance = 0;  // Private alan

    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

// Kullanım örnekleri
const person = new Person("Mert", 25);
console.log(person.sayHello());
console.log(person.birthYear);

const student = new Student("Ali", 20, "Üniversite");
console.log(student.study());

const account = new BankAccount("Mert");
account.deposit(1000);
console.log(account.getBalance()); 