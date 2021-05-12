"use strict";

//* Методы это вспомогательные функции
//* Свойства это вспомогательные значения

const str = "test";
const arr = [1, 2, 4];

console.log(str.length); //* Свойство "length" показывает какой длинны строка, массив и т.д.
console.log(arr.length);

console.log(str[2]); //* позволяет нам посмотреть конкретный символ в строке

console.log(str.toUpperCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); //* Метод "indexOf" показывает нам где находится та или иная буква, слово

const logg = "Hello world";

console.log(logg.slice(6, 11)); //* Метод "slice" вырезает данные со строки
//* со значения и до значения которые указаны в аргументе

console.log(logg.substring(6, 11)); //* Метод "substring" суть такая же как и "slice"
//* только этот метод не работает с отрицательными значениями

console.log(logg.substr(6, 5)); //* В этом методе мы указываем с какого символа вырезать и сколько символов

//! Math библиотека котоая работает с числами

const num = 12.2;
console.log(Math.round(num)); //* метод округления числа

const size = "12.2px";
console.log(parseInt(size)); //* Метод переобразующий строку в числовой тип данных
console.log(parseFloat(size)); //* Метод переобразующий строку в числовой тип данных и оставляя дробную часть
