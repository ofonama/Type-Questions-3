// store the DOM
const form = $("form");
const questionOne = $("#Questions1");
const questionTwo = $("#Questions2");
const questionThree = $("#Questions3");
const inputedAnswerOne = $("#correctAnswer1");
const inputedAnswerTwo = $("#correctAnswer2");
const inputedAnswerThree = $("#correctAnswer3");
const invlQuestMessOne = $("#invlQuestMess1");
const invlQuestMessTwo = $("#invlQuestMess2");
const invlQuestMessThree = $("#invlQuestMess3");
const invlAnsMessOne = $("#invlAnsMess1");
const invlAnsMessTwo = $("#invlAnsMess2");
const invlAnsMessThree = $("#invlAnsMess3");
const submitBtn = $("#Submit");


form.on("submit", (e) => {
    e.preventDefault();
    const questOne = questionOne.val().trim();
    const questTwo = questionTwo.val().trim();
    const questThree = questionThree.val().trim();
    const answerOne = inputedAnswerOne.val().trim();
    const answerTwo = inputedAnswerTwo.val().trim();
    const answerThree = inputedAnswerThree.val().trim();

    let isValid = true;


    if (questOne !== "") {
        questionOne.attr("class", "form-control p-2 card is-valid");
        invlQuestMessOne.html("");
        localStorage.setItem("questOne", questOne);
    } else {
        isValid = false;
        questionOne.attr("class", "form-control p-2 card is-invalid");
        invlQuestMessOne.html("Please, fill the field.");
    }

    if (answerOne !== "") {
        inputedAnswerOne.attr("class", "form-control is-valid");
        invlAnsMessOne.html("");
        localStorage.setItem("answerOne", answerOne);
    } else {
        isValid = false;
        inputedAnswerOne.attr("class", "form-control is-invalid");
        invlAnsMessOne.html("Please, fill the field.");
    }

    if (questTwo !== "") {
        questionTwo.attr("class", "form-control p-2 card is-valid");
        invlQuestMessTwo.html("");
        localStorage.setItem("questTwo", questTwo);
    } else {
        isValid = false;
        questionTwo.attr("class", "form-control p-2 card is-invalid");
        invlQuestMessTwo.html("Please, fill the field.");
    }

    if (answerTwo !== "") {
        inputedAnswerTwo.attr("class", "form-control is-valid");
        invlAnsMessTwo.html("");
        localStorage.setItem("answerTwo", answerTwo);
    } else {
        isValid = false;
        inputedAnswerTwo.attr("class", "form-control is-invalid");
        invlAnsMessTwo.html("Please, fill the field.");
    }

    if (questThree !== "") {
        questionThree.attr("class", "form-control p-2 card is-valid");
        invlQuestMessThree.html("");
        localStorage.setItem("questThree", questThree);
    } else {
        isValid = false;
        questionThree.attr("class", "form-control p-2 card is-invalid");
        invlQuestMessThree.html("Please, fill the field.");
    }

    if (answerThree !== "") {
        inputedAnswerThree.attr("class", "form-control is-valid");
        invlAnsMessThree.html("");
        localStorage.setItem("answerThree", answerThree);
    } else {
        isValid = false;
        inputedAnswerThree.attr("class", "form-control is-invalid");
        invlAnsMessThree.html("Please, fill the field.");
    }

    if (isValid === true) {

        submitBtn.html(`
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Please, wait...</span>
        `);
        submitBtn.prop("disabled", true);
        setTimeout(() => {
            window.location.href = "./displayed Question/index.html";
        }, 5000);
        $("#demo").css("display", "block");
        // const TIME_OUT_DISPLAY = 5000;
        // setTimeout(() => {

        //     submitBtn.html(`Sign in`);
        //     submitBtn.prop("disabled", false);

        // }, TIME_OUT_DISPLAY);
    }
});