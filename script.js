let numberOfFilms = prompt("сколько фильмов вы уже посмотрели", '');

let personalMovieDb = {
    'count' : numberOfFilms,
    'movies' : {},
    'actors' : {},
    'genres' : [],
    'privat' : false
}



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