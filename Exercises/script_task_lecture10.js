/* ------- Lecture 10 ------- */
// Task 1 - conditonal statements
// let input = prompt("What is your age? ");

input = 26;
if (input < 18) {
    console.log("You're a minor.");
}
else {
    console.log("You're an adult.");
}

// Task 2 - sort variables with conditional statements
let a = 27;
let b = 22;
let c = 7;

if (a > b) {
    [a,b] = [b,a];
}
if (b > c) {
    [b,c] = [c,b];
}
if (a > b) {
    [a,b] = [b,a];
}

console.log("Sorted values: ", a,b,c);

// Task 3 - array manipulation and operations
const numbers = [2, 4, 6, 8, 10];

const squaredNumbers = [];
let maxValue = 0;
let minValue = 10000;

// for .. in takes index of array/object. for .. of takes the value of array/object.
// Can also use "for (let i = 0; i < numbers.length; i++)"
for (let num of numbers) {
    squaredNumbers.push(Math.pow(num, 2)); // Can also use **

    if (num > maxValue) {
        maxValue = num;
    }
    if (num < minValue) {
        minValue = num;
    }
}
console.log(numbers);
console.log(squaredNumbers);
console.log("Maximum value in numbers array is ", maxValue);
console.log("Minimum value in numbers array is ", minValue);
