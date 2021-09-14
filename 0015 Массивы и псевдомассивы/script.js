"use strict";


const arr = [1, 2, 3, 5, 8];
// arr[99] = 48;
// console.log(arr.length);  //* показывает длинну массива, но показывает ее так индекс+1

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}) //* Перебор массива с помощью forEach

// arr.pop(); //* удаляет последнее значение в массиве
// arr.push(12); //* добавляет в конец массива значение
// console.log(arr);

// for (let i = 0; i < arr.length; i++) { //* Цикл который перебирает массив
//     console.log(arr[i]);
// }

for (let  value of arr) { //* for of - еще один метод переборки массива, такой метод работает только с массивами
    console.log(value);
}

const str = prompt('','');
const products = str.split(', '); //* Метод split позволяет сформировать массив из строк отфильтровывая его через любой знак в условии
// console.log(products);
products.sort(); //* метод sort сортирует данные по порядку, но в строчном варианте (1, 12, 17, 2, 23, 4)
console.log(products.join(";")); //*метод join позвоялет из массива сделать строку с разделителем, который будет в условии

const arrNext = [7, 1, 54, 12, 22, 33];

function compareNum(a, b) { //* шаблон для сортировки чисел по порядку
    return a - b;
}
arrNext.sort(compareNum);
console.log(arrNext);