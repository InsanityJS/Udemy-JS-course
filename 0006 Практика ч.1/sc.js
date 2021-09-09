"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("Один из последних просмотреных фильмов",""),
    b = prompt("Оцените его",""),
    c = prompt("Один из последних просмотреных фильмов",""),
    d = prompt("Оцените его","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
