let questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      correct: 1
    },
    {
      question: "Which color is the sky?",
      options: ["Blue", "Red", "Green", "Yellow"],
      correct: 0
    },
    {
      question: "Which animal barks?",
      options: ["Cat", "Dog", "Cow", "Lion"],
      correct: 1
    },
    {
      question: "How many days in a week?",
      options: ["5", "6", "7", "8"],
      correct: 2
    }
  ];
  
  let current = 0;
  let score = 0;
  
  function loadQuestion() {
    let q = questions[current];
    document.getElementById("question").textContent = q.question;
    document.getElementById("btn0").textContent = q.options[0];
    document.getElementById("btn1").textContent = q.options[1];
    document.getElementById("btn2").textContent = q.options[2];
    document.getElementById("btn3").textContent = q.options[3];
    document.getElementById("qNum").textContent = current + 1;
  }
  
  function checkAnswer(answer) {
    if (answer === questions[current].correct) {
      score++;
      document.getElementById("score").textContent = score;
    }
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("result").style.display = "block";
      document.getElementById("finalScore").textContent = score;
      document.getElementById("question").style.display = "none";
      document.getElementById("btn0").style.display = "none";
      document.getElementById("btn1").style.display = "none";
      document.getElementById("btn2").style.display = "none";
      document.getElementById("btn3").style.display = "none";
    }
  }
  
  function restartQuiz() {
    current = 0;
    score = 0;
    document.getElementById("score").textContent = 0;
    document.getElementById("question").style.display = "block";
    document.getElementById("btn0").style.display = "inline-block";
    document.getElementById("btn1").style.display = "inline-block";
    document.getElementById("btn2").style.display = "inline-block";
    document.getElementById("btn3").style.display = "inline-block";
    document.getElementById("result").style.display = "none";
    loadQuestion();
  }
  
  loadQuestion();
  