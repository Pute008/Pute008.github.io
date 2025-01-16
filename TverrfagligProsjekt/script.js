// denne delen er for my chart koden, ctx skal gjelde for "myChart" id-en
const ctx = document.getElementById('myChart');




// denne koden blir repeated for alle de andre "les mer" knappene


// når du trykker på les mer knappen vil teksten vises

// tekst 1
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
document.getElementById("sluttALesText1").addEventListener("click", sluttALesText1);

function sluttALesText1() {

    document.getElementById("ElektriskAvfallText").style.display = "none";
    // sticky???
}


// tekst 2
document.getElementById("HvorSkalAvfalletGaaReadMore").addEventListener("click", readHvorSkalAvfalletGaa);

function readHvorSkalAvfalletGaa(event) {

    event.preventDefault();

    let hvorSkalAvfalletGaaText = document.getElementById("HvorSkalAvfalletGaaText");

    hvorSkalAvfalletGaaText.style.display = "block";
    hvorSkalAvfalletGaaText.style.justifyContent = "center";
    hvorSkalAvfalletGaaText.style.opacity = "100";
}

document.getElementById("sluttALesText2").addEventListener("click", sluttALesText2);

function sluttALesText2() {

    document.getElementById("HvorSkalAvfalletGaaText").style.display = "none";
}


// tekst 3
document.getElementById("HvaGjorNorgeReadMore").addEventListener("click", readHvaGjorNorge);

function readHvaGjorNorge(event) {

    event.preventDefault();

    let hvorSkalAvfalletGaaText = document.getElementById("HvaGjorNorgeText");

    hvorSkalAvfalletGaaText.style.display = "block";
    hvorSkalAvfalletGaaText.style.justifyContent = "center";
    hvorSkalAvfalletGaaText.style.opacity = "100";
}

document.getElementById("sluttALesText3").addEventListener("click", sluttALesText3);

function sluttALesText3() {

    document.getElementById("HvaGjorNorgeText").style.display = "none";
}



// tekst 4
document.getElementById("HvorBlirElektronikkProdusertReadMore").addEventListener("click", readHvorBlirElektronikkProdusert);

function readHvorBlirElektronikkProdusert(event) {

    event.preventDefault();

    let hvorSkalAvfalletGaaText = document.getElementById("HvorBlirElektronikkProdusertText");

    hvorSkalAvfalletGaaText.style.display = "block";
    hvorSkalAvfalletGaaText.style.justifyContent = "center";
    hvorSkalAvfalletGaaText.style.opacity = "100";
}

document.getElementById("sluttALesText4").addEventListener("click", sluttALesText4);

function sluttALesText4() {

    document.getElementById("HvorBlirElektronikkProdusertText").style.display = "none";
}



// tekst 5
document.getElementById("FareneMedElektriskAvfallReadMore").addEventListener("click", readFareneMedElektriskAvfall);

function readFareneMedElektriskAvfall(event) {

    event.preventDefault();

    let hvorSkalAvfalletGaaText = document.getElementById("FareneMedElektriskAvfallText");

    hvorSkalAvfalletGaaText.style.display = "block";
    hvorSkalAvfalletGaaText.style.justifyContent = "center";
    hvorSkalAvfalletGaaText.style.opacity = "100";
}

document.getElementById("sluttALesText5").addEventListener("click", sluttALesText5);

function sluttALesText5() {

    document.getElementById("FareneMedElektriskAvfallText").style.display = "none";
}






// når du trykker på "escape" så skal tekstene forsvinne
function keyCode(event) {
    let x = event.keyCode;
    if (x == 27) {
        document.getElementById("ElektriskAvfallText").style.display = "none";
        document.getElementById("HvorSkalAvfalletGaaText").style.display = "none";
        document.getElementById("HvaGjorNorgeText").style.display = "none";
        document.getElementById("HvorBlirElektronikkProdusertText").style.display = "none";
        document.getElementById("FareneMedElektriskAvfallText").style.display = "none"
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
          label: 'Hvor mye elektronikk vi kaster i kg',
    
        //   her er tallene på y aksen
          data: [svar, 26.4, 18],
          borderWidth: 1,
          backgroundColor: [
            'rgb(169, 255, 78, 0.5)',
          ]
          
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
            'rgb(76, 84, 84, 0.6)',
            'rgb(255, 113, 91, 0.6)',
            'rgb(130, 113, 145, 0.6)'
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