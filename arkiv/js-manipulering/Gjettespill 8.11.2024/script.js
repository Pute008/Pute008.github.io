let tilfeldigtall = Math.floor(Math.random() * 10 + 1);
console.log(tilfeldigtall);

let round = 0;


document.body.onkeyup = function(e) {
    if(e.keyCode == 32){
        reset();
    }
}

function reset() {
    tilfeldigtall = Math.floor(Math.random() * 10 + 1);
    document.getElementById("tekst").innerText = " ";

}


// for (let index = 0; index < 100; index++) {

// }

let nr1 = document.getElementById("nr1");
let nr2 = document.getElementById("nr2");
let nr3 = document.getElementById("nr3");
let nr4 = document.getElementById("nr4");
let nr5 = document.getElementById("nr5");
let nr6 = document.getElementById("nr6");
let nr7 = document.getElementById("nr7");
let nr8 = document.getElementById("nr8");
let nr9 = document.getElementById("nr9");
let nr10 = document.getElementById("nr10");

nr1.addEventListener("click", velgNr1);

function velgNr1(){
    if (parseInt(nr1.textContent) === tilfeldigtall) {
        console.log("Riktig");
        document.getElementById("tekst").innerText = "Du svarte riktig! " + tilfeldigtall;
    }
    else {
        console.log("Feil");
        document.getElementById("tekst").innerText = "Du valgte Feil! " + nr1.textContent + " var ikke riktig!";

        document.body.removeChild(0); //JBH hjelper meg nestegang
    }
}

nr2.addEventListener("click", velgNr2);

function velgNr2(){
    if (parseInt(nr2.textContent) === tilfeldigtall) {
        console.log("Riktig");
        document.getElementById("tekst").innerText = "Du svarte riktig! " + tilfeldigtall;
    }
    else {
        console.log("Feil");
        document.getElementById("tekst").innerText = "Du valgte Feil! " + nr2.textContent + " var ikke riktig!";
    }
}

nr3.addEventListener("click", velgNr3);

function velgNr3(){
    if (parseInt(nr3.textContent) === tilfeldigtall) {
        console.log("Riktig");
        document.getElementById("tekst").innerText = "Du svarte riktig! " + tilfeldigtall;
    }
    else {
        console.log("Feil");
        document.getElementById("tekst").innerText = "Du valgte Feil! " + nr3.textContent + " var ikke riktig!";
    }
}

nr4.addEventListener("click", velgNr4);

function velgNr4(){
    if (parseInt(nr4.textContent) === tilfeldigtall) {
        console.log("Riktig");
        document.getElementById("tekst").innerText = "Du svarte riktig! " + tilfeldigtall;
    }
    else {
        console.log("Feil");
        document.getElementById("tekst").innerText = "Du valgte Feil! " + nr4.textContent + " var ikke riktig!";
    }
}

nr5.addEventListener("click", velgNr5);

function velgNr5(){
    if (parseInt(nr5.textContent) === tilfeldigtall) {
        console.log("Riktig");
        document.getElementById("tekst").innerText = "Du svarte riktig! " + tilfeldigtall;
    }
    else {
        console.log("Feil");
        document.getElementById("tekst").innerText = "Du valgte Feil! " + nr5.textContent + " var ikke riktig!";
    }
}

nr6.addEventListener("click", velgNr6);

function velgNr6(){
    if (parseInt(nr6.textContent) === tilfeldigtall) {
        console.log("Riktig");
        document.getElementById("tekst").innerText = "Du svarte riktig! " + tilfeldigtall;
    }
    else {
        console.log("Feil");
        document.getElementById("tekst").innerText = "Du valgte Feil! " + nr6.textContent + " var ikke riktig!";
    }
}

nr7.addEventListener("click", velgNr7);

function velgNr7(){
    if (parseInt(nr7.textContent) === tilfeldigtall) {
        console.log("Riktig");
        document.getElementById("tekst").innerText = "Du svarte riktig! " + tilfeldigtall;
    }
    else {
        console.log("Feil");
        document.getElementById("tekst").innerText = "Du valgte Feil! " + nr7.textContent + " var ikke riktig!";
    }
}

nr8.addEventListener("click", velgNr8);

function velgNr8(){
    if (parseInt(nr8.textContent) === tilfeldigtall) {
        console.log("Riktig");
        document.getElementById("tekst").innerText = "Du svarte riktig! " + tilfeldigtall;
    }
    else {
        console.log("Feil");
        document.getElementById("tekst").innerText = "Du valgte Feil! " + nr8.textContent + " var ikke riktig!";
    }
}

nr9.addEventListener("click", velgNr9);

function velgNr9(){
    if (parseInt(nr9.textContent) === tilfeldigtall) {
        console.log("Riktig");
        document.getElementById("tekst").innerText = "Du svarte riktig! " + tilfeldigtall;
    }
    else {
        console.log("Feil");
        document.getElementById("tekst").innerText = "Du valgte Feil! " + nr9.textContent + " var ikke riktig!";
    }
}

nr10.addEventListener("click", velgNr10);

function velgNr10(){
    if (parseInt(nr10.textContent) === tilfeldigtall) {
        console.log("Riktig");
        document.getElementById("tekst").innerText = "Du svarte riktig! " + tilfeldigtall;
    }
    else {
        console.log("Feil");
        document.getElementById("tekst").innerText = "Du valgte Feil! " + nr10.textContent + " var ikke riktig!";
    }
}
