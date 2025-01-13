// av Alex


// const questions = [
//   {
//       question: "Hva er EE-avfall?",
//       answers: ["Elektrisk og elektronisk avfall", "Farlig avfall", "Gummi avfall", "Ingen av de svaralternativene"],
//       correct: 0
//   },
//   {
//       question: "Hvor skal EE-avfall leveres?",
//       answers: ["Til gjenvinningsstasjoner eller butikker som selger elektronikk", "Til vanlige søppelkasser", "Anfield stadium", "Ute i gaten"],
//       correct: 0
//   },
//   {
//       question: "Hvorfor er det viktig å sortere EE-avfall?",
//       answers: ["For å redusere miljøgifter", "EE-avfall blir resirkulert direkte til nye elektroniske produkter uten behandling.", "Å sortere EE-avfall fører til at man får lavere strømregning", "Sortering av EE-avfall gir raskere internett."],
//       correct: 0
//   },
//   {
//       question: "Hva inneholder ofte EE-avfall?",
//       answers: ["Farlige stoffer som bly og kvikksølv", "Vanlig plastikk uten metall", "Papir", "Treverk"],
//       correct: 0
//   },
//   {
//       question: "Hvem har plikt til å ta imot EE-avfall?",
//       answers: ["Butikker som selger elektronikk", "Skoler", "Kontorer", "Ingen"],
//       correct: 0
//   }
// ];

// let currentQuestionIndex = 0;
// let score = 0;

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// function loadQuestion() {
//   const questionElement = document.getElementById("question");
//   const answerButtons = document.querySelectorAll(".button-row button");

//   const currentQuestion = questions[currentQuestionIndex];
//   const answers = currentQuestion.answers.map((answer, index) => ({ answer, index }));
//   shuffleArray(answers);

//   questionElement.textContent = currentQuestion.question;
//   answerButtons.forEach((button, index) => {
//       button.textContent = answers[index].answer;
//       button.onclick = () => nextQuestion(answers[index].index);
//   });
// }

// function nextQuestion(selectedAnswer) {
//   if (selectedAnswer === questions[currentQuestionIndex].correct) {
//       score++;
//   }

//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//       loadQuestion();
//   } else {
//       showSummary();
//   }
// }

// function showSummary() {
//   const questionElement = document.getElementById("question");
//   const quizContainer = document.querySelector(".quiz-container");

//   questionElement.textContent = `Gratulerer! Du har fullført quizen. Din poengsum er ${score} av ${questions.length}.`;
//   quizContainer.innerHTML = ''; // Clear the quiz container
// }

// document.addEventListener("DOMContentLoaded", loadQuestion);



// PS: Må ha qustion i arrayet for at det skal fungere.
const questions = [
  {
    // Spørsmål 1
      question: "Hva er EE-avfall?",
      // svaralternativer
      answers: ["Elektrisk og elektronisk avfall", "Farlig avfall", "Gummi avfall", "Ingen av de svaralternativene"],
      // hvilket av svarene i svaralternativene som er riktig
      correct: 0
  },
  {
      question: "Hvilket av disse er ikke EE-avfall?",
      answers: ["Til gjenvinningsstasjoner eller butikker som selger elektronikk", "Til vanlige søppelkasser", "Anfield stadium", "Ute i gaten"],
      correct: 0
  },
  {
      question: "Hva er det i et kretskort?",
      answers: ["For å redusere miljøgifter", "EE-avfall blir resirkulert direkte til nye elektroniske produkter uten behandling.", "Å sortere EE-avfall fører til at man får lavere strømregning", "Sortering av EE-avfall gir raskere internett."],
      correct: 0
  },
  {
      question: "Hvor skal EE-avfall leveres?",
      answers: ["Farlige stoffer som bly og kvikksølv", "Vanlig plastikk uten metall", "Papir", "Treverk"],
      correct: 0
  },
  {
      question: "...",
      answers: ["Butikker som selger elektronikk", "Skoler", "Kontorer", "Ingen"],
      correct: 0
  }
];

// hvilket spørsmål man er på
let currentSpørsmålIndex = 0;
// scoren til spilleren
let score = 0;

// Funksjon for å blande svaralternativene
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Funksjon for å laste spørsmål
function loadQuestion() {
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".button-row button");

  const currentQuestion = questions[currentSpørsmålIndex];
  const answers = currentQuestion.answers.map((answer, index) => ({ answer, index }));
  shuffleArray(answers);

  questionElement.textContent = currentQuestion.question;
  answerButtons.forEach((button, index) => {
      button.textContent = answers[index].answer;
      button.onclick = () => nextQuestion(answers[index].index);
  });
}

// Funksjon for å gå til neste spørsmål
function nextQuestion(selectedAnswer) {
  if (selectedAnswer === questions[currentSpørsmålIndex].correct) {
      score++;
  }

  currentSpørsmålIndex++;
  if (currentSpørsmålIndex < questions.length) {
      loadQuestion();
  } else {
      showSummary();
  }
}

// Funksjon for å vise oppsummering
function showSummary() {
  const questionElement = document.getElementById("question");
  const quizContainer = document.querySelector(".quiz-container");

  questionElement.textContent = `Gratulerer! Du har fullført quizen. Din poengsum er ${score} av ${questions.length}.`;
  quizContainer.innerHTML = ''; // Clear the quiz container
}

// Lytter etter at siden er ferdig lastet
document.addEventListener("DOMContentLoaded", loadQuestion);
