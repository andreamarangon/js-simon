$(document).ready(function() {

  //creo un array vuoto per ospitare i numeri casuali
  var randomNumbers = [];

  //creo un array vuoto per ospitare i numeri indovinati dall'utente
  var userNumbers = [];

  //genero 5 numeri casuali e li inserisco nell'array randomNumbers
  createNumber(randomNumbers);

  //stampo i numeri random nel DOM
  $('#random-numbers').text('Memorizza i seguenti numeri: ' + randomNumbers);
  console.log(randomNumbers);

  //faccio partire un timer di 30 secondi e nascondo i numeri
  setTimeout(function () {
      $('#random-numbers').hide();
    },30000);

  //chiedo all'utente di inserire per 5 volte un numero che ha visto precedentemente con un prompt
  setTimeout(function () {
    for (var i = 0; i < 5; i++) {
      var userNumber = parseInt(prompt('Inserisci un numero'));
      //metto i numeri indovinati in un array randomNumbers
      if (randomNumbers.includes(userNumber)) {
        userNumbers.push(userNumber);
      }
    }
    console.log(userNumber);
    console.log(userNumbers);
    //il software dice quanti e quali numeri sono stati individuati
    $('#exact-numbers').text('Hai indovinato i seguenti numeri: ' + userNumbers);
    $('#quantity-exact-numbers').text('Hai indovinato ' + userNumbers.length + ' numeri');
  },31000);
});

//FUNCTIONS
//funzione per creare 5 numeri casuali
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
