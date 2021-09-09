"use strict";

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

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ""),
            b = prompt("На сколько оцените его", "");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log("Done!");
        } else {
            console.log("Error!");
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    
    if (numberOffilms < 10) {
    console.log("Просмотрено довольно мало фильмов");
    } else if (numberOffilms >= 10 && numberOffilms < 30) {
        console.log("Вы классический зритель");
    } else if (numberOffilms >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
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
        console.log(personalMovieDb);
    }
}
showMyDB(personalMovieDb.privat);

function writeYourGenres () {

    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDb.genres[i - 1] = genre;
    }
}

writeYourGenres();

