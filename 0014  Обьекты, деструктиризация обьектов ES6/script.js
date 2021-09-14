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

const { border, bg } = options.colors; //* Деструктуризация, это когда мы вытягуем значение с обьекта или масива и создаем отдельную перменную с этим значением
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


//* Тест перебора обьекта
const appartment = {
    cabinet: ["chair", "table", "laptop"],
    living: "sofa",
    kitchen: {
        top: "hernya",
        mid: "jest",
        low: "floor"
    },
    bedroom: "bed"
}

for (let key in appartment) {

    if( typeof appartment[key] === "object" ) {
         for (let i in appartment[key]) {
             console.log(`Свойство ${i}, имеет значение ${appartment[key][i]}`);
         } 
         } else {
            console.log(`Свойство ${key}, имеет значение ${appartment[key]}`);
    }
    
}