"use script";

//* Обработчик событий это функция которая срабатывает как только событие произошло
//* Его можно обьявить тремя способами:
//* Первый способ непосредственно в файле HTML на том желементе с которым будет рабоать пользователь
//* Второй способ в скриптовом файле через дом-дерево обьявив переменную и на нее прикрепить обработчик, пример ниже
const btn = document.querySelector("button"),
    overlay = document.querySelector(".overlay");

// btn.onclick = function() {
//     alert('Click');
// }
//* У этого способа есть проблема, что если мы еще раз назначим его он переназнчит предыдущий обработчик и его удалить нельзя удалить
//* Третий спсособ через методы addEventListener() и removeEventListener() через него можно добавлять много обработчиков на переменную

// btn.addEventListener('click', () => {  
//     alert('Click');
// });

//* сюда мы еще можем добавлять событые через которое мы мозжем работаь с переменной(удалят ее при событии или покрасить и т.д) пример ниже

// btn.addEventListener('click', (e) => {  
//     e.target.style.backgroundColor = "blue";
// });


// let i = 0;
// const deleteElement = (e) => {
//    console.log(e.target);
//     i++;
//     if (i == 1){
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);
//* С помощью такой конструкции мы прекратили обработку событий тогда когда нам нужно, то есть после первого клика



const deleteElement = (e) => {
    console.log(e.Target);
    console.log(e.type);
}
btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement); //* Тут мы видим всплытие событий, что вначале всегда всплывает вложеный эелемент а потом его родитель

const link = document.querySelector("a");

link.addEventListener('click', function(event) {
    event.preventDefault(); //* так мы отменяем дефолтное действие в браузере и можем назначить свое действие

    console.log(event.target);
});