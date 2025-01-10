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