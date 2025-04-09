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
    if (!req.session.bruker) {
        return res.redirect("/login.html");
    }
    next();
}


// Rute for innlogging
app.post("/login", async (req, res) => {
    const { epost, password } = req.body;

    const bruker = db.prepare("SELECT * FROM person WHERE epost = ?").get(epost);
    if (!bruker) {
        return res.status(401).json({ message: "Feil email eller passord" });
    }

    const passordErGyldig = await bcrypt.compare(password, bruker.password);
    if (!passordErGyldig) {
        return res.status(401).json({ message: "Feil email eller passord" });
    }

    // Lagre brukerdata i session
    req.session.bruker = { id: bruker.fornavn, etternavn: bruker.etternavn };
    res.json({ message: "Innlogging vellykket", redirect: "/dashboard" });
});



// Rute for å logge ut
app.post("/logout", (req, res) => {
    // slutter besøket på siden
    req.session.destroy();
    res.json({ message: "Du er logget ut" });
});

// Eksempel på en beskyttet rute
app.get("/beskyttet", kreverInnlogging, (req, res) => {
    res.json({ password: req.session.bruker.password });
});





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





// Rute for å hente bilane til den innlogga brukaren
// app.get("/minebiler", kreverInnlogging, (req, res) => {
//     const personnummer = req.session.bruker.id;

//     const biler = db.prepare("SELECT * FROM bil WHERE personnummer = ?").all(personnummer);

//     res.json(biler);
// });



// Rute for å vise dashboard.html (kun for innlogga brukarar)
app.get("/dashboard", kreverInnlogging, (req, res) => {
    res.sendFile(__dirname + "");
});""


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});