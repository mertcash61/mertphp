<?php
// Değişken tanımlama
$name = "Mert";
$age = 25;
$isStudent = true;
$height = 1.78;
$hobbies = ["coding", "reading", "gaming"];

// Sabit tanımlama
define("PI", 3.14159);
const MAX_USERS = 100;

// Değişken tipleri
var_dump($name);      // string
var_dump($age);       // integer
var_dump($isStudent); // boolean
var_dump($height);    // float
var_dump($hobbies);   // array

// String birleştirme
echo "Merhaba, ben " . $name . "\n";
echo "Yaşım: $age\n";

// Array işlemleri
$hobbies[] = "swimming"; // Diziye eleman ekleme
print_r($hobbies); 