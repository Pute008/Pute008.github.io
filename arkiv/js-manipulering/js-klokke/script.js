
// oppgave 1
// document.getElementById("utskrift").innerText = tid;

// document.getElementById("utskrift").innerText = tid.getFullYear() + "." + tid.getMonth() + "." + tid.getDate() + ".";

// document.getElementById("t_m_s").innerText = tid.getHours() + "." + tid.getMinutes() + "." + tid.getSeconds();

// oppgave 2

setInterval(myTimer, 1000);

function myTimer() {
  let tid = new Date();
// to localeTimeString koden er både timer minutter og sekunder
  console.log(tid.toLocaleTimeString())
  document.getElementById("utskrift").innerHTML = tid.toLocaleDateString() + "  " + tid.toLocaleTimeString();   
}

// annen kode fra jo Bjørnar

// console.log(tid.getHours());
// console.log(tid.getMinutes());
// console.log(tid.getSeconds());

// console.log(tid.getHours() + " h " + tid.getMinutes() + " m " + tid.getSeconds() + " s ");

