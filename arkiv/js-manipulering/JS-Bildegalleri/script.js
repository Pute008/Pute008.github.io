let bilde = document.getElementById("bilde") //IDen

// bildene som skal være i bildegalleriet
let bildeGalleri = [
    "e-sport.jpg",
    "gambling.jpg",
    "katt_spiller.jpg",
    "xbox.jpg"
];

// hvilket bilde bildegalleriet skal starte på
let aktivBilde = 0;

// her tar den bilder bra "bilder" mappen og tar bilde nr 0 (nr 1 i tabellen) i bildegalleriet, den bestemmer hvilket bilde den skal starte på
bilde.src = "bilder/" + bildeGalleri[0];

// skifter bilde hvert 2 sekund
setInterval(skiftBilde, 2000);
function skiftBilde() {
    aktivBilde = aktivBilde + 1; //øker med en slik at den viser et nytt bilde
    if (aktivBilde >= bildeGalleri.length) { // sjekker om jeg ikke kommer utenfor arrayen, altså ikke noe bilde
        aktivBilde = 0; //nullstiller til det første bildet
    }
    bilde.src = "bilder/" + bildeGalleri[aktivBilde]
}






// bildebeskrivelse kode
let bildeGalleriMedTekst = [
    { "bilde" : "e-sport.jpg", "bildeTekst" : "E-sport spilling with da boys"},
    {"bilde" : "gambling.jpg", "bildetekst" : "Elsker Gambling!"},
    {"bilde" : "katt_spiler.jpg", "bildetekst" : "Katt som spiller dataspill"},
    {"bilde" : "xbox.jpg", "bildetekst" : "XBox kontroller"}
]

console.log(bildeGalleriMedTekst[0].bilde);
console.log(bildeGalleriMedTekst[0].bildeTekst)