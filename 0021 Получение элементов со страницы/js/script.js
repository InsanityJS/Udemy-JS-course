'use strict';


const box = document.getElementById("box"); //* в метод getElementById мы передаем id "box"

console.log(box);


const btns = document.getElementsByTagName('button')[1]; //* Обращаемся не ко всему псевдомассиву а к конкретнемоу эелементу

console.log(btns[1]); //* Другой способ

const circles = document.getElementsByClassName('cirlce');
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector(".hear");
console.log(oneHeart);