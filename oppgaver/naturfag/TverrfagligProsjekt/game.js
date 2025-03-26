// har fått låne kode av Alexander Mouritsen


// PS: Må ha question i arrayet for at det skal fungere.
const questions = [
  {
    // Spørsmål 1
      question: "Hva er EE-avfall?",
      // svaralternativer
      answers: ["Elektronisk avfall", "Farlig avfall", "Plante avfall", "Eksploderende avfall"],
      // hvilket av svarene i svaralternativene som er riktig, den ser på det første i arrayet
      correct: 0
  },
  {
      question: "Hvilket av disse er ikke EE-avfall?",
      answers: ["Batteri", "PC-skjerm", "Mobil", "Kjøleskap"],
      correct: 0
  },
  {
      question: "Hva er det i et kretskort?",
      answers: ["Gull, Kobber, Sølv, Wolfram, Tantal og Tinn", "Gull, Kobber, Sølv, Wolfram, Tre og Tinn", "Gull, Kobber, Sølv, Wolfram, Gummi og Tinn", "Gull, Kobber, Sølv, Wolfram, Ull og Tinn"],
      correct: 0
  },
  {
      question: "Hvor skal EE-avfall leveres?",
      answers: ["Til gjenvinningsstasjoner eller butikker som selger elektronikk", "I søppelet hjemme", "Ut i naturen", "Kan ikke kastes, må lagres"],
      correct: 0
  },
  {
      question: "Hva er farene med EE-avfall",
      answers: ["Det er skadelig for naturen", "Det er ingen farer", "Det skader asfalten", "Det kan komme inn i kroppen"],
      correct: 0
  }
];

// hvilket spørsmål man er på
let currentSpørsmålIndex = 0;
// scoren til spilleren
let score = 0;

// Funksjon for å blande svaralternativene, og rekkefølgen på dem
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Funksjon for å laste spørsmål, den oppdaterer HTML-en med nye svar og spørsmål
function loadQuestion() {
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".button-row button");

  // henter det nåværende spørsmålet, og blander svaralternativene (currentQuestion.answers passer på hvilket spørsmål som vises)
  const currentQuestion = questions[currentSpørsmålIndex];

  // denne koden inneholder alle objekter med hvert svaralternativ og hver kodes index, dette gjør den med å bruke map-funksjonen. Map-funksjonen lager en ny array med elementer som er resultatet av en funksjon som blir kjørt på hvert element i den originale arrayen.
  const answers = currentQuestion.answers.map((answer, index) => ({ answer, index }));

  // blander svaralternativene, den bruker shuffleArray-funksjonen for å få til dette
  shuffleArray(answers);

  // oppdaterer HTML-en med spørsmålet og svaralternativene
  questionElement.textContent = currentQuestion.question;

  // setter opp click-hendelser for hvert svaralternativ
  answerButtons.forEach((button, index) => {
      button.textContent = answers[index].answer;
      // når man trykker på et av svaralternativene, vil den gå til neste spørsmål
      button.onclick = () => nextQuestion(answers[index].index);
  });
}

// Funksjon for å gå til neste spørsmål
function nextQuestion(selectedAnswer) {

  // Sjekker om svaret er riktig, hvis rikitg vil du få 1 poeng
  if (selectedAnswer === questions[currentSpørsmålIndex].correct) {
      score++;
  }

  // Gå til neste spørsmål
  currentSpørsmålIndex++;
  // bytter spørsmål til neste i arrayet helt til du kommer til slutten av arrayet
  if (currentSpørsmålIndex < questions.length) {
      loadQuestion();
  } else {
    // Hvis det ikke er flere spørsmål, vis oppsummering
      showSummary();
  }
}

// Funksjon for å vise oppsummering
function showSummary() {
  // Henter elementene fra HTML, denne er lagd slik at man ikke trenger å skrive document.getElementById hele tiden
  const questionElement = document.getElementById("question");
  const quizContainer = document.querySelector(".quiz-container");

// forteller deg hvor mange poeng du fikk, tar viser poengene dine og lengden av spørsmålene
  questionElement.textContent = `Gratulerer! Du har fullført quizen. Din poengsum er ${score} av ${questions.length}.`;

  // denne gjør at quiz boksene ikke vises mer
  quizContainer.innerHTML = '';
}

// Lytter etter at siden er ferdig lastet
document.addEventListener("DOMContentLoaded", loadQuestion);
