// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari.
// Dichiariamo chi ha vinto (corrispondenza tra scelta pari e dispari e somma pari o dispari).
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari.

let playerGuess = parseInt(prompt('Inserisci "0" se preferisci pari o "1" se preferisci dispari'));
let playerNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(playerGuess);
console.log(playerNumber);
// let aiNumber =  Math.floor(Math.random() * (5 - 1) ) + 1;
// console.log(aiNumber);
// let sum = playerNumber + aiNumber;
// console.log(sum);

// if (playerGuess == (sum % 2) ) {
//     console.log('HAI VINTO');
//     alert('Complimenti hai battuto il computer');
// } else {
//     console.log('Hai perso');
//     alert('Hai perso, peccato');
// }

function randomNumber () {
    return Math.floor(Math.random() * (5 - 1) ) + 1;
}

function oddOrEven () {
    if ((sum % 2) == 0) {
        return 0;
    } else {1}
}

let aiNumber = randomNumber();
console.log(aiNumber);
let sum = playerNumber + aiNumber;
if (playerGuess == oddOrEven()) {
    console.log('HAI VINTO');
    alert('Complimenti hai battuto il computer');
} else {
    console.log('Hai perso');
    alert('Hai perso, peccato');
}