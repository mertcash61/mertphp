// Fonksiyon Tanımlama ve Kullanım Örnekleri

// Temel fonksiyon tanımlama
function greet(name) {
    return `Merhaba ${name}!`;
}

// Ok fonksiyonu (Arrow Function)
const multiply = (a, b) => a * b;

// Varsayılan parametreli fonksiyon
function welcome(name = "Ziyaretçi") {
    console.log(`Hoş geldin ${name}`);
}

// Rest parametreli fonksiyon
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Callback fonksiyonu
function processUser(callback) {
    const user = {
        name: "Mert",
        age: 25
    };
    callback(user);
}

// Higher Order Function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Bu fonksiyon hemen çalışır");
})();

// Async Function
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hata:', error);
    }
}

// Fonksiyon kullanım örnekleri
console.log(greet("Mert"));                    // Merhaba Mert!
console.log(multiply(5, 3));                   // 15
welcome();                                     // Hoş geldin Ziyaretçi
console.log(sum(1, 2, 3, 4, 5));              // 15

processUser((user) => {
    console.log(`İşlenen kullanıcı: ${user.name}`);
});

const double = createMultiplier(2);
console.log(double(5));                        // 10 