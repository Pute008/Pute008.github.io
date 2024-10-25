let bilde = document.getElementById("bilde") //IDen
let bildetekst = document.getElementById("tekst")

// bildene som skal være i bildegalleriet
// en array er en liste!!! 
let bildeGalleriMedTekst = [
    {"bilde" : "e-sport.jpg",      "bildeTekst" : "E-sport spilling with da boys"},
    {"bilde" : "gambling.jpg",     "bildeTekst" : "Elsker Gambling!"},
    {"bilde" : "katt_spiller.jpg", "bildeTekst" : "Katt som spiller dataspill"},
    {"bilde" : "xbox.jpg",         "bildeTekst" : "XBox kontroller"}
]

// hvilket bilde bildegalleriet skal starte på
let aktivBilde = 0;

// her tar den bilder bra "bilder" mappen og tar bilde nr 0 (nr 1 i tabellen) i bildegalleriet, den bestemmer hvilket bilde den skal starte på
bilde.src = "../bilder/" + bildeGalleriMedTekst[0].bilde;

// skifter bilde hvert 2 sekund
setInterval(skiftBilde, 2000);
function skiftBilde() {
    aktivBilde = aktivBilde + 1; //øker med en slik at den viser et nytt bilde
    if (aktivBilde >= bildeGalleriMedTekst.length) { // sjekker om jeg ikke kommer utenfor arrayen, altså ikke noe bilde
        aktivBilde = 0; //nullstiller til det første bildet
    }
    bilde.src = "../bilder/" + bildeGalleriMedTekst[aktivBilde].bilde;
    bildetekst.innerText = bildeGalleriMedTekst[aktivBilde].bildeTekst;
}



console.log(bildeGalleriMedTekst[0].bilde);
console.log(bildeGalleriMedTekst[0].bildeTekst)
