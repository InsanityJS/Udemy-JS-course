'use strict';

const category = 'toys';
//!старый способ обьединения строк
// console.log('https://someurl.com/' + category); //*конкатенация строк(обьединение)

console.log(`https://someurl.com/${category}/kids`); //*Интерполяция

const user = 'Maks';

alert(`Привет, ${user}`);