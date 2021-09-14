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
//* эту функцию закладывать в аргументов той функции после которой она будет вызвана
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done(){
    console.log("Я прошел этот урок");
}
learnJS("Javascript", done);