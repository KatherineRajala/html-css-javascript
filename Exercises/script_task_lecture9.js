/* ------- Lecture 9 ------- */
// Task 1 - comparison operators
//let value1 = prompt("Enter first value (x): ");
//let value2 = prompt("Enter second value (y): ");

value1 = 12.5;
value2 = 11.3;

value1 = parseFloat(value1);
value2 = parseFloat(value2);

console.log("x = " + value1 + " y = " + value2);
console.log("Is x greater than y? " + (value1 > value2));
console.log("Is x less than y? " + (value1 < value2));
console.log("Is x greater than or equal to y? " + (value1 >= value2));
console.log("Is x less than or equal to y? " + (value1 <= value2));
console.log("Is x equal to y? " + (value1 === value2));
console.log("Is x not equal to y? " + (value1 !== value2));

// Task 2 - logical operators
let bool1 = true;
let bool2 = false;
let bool3 = false;

console.log("bool1 and bool2 gives [true/false]: " + (bool1 && bool2));
console.log("bool1 or bool2 gives [true/false]: " + (bool1 || bool2));
console.log("bool2 and bool3 gives [true/false]: " + (bool2 && bool3))
console.log("not bool2 and not bool3 gives [true/false]: " + (!bool2 && !bool3));
console.log("not bool2 and bool3 gives [true/false]: " + (!bool2 && bool3));

// Task 3 - increment and decrement
let counter = 1;
console.log("Initial value of counter = " + counter);

counter++;
console.log("New value after increment = " + counter);

counter--;
console.log("New value after decrement = " + counter);

// Task 4 - assignment operators with error handling
let total = 13;
console.log("Initial value of total = " + total);

try {
    total += 5;
    console.log("Total after addition = " + total);

    total -= 2;
    console.log("Total after subtraction = " + total);

    total *= 3;
    console.log("Total after multiplying = " + total);

    total /= e; // Will throw an error
    console.log("Total after division = " + total);
} catch (err) {
    console.log("Something went wrong...");
    console.log(err);
} finally {
    console.log("Total = " + total);
}
