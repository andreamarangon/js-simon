$(document).ready(function() {

//genero 5 numeri casuali e li stampo
var randomNumber = randomNumberInRange(1, 100)
//faccio partire un timer di 30 secondi
//chiedo all'utente di inserire per 5 volte un numero che ha visto precedentemente
//con un prompt
//il software dice quanti e quali numeri sono stati individuati


});




//FUNTIONS
//funzione per generare un numero random in range
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log('Non sono numeri');
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
