

let numberOfFilms;

function start(){
    numberOfFilms = prompt("сколько фильмов вы уже посмотрели", '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = prompt("сколько фильмов вы уже посмотрели", '');
    }
}
start();

let personalMovieDb = {
    'count' : numberOfFilms,
    'movies' : {},
    'actors' : {},
    'genres' : [],
    'privat' : false
}


function rememberMyFilms(){
    for (let i = 0; i < 2 ; i++) {
        let a = prompt("один из последних фиильмов" , '');
        let b = prompt("дайте оценку" , '');
        
        if(a!= null && b!=null && a!='' && b!= '' && a.length<50){
            personalMovieDb.movies[a] = b;
            console.log("done")
        } 
        else{
            i--
        };
        
    };
};

rememberMyFilms();

if(personalMovieDb.count<10){
    console.log("prosmotreno malo filmov")
}
else if (personalMovieDb.count>10){
    console.log("klassi4eskii zritel")
}
else if ( personalMovieDb.count>30){
console.log("kinoman")
}
else{
    console.log('proizowla owibka')
}




console.log(personalMovieDb);