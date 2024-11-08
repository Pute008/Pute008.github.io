let tilfeldigtall = Math.floor(Math.random() * 10 + 1);
console.log(tilfeldigtall);


// for (let index = 0; index < 100; index++) {

// }

let nr1 = document.getElementById("nr1")
let nr2 = document.getElementById("nr2")
let nr3 = document.getElementById("nr3")
let nr4 = document.getElementById("nr4")
let nr5 = document.getElementById("nr5")
let nr6 = document.getElementById("nr6")
let nr7 = document.getElementById("nr7")
let nr8 = document.getElementById("nr8")
let nr9 = document.getElementById("nr9")
let nr10 = document.getElementById("nr10")

nr1.addEventListener("click", velgNr1)

function velgNr1(){
    if (gjetting == 1, tilfeldigtall) {
        console.log("Riktig")
        document.getElementById("tekst").innerText = "Du svarte riktig!" + tilfeldigtall;
    }
}








// let gjetting = prompt("Hvilket tall er det?");

// console.log(gjetting);

if (gjetting == tilfeldigtall) {
    console.log("Riktig");
    document.getElementById("tekst").innerText="Du svarte riktig!" + "Det riktige tallet var " + tilfeldigtall + "." ;
}
else {
    console.log("Feil!")
    document.getElementById("tekst").innerText="Du svarte feil! Nå vet du at det ikke er " + gjetting + " !" ;
}


