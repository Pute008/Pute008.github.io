// manipulere html og css er poenget i dag 18.10.2024

/*
    Dette er en fler linjet kommentar, den vil funke for flere linjer!
*/

// alert lager en boks som vises på nettsiden
alert("Heisann! Hvs du er Birk må du trykke på denne nettsiden!");
console.log("Dette er un utskrift til console.log!");

// Spør etter navnet til den besøkende, og skriver ut

// variabel er noe du kan lagre i et aktiv program
// let er en lagringsplass
// navn er navnet på noe som skal bli lagret, en slags lagringsplass i let
// prompt er den undersøkelsen hvor du kan skrive noe, når du skriver navnet ditt vil det bli lagret under navn i let
let navn = prompt("Hva heter du?");
console.log(navn);

// dokument er HTML, du refererer til HTML koden
document.getElementById("utskrift").innerText = "Hei, " + navn + "!";


// oppgave av lærer, hvilken sport?

let sport = prompt("Hvilken sport liker du?");
console.log(sport);
// console.table(sport);
// console.warn(sport);
document.getElementById("hvilkensport").innerText = "Nå vet vi at du liker " + sport + ". Dette skal vi bruke imot deg og de du elsker!"


let hobby = prompt("Hva er hobbyen din?")
console.table(hobby);
document.getElementById("hobby").innerText = "Du liker " + hobby + ".";


// let alder = prompt("Når ble du født?")
// console.log(+alder);



// document.getElementById("year") = "Du ble født i " + alder + "som vil si at du er " + 2024 - alder + "år.";

// tid kaller på en funksjon (getFullYear) som den bruker i koden sin,
// trenger ikke console egentlig, den er der hvis du vil se hva året er når du inspiserer koden!


// spørsmål
let fødselsår = prompt("I hvilket år ble du født?");

// finner tiden
let tid = new Date();

// setter tiden av året inn i console/loggen
console.log(tid.getFullYear());

// 
let year = (tid.getFullYear());
let alder = year - fødselsår;

document.getElementById("year").innerText = "Du er " + alder + " år gammel."


let farge = prompt("Hva er favorittfargen din?");
document.body.style.backgroundColor = farge;


// kode hvis du vil ha linear gradient!


