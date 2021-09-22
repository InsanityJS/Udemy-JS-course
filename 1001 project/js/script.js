/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
};
//* Переменные с данными сайта
const advertising = document.querySelector(".promo__adv"),
    adverItem = advertising.querySelectorAll("img"),
    posterBG = document.querySelector(".promo__bg"),
    genre = posterBG.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list");

//* Первое задание

//advertising.remove();
adverItem.forEach((item) => {
    item.remove();
});
//* Второе задание

genre.textContent = "драма";

//* Третье задание

posterBG.style.backgroundImage = "url(img/bg.jpg)";

//* Четвертое задание

movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
         <div class="delete"></div>
    </li>   
    `;
});
