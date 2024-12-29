// Promise ve Asenkron İşlemler

// Temel Promise oluşturma
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    if (success) {
        resolve("İşlem başarılı!");
    } else {
        reject("Bir hata oluştu!");
    }
});

// Promise kullanımı
myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Async/Await ile Promise kullanımı
async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Veri çekme hatası:', error);
        throw error;
    }
}

// Promise.all kullanımı
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 2000));
const promise3 = fetch('https://api.example.com/data');

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values))
    .catch(error => console.error(error));

// Promise.race kullanımı
Promise.race([
    new Promise(resolve => setTimeout(() => resolve('hızlı'), 100)),
    new Promise(resolve => setTimeout(() => resolve('yavaş'), 500))
])
    .then(result => console.log(result));  // 'hızlı'

// Pratik örnek: Dosya okuma simülasyonu
function readFile(filename) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (filename.endsWith('.txt')) {
                resolve(`${filename} içeriği: Merhaba Dünya`);
            } else {
                reject(`${filename} okunamadı!`);
            }
        }, 1000);
    });
}

// Kullanım
readFile('test.txt')
    .then(content => console.log(content))
    .catch(error => console.error(error)); 