const ctx = document.getElementById('myChart');


// når du trykker på les mer knappen vil teksten vises

document.getElementById("ElektriskAvfallReadMore").addEventListener("click", readElektriskAvfall);

function readElektriskAvfall(event) {

    console.log("Jeg blir trykket på!");

    event.preventDefault();

    let elektriskAvfallTekst = document.getElementById("ElektriskAvfallText");

    elektriskAvfallTekst.style.display = "block";
    elektriskAvfallTekst.style.justifyContent = "center";
    elektriskAvfallTekst.style.opacity = "100";
}

// når du trykker på lukk hvor teksten vises vil teksten og boksen skjules
document.getElementById("sluttALes").addEventListener("click", sluttALes);

function sluttALes() {

    document.getElementById("ElektriskAvfallText").style.display = "none";
    // sticky???
}


// når du trykker på "escape" så skal det skjule seg

function keyCode(event) {
    let x = event.keyCode;
    if (x == 27) {
        document.getElementById("ElektriskAvfallText").style.display = "none";
    }
}


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






document.getElementById("btnSubmit").addEventListener("click", sendsvar);

function sendsvar(event) {
    event.preventDefault();
    console.log("Jeg blir trykket på!");

    let navn = document.querySelector("#navn").value;

    let svar = document.querySelector("#myInput").value;

    // document.getElementById("output").style.display = "block";
    console.log("Navn: " + navn);
    console.log("Svar: " + svar);
    alert("Takk for svarene " + navn + "!");


    // her er det jeg prøver å lage et diagram
    new Chart(ctx, {
        // typen diagrammet skal være
      type: 'bar',
    
    // hva data diagrammet skal ha
      data: {
    
        // dette er "tallene" på x aksen
        labels: [navn, 'Norge', 'Verden'],
        datasets: [{
    
        // overskrift som forteller hva dette datasettet er
          label: '# of electronics thrown away',
    
        //   her er tallene på y aksen
          data: [svar, 26.4, 18],
          borderWidth: 1
          
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
}




// Chart.js
// https://www.chartjs.org/docs/latest/getting-started/ 




// Det andre eksempelet er eit såkalla line chart, dette er ein type linjediagram
// Sjå ein nærare forklaring her: https://www.chartjs.org/docs/latest/charts/line.html

// const ctx2 = document.getElementById('myChart2');

// new Chart(ctx2, {
//     type: 'line',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
