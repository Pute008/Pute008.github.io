/*
let skriftfarge =prompt("hva farge skal teksten være")
console.log(farge);
document.querySelector(test).style.color = "skriftfarge" + color  
*/

let farge = prompt("Hva skal bakgrunnsfargen være?");
document.body.style.background = "linear-gradient("+ farge + ")";






// document.body.style.background = "linear-gradient("+ farge + ")";
// document.querySelector(test).style.color = tekstFarge;

let testfarge = prompt("Hva farge skal teksten være?")
console.log(testfarge);
//document.getElementById("test").style.color = testfarge;
document.querySelector("#test").style.color = testfarge;

localStorage.setItem("lastname", "smith");
localStorage.getItem("lastname");