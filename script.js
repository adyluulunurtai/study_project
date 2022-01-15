let numberOfFilms;

function start() {
    numberOfFilms = prompt("сколько фильмов вы уже посмотрели", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("сколько фильмов вы уже посмотрели", '');
    }
}
//start();

let personalMovieDb = {
    'count': 1,
    'movies': {
        'border':'black',
        'bg' : 'ss'
    },
    'actors': {},
    'genres': [1, 2, 3],
    'privat': false
};


for (key in personalMovieDb) {
    if(typeof(personalMovieDb[key]) === 'object'){
        for(i in personalMovieDb[key]){
            //console.log(`${i} immet zna4enie ${personalMovieDb[key][i]}`);
        }
    }
    else{
        //console.log(`${key} имеет значение ${personalMovieDb[key]}`);
    }
              
}


function rememberMyFilms() {
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
}

//rememberMyFilms();

function detecPersonLevel() {
    if (personalMovieDb.count < 10) {
        console.log("prosmotreno malo filmov");
    } else if (personalMovieDb.count > 10) {
        console.log("klassi4eskii zritel");
    } else if (personalMovieDb.count > 30) {
        console.log("kinoman");
    } else {
        console.log('proizowla owibka');
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
    console.log(`ya u4u ${lang}`);
    callback();
}

//learnJS("javascript", function(){
//    console.log("eto moi pervyi urok")
//});

let arr = [1, 2, 3, 9];

for (let value of arr){
    //console.log(value)
}
 arr.forEach(function(element, i, array) {
  console.log(`index ${i} imeet zna4enie ${element} v massive ${array} `)   
 });

 console.log(arr.length);


 arr.push(1, 24, 32, 43, 15, 26, 7, 8);


 arr.sort(compareNum);

 function compareNum(a, b){
     return(a-b)
 }

 console.log(arr);

 let a = prompt('', '');
 let b = a.split(" ");
 b.join(' ')
 console.log(b);


 const obj = {
     a: 1,
     b: 3,
     c: {
         x: 7,
         y: 10
     }
 }


 function copyObj(mainObj){
     let newObj = {};
    
     for(let value in mainObj){
        newObj[value] = mainObj[value] ;
     }
     return (newObj);
 };

 let d = copyObj(obj);
 d.a = 12;
 d.c.x = 10;
 
 let v = Object.assign({}, obj);
 v.a = 19;

 console.log(obj);
 //console.log(d);
 console.log(v);

 const oldArray = [1, 2, 3];
 const newArray = oldArray.slice();

 newArray[1] = 3;

 console.log(oldArray);
 console.log(newArray);

 const t = [1, 2, 3];
 const o = [...t];
 console.log (t);
 console.log(o)

 const video = ['youtube', 'vimeo', 'rutube'];
 const blogs = ['livejournal', 'wordpress' ];
 const internet = [...video, ...blogs, "vk", "instagram"]

 console.log(internet);