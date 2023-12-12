function palindrome(parola) {
    
    let lettere_parola = "";
    let lettere_parola_al_contrario = "";

    for (let i = 0; i < parola.length; i++) {
        lettere_parola = lettere_parola.concat(parola[i]);
    }

    console.log(lettere_parola);

    for (let i = parola.length - 1; i >= 0; i-- ) {
        lettere_parola_al_contrario = lettere_parola_al_contrario.concat(parola[i]);
    }

    console.log(lettere_parola_al_contrario);

    if (lettere_parola == lettere_parola_al_contrario) {
        console.log("La parola è palindroma");
    }

    else {
        console.log("La parola non è palindroma");
    }
}