/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

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

function rememberMyFilms() {
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

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}
showMyDB(personalMovieDb.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
