// Get all required input from doc
const firsName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const submitButton = document.getElementById("submit-button");
const checkboxesQ1 = document.getElementsByClassName("cbQ1");
const radioButtonsQ2 = document.getElementsByName("rOption");
const textboxQ3 = document.getElementById("input-textbox");
const statementQ4 = document.getElementsByName("rStatement");

// Set initial score
let score = 0;

// Functions
function CheckName(inputName) {
  var letters = /^[A-Za-z]+$/;

  if (!inputName.value.match(letters)) {
    alert("Only letters are allowed in first and last name.");
    return false;
  }

  return true;
}

function CheckEmail(inputEmail) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!inputEmail.value.match(validRegex)) {
    alert("Not a valid email format.");
    return false;
  }

  return true;
}

// Event listeners
submitButton.addEventListener("click", (event) => {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Checking the input given by user
  if (!CheckName(firsName)) {
    return;
  }
  if (!CheckName(lastName)) {
    return;
  }
  if (!CheckEmail(email)) {
    return;
  }

  // Checking that the mandatory questions have input
  // as well as if the answers are correct for scoring
  // Checking Q1
  let notCheckedCounter = 0;
  let correctAnswerCounter = 0;
  checkboxesQ1.forEach(element => {
    if (!element.checked) {
      notCheckedCounter++;
    }
    else if (element.value === "corr" && element.checked) {
      correctAnswerCounter++;
    }
  });
  if (notCheckedCounter === checkboxesQ1.length) {
    alert("Answer for question 1 is needed.");
    return;
  }
  if (correctAnswerCounter === 4) {
    score++;
  }
  
  // Checking Q2
  notCheckedCounter = 0;
  radioButtonsQ2.forEach(element => {
    if (!element.checked) {
      notCheckedCounter++;
    }
    else if (element.value === "corr" && element.checked) {
      score++;
    }
  });
  if (notCheckedCounter === radioButtonsQ2.length) {
    alert("Answer for question 2 is needed.");
    return;
  }

  // Checking Q3 scoring
  if (textboxQ3.value.includes('red') &&
      textboxQ3.value.includes('green') &&
      textboxQ3.value.includes('blue')) {
        score++;
  }

  // Checking Q4 scoring
  statementQ4.forEach(element => {
    if (element.value === "corr" && element.checked) {
      score++;
    }
  });

  // Checking Q5 scoring

});
