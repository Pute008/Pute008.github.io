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
    req.session.bruker = { id: bruker.userID, fornavn: bruker.fornavn, etternavn: bruker.etternavn };
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
    res.json({
        fornavn: req.session.bruker.fornavn,
        id: req.session.bruker.id
    });
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

// app.get("/visKort", kreverInnlogging, (req, res) => {
//     const samling = db.prepare("SELECT card.cardID, card.setID, card.cardName FROM card");
//     res.json(samling);
// });

app.get("/visKort", kreverInnlogging, (req, res) => {
    try {
        const alleKort = db.prepare(`
            SELECT card.cardID, card.setID, card.cardName
            FROM card
        `).all();
        res.json(alleKort);
    } catch (error) {
        console.error("Feil ved henting av kort:", error);
        res.status(500).json({ message: "Kunne ikke hente kortene" });
    }
});





app.post("/leggTilKort", (req, res) => {
    const { cardID, userID } = req.body;
    // sjekker om kortet allerede er i databasen
    // const stmt = db.prepare("SELECT * FROM samling WHERE cardID = ? AND userID = ?");
    // const eksisterendeKort = stmt.get(cardID, userID);

    // if (eksisterendeKort) {
    //     return res.status(400).json({ message: "Kortet finnes allerede i samlingen" });
    // }

    // Legger til kortet i databasen

    const stmt = db.prepare("INSERT INTO samling (cardID, userID) VALUES (?, ?)");
    const info = stmt.run(cardID, userID);

    res.json({ message: "Kort lagt til i samlingen", info });

    
});





// Rute for å hente bilene til den innlogga brukaren
// app.get("/mineKort", kreverInnlogging, (req, res) => {
//     const cardID = req.session.bruker.id;

//     const kort = db.prepare("SELECT * FROM samling WHERE cardID = ?").all(cardID);

//     res.json(kort);
// });

// NOE RART HER
app.get("/mineKort", kreverInnlogging, (req, res) => {
    const userID = req.session.bruker.id;

    const samling = db.prepare("SELECT card.cardID, card.setID, card.cardName, samling.userID FROM card INNER JOIN samling ON card.cardID = samling.cardID WHERE samling.userID = ?;").all(userID);
    res.json(samling);
});



// SELECT card.cardName, card.rarity, card.cardNR, setType.setID FROM card INNER JOIN setType ON setType.setID = card.setID ORDER BY card.cardNR;

// sender deg til samling.html siden (som er i hidden mappen)
app.get("/collection", kreverInnlogging, (req, res) => {
    res.sendFile(__dirname + "/hidden/samling.html");
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




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});