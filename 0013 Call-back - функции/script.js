"use strict";

function firsst() {
    // do something
    setTimeout(function()
    {
        console.log(1);

    }, 500);
}

function second() {
    console.log(2);
}

firsst();
second();

//* Суть callback - функции в том, чтобы она выполнилась после конретной функции, чтобы мы знали когда она вызовится
//* эту функцию закладывать в аргумент той функции после которой она будет вызвана
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done(){
    console.log("Я прошел этот урок");
}
learnJS("Javascript", done);


//* Тест callbacl функции
function calc(a, b) {
    return a + b;
    }

let yourResult;

function result(clb) {
    yourResult = calc(14, 15);
    clb();
}

function message() {
    console.log(`Ваш результат: ${yourResult}`);
}

result(message);



