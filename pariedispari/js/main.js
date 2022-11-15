// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5, facciamo scegliere al pc un numero, generandolo in maniera casuale da 1 a 5 usando una funzione, sommando i due numeri controlliamo se pari o dispari, sempre con una funzione e stabiliamo chi ha vinto.

// Funzioni

// Funzione per generare un numero casuale
function numeroCasuale(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per stabilire se un numero è pari o dispari
function pariODispari(numero){
    if (numero % 2 === 0){
        return "pari";
    } else{
        return "dispari";
    }
}

// Chiediamo all'utente di scegliere pari o dispari
const sceltaUtente = prompt('Scegli fra "pari" o "dispari"');

// Chiediamo di scegliere un numero da 1 a 5
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"))

// Generiamo un numero casuale per il pc
const numeroPC = numeroCasuale(1, 5);

// Calcoliamo la somma
const risultato  = numeroUtente + numeroPC;

// Dichiariamo chi ha vinto
if (pariODispari(risultato) === "pari"){
    console.log("Hai vinto!");

} else{
    console.log("Hai perso!");
}