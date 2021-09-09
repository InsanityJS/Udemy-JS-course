<<<<<<< HEAD
"use strict";
=======
/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */
>>>>>>> c2606b5803ad8541bb7df419fd1040af366b7065

let numberOffilms;

function start() {
    numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOffilms == "" || numberOffilms == null || isNaN(numberOffilms)) {
        numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDb = {
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

<<<<<<< HEAD
function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ""),
            b = prompt("На сколько оцените его", "");
    
=======
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ""),
            b = prompt("На сколько оцените его", "");

>>>>>>> c2606b5803ad8541bb7df419fd1040af366b7065
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log("Done!");
        } else {
            console.log("Error!");
            i--;
        }
    }
}
<<<<<<< HEAD
rememberMyFilms();


function detectPersonalLevel() {
    
    if (numberOffilms < 10) {
    console.log("Просмотрено довольно мало фильмов");
=======

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOffilms < 10) {
        console.log("Просмотрено довольно мало фильмов");
>>>>>>> c2606b5803ad8541bb7df419fd1040af366b7065
    } else if (numberOffilms >= 10 && numberOffilms < 30) {
        console.log("Вы классический зритель");
    } else if (numberOffilms >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
<<<<<<< HEAD
detectPersonalLevel();

// function showMyDB () {
//     if (personalMovieDb.privat == false) {
//         console.log(personalMovieDb);
//     } else {
//         console.log("Hide database");
//     }
    
// }
// showMyDB();
function showMyDB (hidden) {
    if(!hidden) {
=======

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
>>>>>>> c2606b5803ad8541bb7df419fd1040af366b7065
        console.log(personalMovieDb);
    }
}
showMyDB(personalMovieDb.privat);

<<<<<<< HEAD
function writeYourGenres () {

    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDb.genres[i - 1] = genre;
    }
}

writeYourGenres();

=======
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
>>>>>>> c2606b5803ad8541bb7df419fd1040af366b7065
