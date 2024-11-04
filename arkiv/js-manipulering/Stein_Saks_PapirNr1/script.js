let img_stein = document.getElementById("stein");
let img_saks = document.getElementById("saks");
let img_papir = document.getElementById("papir");

img_stein.addEventListener("click", velgStein);

function velgStein(){
    // floor runder ned tall!
    let tilfeldigtall = Math.floor(Math.random() * 3);
    if (tilfeldigtall === 0) {
        console.log("Motstander valgte stein, uavgjort.");
        document.getElementById("tekstboks").innerHTML="Motstander valgte papir, uavgjort.";
    }
    else if (tilfeldigtall === 1) {
        console.log("Motstander valgte saks, Du vant!");
        document.getElementById("tekstboks").innerHTML="Motstander valgte stein, Du vant!";
    }

    // kan ikke ha en "else" og så en "kondition (tilfeldigtall)" i samme kode, da må man ha en "else if"
    else if (tilfeldigtall === 2) {
        console.log("Motstander valgte papir, motstander vant!");
        document.getElementById("tekstboks").innerHTML="Motstander valgte saks, motstander vant!";
    }
}

img_saks.addEventListener("click", velgSaks);

function velgSaks(){
    let tilfeldigtall = Math.floor(Math.random() * 3);
    if (tilfeldigtall === 0) {
        console.log("Motstander valgte stein, motstander vant!");
        document.getElementById("tekstboks").innerHTML="Motstander valgte saks, motstander vant!";
    }
    else if (tilfeldigtall === 1) {
        console.log("Motstander valgte saks, uavgjort.")
        document.getElementById("tekstboks").innerHTML="Motstander valgte papir, uavgjort.";
    }

    else if (tilfeldigtall === 2) {
        console.log("Motstander valgte papir, Du vant!")
        document.getElementById("tekstboks").innerHTML="Motstander valgte stein, Du vant!";
    }
}

img_papir.addEventListener("click", velgPapir);

function velgPapir(){
    let tilfeldigtall = Math.floor(Math.random() * 3);
    if (tilfeldigtall === 0) {
        console.log("Motstander valgte stein, Du vant!");
        document.getElementById("tekstboks").innerHTML="Motstander valgte stein, Du vant!";
    }

    else if (tilfeldigtall === 1) {
        console.log("Motstander valgte saks, motstander vant!")
        document.getElementById("tekstboks").innerHTML="Motstander valgte saks, motstander vant!"
    }

    else if (tilfeldigtall) {
        console.log("Motstander valgte papir, uavgjort.")
        document.getElementById("tekstboks").innerHTML="Motstander valgte papir, uavgjort."
    }
}