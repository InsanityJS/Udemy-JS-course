'use strict';

const numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из последних просмотренных фильмов',''),
    b = prompt('На сколько оцените его',''),
    c = prompt('Один из последних просмотренных фильмов',''),
    d = prompt('На сколько оцените его','');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);
 