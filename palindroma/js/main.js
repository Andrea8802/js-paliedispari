// Creare una funzione per capire se la parola data dall'utente è palindroma o meno.

// Funzioni

// Funzione per verificare se la parola è palindroma
function palindromaCheck(parola){

    // Dichiariamo la variabile per gestire la parola inversa
    let parolaReverse = parola;

    // Dividiamo le lettere
    parola = parola.split("");
    parolaReverse = parolaReverse.split("");

    // Giriamo le lettere al contrario
    parolaReverse = parolaReverse.reverse();

    // Ciclo per confrontare gli array
    for (let i = 0; i < parola.length; i++){

        // Controlliamo se anche al contrario hanno lo stesso significato
        if (parola[i] === parolaReverse[i]){
            return true;

        } else if (parola[i] != parolaReverse[i]){
            return false;
        }
    }      
}

// Chiediamo di inserire la parola
let parolaUtente = prompt("Inserisci una parola!");

// Richiamiamo la funzione
parolaChecked = palindromaCheck(parolaUtente);

// Output in base all'esito
if (parolaChecked === true){
    console.log("La parola " + parolaUtente + " è palindroma!")
} else{
    console.log("La parola " + parolaUtente + " non è palindroma!")
}

