/* ------- Lecture 11 ------- */
// Task 1 - functions
function greet(name) {
    return "Hello " + name + "!";
}

//let userName = prompt("What is your name?");
userName = "Alice";
console.log(greet(userName));

// Task 2 - parameters and return values in functions
function calculateCircleArea(radius) {
    return Math.PI * (radius ** 2);
}

function calculateTriangleArea (base, height) {
    return base * height / 2;
}

console.log("Area of circle: ", calculateCircleArea(3));
console.log("Area of triangle: ", calculateTriangleArea(4, 3));

// Task 3 - function expressions and anonymous functions
let multiply = function (num1, num2) {return num1 * num2;}

console.log("Multiplication: ", multiply(3, 6));

// Task 4 - classes and objects
class Person
{
    name;
    age;
    email;

    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    greet() {
        return "Hello " + this.name + "!";
    }
}

const person1 = new Person("John Smith", 40, "JohnSmith@example.com");
console.log("The person's info is " + person1.name + " at age " + person1.age
+ "\nTheir email is " + person1.email);
console.log(person1.greet());

// Task 5 - inheritance
class Student extends Person
{
    studentId;

    constructor(name, age, email, studentId) {
        super(name, age, email);
        this.studentId = studentId;
    }

    studentInfo() {
        return "Name: " + this.name + "\nAge: " + this.age + "\nEmail: " + 
        this.email + "\nID: " + this.studentId;
    }
}
const student1 = new Student("Alice", 25, "Alice@example.com", "123456");
console.log(student1);

// Task 6 - array manipulation and operations without for loops
const numbers1 = [2, 4, 6, 8, 10];

const squaredNum = numbers1.map((x) => x ** 2);
console.log(squaredNum);

let totalSum = numbers1.reduce((acc, numValue) => acc + numValue, 0);
console.log("Total sum of numbers: ", totalSum);

let maximumNum = Math.max(...numbers1);
console.log("Max: ", maximumNum);

let minimumNum = Math.min(...numbers1);
console.log("Min: ", minimumNum);
