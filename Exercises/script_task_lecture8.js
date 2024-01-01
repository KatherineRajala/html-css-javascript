/* ------- Lecture 8 ------- */
// Task 1 - data type conversion
let num = 42;
console.log("What num is set to when assigned a number - type is: " + typeof num);

let strNum = num.toString();
console.log("When num is converted to a string - type is: " + typeof strNum);

// Task 2 - arrays
const fruits = ["apple", "banana", "cherry"];
console.log(fruits);

fruits.push("dragonfruit");
console.log(fruits);

fruits.push("elderberry");
console.log(fruits);
fruits.pop();
console.log(fruits);

console.log(fruits[1]);

console.log("Length of fruits array is " + fruits.length);

// Task 3 - creating custom objects
let person = {
    name: "Katherine",
    age: 26,
    email: "katherine.rajala0043\@stud.hkr.se"
};
console.log("Name of person: " + person.name + "\nAge of person: " + person.age 
+ "\nEmail for person: " + person.email);

// Task 4 - utilizing built-in objects
let x = 10;
let y = -2;

console.log("Absoulte of y (= -2): " + Math.abs(y));
console.log("Natural logarithm of x (= 10): " + Math.log(x));
console.log("Natural logarithm of 10 using Math.LN10: " + Math.LN10);

console.log("Current time is: " + new Date().toString());
let dateAndTime = new Date();
console.log(dateAndTime.getFullYear() + " " + dateAndTime.getMonth() + " "
+ dateAndTime.getDay());

// Task 5 - manipulation of strings and numbers
let input = prompt("Enter a sentence here: ");
console.log("You entered: " + input);

console.log(input.toUpperCase());
console.log(input.toLowerCase());

const strArray = input.split(" ");
console.log(strArray);

console.log("Substring of input: " + input.substring(2));

console.log("Length of input: " + input.length);
