document.getElementById("skjema").addEventListener("submit", handterSkjema);

function handterSkjema(event){

event.preventDefault();

let navn = document.querySelector("#tekst").value;
let tall = document.querySelector("#tall").value;
let epost = document.querySelector("#epost").value;
let nettside = 

console.log("Navn " + navn);
console.log("Tall " + tall);
console.log("Epost " + epost);

alert("Takk for svarene dine!");

document.getElementById("output").style.display="block";

}