// funksjonen til "Read more" knappen
document.getElementById("buttonRead").addEventListener("click", openGuide);

// når du trykker på den første knappen for å lese guiden
function openGuide(event) {
    
    // denne linjen gjør at denne koden vil kjøre 1 gang
    event.preventDefault();
    
    // "Read more" knappen vil ikke vises mer
    document.getElementById("buttonRead").style.display = "none";

    // login vil vises
    document.getElementById("boxLogin").style.display = "block";

    console.log("This is running!");
}


// når du trykker lever inn på login
document.getElementById("login").addEventListener("submit", givePaper);

function givePaper(event) {

    // denne eventen gjør at innlogingsfeltet ikke kommer tilbake
    event.preventDefault();

    // alt du har sent inn blir lagret
    let username = document.querySelector("#Username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    // lagret på console
    console.log("Username " + username);
    console.log("Email " + email);
    console.log("Password " + password);

    // kommer opp en beskjed som sier "takk for svarene"
    alert("Thanks for the answers " + username);
    // login-boksen vil ikke vises mer
    document.getElementById("boxLogin").style.display = "none"; /* show eller block */
    // når du har logget inn vil guiden vises
    document.getElementById("boxText").style.display = "block";

}