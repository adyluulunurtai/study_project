let numberOfFilms = prompt("сколько фильмов вы уже посмотрели", '');

let personalMovieDb = {
    'count' : numberOfFilms,
    'movies' : {},
    'actors' : {},
    'genres' : [],
    'privat' : false
}
let a = prompt("один из последних фиильмов" , '');
let b = prompt("дайте оценку" , '');

personalMovieDb.movies[a] = "ddd";

console.log(personalMovieDb);