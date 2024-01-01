/* ------- Lecture 12 ------- */
// Task 1 - click event to increment variable
let count = 0;
const btnClickMe = document.getElementById("clickMeButton");
const displayParagraph = document.getElementById("displayCount");

btnClickMe.addEventListener("click", function() {
    count++;
    displayParagraph.textContent = count;
});

// Task 2 - key up event
const myInput = document.getElementById("myInput");
const displayDiv = document.getElementById("displayDiv");
myInput.addEventListener("keyup", function() {
    displayDiv.textContent = this.value;
})

// Task 3 - form submit event
const form = document.getElementById("submitForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("messageDiv").textContent = "Form submitted!";
});

// Task 4 - hover over event
const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", function() {
    this.style.color = "red";
});
