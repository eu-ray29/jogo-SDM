const questions = [
  {
    question: "O que são riscos psicossociais no ambiente de trabalho?",
    answers: [
      "São os fatores que afetam a saúde física dos trabalhadores, como condições de trabalho inseguras.",
      "São os fatores que podem causar doenças psicossociais, como estresse, ansiedade e depressão, relacionados ao ambiente de trabalho.",
      "São riscos relacionados à produtividade, como não cumprir metas e prazos.",
      "São os fatores que causam problemas financeiros à empresa, como perda de recursos materiais."
    ],
    correct: 1
  },
  {
    question: "Quais são algumas medidas eficazes para prevenir riscos psicossociais no ambiente de trabalho?",
    answers: [
      "Aumentar as jornadas de trabalho para garantir que as tarefas sejam cumpridas no prazo.",
      "Proporcionar treinamentos sobre saúde mental e promover uma comunicação aberta entre líderes e colaboradores.",
      "Ignorar os sinais de estresse e foco na produtividade.",
      "Diminuir a equipe de trabalho para reduzir custos."
    ],
    correct: 1
  },
  {
    question: "Qual a porcentagem aproximada de trabalhadores afastados do trabalho devido a riscos psicossociais, como estresse, ansiedade e depressão?",
    answers: ["5%", "10%", "20%", "30%"],
    correct: 2
  },
  {
    question: "Qual é o número de contato do Centro de Valorização da Vida (CVV), um serviço de apoio emocional e prevenção do suicídio?",
    answers: ["188", "180", "192", "190"],
    correct: 0
  },
  {
    question: "O que fazer se você perceber que um colega não está bem psicologicamente no trabalho?",
    answers: [
      "Ignorar a situação e focar apenas nas suas próprias tarefas.",
      "Reprimi-lo ou cobrar que melhore, sem se preocupar com o motivo.",
      "Oferecer apoio, escutá-lo de forma empática e, se necessário, sugerir que busque ajuda profissional.",
      "Falar sobre a situação com outros colegas, sem a pessoa saber."
    ],
    correct: 2
  },
  {
    question: "Como construir um ambiente de trabalho saudável, sem oferecer riscos psicossociais?",
    answers: [
      "Estabelecendo uma comunicação aberta, proporcionando equilíbrio entre vida pessoal e profissional e promovendo o respeito mútuo.",
      "Focando unicamente na produtividade e na entrega de resultados rápidos, sem se preocupar com o bem-estar emocional.",
      "Mantendo a hierarquia rígida e evitando qualquer tipo de interação informal entre os colaboradores.",
      "Aumentando as metas constantemente para que todos se sintam desafiados o tempo todo."
    ],
    correct: 0
  },
  {
    question: "Quais sinais uma pessoa pode apresentar quando não está se sentindo bem psicologicamente?",
    answers: [
      "Aumento de energia e disposição para realizar tarefas.",
      "Mudanças no comportamento, como irritabilidade, falta de concentração e isolamento social.",
      "Maior interesse pelas atividades de lazer e trabalho.",
      "Nenhum sinal perceptível, pois a pessoa mantém a rotina normalmente."
    ],
    correct: 1
  },
  {
    question: "Quais atividades são recomendadas para garantir uma saúde emocional melhor?",
    answers: [
      "Focar apenas no trabalho e evitar qualquer tipo de lazer ou descanso.",
      "Praticar atividades físicas, manter um equilíbrio entre trabalho e vida pessoal e buscar momentos de lazer e relaxamento.",
      "Evitar interações sociais e buscar resolver todos os problemas sozinho(a).",
      "Dedicar-se exclusivamente ao trabalho para não pensar em problemas pessoais."
    ],
    correct: 1
  },
  {
    question: "Qual é a importância de cuidar da saúde mental?",
    answers: [
      "A saúde mental não tem impacto significativo na vida profissional ou pessoal.",
      "Cuidar da saúde mental melhora o bem-estar geral, aumenta a produtividade e contribui para relações mais saudáveis.",
      "A saúde mental é importante apenas para quem tem problemas psicológicos.",
      "Não é necessário cuidar da saúde mental, pois ela é uma questão pessoal e não afeta o ambiente de trabalho."
    ],
    correct: 1
  },
  {
    question: "Como melhorar a situação dos riscos psicossociais em uma empresa?",
    answers: [
      "Aumentando a carga de trabalho para que os funcionários se tornem mais produtivos.",
      "Estabelecendo uma comunicação aberta, promovendo programas de apoio psicológico e implementando políticas de equilíbrio entre vida profissional e pessoal.",
      "Ignorando os sinais de estresse e focando apenas nos resultados financeiros.",
      "Reforçando a competitividade entre os colaboradores para melhorar o desempenho."
    ],
    correct: 2
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

