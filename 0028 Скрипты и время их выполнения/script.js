"use script";
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, "Hello"); //*синтаксис таков, что она принимает функцию которая должна запустится через какой то промежуток времени, время ставится в конце через запятую и указывается в милисекундах, а третим аргументом мы передали аргумент уже из самой функции

// const timeId = setTimeout(logger, 2000);

// clearInterval(timeId); //* Так мы сбросили наш таймут и он не запустился


// function logger() {
//     console.log('text');
// } //* другой синтаксис

// const btn = document.querySelector('.btn');
// let timerId, //* Обьявили переменнуб\ю глобально, чтобы с ней работать везде
//     i = 0;


// btn.addEventListener('click', () => {
//     // const timeId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });



// function logger() {
//     console.log('text');
//     i++;
//     if (i === 3) {
//         clearInterval(timerId);
//     }
// } //* Создали функцию которая через время выключает наш сеттаймаут

// let id = setTimeout(function log() {
//     console.log("hello");
//     id = setTimeout(log, 500);
// }, 500); //* Рекурсия, тут все выполняется бесконечно, как и сетинтервал

//! Практика

const btn = document.querySelector('.btn');

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);
