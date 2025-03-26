let inputMelding = document.getElementById("inputMelding");
let inputKrypteringsnokkel = document.getElementById("inputKrypteringsnokkel");
let outputMelding = document.getElementById("outputMelding");
let outputBruteForce = document.getElementById("outputBruteForce");

let knappKrypter = document.getElementById("knappKrypter");
let knappDekrypter = document.getElementById("knappDekrypter");
let knappBruteForce = document.getElementById("knappBruteForce");

knappKrypter.addEventListener("click", f_krypterMelding);
knappDekrypter.addEventListener("click", f_dekrypterMelding);
knappBruteForce.addEventListener("click", f_bruteForce);

let alfabet = "0123456789abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!?";
let alfabetLengde = alfabet.length;
console.log("Alfabetet sin lengde: " + alfabetLengde);

// Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, samt krypteringsnøkkelen. Returnerer den nye bokstaven.
function krypterBokstav(bokstavInn, krypteringsnokkelInn) {    
    let posisjon = alfabet.indexOf(bokstavInn);
    let posisjonNy = posisjon + krypteringsnokkelInn;

    if (posisjonNy >= alfabetLengde) {
        posisjonNy = posisjonNy - alfabetLengde;
    }

    return alfabet[posisjonNy];
}

// Dekrypteringsfunksjonen, mistenkeleg lik som krypteringsfunksjonen. Kva er anleis?
function dekrypterBokstav(bokstavInn, krypteringsnokkelInn) {
    let posisjon = alfabet.indexOf(bokstavInn);
    let posisjonNy = posisjon - krypteringsnokkelInn;

    if(posisjonNy < 0){
        posisjonNy = posisjonNy + alfabetLengde;
    }

    return alfabet[posisjonNy];
}

/*
    Funksjonen som går gjennom heile meldinga (frå inputfeltet) og krypterer
    ---------------------------------------------------------
*/
function f_krypterMelding() {
    let ukryptertMelding = inputMelding.value;
    let krypteringsnokkel = Number(inputKrypteringsnokkel.value);
    let kryptertMelding = "";

    for (let bokstav of ukryptertMelding) {
        if (alfabet.indexOf(bokstav) !== -1) {
            kryptertMelding += krypterBokstav(bokstav, krypteringsnokkel);
        } else {
            kryptertMelding += bokstav;
        }
    }

    outputMelding.innerHTML = `Kryptert melding av input <span style='color:red;'>${ukryptertMelding}</span>, blir oversatt til <span style='color:red;'>${kryptertMelding}</span>.`;
}

/* 
    Funksjonen som dekypterer meldinga frå tekstfeltet
    --------------------------------------------------
*/
function f_dekrypterMelding() {
    let kryptertMelding = inputMelding.value;
    let krypteringsnokkel = Number(inputKrypteringsnokkel.value);
    let dekryptertMelding = "";

    for (let bokstav of kryptertMelding) {
        if (alfabet.indexOf(bokstav) !== -1) {
            dekryptertMelding += dekrypterBokstav(bokstav, krypteringsnokkel);
        } else {
            dekryptertMelding += bokstav;
        }
    }

    outputMelding.innerHTML = `Dekryptert melding av input <span style='color:red;'>${kryptertMelding}</span> blir oversatt til <span style='color:red;'>${dekryptertMelding}</span>.`;
}

/*
    Funksjonen som hjelper deg å teste ut "haugevis" av kombinasjonar av nøklar,
    dersom du ikkje har denne informasjonen.
    ----------------------------------------------------------------------------------------
*/
function f_bruteForce() {
    let kryptertMelding = inputMelding.value;
    outputBruteForce.innerHTML = "";

    for (let j = 1; j <= alfabetLengde; j++) {
        let dekryptertMelding = "";
        for (let bokstav of kryptertMelding) {
            if (alfabet.indexOf(bokstav) !== -1) {
                dekryptertMelding += dekrypterBokstav(bokstav, j);
            } else {
                dekryptertMelding += bokstav;
            }
        }
        outputBruteForce.innerHTML += `<p>Nøkkel: ${j}<br>${dekryptertMelding}</p>`;
    }
}