let scelta_utente = prompt("Pari o dispari?");

if (scelta_utente == "pari") {
    scelta_utente = "pari";
    console.log(`Hai scelto ${scelta_utente}`);
}

else if (scelta_utente == "dispari") {
    scelta_utente = "dispari";
    console.log(`Hai scelto ${scelta_utente}`);
}

else {
    console.log("Devi scegliere pari o dispari");
}

let n_utente = parseInt(prompt("Inserisci un numero compreso tra 1 e 5 (inclusi)"))

console.log(`Hai scelto il numero ${n_utente}`);

function generateRandomInt(min, max) {
    return Math.floor((Math.random() * (max + 1 - min)) + min);
  }

n_computer = generateRandomInt(1, 5);

console.log(`Il computer ha scelto il numero ${n_computer}`);

somma = n_utente + n_computer;

console.log(`La somma dei due numeri è ${somma}`)

function is_even(x) {
    if (x % 2 == 0) {
        return true;
    }

    return false;
}

if (is_even(somma) == true) {
    console.log("La somma dei due numeri è pari");
}

else {
    console.log("La somma dei due numeri è dispari");
}

if (scelta_utente == "pari" && is_even(somma) == true) {
    console.log("L'utente ha vinto");
}

else if (scelta_utente == "dispari" && is_even(somma) == false) {
    console.log("L'utente ha vinto");
}

else {
    console.log("L'utente ha perso");
}
