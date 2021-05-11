'use strict';

if (4 === 9) {
    console.log('ok');
} else {
    console.log('false');
} //* Условие приравнивается всегда к булиновому значению

const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('more');
} else {
    console.log('true');
}

//! Синтаксис через тернарный оператор

(num === 50) ? console.log('ok!') : console.log('erorr');
//* "?" единственный тернарный оператор в JS, а тернарный он, 
//*потому что в нем участвует три аргумента: условие, и два варианта выполнения условия

switch (num) {
    case 49:
        console('error');
        break;
    case 100:
        console.log('error');
        break;
    case 505:
        console.log('true');
        break;
    default:
        console.log('not found');
        break;

} //! switch работает на строгое сравнение