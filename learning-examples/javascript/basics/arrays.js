// Dizi İşlemleri ve Metodları

// Dizi oluşturma
let fruits = ['elma', 'armut', 'muz'];
let numbers = Array.from({length: 5}, (_, i) => i + 1);

// Dizi metodları
// push: sona eleman ekleme
fruits.push('portakal');
console.log(fruits);  // ['elma', 'armut', 'muz', 'portakal']

// pop: sondan eleman çıkarma
let lastFruit = fruits.pop();
console.log(lastFruit);  // 'portakal'

// map: her eleman için işlem
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter: filtreleme
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]

// reduce: toplama/birleştirme
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15

// find: eleman bulma
let found = fruits.find(fruit => fruit.startsWith('a'));
console.log(found);  // 'armut'

// some: koşul kontrolü
let hasLongName = fruits.some(fruit => fruit.length > 4);
console.log(hasLongName);  // true

// every: tüm elemanlar için koşul kontrolü
let allShortNames = fruits.every(fruit => fruit.length < 6);
console.log(allShortNames);  // false

// sort: sıralama
fruits.sort();
console.log(fruits);

// includes: eleman kontrolü
console.log(fruits.includes('elma'));  // true

// Dizi kopyalama
let fruitsCopy = [...fruits];  // Spread operator
let numbersCopy = Array.from(numbers); 