const questions = [
  {
    question: "Qual é a capital do Brasil?",
    answers: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
    correct: 2
  },
  {
    question: "Quem descobriu o Brasil?",
    answers: ["Pedro Álvares Cabral", "Dom Pedro I", "Tiradentes", "Getúlio Vargas"],
    correct: 0
  },
  {
    question: "Quanto é 9 x 7?",
    answers: ["63", "56", "72", "49"],
    correct: 0
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    answers: ["Marte", "Júpiter", "Saturno", "Terra"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const statusEl = document.getElementById("status");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  selectedAnswer = null;


  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer");
    btn.onclick = () => selectAnswer(btn, index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(button, index) {
  const allButtons = document.querySelectorAll(".answer");
  allButtons.forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
  selectedAnswer = index;
  nextButton.disabled = false;
}

function checkAnswer() {
  const correct = questions[currentQuestion].correct;
  if (selectedAnswer === correct) {
    score += 10;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    endGame();
  }

  statusEl.textContent = ` ${score}`;
  nextButton.disabled = true;
}

function endGame() {
  questionEl.textContent = "🏆 Fim do Jogo!";
  answersEl.innerHTML = "";
  nextButton.style.display = "none";
}

answersEl.addEventListener("click", checkAnswer);

// Iniciar o jogo
loadQuestion();

