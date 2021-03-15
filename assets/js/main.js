$(document).ready(function() {
  randomNumberInRange(1,100);
  createNumber(randomNumbers);
  
  //genero 5 numeri casuali e li inserisco nell'array randomNumber
  $('#random-numbers').text(randomNumbers);

});
//creo un array vuoto per ospitare i numeri casuali
var randomNumbers = [];


// randomNumbers = createNumber(array);
console.log(randomNumbers);

//faccio partire un timer di 30 secondi

//chiedo all'utente di inserire per 5 volte un numero che ha visto precedentemente
//con un prompt
//il software dice quanti e quali numeri sono stati individuati




//FUNCTIONS
//funzione per creare 5 numeri bomba casuali
function createNumber(array) {
  while (array.length < 5) {
    var numero = randomNumberInRange(1, 100);

    if (!array.includes(numero)) {
      array.push(numero);
    }
  }
  return array;
}

//funzione per generare un numero random in range
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log('Non sono numeri');
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
