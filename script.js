let numberOfFilms = prompt("сколько фильмов вы уже посмотрели");

let personalMovieDb = {
    'count' : numberOfFilms,
    'movies' : {},
    'actors' : {},
    'genres' : [],
    'privat' : false
}
let filmFromUser = prompt("один из последних фиильмов");
let gradeFilm = prompt("дайте оценку");

personalMovieDb[filmFromUser];
personalMovieDb[gradeFilm];
console.log(personalMovieDb);