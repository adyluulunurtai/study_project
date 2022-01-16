


let personalMovieDb = {
    'count': 1,
    'movies': {
        'border':'black',
        'bg' : 'ss'
    },
    'actors': {},
    'genres': [],
    'privat': false,
    'start' : function(){
        personalMovieDb.count = prompt("сколько фильмов вы уже посмотрели", '');
        while ( personalMovieDb.count == '' ||  personalMovieDb.count == null || isNaN( personalMovieDb.count)) {
            personalMovieDb.count = prompt("сколько фильмов вы уже посмотрели", '');
        }
    },
    'rememberMyFilms' : function(){
            for (let i = 0; i < 2; i++) {
                let a = prompt("один из последних фиильмов", '');
                let b = prompt("дайте оценку", '');
        
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDb.movies[a] = b;
                    console.log("done")
                } else {
                    i--;
                }
            }
    },
    'detecPersonLevel' : function(){
        if (personalMovieDb.count < 10) {
            console.log("prosmotreno malo filmov");
        } else if (personalMovieDb.count > 10) {
            console.log("klassi4eskii zritel");
        } else if (personalMovieDb.count > 30) {
            console.log("kinoman");
        } else {
            console.log('proizowla owibka');
        }
    },
    'showMyDb' : function(){
        if (personalMovieDb.privat == false) {
            console.log(personalMovieDb);
        }
    },
    'writeGenres' : function(){
        for (let i = 0; i < 3; i++) {

            let a = prompt(`ваш любимый жанр под номером ${i+1}`, '');
            if (a === "" ||a ==null){
                i--;
            }
            else{
                personalMovieDb.genres.push(a);
            }   
        }
        personalMovieDb.genres.forEach((item, i) => {
            console.log(`любимый жанр № ${i+1} eto ${item}`)
        }  );
       
    },
    'toggleVisibleMyDb': function(){
        if(personalMovieDb.privat){
            personalMovieDb.privat = false;
        }
        else {
            personalMovieDb.privat = true;
        }
    }
};
personalMovieDb.start();

