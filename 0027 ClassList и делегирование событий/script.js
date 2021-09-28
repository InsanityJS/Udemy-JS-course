"use strict";

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.length); //* показывает сколько классов у элемента
// console.log(btns[0].classList.item(0)); //* показывает какой класс у элемента под таким индексом, который мы указываем в методе
// console.log(btns[1].classList.add('red')); //* добаввляет класс у элемента, можно дабавлять не один
// console.log(btns[0].classList.remove('blue')); //* удаляет
// console.log(btns[0].classList.toggle('blue')); //* переключает класс, если нет, добавляет, а есть есть то удаляет

// if (btns[1].classList.contains('red')) { //* Помогает нам проверить если класс у элемента и после этого мы можем динамически настраивать страницу
//     console.log('red');
// };

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) { //* contains проверка наличия класса
        btns[1].classList.add('red'); 
    } else {
        btns[1].classList.remove('red');
    } //* Добавляем и удаляем класс из элемента при клике
    // btns[1].classList.toggle('red'); //* Такой же способ через тогл

});


// console.log(btns[0].className); //* Устаревший метод просмотра классов у элемента, но выдает он это строкой

//! Делегирование событий
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") { //* Тут мы сделали так, что если кликаем по кнопке, то выполняется действие
        console.log('Say hello');

    };
}); //* Благодаря этому способу мы с легкоситью сможем динамически изменять страницу
