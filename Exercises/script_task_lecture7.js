/* ------- Lecture 7 ------- */
// Task 1 - output Hello World to console
console.log("Hello World");

// Task 2 - declare variables using var, let and const
var var1 = 1;
if (var1 === 1) {
    var var1 = 2;
    console.log("When using var.\nInside if-statement: " + var1);
}
console.log("Outside if-statement: " + var1);

let var2 = 1;
if (var2 === 1) {
    let var2 = 2;
    console.log("When using let.\nInside if-statement: " + var2);
}
console.log("Outside if-statement: " + var2);

const var3 = 1;
try {
    if (var3 === 1) {
        var3 = 2; // If we would've declared it as const var3 = 2, then it would've worked (it works like let)
        console.log("When using const.\nInside if-statement: " + var3);
    }
} catch (err) {
    console.log("Trying to change a const variable");
    console.log(err);
}
console.log("Outside try and catch: " + var3);

// Task 3 - practice with arithmetic operators
const pizzaPrice = 100;
const toppingPrice = 5;
let numberOfToppings = 5;

let totalPizzaCost = pizzaPrice + numberOfToppings * toppingPrice;
let str = "You ordered a piza with " + numberOfToppings + " toppings at " + toppingPrice +
" kr each. The total cost is " + totalPizzaCost + " kr.";
console.log(str);

