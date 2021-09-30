"use strict";

// const now = new Date(); //* Содание даты и пощение ее в переменную, показывает текущую даты и время
const now = new Date();//! Все даты которые мы создаем конвертируются в милисекунды, дата начинается с 1970го года. Месяца и дни начинаются с 0
    // new Date.parse('2020-09-30'); //* Еще один способ создания даты
//! Методы get - получения
// console.log(`Текущий год: ${now.getFullYear()}`); //* метод показывает текущий год
// console.log(`Текущий номер месяца: ${now.getMonth()}`); //* получение текущего месяца, начинается с 0
// console.log(`Текущее число месяца: ${now.getDate()}`); 
// console.log(`Текущий час по местному времени: ${now.getHours()}`);
// console.log(`Текущий час по времени UTC: ${now.getUTCHours()}`);
// console.log(`Текущая минута: ${now.getMinutes()}`);
// console.log(`Текущая милисекунда ${now.getMilliseconds()}`);
// console.log(`Текущий день недели: ${now.getDay()}`); //* Получения дня недели, начинатся с воскресенья(0)
//! Все эти методы работают с местным временем

// let dateNumber = now.getMonth();

// console.log(`Сейчас ${now.getFullYear()}.${dateNumber + 1}.${now.getDate()} время: ${now.getHours()}.${now.getMinutes()}`);

// console.log(now.getTimezoneOffset()); //* получаем разницу с UTC в минутах
// console.log(now.getTime()); //* Показывает количесвто милисекунд прошедших со дня стампа(1970)

//! Методы set - установка
// now.setHours(19);
console.log(now);


let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;

}
let end = new Date();

console.log(`Цикл отработал за ${end - start} милисекунд`);