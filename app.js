const express = require("express");
const app = express();

const Database = require("better-sqlite3");
const db = new Database("user.db");

const bcrypt = require("bcrypt");

app.use(express.static("public"));

const cors = require("cors");
app.use(cors());

app.use(express.json());

const port = 3000;


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
    window.location.href='./login.html';
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});