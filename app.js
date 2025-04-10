const express = require("express");
const session = require("express-session");
const app = express();

const Database = require("better-sqlite3");
const db = new Database("user.db");

const bcrypt = require("bcrypt");

app.use(express.static("public"));

const cors = require("cors");
app.use(cors());

app.use(express.json());

const port = 3000;

app.use(
    session({
        secret: "hemmeligNøkkel", // Bytt til en sikker nøkkel i produksjon
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false } // Sett til true hvis du bruker HTTPS
    })
);



// Middleware for å beskytte sider bak innloggings-mur
function kreverInnlogging(req, res, next) {
    // hvis vi ikke har en bruker som er i en session vil vi bli omdirigert til login-siden
    if (!req.session.bruker) {
        return res.redirect("/login.html");
    }
    next();
}


// Rute for innlogging
app.post("/login", async (req, res) => {
    const { epost, password } = req.body;
    const bruker = db.prepare("SELECT * FROM user WHERE epost = ?").get(epost);
    // hvis vi ikke finner riktig epost vil vi få en feilmelding
    if (!bruker) {
        return res.status(401).json({ message: "Feil email eller passord" });
    }

    const passordErGyldig = await bcrypt.compare(password, bruker.password);
    // hvis vi ikke har riktig passord vil vi får en feilmelding
    if (!passordErGyldig) {
        return res.status(401).json({ message: "Feil email eller passord" });
    }

    // Lagre brukerdata i session
    req.session.bruker = { id: bruker.fornavn, etternavn: bruker.etternavn };
    // når vi er logget inn vil vi bli sendt til en ny side (dashboard) hvor ting er skjult for andre brukere
    // og vi vil få en melding om at innloggingen var vellykket
    res.json({ message: "Innlogging vellykket", redirect: "/skjult" });
});



// Rute for å logge ut
app.post("/logout", (req, res) => {
    // når du logger ut vil sessionen bli slettet og du vil bli sendt til login-siden
    req.session.destroy();
    res.json({ message: "Du er logget ut" });
});


// Eksempel på en beskyttet rute
app.get("/beskyttet", kreverInnlogging, (req, res) => {
    res.json({ password: req.session.bruker.password });
});




// henter alle brukere fra user tabellen i databasen
app.get("/getUser", (req, res) => {
    const users = db.prepare("SELECT * FROM user").all();
    res.json(users);
});

app.post("/newUser", async (req, res) => {
    // får informasjon fra skjemaet i html-filen, skjemaet må være fylt ut
    const {fornavn, etternavn, epost, telefon, password } = req.body;

    // Hash passordet med bcrypt
    const saltRounds = 10; // Antall runder med hashing
    const hashPassord = await bcrypt.hash(password, saltRounds);

    // sier hva den skal legge til i databasen
    const stmt = db.prepare("INSERT INTO user (fornavn, etternavn, epost, telefon, password) VALUES (?, ?, ?, ?, ?)");
    // legger til personen i databasen
    const info = stmt.run(fornavn, etternavn, epost, telefon, hashPassord);

    // vi får en melding tilbake om at personen er lagt til
    res.json({ message: "New user made", info });
});





// Rute for å hente bilene til den innlogga brukaren
app.get("/mineKort", kreverInnlogging, (req, res) => {
    const cardID = req.session.bruker.id;

    const kort = db.prepare("SELECT * FROM samling WHERE cardID = ?").all(cardID);

    res.json(kort);
});



// Rute for å vise dashboard.html (kun for innlogga brukarar)
app.get("/skjult", kreverInnlogging, (req, res) => {
    // sender oss til website.html som er i hidden-mappen
    res.sendFile(__dirname + "/hidden/website.html");
});""

// hele denne koden sender deg til en nettside (du må bruke denne hvis du har html sider som er utenfor public mappen)
app.get("/addCardPage/html", kreverInnlogging, (req, res) => {
    res.sendFile(__dirname + "/hidden/addCard.html");
});

// sender deg til samling.html siden (som er i hidden mappen)
app.get("/collection", kreverInnlogging, (req, res) => {
    res.sendFile(__dirname + "/hidden/samling.html");
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});