"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};
// const copy = obj; //* тут дается ссылка на обьект, а не передается сам обьект, а в примитивных типах данных передается значение

// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) { //! Мы создали функцию которая копирует обьект но поверхностно не завхватывая другие уровни, оно их передает ссылкой
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const number = {
    a: 2,
    b: 5,
    c: {
        y: 8,
        x: 12
    }
};

const newNumber = copy(number);

newNumber.a = 44;

console.log(newNumber);
console.log(number);



const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(number, add)); //! Создает копию обьекта "number" и добавляет в него данные из еще одного обьекта

const newObjTest = Object.assign({}, add);

newObjTest.d = 505;
//* тест метода
console.log(add);
console.log(newObjTest);

const oldArr = ["a", "vb", "asda"];
const newArr = oldArr.slice(); //! Создание копии массива

newArr[2] = "change"

console.log(oldArr);
console.log(newArr);

const video = ['youtube', 'vimeo', 'twitch'],
    blogs = ['wordpress', 'blogger', 'medium'],
    internet = [...video, ...blogs, 'vk', 'facebook']; //* Spread оператор '...' помогает развернут в новом массиве данные из других массивов

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 6, 12];

log(...num);


const array = ['petro', 'misha', 'grisha'];

const newArray = [...array]; //! Тут Spread оператор помогает сделать поверхностную копию массива

newArray[1] = 'Natalya';
console.log(array);
console.log(newArray);


const gg = {
    one: 1,
    two: 2,
};

const newObj = {...gg}; //* Spread оператор работает и для обьектов, только его ввели в ES8
console.log(gg);
console.log(newObj);
