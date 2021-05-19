// console.log(personalMovieDB.genres);
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// console.log(personalMovieDB.genres);
// }
// writeYourGenres();

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// options.makeTest();
// const {
//     border,
//     bg
// } = options.colors;
// console.log(border, bg);

// console.log(Object.keys(options).length); //счетчик свойств объекта

// console.log(options.name);

// delete options.name; // удаляет свойство объекта
// console.log(options);
// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === `object`) {
//         for (let i in (options[key])) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);


// let arr = [2, 14, 25, 10];

// console.log(arr.sort(compareNum));

// function compareNum(a, b) {
//     return a- b;
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

const man = {
    name: 'Andrii',
    secondName: 'Yevtushenko',
    age: 39,
    family: {
        douter1: 'Anna',
        douter2: 'Anastasiya',
        son: 'Yaroslav',
        wife: 'Olena',
        parents: {
            wifeFather: 'Oleksandr',
            wifeMother: 'Svitlana',
            myFather: 'Mykola'
        }
    }
};
// console.log(Object.keys(man.family).length);

// for (let key in man) {
//     if (typeof (man[key]) === 'object') {
//         for (let i in man[key]) {
//             console.log(`${i}, xxx ${man[key][i]}`);
//             if (typeof (man[key][i]) === 'object') {
//                 for (let a in man[key][i]) {
//                     console.log(`${a}, yyy ${man[key][i][a]}`);
//                 }
//             }
//         }

//     } else {
//         console.log(`${key}, blia ${man[key]}`);
//     }
// }

// let arr = [2, 4, 5, 10];
// arr.push(11);
// console.log(arr);

// for (let value of arr) {
//     console.log(value);
// }
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });