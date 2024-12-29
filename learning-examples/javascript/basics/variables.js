// Değişken Türleri ve Tanımlama Örnekleri

// let - değiştirilebilir değişkenler
let name = "Mert";
let age = 25;
let isStudent = true;

// const - sabit değişkenler
const PI = 3.14159;
const DAYS_IN_WEEK = 7;

// var - eski stil değişken tanımlama (artık önerilmiyor)
var oldVariable = "eski stil";

// Değişken türleri
let number = 42;                    // Number
let text = "Merhaba Dünya";        // String
let isActive = true;               // Boolean
let nullValue = null;              // Null
let undefinedValue;                // Undefined
let array = [1, 2, 3];            // Array
let object = {                     // Object
    name: "Mert",
    age: 25
};

// Template literals
let greeting = `Merhaba ${name}, yaşınız ${age}`;

// Değişken kapsamı örneği
{
    let blockScoped = "Sadece blok içinde erişilebilir";
    const BLOCK_CONSTANT = "Sabit değer";
    console.log(blockScoped);      // Erişilebilir
}
// console.log(blockScoped);       // Hata verir - erişilemez 