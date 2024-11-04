let img_stein = document.getElementById("stein");
let img_saks  = document.getElementById("saks");
let img_papir = document.getElementById("papir");


// click betyr når man trykker (no shit men må skrive uansett)
img_stein.addEventListener("click", velgStein);

let antallKlikk = 0;
let liv = 3;

// velgStein er en variabel
function velgStein() {

    // antallKlikk++;
    // antallKlikk += 1;
    antallKlikk = antallKlikk + 1;

    if(antallKlikk>5) {
        alert("STOP!!!");
        // img_stein.removeEventListener("click", velgStein);
        return;
    }

    let tilfeldig = Math.floor(Math.random() * 3);

    if (tilfeldig === 0) {
        console.log("Motstander valgte stein, uavgjort.");
        document.getElementById("tekstboks").innerHTML="Motstander valgte papir, uavgjort.";

    } else if (tilfeldig === 1) {
        console.log("Motstander valgte saks, Du vant!");
        document.getElementById("tekstboks").innerHTML="Motstander valgte stein, Du vant!";

    } else if (tilfeldig === 2) {
        console.log("Motstander valgte papir, motstander vant!");
        document.getElementById("tekstboks").innerHTML="Motstander valgte saks, motstander vant!";
        liv = liv-1;
    }

    // livene
    if (liv === 0){
        document.getElementById("box").innerHTML="Du er ute av liv";
    }
}
//

//
img_saks.addEventListener("click", velgSaks);

function velgSaks() {

    let tilfeldig = Math.floor(Math.random() * 3);
    
    if (tilfeldig === 0) {
        console.log("Motstander valgte stein, motstander vant!");
        document.getElementById("tekstboks").innerHTML="Motstander valgte saks, motstander vant!";
        liv = liv-1;

    } else if (tilfeldig === 1) {
        console.log("Motstander valgte saks, uavgjort.")
        document.getElementById("tekstboks").innerHTML="Motstander valgte papir, uavgjort.";

    } else if (tilfeldig === 2) {
        console.log("Motstander valgte papir, Du vant!")
        document.getElementById("tekstboks").innerHTML="Motstander valgte stein, Du vant!";
    }

    // livene
    if (liv === 0){
        document.getElementById("box").innerHTML="Du er ute av liv";
    }
}
//

//
img_papir.addEventListener("click", velgPapir);

function velgPapir() {

    let tilfeldig = Math.floor(Math.random() * 3);

    if (tilfeldig === 0) {
        console.log("Motstander valgte stein, Du vant!");
        document.getElementById("tekstboks").innerHTML="Motstander valgte stein, Du vant!"
        
    } else if (tilfeldig === 1) {
        console.log("Motstander valgte saks, motstander vant!")
        document.getElementById("tekstboks").innerHTML="Motstander valgte saks, motstander vant!"
        liv = liv-1;

    } else if (tilfeldig === 2) {
        console.log("Motstander valgte papir, uavgjort.")
        document.getElementById("tekstboks").innerHTML="Motstander valgte papir, uavgjort."
    }

    // livene
    if (liv === 0){
        document.getElementById("box").innerHTML="Du er ute av liv"
    }
}
//



// let alder = 16;

// if (alder > 17) {
//     alert("Du kan ta sertifikat");
// } else {
//     alert("bli eldre...");
// }




// img_saks.style.display = "none; // alternativt block for å vise
// img_stein.style.visibility = "hidden"; // alternativt visible for p vise