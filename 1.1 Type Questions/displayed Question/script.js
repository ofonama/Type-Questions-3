// retrive all the stored informations
const storedQuestion1 = localStorage.getItem("questOne");
const storedAnswer1 = localStorage.getItem("answerOne");
const storedQuestion2 = localStorage.getItem("questTwo");
const storedAnswer2 = localStorage.getItem("answerTwo");
const storedQuestion3 = localStorage.getItem("questThree");
const storedAnswer3 = localStorage.getItem("answerThree");

// Store all the DOM
const quizQuestions = $(".quiz-questions");
const answerSpace = $(".answer-space");
const result = $("#result");
const indicator = $(".indicator");

let currentQuestion = 0;
let score = 0;

let number = (currentQuestion + 1);

const inputedQuizData = [
    {
        question: `1. ${storedQuestion1}`,
        correctAnswer: `${storedAnswer1}`
    },

    {
        question: `2. ${storedQuestion2}`,
        correctAnswer: `${storedAnswer2}`
    },

    {
        question: `3. ${storedQuestion3}`,
        correctAnswer: `${storedAnswer3}`
    }
];

// $("h3").html(`${inputedQuizData[0].question}, ${inputedQuizData[0].answer}`);

// display questions
function displayQuestions() {
    if (currentQuestion >= inputedQuizData.length) {
        displayScore();
        return;
    }
    quizQuestions.html(`
        <p class="">
            ${inputedQuizData[currentQuestion].question}
        </p>    
    `);
    answerSpace.html(`
        <input type="text" class="form-control" id="user-answer" />
        <button type="submit" class="btn btn-primary mt-2" onclick="checkAnswer();">Submit</button>
        <button type="button" id="hint" class="btn btn-outline-secondary mt-2" onclick="showHint();">Hint</button>
    `);
}

// Show hint
const hintBtn = $("#hint");
hintBtn.on("click", showHint);
function showHint() {
    $("#hint-container").html(`
        <small>${inputedQuizData[currentQuestion].correctAnswer.slice(0, 3)}</small>
    `);

    setTimeout(() => {
        $("#hint-container").html("");
    }, 2000)
}

// check answers
function checkAnswer() {
    const userAnswer = $("#user-answer");
    const answerOfUser = userAnswer.val().trim().toLowerCase();
    const correctAnswer = inputedQuizData[currentQuestion].correctAnswer;
    const correctObjectAnswer = correctAnswer.toLowerCase();

    if (answerOfUser === correctObjectAnswer) {
        score++;
        userAnswer.attr("class", "form-control is-valid");
    } else {
        userAnswer.attr("class", "form-control is-invalid");
    }

    setTimeout(() => {
        currentQuestion++;
        displayQuestions();
    }, 1000);

    $(".quiz").addClass("animate");
    setTimeout(() => {
        $(".quiz").removeClass("animate");
    }, 2000);

}

// Show the score
function displayScore() {
    quizQuestions.css("display", "none");
    answerSpace.css("display", "none");
    result.html(`
        <h3>Weldone</h3>
        <p>You scored ${score} out of ${inputedQuizData.length}</p>    
    `);
}

displayQuestions();