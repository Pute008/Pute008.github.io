// lage en quiz
// statistikk

let svar

let bilder = [
    "bilde1",
    "bilde2",
    "bilde3",
    "bilde4",
    "bilde5",
    "bilde6",
    "bilde7",
    "bilde8",
    "bilde9",
    "bilde10",
    "bilde11",
    "bilde12"
]

// bilder.addEventListener("click", trykk);

// function trykk() {
    
// }



document.getElementById("ElektriskAvfallReadMore").addEventListener("click", readElektriskAvfall);

function readElektriskAvfall(event) {

    console.log("Jeg blir trykket på!")

    event.preventDefault();

    let elektriskAvfallTekst = document.getElementById("ElektriskAvfallText");

    elektriskAvfallTekst.style.display = "block";
    elektriskAvfallTekst.style.justifyContent = "center";
}

document.getElementById("sluttALes").addEventListener("click", sluttALes);

function sluttALes() {

    document.getElementById("ElektriskAvfallText").style.display = "none";
    // sticky???
}




function keyCode(event) {
    let x = event.keyCode;
    if (x == 27) {
        document.getElementById("ElektriskAvfallText").style.display = "none";
    }
}