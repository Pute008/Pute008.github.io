/* popcornBucket er det man skal trykke på (som cookien i cookie clicker) */

// popcornBucket = bildet
let popcornBucket = document.getElementById("popcornBucket");
popcornBucket.addEventListener("click", popcornKlikk);

// underteksten som viser hvor mange popcorn du har
let popcornCounting = document.getElementById("undertekst");

// hvor mye popcorn du har
let popcornTotal = 0;

// oppgradering, hvor mye du får hvert sekund
let popcornPerSek = 0;

// hvor mange clickers altså upgrades som hjelper deg
let clickers = 0;

// upgrade (som bestemoren i cookie clicker)
let salgsMann = 0;

// upgrade, gir mer popcorn for hvert klikk
let popcornSmakSoya = 0;

// prisen til soyasmak
let popcornSmakSoyaPris = 20;

// prisen til clickers
let clickerPris = 10



// array av bilder
let bilder = [
    "popcorn bucket EMPTY WHATTT.svg",
    // et annet bilde her
]




// multiplier, 
let popcornMultiplier = 1;


// når du trykker på popkornet
function popcornKlikk() {

    // når du trykker på popcorn-boksen vil antallet popcorn øke med "popcornMultiplier"
    popcornTotal = popcornTotal + 1*popcornMultiplier;

    // teksten vil vise hvor mye popcorn du har
    document.getElementById("undertekst").innerText = "Popcorn: "+ Math.floor(popcornTotal);

    // hvis antall popcorn er 100 eller over vil bildet bli en popcorn-boks fylt opp
    if (popcornTotal >= 100) {
        popcornBucket.src= bilder[1];
    }
};




// funksjon når man kjøper soya
let soyaShop = document.getElementById("soyaShop");

// gjør at vi kan trykke på soya upgrade
soyaShop.addEventListener("click", buySoya);

// prisen vil øke for hver gng du kjøper en ny soya upgrade
function buySoya() {
    // hvis popcornTotal (det du har) er like mye som prisen til soya-poppcorn vil først:
    if (popcornTotal >= popcornSmakSoyaPris){

        // 1) antallet soya-popcorn økes med 1
        popcornSmakSoya = popcornSmakSoya + 1;

        // 2) antallet popcorn du har vil bli troke ifra med hva soyaen koster
        popcornTotal = popcornTotal - popcornSmakSoyaPris;

        // 3) prisen til soya-popcorn økes
        popcornSmakSoyaPris = popcornSmakSoyaPris*1.3;

        // 4) multipleieren vil øke 1.2 når du har kjøpt (20%)
        popcornMultiplier= popcornMultiplier * 1.2

        // 5) teksten som viser hvor mye popcorn du har vil endres
        document.getElementById("undertekst").innerText = "Popcorn: "+ Math.floor(popcornTotal);
    }
    
}

let clickerShop = document.getElementById("salgsmannShop");

clickerShop.addEventListener("click", buyClickers);

function buyClickers() {
    if (popcornTotal >= clickerPris) {
        clickers = clickers + 1;

        popcornTotal = popcornTotal - clickerPris;

        clickerPris = clickerPris * 1.1;

        popcornPerSek=popcornPerSek+1
        document.getElementById("undertekst").innerText = "Popcorn: "+ Math.floor(popcornTotal);
    }
}

setInterval(myTimer,1000);

function myTimer() {
    popcornTotal = popcornTotal+popcornPerSek*popcornMultiplier
    document.getElementById("undertekst").innerText = "Popcorn: "+ Math.floor(popcornTotal);
}


