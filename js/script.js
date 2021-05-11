let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
        const a = prompt('Один из последних просмотреных фильмов?', ''),
            b = prompt('На сколько оцениваете его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('enter error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('you have watched few movies');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert('you are a classic spectator');
    } else if (personalMovieDB.count > 30) {
        alert('you are movie buff');
    } else {
        alert('error');
    }
}
// detectPersonalLevel();

function showMyDb() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

// showMyDb();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt(`your favorite geners number ${i}`, ''));
    }

}
console.log(personalMovieDB.genres);
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
//     console.log(personalMovieDB.genres);
// }
writeYourGenres();