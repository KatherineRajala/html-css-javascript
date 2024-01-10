// Get all required input from doc
const firsName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const submitButton = document.getElementById("submit-button");
const checkboxesQ1 = document.getElementsByClassName("cbQ1");
const radioButtonsQ2 = document.getElementsByName("rOption");
const textboxQ3 = document.getElementById("input-txtbox");
const statementQ4 = document.getElementsByName("rStatement");
const dropDownQ5 = document.getElementById("ddCity");
const scoringParagraph = document.getElementById("scoring");

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
  for (let i = 0; i < checkboxesQ1.length; i++) {
    if (!checkboxesQ1[i].checked) {
      notCheckedCounter++;
    }
    if (checkboxesQ1[i].value === "corr" && 
        checkboxesQ1[i].checked) {
          correctAnswerCounter++;
        }
  }
  if (notCheckedCounter === checkboxesQ1.length) {
    alert("Answer for question 1 is needed.");
    return;
  }
  if (correctAnswerCounter === 4 &&
      notCheckedCounter === 2) {
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
  // Known issue that it's possible to write other colors and still
  // get a score if you at least put in the rgb colors.
  if (textboxQ3 !== null) {
    if (textboxQ3.value.includes('red') &&
      textboxQ3.value.includes('green') &&
      textboxQ3.value.includes('blue')) {
        score++;
  }
  }

  // Checking Q4 scoring
  //if (statementQ4 !== null) {
    statementQ4.forEach(element => {
      if (element.value === "corr" && element.checked) {
        score++;
      }
    });
  //}

  // Checking Q5 scoring
  if (dropDownQ5.value === "corr" &&
      dropDownQ5.options[dropDownQ5.selectedIndex].text === "Tirana") {
        score++;
      }

  scoringParagraph.innerHTML = `Your score is ${score} / 5!`;
  
  // Reset score in case user goes back and changes answers
  score = 0;
});
