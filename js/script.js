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

const a = prompt('Один из последних просмотреных фильмов?', ''),
    b = prompt('На сколько оцениваете его?'),
    c = prompt('Один из последних просмотреных фильмов?', ''),
    d = prompt('На сколько оцениваете его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB.movies);