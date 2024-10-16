// bestemmer hvem JS koden skal gjelde for
let bilde = document.getElementById("bildegalleri");

// console.log(bilde);

bilde.src = "../bilder/Granite_image_ King_Ramesses_II.jpg";

let bildeIndeks = 0;

let arrayBilder = [
    "Granite_image_ King_Ramesses_II.jpg",
    "Granite_head_King_Amenhotep_III.jpg",
    "Limestone_Egyptian_Rulres.jpg"
];

setInterval(skiftBilde, 5000);

function skiftBilde() {
    bildeIndeks = bildeIndeks + 1;
    if(bildeIndeks >= arrayBilder.length) {
        bildeIndeks = 0;
    }
    bilde.src = "../bilder/" + arrayBilder[bildeIndeks];
}