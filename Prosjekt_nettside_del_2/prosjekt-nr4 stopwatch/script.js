// alle knappene
let startKnapp = document.getElementById("start");
let sluttKnapp = document.getElementById("stop");
let resetKnapp = document.getElementById("reset");
let rundeKnapp = document.getElementById("runde");

// setter alle tallene til 0 i begynnelsen
let hour = 0;
let minutter = 0;
let sekunder = 0;
let count = 0;

// let rundeListe = [];

// denne koden er for å starte nedtellingen
// startknappen vil sette "timer" til true som vil starte "stopWatch" funksjonen
startKnapp.addEventListener("click", function () {
    timer = true;
    stopWatch();
});

// når man trykker på slutt-knappen vil "stopWatch" funksjonen slutte å funke (den vil settes til false)
sluttKnapp.addEventListener("click", function () {
    timer = false;
});

rundeKnapp.addEventListener("click", function () {
    console.log("H", hour, "M", minutter, "S", sekunder, "ms", count);
    // let rundetid = 
    // rundeListe.push(rundetid);
    document.getElementById("rundeTid").innerHTML = "Hr " + hour + " Min " + minutter + " Sek " + sekunder + " mSek " + count;
})

// når du trykker på reset-knappen vil alle tallene bli stilt til null
resetKnapp.addEventListener("click", function () {
    timer = false;
    hour = 0;
    minutter = 0;
    sekunder = 0;
    count = 0;

    document.getElementById("timer").innerHTML = "0";
    document.getElementById("minutter").innerHTML = "0";
    document.getElementById("sekunder").innerHTML = "0";
    document.getElementById("count").innerHTML = "0";
    document.getElementById("rundeTid").innerHTML = " ";
});

// hva som skjer etter at du har trykket på start knappen
// mattematiske regninger skjer
function stopWatch(){
    if (timer) {
        // øker med 1 millisekund
        count++;
        // når man har 100 millisekunder vil man få 1 sekund
        if (count == 100) {
            sekunder++;
            count = 0;
        }

        // når man har 60 sekunder vil det bli til 1 minutt
        if (sekunder == 60) {
            minutter++;
            sekunder = 0;
        }

        // når man har 60 minutter vil det bli til 1 time
        if (minutter == 60) {
            hour++;
            minutter = 0;
        }

        // string vil si at det er en datatype
        let timerString = hour;
        let minutterString = minutter;
        let sekunderString = sekunder;
        let countString = count;

        // if (hour > 10) {
        //     timerString = "0" + timerString;
        // }

        // if (minutter > 10) {
        //     minutterString = "0" + minutterString;
        // }

        // if (sekunder > 10) {
        //     sekunderString = "0" + minutterString
        // }

        // if (count > 10) {
        //     countString = "0" + countString
        // }

        document.getElementById("timer").innerHTML = timerString;
        document.getElementById("minutter").innerHTML = minutterString;
        document.getElementById("sekunder").innerHTML = sekunderString;
        document.getElementById("count").innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}

let fargeText = document.getElementById("h1Color");

fargeText.addEventListener("click", function() {
    document.getElementById("h1Color").style.color = "red";

    let lyd = new Audio("LydTimeStop.mp3");
    lyd.play();

    document.getElementById("h1Color").style.color = "white";
})