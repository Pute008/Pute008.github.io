document.getElementById("buttonRead").addEventListener("click", openGuide);


function openGuide(event) {
    
    event.preventDefault();
    
    document.getElementById("buttonRead").style.display = "none";

    document.getElementById("boxLogin").style.display = "block";

    console.log("This is running!");
}



document.getElementById("login").addEventListener("submit", givePaper);

function givePaper(event) {

    // denne eventen gjør at innlogingsfeltet ikke kommer tilbake
    event.preventDefault();

    let username = document.querySelector("#Username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    console.log("Username " + username);
    console.log("Email " + email);
    console.log("Password " + password);

    alert("Thanks for the answers " + username);
    document.getElementById("boxLogin").style.display = "none"; /* show eller block */
    document.getElementById("boxText").style.display = "block";

}