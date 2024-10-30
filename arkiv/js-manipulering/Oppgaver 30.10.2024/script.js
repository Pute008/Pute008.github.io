let img_stein = document.getElementById("stein");
let img_saks  = document.getElementById("saks");
let img_papir = document.getElementById("papir");


//
img_stein.addEventListener("click", velgStein);

function velgStein() {

    let tilfeldig = Math.floor(Math.random() * 3);

    if (tilfeldig === 0) {
        console.log("Motstander valgte stein, uavgjort.");
        document.getElementById("tekstboks").innerHTML="Motstander valgte papir, uavgjort."

    } else if (tilfeldig === 1) {
        console.log("Motstander valgte saks, Du vant!")
        document.getElementById("tekstboks").innerHTML="Motstander valgte stein, Du vant!"

    } else if (tilfeldig === 2) {
        console.log("Motstander valgte papir, motstander vant!")
        document.getElementById("tekstboks").innerHTML="Motstander valgte saks, motstander vant!"

    }
}
//

//
img_saks.addEventListener("click", velgSaks);

function velgSaks() {

    let tilfeldig = Math.floor(Math.random() * 3);
    
    if (tilfeldig === 0) {
        console.log("Motstander valgte stein, motstander vant!");
        document.getElementById("tekstboks").innerHTML="Motstander valgte saks, motstander vant!"

    } else if (tilfeldig === 1) {
        console.log("Motstander valgte saks, uavgjort.")
        document.getElementById("tekstboks").innerHTML="Motstander valgte papir, uavgjort."

    } else if (tilfeldig === 2) {
        console.log("Motstander valgte papir, Du vant!")
        document.getElementById("tekstboks").innerHTML="Motstander valgte stein, Du vant!"
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

    } else if (tilfeldig === 2) {
        console.log("Motstander valgte papir, uavgjort.")
        document.getElementById("tekstboks").innerHTML="Motstander valgte papir, uavgjort."
    }
}
//



