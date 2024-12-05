/* popcornBucket er det man skal trykke på (som cookien i cookie clicker) */

// popcornBucket = bildet
let popcornBucket = document.getElementById("popcornBucket");
popcornBucket.addEventListener("click", popcornKlikk);

let popcornCounting = document.getElementById("undertekst");

// hvor mye popcorn du har
let popcornTotal = 0;

// oppgradering, hvor mye du får hvert sekund
let popcornPerSek = 0;

// hvor mange clikcers altså upgrades som hjelper deg
let clickers = 0;

// en annen upgrade (som bestemoren i cookie clicker)
let salgsMann = 0;

// en variant av popcorn
let popcornSmakSoya = 0;

function popcornKlikk() {
    popcornTotal = popcornTotal + 1;
    document.getElementById("undertekst").innerText = "Popcorn: "+ popcornTotal;
};
