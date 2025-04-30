let listeTall = [2,4,3,1];

//summere tallene i arrayen som er over


let summen = 0; // for å holde på summen av tallene (resultatet)
let lavest = 100;
// let høyest

//  (start;       slutt;               størrelsen på hopp)
for (let y = 0; y < listeTall.length; y = y +1) {
    // listeTall[y]
    summen = summen + listeTall[y];

    if (listeTall[y] < lavest) {
        lavest = listeTall[y];
        console.log("Det laveste tallet er " + lavest)
        document.getElementById("text").innerHTML= "Hallo";

    }

    if (listeTall[y] > høyest) {
        høyest = listeTall[y];
        console.log("Det høyeste tallet er " + høyest)
    }

}


console.log("summen av alle tallene er " + summen);
// document.getElementById("svar").innerText = summen;











// Tim sin kode






let listeKarakter = [3,4,6,2,4,5,4,4,4,5,4,6,3,4,5,4,4,4,6,3,6,5,3,1];

let sumKarakter = 0;

// for (let i = 0; i < listeKarakter.length; i = i +1) {
//     sumKarakter = sumKarakter + listeKarakter[i];
// }

let gjennomsnitt = sumKarakter / listeKarakter.length;

console.log("Gjennomsnittskarakteren til elevene er " + gjennomsnitt);

// for å finne laveste og høyeste
let høyeste = Math.max(...listeKarakter);
console.log("Den høyeste karakteren er " + høyeste);

let laveste = Math.min(...listeKarakter);
console.log("Den laveste karakteren er " + laveste);




