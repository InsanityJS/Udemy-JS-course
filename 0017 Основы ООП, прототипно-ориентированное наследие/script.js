"use strict";

let str = 'some';

let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }

    
};

const jonh = {
    health: 100,
};

// jonh.__proto__ = soldier; //* Старый способ прототипно указать john что он еще берет данные у soldier


const john = Object.create(soldier); //* Создание обьекта в котором мы сразу указываем его прототип

Object.setPrototypeOf(jonh, soldier); //* Новый способ установки прототипа

console.log(jonh); //* но это все не отображается в этом обьекте, но если указать ключ, то мы увидим значения, все из за того что все данные которые мы получаем они прототипны и нахоться выше по уровню
console.log(jonh.armor);
jonh.sayHello();


