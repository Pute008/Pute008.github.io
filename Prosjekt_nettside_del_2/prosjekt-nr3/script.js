document.getElementById("login").addEventListener("submit", givePaper);

function givePaper(event) {
    event.preventDefault();

    let username = document.querySelector("#Username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    console.log("Username " + username);
    console.log("Email " + email);
    console.log("Password " + password);

    alert("Thanks for the answers " + username);
}