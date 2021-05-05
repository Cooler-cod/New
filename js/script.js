// const name1 = "Ivan";
// alert(`Hello ${name1}`);

// let incr = 10,
//     decr = 10;

//     console.log(incr++);
//     console.log(incr);

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


for (let i = 1; i <= 2; i++) {
    const a = prompt('Один из последних просмотреных фильмов?', ''),
        b = prompt('На сколько оцениваете его?');

    if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
}
if (personalMovieDB.count < 10) {
    alert('you have watched few movies');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert('you are a classic spectator');
} else if (personalMovieDB > 30) {
    alert('you are movie buff');
} else {
    alert('error');
}

// const a = prompt('Один из последних просмотреных фильмов?', ''),
//     b = prompt('На сколько оцениваете его?'),
//     c = prompt('Один из последних просмотреных фильмов?', ''),
//     d = prompt('На сколько оцениваете его?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
console.log(personalMovieDB.movies);