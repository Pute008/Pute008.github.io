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

    document.getElementById("ElektriskAvfallText").style.display = "block";
}