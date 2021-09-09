"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red",
    },
    makeTest: function () {
        //* создание собственнго метода
        console.log("Test");
    },
};
options.makeTest();

const { border, bg } = options.colors; //* Деструктуризация, это когда мы вытягуем занчение с обьекта или масива и создаой отдельную перменную с этим значением
console.log(border);
//console.log(options.name);

//delete options.name; //* метод удаление данных из обьектов

//console.log(options);
//let counter = 0; //* Эта перменная создана для того, чтобы посчитать сколько ключей в обьекте, но работает криво
//for (let key in options) {
//    //* Способ перебора обьекта
//    if (typeof options[key] === "object") {
//        for (let i in options[key]) {
//            console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
//            counter++;
//        }
//    } else {
//        console.log(`Свойство ${key}, имеет значение ${options[key]}`);
//        counter++;
//    }
//}
//console.log(counter);
console.log(Object.keys(options).length); //* Этот способ лучше, он сразу пишет адекватно, но считает то что на верхнем уровне
