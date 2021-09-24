"use script";
//* Существует 6 событий для мобильных устройств
//! touchstart - при касание
//! touchmove - при движение по экрану
//! touchend - когда касание закончилось
//! touchenter - при ведение пальца по экрану и срабатывает на элементе
//! touchleave - при ведение пальца по экрана и срабатывает по выходу из элемента
//! touchcancel - при ведение пальца по экарун и срабатывает когда мы выходим за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        console.log('Start');
        console.log(event.changedTouches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();

        console.log(event.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (event) => {
    //     event.preventDefault();

    //     console.log('End');
    // });
});

//* При работе с сенсором есть три способа взаимодействовать DOM деревом
//! touches
//! targetTouches
//! changedTouches - список пальцев которые участвуют в событии то есть если касаний три на событые и при отведение одного пальца, нам это сообщит

