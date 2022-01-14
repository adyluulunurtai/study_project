let numberOfFilms;

function start() {
    numberOfFilms = prompt("сколько фильмов вы уже посмотрели", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("сколько фильмов вы уже посмотрели", '');
    }
}
//start();

let personalMovieDb = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
}


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("один из последних фиильмов", '');
        let b = prompt("дайте оценку", '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log("done")
        } else {
            i--
        };

    };
};

//rememberMyFilms();

function detecPersonLevel() {
    if (personalMovieDb.count < 10) {
        console.log("prosmotreno malo filmov")
    } else if (personalMovieDb.count > 10) {
        console.log("klassi4eskii zritel")
    } else if (personalMovieDb.count > 30) {
        console.log("kinoman")
    } else {
        console.log('proizowla owibka')
    }
};

//detecPersonLevel();


function showMyDb() {
    if (personalMovieDb.privat == false) {
        console.log(personalMovieDb);
    }
}
showMyDb();

function writeGenres() {
    for (let i = 0; i < 3; i++) {

        personalMovieDb.genres.push(prompt(`ваш любимый жанр под номером ${i+1}`, ''));
    }

}
//writeGenres();

function learnJS(lang, callback){
    console.log(`ya u4u ${lang}`)
    callback()
};

learnJS("javascript", function(){
    console.log("eto moi pervyi urok")
})