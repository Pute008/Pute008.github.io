// let riktigSvar;

// function startGame() {
//     // velger et tilfeldig tall mellom 1 og 3
//     riktigSvar = Math.floor(Math.random() * 3) + 1;

//     document.getElementById("feedback").innerHTML = "";
//     document.getElementById("option1").innerHTML.disabled = false;
//     document.gweElementById("option2").innerHTML.disabled = false;
//     document.getElementById("option3").innerHTML.disabled = false;
// }

// function sjekkSvar(option) {

//     document.getElementById("option1").disabled = true;
//     document.getElementById("option2").disabled = true;
//     document.getElementById("option3").disabled = true;

//     if (option == riktigSvar) {
//         document.getElementById("feedback").innerHTML = "Riktig!";
//         console.log("Riktig!");
//         document.getElementById("feedback").style.color = "green";
//     } else {
//         document.getElementById("feedback").innerHTML = "Feil!";
//         document.getElementById("feedback").style.color = "red";
//     }
// }

// startGame();








  // game

// lage en quiz
// statistikk

// let bilder = [
//     "bilde1",
//     "bilde2",
//     "bilde3",
//     "bilde4",
//     "bilde5",
//     "bilde6",
//     "bilde7",
//     "bilde8",
//     "bilde9",
//     "bilde10",
//     "bilde11",
//     "bilde12"
// ]

// let poengskar = 0;

// bilder.addEventListener("click", trykkPaBilde);
// function trykkPaBilde() {
//     if (bilder = "bilde1") {
//         poengskar += 1;
//         document.getElementById("svar").innerText = "Riktig!"
//         document.getElementById("pointVisning").innerHTML = "Poeng " + poengskar + "/4";
//     }

//     if (bilder = "bilde2") {
//         poengskar += 1;
//     }

//     if (bilder = "bilde3") {
//         poengskar += 1;
//     }

//     else if (bilder = "bilde4") { /*her tenkte jeg at resten kunne stå og skrive at ingen ting ville skje når du trykker på de andre*/
//         poengskar += 1;
//     }
// }