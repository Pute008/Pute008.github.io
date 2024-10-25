
// oppgave 1
// document.getElementById("utskrift").innerText = tid;

// document.getElementById("utskrift").innerText = tid.getFullYear() + "." + tid.getMonth() + "." + tid.getDate() + ".";

// document.getElementById("t_m_s").innerText = tid.getHours() + "." + tid.getMinutes() + "." + tid.getSeconds();




// annen kode fra jo Bjørnar

// console.log(tid.getHours());
// console.log(tid.getMinutes());
// console.log(tid.getSeconds());

// console.log(tid.getHours() + " h " + tid.getMinutes() + " m " + tid.getSeconds() + " s ");






// oppgave 2



// setInterval gjør at koden oppdaterer seg hvert 1000 millisekund
setInterval(myTimer, 1000);

function myTimer() {
  let tid = new Date();
// to localeTimeString koden er både timer minutter og sekunder
  console.log(tid.toLocaleTimeString())
//   innerHTML er det i HTMLen som skal forandres
  document.getElementById("utskrift").innerHTML = tid.toLocaleDateString() + "  " + tid.toLocaleTimeString();   
}

// setInterval(sekunder, 1000);
// function sekunder() {
// let tid = new Date();
// console.log(tid.toLocaleTimeString())
// document.getElementById("utskrift").innerHTML = tid.toLocaleTimeString();
// }


// countdown js kode

// setter tiden til hva vi skal telle ned til
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
// x er navnet på intervolen altså hvor mange ganger den skal telle ned
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // selve kalkulasjonene for dager, timer, minutter og sekunder
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // det som vises på html
    document.getElementById("demo").innerHTML = "Until New Year!!! " + days + " D " + hours + " H " + minutes + " M " + seconds + " S ";

    // hvis countdownen er ferdig vil noe text bli skrevet ned
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = 'Happy New Year!!! <iframe width="560" height="315" src="https://www.youtube.com/embed/Byz94fkwf6U?si=XuhFzRlKTDVUN2ze" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> ';
    }
}, 1000)



