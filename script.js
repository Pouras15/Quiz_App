const question = document.getElementById("question"); // Matches fixed HTML ID
const answerButtons = document.querySelectorAll(".answerBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("score");

const questions = [
    {
        question: "What is 2 + 2?",
        answers: ["2","4","6","8"],
        correct: "4"
    },
    {
        question: "Capital of India?",
        answers: ["Mumbai","Delhi","Pune","Chennai"],
        correct: "Delhi"
    },
    {
        question: "JavaScript is a ____?",
        answers: ["Language","Database","Browser","Server"],
        correct: "Language"
    }
];

let currentQuestion = 0;
let score = 0;

// Updates both the question text and the button choices
function showQuestion(){
    question.textContent = questions[currentQuestion].question;
    
    answerButtons.forEach(function(button, index){
        button.textContent = questions[currentQuestion].answers[index];
    });
}

// Set up event listeners for answer choices once
answerButtons.forEach(function(button){
    button.addEventListener("click", function(){
        if(button.textContent === questions[currentQuestion].correct){
            score++;
            // Update score display immediately when they get it right
            scoreDisplay.textContent = `Score : ${score}/${questions.length}`;
        } 
    });
});

nextBtn.addEventListener("click", function(){
    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        question.textContent = "Quiz Completed!";
        scoreDisplay.textContent = `Final Score : ${score}/${questions.length}`;
    }
});

// Start the quiz dynamically on load
showQuestion();