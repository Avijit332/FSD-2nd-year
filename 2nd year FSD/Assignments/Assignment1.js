const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: 1
    },

    {
        question: "Which language makes webpages interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which tag is used to create a paragraph?",
        options: [
            "<h1>",
            "<p>",
            "<br>",
            "<div>"
        ],
        answer: 1
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "//",
            "#",
            "<!-- -->",
            "**"
        ],
        answer: 0
    }
];


let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


// Start Quiz
function startQuiz() {

    let name = document.getElementById("studentName").value;
    let studentClass = document.getElementById("studentClass").value;

    if (name === "" || studentClass === "") {
        alert("Please enter your name and class.");
        return;
    }

    // Store student information
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentClass", studentClass);

    document.getElementById("studentForm").classList.add("hide");
    document.getElementById("quiz").classList.remove("hide");

    document.getElementById("studentInfo").innerText =
        "Student: " + name + " | Class: " + studentClass;

    loadQuestion();
}


// Load Question
function loadQuestion() {

    selectedAnswer = null;

    let question = questions[currentQuestion];

    document.getElementById("question").innerText =
        (currentQuestion + 1) + ". " + question.question;

    let options = document.getElementById("options");

    options.innerHTML = "";

    question.options.forEach(function(option, index) {

        let button = document.createElement("button");

        button.innerText = option;

        button.classList.add("option");

        button.onclick = function() {
            selectAnswer(index, button);
        };

        options.appendChild(button);
    });
}


// Select Answer
function selectAnswer(index, button) {

    selectedAnswer = index;

    let allOptions = document.querySelectorAll(".option");

    allOptions.forEach(function(option) {
        option.classList.remove("selected");
    });

    button.classList.add("selected");
}


// Next Question
function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();
    }
}


// Show Result
function showResult() {

    document.getElementById("quiz").classList.add("hide");

    document.getElementById("result").classList.remove("hide");

    let name = localStorage.getItem("studentName");
    let studentClass = localStorage.getItem("studentClass");

    document.getElementById("resultInfo").innerText =
        "Name: " + name + " | Class: " + studentClass;

    document.getElementById("score").innerText =
        "Your Score: " + score + " / " + questions.length;

    // Store score
    localStorage.setItem("score", score);
}


// Restart Quiz
function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("result").classList.add("hide");

    document.getElementById("studentForm").classList.remove("hide");

    document.getElementById("studentName").value =
        localStorage.getItem("studentName");

    document.getElementById("studentClass").value =
        localStorage.getItem("studentClass");
}