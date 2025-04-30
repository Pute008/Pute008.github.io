// alle tallene og bokstavene som er i alfabetet (som et array)
let alfabet = "0123456789abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!? ";

// sjekker hvor langt alfabetet er (altså alfabet variabelen)
let alfabetLengde = alfabet.length;

// forteller hvor mange tegn det er i alfabetet
console.log("Alfabetet sin lengde: " + alfabetLengde);

console.log(alfabet[10]);

// Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, samt krypteringsnøkkelen. 
// Returnerer den nye bokstaven.

// denne funksjonen returnerer en bokstav fra alfabetet som vi har skrevet inn, den 
function krypterBokstav(bokstavInn, krypteringsnokkelInn) { 

    // alfabetet blir sjekket med "indexOf" stringen, det tallet som den finner går inn i bokstavInn variabelen
    let posisjon = alfabet.indexOf(bokstavInn);

    // posisjonNy er selve svaret, posisjon + krypteringsnokkelInn (+1)
    let posisjonNy = posisjon + krypteringsnokkelInn;

    // hvis svaret er større eller like langt som alfabet vil den resette til start (da tar vi svaret "posisjonNy" - alfabetet "alfabetlengden")
    if (posisjonNy >= alfabetLengde) {
        posisjonNy = posisjonNy - alfabetLengde;
    }
    
    return alfabet[posisjonNy];


    // index finner tallet A i alfabet variabelen, den finner posisjonen til en av bokstavene og plusser med 1 som er "krypteringsnokkelInn" (indexOf finner posisjonen til en av bokstavene)
    // gjør alfabet tallet i alfabet som er skrevet ned, + krypteringnøkkelen som er +1

    // return alfabet[alfabet.indexOf(bokstavInn) + krypteringsnokkelInn];
}


// indexOF er en string som leter inni alfabet variabelen, dermed finner den 0 og forteller hvilken posisjon den er på (0 = nr0/plass 1): PS MAN TRENGER IKKE DENNE KODEN
console.log(alfabet.indexOf("0")); // Skal returnere 0

// indexOF er en string som leter inni alfabet variabelen, dermed finner den a og forteller hvilken posisjon den er på (A = nr10): PS MAN TRENGER IKKE DENNE KODEN
console.log(alfabet.indexOf("a")); // Skal returnere 10 

// selve funksjonen som gjør at bokstavene vil gå 1 opp
console.log(krypterBokstav("a", 1)); // Skal returnere "b"





// for å dekryptere
function dekrypterBokstav(bokstavInn, krypteringsnokkelInn) { 

    let posisjon = alfabet.indexOf(bokstavInn);

    let posisjonNy = posisjon - krypteringsnokkelInn;

    if (posisjonNy < 0) {
        posisjonNy = posisjonNy + alfabetLengde;
    }
    
    return alfabet[posisjonNy];

}

console.log(dekrypterBokstav("a", 1));

// selve ord som er kryptert
let setning = "Angrip Jo Bjørnar i dag, klokken 16.50";

// hvor den krypterte setningen skal ende opp
let krypterSetning = "";

// 
for (let bokstav of setning) {
    krypterSetning = krypterSetning + krypterBokstav(bokstav, 1);
}

// console logger ordet som er kryptert
console.log(krypterSetning)

let hemmeligBeskjed = prompt("Skriv inn den hemmelige beskjeden");
let nokkel = Number(prompt("Hva er nøkkelen? "));
let avsloring = "";

for (let bokstav of hemmeligBeskjed) {
    avsloring = avsloring + dekrypterBokstav(bokstav, 17);
}

console.log(avsloring);


for (let i = 0; i < setning.length; i++) {
    // console.log(setning);
}