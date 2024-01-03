/* ------- Lecture 10 ------- */
// Task 1 - create and parse json
let personJson = '{"name": "Alice", "age": 25, "email": "Alice@example.com"}';
let personJs = JSON.parse(personJson);
console.log(personJson);
console.log(personJs);

// Task 2 - promises for asynchronous operations
function simulateAsyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Operation completed")}, 2000);
    });
}
let promise = simulateAsyncOperation();
promise
.then(console.log(promise))
.then((response) => {console.log(response)});

// Task 3 - fetch data using fetch API
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/2'
let contentContainer = document.getElementById("contentContainer");

fetch(apiUrl)   // returns a promise
.then((response) => {
    if (!response.ok) {
        throw new Error("Cannot reach the API!");
    }
    return response.json();
})
.then((data) => {
    console.log(data);
    contentContainer.textContent = `Data is ${JSON.stringify(data)}`;
})
.catch((error) => {console.log(error.message)});

// Task 4 - combining promises and fetch API
function fetchAndProcessData() {
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                reject(new Error("Cannot reach the API!"));
            }
            else {
                resolve(response.json());
            }
        })
    })
};

let promiseFetch = fetchAndProcessData();
promiseFetch
.then(console.log(promise))
.then((response) => console.log(response))
.catch((response) => {console.log(response)});
