// *JavaScript Functions Lesson
// Introduction to Functions
// A function in JavaScript is a reusable block of code that performs a specific task. It allows you to write code once and use it multiple times, making your programs more efficient and organized.
// 1. Basics of Functions
// Defining a Function
// A function is defined using the function keyword, followed by a name, parentheses, and curly braces.
// */
//Example:
function greet() {
    console.log("Hello, World!");
}
//Calling a Function
//To execute a function, you call it by its name followed by parentheses.
greet(); // Output: Hello, World!
/*
2. Functions with Parameters
Parameters are placeholders that allow you to pass data into a function.
Example:
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
greetUser("Alice"); // Output: Hello, Alice!
3. Functions with Return Values
A function can return a value using the return keyword.
Example:
function add(a, b) {
  return a + b;
}
const sum = add(5, 10);
console.log(sum); // Output: 15
4. Function Expressions
A function can also be assigned to a variable. This is called a function expression.
Example:
const greet = function () {
  console.log("Hello, World!");
};
greet(); // Output: Hello, World!
5. Arrow Functions
Arrow functions are a shorter syntax for writing functions, introduced in ES6.
Example:
const greet = () => {
  console.log("Hello, World!");
};
greet(); // Output: Hello, World!
Arrow Functions with Parameters:
const add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15
6. Functions Inside Objects
Functions defined inside objects are called methods.
Example:
const user = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
user.greet(); // Output: Hello, Alice!
7. Callback Functions
A callback function is a function passed as an argument to another function.
Example:
function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}
function greet(name) {
  console.log(`Hello, ${name}!`);
}
processUserInput(greet); // Output: Hello, Alice!
8. Higher-Order Functions
A higher-order function is a function that takes another function as an argument or returns a function.
Example:
function higherOrder(func) {
  func();
}
function sayHello() {
  console.log("Hello!");
}
higherOrder(sayHello); // Output: Hello!
9. Immediately Invoked Function Expressions (IIFE)
An IIFE is a function that runs immediately after it is defined.
Example:
(function () {
  console.log("I am an IIFE!");
})(); // Output: I am an IIFE!
Advanced Concepts
Closures
A closure is a function that remembers its outer variables even after the outer function has executed.
Example:
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
//This lesson provides a comprehensive guide to JavaScript functions, from basics to advanced topics.
*/
/*JavaScript function Class Work/Assignment
Task 1: Create a Function
Write a function called multiply that takes two numbers as parameters and returns their product.
Task 2: Object Method
Define an object student with a method getInfo that prints the student's name and age.
Task 3: Arrow Functions
Rewrite the multiply function using arrow syntax.
Take-Home Assignment
1.Write a Function Expression: Define a function expression called divide that divides two numbers and returns the result.
2.Higher-Order Function: Write a function called processNumber that takes a number and a callback function. The callback should either double or triple the number.
3.Callback Function: Write a function called runTask that takes a string (task name) and a callback function. The callback should log: "Running task: [task name]".
*/


// task 1
const a = prompt("input the number");
const b = prompt("input the number");
function multiply(a, b) {
    return a * b;
}
console.log(multiply(a, b));

// task 2
const myName = prompt(`input your name`);
const age = prompt(`input your age`);
const student = {
    name: myName,
    age: age,
    getInfo: function () {
        return (`${this.name} ${this.age}`)
    }
}
console.log(student.getInfo());

// task 3

const c = prompt("input the number");
const d = prompt("input the number");
const multiply = (c, d) => c * d;
console.log(multiply(c, d));


// Take-Home Assignment
const e = prompt("input the number");
const f = prompt("input the number");
const divide = function (e, f) {
    return e / f;
}
console.log(divide(e, f));


// task 2
const g = prompt("input the number");
function processNumber(number, callback) {
    return callback(number);
}
const double = (number) => number * 2;
const triple = (number) => number * 3;
console.log(processNumber(g, double));
console.log(processNumber(g, triple));


// task 3
const taskName = prompt("input the task name");
function runTask(taskName, callback) {
    return callback(taskName);
}
const task = (taskName) => `Running task: ${taskName}`;
console.log(runTask(taskName, task));