let html_brukernavn = document.getElementById("brukernavn");
let html_passord = document.getElementById("passord");
let html_farge = document.getElementById("farge");
let html_tid = document.getElementById("tid");
let html_nummer = document.getElementById("nummer");
let html_email = document.getElementById("email");
let html_range = document.getElementById("range");

let knappSend = document.getElementById("knappSend");


knappSend.addEventListener("click", sendInn);

function sendInn() {
    // console.log("Du trykket");

    let brukernavn = html_brukernavn.value;
    let passord = html_passord.value;
    let farge = html_farge.value;
    let tid = html_tid.value;
    let nummer = html_nummer.value;
    let email = html_email.value;
    let range = html_range.value;

    console.log("Brukernavnet er " + brukernavn);
    console.log("Passordet er " + passord);
    console.log("Fargen er " + farge);
    console.log("I dag er det " + tid);
    console.log("Du er " + nummer + " år gammel");
    console.log("Din email er " + email);
    console.log(range);

    document.getElementById("output").innerText = "Brukernavnet ditt er " + brukernavn + "og fargen er " + farge + ". Men vi kan ikke oppgi passordet ditt. " + "Alderen din er " + nummer + ". E-mailen din er " + email;

    // document.body.style.background = farge;
    document.body.style.background = "linear-gradient"("+farge1")
}

let verdi = document.getElementById("range");
verdi.addEventListener("input", range);

function range() {
    console.log(range.value);
    document.getElementById("box").style.width = 250+verdi.value*10 + "px";
}






// if (width = range * 10)

document.body.onkeyup =function(e){
    if(e.keyCode == 32){ //32 er spacebaren

    }
}