'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector(".wrapper"),
      hearts = wrapper.querySelectorAll('.heart'), //* Имея доступ к родителю через document, для єелементов внутри его мы можем указывать родителя и не document
      oneHeart = wrapper.querySelector(".heart");
      


// box.style.backgroundColor = "blue"; //* Таким образом можно изменить стиль выбраного элемента
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px"; //* Таким образом сразу можно указать все стили в одну строку

btns[1].style.borderRadius = "100%"; //* Тут мы обращаемся к конкретной кнопке, чтобы изменить у нее стиль, ко всем к кнопка мы таким образов обратиться не можем, т.к это псевдомассив
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) { //* Тут мы перебираем все что имеет class .heart  и меняем всем элементам под этим классам стили. это можно использовать только querySelector и All
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => { //* Но лучше работаь через метод ForEach
    item.style.backgroundColor = "blue";
});


const div = document.createElement('div'); //* Создание тега
const text = document.createTextNode('Обычный текст')


div.classList.add('black'); //* Добавление класса к элементу

// //! метод append добавляет к дому элементы и они буду отображаться на страницах сайта с которым работаем но только в конце куда мы добавили
// document.body.append(div); //* Работа с DOM тут мы добавили в DOM нашего сайта эелемент, то есть в тег body мы поместили созданный нами в этом скрипте тег div и теперь у нас этот тег отображается на сайте

// document.querySelector('.wrapper').append(div); //* Способ прри котором мы сразу обращаемся к выбранному элемнту и добавляем к нему наш тег

// //! метод prepend добавляет уже в начало элемента с которым работаем
// wrapper.prepend(div);

// hearts[0].before(div); //* добавляет перед элементом
// hearts[0].after(div); //* добавляет после элемента

// circles[0].remove(); //* удаляет элемент со страницы

// hearts[0].replaceWith(circles[0]); //* заменяет элемент на странице


//! Старые конструкци
// wrapper.appendChild(div);

wrapper.insertBefore(div, hearts[0]); //* добавляет перед элементом Он заменял нам три метода: before, after и prepend

// wrapper.removeChild(hearts[1]); //* удаляет элемент со страницы 
wrapper.replaceChild(circles[0], hearts[0]); //* заменяет элемент на странице


//! Добавление данных на странницу
div.innerHTML = "<h1>Hello</h1>"; //* Добавляет на нашу страницу в выбраный элемент HTML-структуру
// div.innerText = "Text"; //* Добавляет на нашу страницу в выбраный элемент текст
// div.textContent = "ganab"; //* Добавляет на нашу страницу в выбраный элемент текст

// div.insertAdjacentHTML("beforebegin", "<h2>test</h2>"); //* Добавляет структуру перед элементом
// div.insertAdjacentHTML("beforeend", "<h2>test</h2>"); //* Добавляет структуру в конце элемента
// div.insertAdjacentHTML("afterbegin", "<h2>test</h2>"); //* Добавляет структуру в начале эелемента
// div.insertAdjacentHTML("afterend", "<h2>test</h2>"); //* Добавляет структуру после элемента