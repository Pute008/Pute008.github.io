let kyllingbilde = document.getElementById("kyllingbilde");
kyllingbilde.addEventListener("click", klikkPaaEgg);

let undertekstBilde = document.getElementById("undertekstbilde");


let bilder = [
    "bilder/SVG/egg1.svg",
    "bilder/SVG/egg2.svg",
    "bilder/SVG/egg3.svg",
    "bilder/SVG/egg4.svg",
    "bilder/SVG/egg5.svg",
]

let tekst = [
    "Et egg?",
    "Det sprakk!",
    "Ikke ødelegg det!",
    "Noe kommer ut!",
    "En kylling! Så søøøøøøøøt",
    "Du kan ikke trykke mer!"
]

kyllingbilde.src = bilder[0]
document.getElementById("undertekstbilde").innerText= tekst[0]

let antallKlikk = 0;
let bigclick = 0;

function klikkPaaEgg() {
    antallKlikk = antallKlikk + 1;
    if (antallKlikk == 3) {
        antallKlikk = 0
        bigclick++
    }

    if (bigclick >= 1) {
        kyllingbilde.src = bilder[bigclick]
        document.getElementById("undertekstbilde").innerHTML = tekst[bigclick]
    }

    if (bigclick >= 5) {
        kyllingbilde.src = bilder[4]
        document.getElementById("undertekstbilde").innerText = tekst[5]
    }


}