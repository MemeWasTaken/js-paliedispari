// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma (prima senza funzione e poi con funzione).

let wordUser = prompt('Inserisci una parola da controllare:').toLowerCase();
//  console.log(wordUser.length);
//  console.log(wordUser);
// const charsWordUser = [];
//  console.log(charsWordUser);
// for (let i = 0; i < wordUser.length; i++) {
//     console.log(i);
//     let charWordUser = wordUser.charAt(i);
//     charsWordUser.unshift(charWordUser);
// }
// let reverseWord = charsWordUser.toString().replace(/,/g,'');
// console.log(reverseWord);
// if (reverseWord === wordUser) {
//     console.log('PALINDROMA');
//     alert('La parola inserita è palindroma');
// } else {
//     console.log('Non è palindroma');
//     alert('La parola inserita non è palindroma');
// }

function reverseString() {
    return wordUser.split("").reverse().join("");
}

let reversedWord = reverseString();
if (reversedWord === wordUser) {
    console.log('PALINDROMA');
    alert('La parola inserita è palindroma');
} else {
    console.log('Non è palindroma');
    alert('La parola inserita non è palindroma');
}