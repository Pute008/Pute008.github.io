const ctx = document.getElementById('myChart');




// denne koden blir repeated for alle de andre "les mer" knappene


// når du trykker på les mer knappen vil teksten vises
document.getElementById("ElektriskAvfallReadMore").addEventListener("click", readElektriskAvfall);

function readElektriskAvfall(event) {

    console.log("Jeg blir trykket på!");

    // koden vil kjøre en gang slik at teksten ikke blir vist på skjermen for alltid
    event.preventDefault();

    // henter teksten fra html filen, har lagd denne variablen slik at vi ikke trenger å skrive document.getElementById flere ganger
    let elektriskAvfallTekst = document.getElementById("ElektriskAvfallText");

    // teksten midtstilles og vises
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





document.getElementById("HvorSkalAvfalletGaaReadMore").addEventListener("click", readHvorSkalAvfalletGaa);

function readHvorSkalAvfalletGaa(event) {

    event.preventDefault();

    let hvorSkalAvfalletGaaText = document.getElementById("HvorSkalAvfalletGaaText");

    // teksten midtstilles og vises
    hvorSkalAvfalletGaaText.style.display = "block";
    hvorSkalAvfalletGaaText.style.justifyContent = "center";
    hvorSkalAvfalletGaaText.style.opacity = "100";
}

// når du trykker på lukk hvor teksten vises vil teksten og boksen skjules
document.getElementById("sluttALes").addEventListener("click", sluttALes);

function sluttALes() {

    document.getElementById("ElektriskAvfallText").style.display = "none";
}







// når du trykker på "escape" så skal det skjule seg

function keyCode(event) {
    let x = event.keyCode;
    if (x == 27) {
        document.getElementById("ElektriskAvfallText").style.display = "none";
    }
}




// når du trykker på lever inn knappen
document.getElementById("btnSubmit").addEventListener("click", sendsvar);

function sendsvar(event) {
    event.preventDefault();
    console.log("Jeg blir trykket på!");

    // nanvnet som brukeren skriver inn blir lagret i variabelen navn
    let navn = document.querySelector("#navn").value;

    // svaret som brukeren skriver inn blir lagret i variabelen svar
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
          borderWidth: 1,
        //   backgroundColor: [
        //     'rgba(255, 99, 132, 0.2)',
        //     'rgba(54, 162, 235, 0.2)',
        //     'rgba(255, 206, 86, 0.2)'
        //   ]
          
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



// her er et annet diagram
const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Metall', 'Plast', 'Keramikk'],
      datasets: [{
        label: '% av hva en mobil inneholder',
        data: [40, 40, 20],
        backgroundColor: [
            'rgb(177, 101, 14, 0.6)',
            'rgb(255, 247, 135)',
            'rgba(255, 206, 86, 0.6)'
        ],
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
