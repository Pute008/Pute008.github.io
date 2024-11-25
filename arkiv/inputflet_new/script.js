document.getElementById("skjema").addEventListener("submit", handterSkjema);

function handterSkjema(event){

event.preventDefault();

let navn = document.querySelector("#tekst").value;
let tall = document.querySelector("#tall").value;
let epost = document.querySelector("#epost").value;

console.log("Navn " + navn);
console.log("Tall " + tall);
console.log("Epost " + epost);

alert("Takk for svarene dine!");

document.getElementById("output").innerHTML("Vil du besøke nettsiden min? Da kan du trykke på denne linke her! " + .href =  );
}