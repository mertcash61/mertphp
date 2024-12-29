<?php
// Temel fonksiyon
function sayHello($name) {
    return "Merhaba $name!";
}

// Varsayılan parametreli fonksiyon
function greet($name = "Ziyaretçi") {
    echo "Hoş geldin, $name\n";
}

// Referans ile parametre
function addNumber(&$number) {
    $number += 5;
}

// Değişken sayıda parametre
function sum(...$numbers) {
    return array_sum($numbers);
}

// Fonksiyonları çağırma
echo sayHello("Mert");
greet();
$num = 10;
addNumber($num);
echo $num; // 15
echo sum(1, 2, 3, 4, 5); // 15 