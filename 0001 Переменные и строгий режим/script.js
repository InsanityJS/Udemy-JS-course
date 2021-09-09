'use strict';

let number = 5; //название переменной не может начинатся с цифры и спецсимвоал кроме($ и _)
// let 5number = 12; // неверное название
const leftBorderWidth = 1; //переменные обьявляют при помощью Camel case
//название переменных зависят от регистра, то есть "number" и "Number" это разные переменные

number = 10;
console.log(number);

const obj = {
    a: 50
}

obj.a = 100;
console.log(obj);
// константу изменят нельзя, но по факту в js нету прямых констант и уже данные
// константы в обьекте изменять можно, пример выше
console.log(name);
var name = 'Vasya';
// проблема такой переменной, что var существует до того как обьявлена в коде

{
    let result = 50;
    const task = false;
    var line = 12;
}

console.log(line);
console.log(result);
console.log(task);
// const и let существуют внутри чего то и добраться к ним можно только оттуда где они созданы
// var же существует везде
