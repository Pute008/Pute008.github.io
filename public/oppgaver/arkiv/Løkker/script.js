// for-løkke
// (startpunkt; sluttpunkt; størrelse på hopp) 
for (let i = 0; i < 11; i = i + 1 ) {
    console.log("god dag person nr " + i);
}


// arrayet med navn
let listeNavn = ["Felix", "Birk", "Alexander", "Tim", ];

let listeTall = [4,5,6,4,5,3,4,5,2,4,5,6];

// length funksjonen gjør at hele listeNavn variablen vil bli sjekket 
for (let i = 0; i < listeNavn.length; i = i + 1) {
    // det er slik man refererer til noe i et array
    console.log(listeNavn[i]);

}




// enkel quiz
let listeSpørsmål = ["Hvem er den beste personen av dem alle?", "Hva er det beste faget?"];
let listeSvar = ["Jo Bjørnar", "Programmering"];


// x-en sier hvor i løkken du er (0 i første) og sjekker hva som er i hver liste
for (let x = 0; x < listeSpørsmål.length; x++) {
    console.log("Spørsmål: " + listeSpørsmål[x]);
    let Svar = prompt("Spørsmål: " + listeSpørsmål[x]);

    if (Svar.toUpperCase() == listeSvar[x].toUpperCase()) {
        console.log("Good Job!!!");
    } else {
        console.log("Du svarte FEIL!!!");
        console.log("Riktig Svar: " + listeSvar[x]);

    }


    // let Svar = prompt("Hvem er den beste personen av dem alle?")
    // if (Svar = listeSvar[0]) {
    //     console.log("Riktig Svart! Bra Jobbet!")
    // } else {
    //     console.log("Feil!")
    // }

}


// while-løkke