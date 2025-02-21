// Group 1 – JavaScript Basics & ArraysSubjective 

// Questions:Explain the difference between let, const, and var with examples.

// In JavaScript, let, const, and var are used to declare variables, but they behave differently in terms of scope, reassignment, and hoisting.

// Let's break down the differences between var, let, and const in JavaScript, focusing on their scope and how they handle reassignment.
const varLetConst = `var
 * Sco1pe: Function-scoped.  This means a variable declared with var is accessible within the entire function it's declared in, and if declared outside any function, it becomes globally scoped (attached to the window object in browsers).
 
* Reassignment:  You can reassign a value to a var variable as many times as you like.
 
* Hoisting:  var variables are hoisted to the top of their scope and initialized with undefined.  This means you can use a var variable before it appears to be declared in the code, but its value will be undefined until the actual assignment.
`;

function myFunction() {
    var x = 20;
    if (true) {
        var x = 30; // This x is the same variable as above
        console.log(x); // Output: 30
    }
console.log(x); // Output: 30 (x was changed inside the if block)
}

myFunction();

console.log(y); // Output: undefined


const varLetConst2 = `let
* Scope: Block-scoped. This is the key difference from var.  A let variable is only accessible within the block of code (defined by curly braces {}) where it's declared.  This includes if statements, for loops, etc.
 * Reassignment: You can reassign a value to a let variable.
 * Hoisting: let variables are hoisted, but they are not initialized.  Trying to access a let variable before its declaration will result in a ReferenceError. This "temporal dead zone" helps prevent unexpected behavior.

`;
 function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; // This x is a DIFFERENT variable than the one above
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10 (x was NOT changed outside the if block)
}

myFunction();

// console.log(w);  // Error: Cannot access 'w' before initialization
let w = 25;
console.log(w); // Output: 25

let a = 30;
a = 35; // Reassignment is allowed
console.log(a); // Output: 35

const varLetConst3 = `const
* Scope: Block-scoped, just like let.
 * Reassignment:  const variables cannot be reassigned after they are initialized.  This doesn't mean the contents of the value can't change (if it's an object or array), but the variable itself cannot be pointed to a different value.
 * Hoisting: const variables are also hoisted, but like let, they are not initialized.  You'll get a ReferenceError if you try to use them before declaration.
`;
 const PI = 3.14159;
// PI = 3.14;  // Error: Assignment to constant variable.

const myObject = { name: "Alice" };
myObject.name = "Bob"; // This is allowed; you're changing the property of the object
console.log(myObject); // Output: { name: "Bob" }
// myObject = { name: "Charlie" }; // Error: Assignment to constant variable.

// console.log(b); // Error: Cannot access 'b' before initialization
const b = 40;
console.log(b); // Output: 40


// Best Practices:
//  * Use const by default for variables that should not be reassigned. This helps prevent accidental changes.
//  * Use let for variables that you know will be reassigned.
//  * Avoid var whenever possible, especially in modern JavaScript.  Its function scoping can lead to unexpected behavior and bugs.  let and const provide much better control over variable scope.


// What are primitive data types in JavaScript? List them with examples.

// Primitive data types in JavaScript are the most basic building blocks of data. They represent single, immutable values directly.  This means that when you work with a primitive value, you're working directly with the value itself, not an object representing it.  Here's a list of JavaScript's primitive data types with examples:
const primitive = `string: Represents a sequence of characters, enclosed in single or double quotes.  Strings are used for text and can include letters, numbers, symbols, and whitespace.
`;

const myName = "Alice";
const message = 'Hello, world!';
const templateString = `My myName is ${name}.`; // Template literals (using backticks)

const primitive2 =  `Number: Represents numeric data, including integers and floating-point numbers.  JavaScript has a single number type, which is a 64-bit floating-point format (double-precision).
`;

let age = 30;
let price = 19.99;
let pi = 3.14159;
let infinity = Infinity; // Special numeric value
let notANumber = NaN; // Special numeric value (Not a Number)

const primitive3  = `Boolean: Represents a logical value: true or false.`;

let isLoggedIn = true;
let isAdult = false;

const primitive4 = `Undefined: Represents the absence of a value.  A variable that has been declared but not assigned a value is undefined.
`;
let myVariable; // myVariable is undefined
console.log(myVariable); // Output: undefined

const primitive5 = `Null: Represents the intentional absence of a value.  It's used to explicitly indicate that a variable has no value.  null is different from undefined.
 `;
let user = null; // user has no value (intentionally)
console.log(user); // Output: null

const primitive6 = `Symbol (ES6 and later): Represents a unique and immutable value, often used as keys for object properties to avoid naming collisions.
 `;
const uniqueId = Symbol('id');
const anotherUniqueId = Symbol('id');
console.log(uniqueId === anotherUniqueId); // Output: false (symbols are unique)


const primitive7 = `BigInt (ES2020 and later): Represents integers of arbitrary precision.  Useful for working with numbers that are too large to be represented by the Number type.  BigInts are created by appending n to the end of a number literal or by using the BigInt() constructor.
 `;
const largeNumber = 1234567890123456789012345678901234567890n;
const anotherLargeNumber = BigInt("987654321098765432109876543210");

// Key Characteristics of Primitives:
//  * Immutable: Once a primitive value is created, it cannot be changed.  
// For example, you can't change the characters within a string. Operations on strings create new strings.
// * Passed by Value: When you assign a primitive value to a variable or pass it to a function, you're working with a copy of the value, not a reference to the original value.
// It's important to understand primitive types because they behave1 differently from objects 

// Explain the difference between .map() and .forEach() methods.Coding

// In JavaScript, both .map() and .forEach() are array methods used to loop through elements. However, they serve different purposes and have distinct behaviors.
// 1.forEach() - Executes Code for Each Element
// Best for: Performing side effects (logging, updating external values).
// Returns: Nothing (undefined).
// Example: Logging each element in an array.

const numbers = [1, 2, 3, 4, 5];

// Using forEach to print each number
numbers.forEach((num) => {
  console.log(num);
});

// Output:
// 1
// 2
// 3
// 4
// 5

let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log("Total sum:", sum); // Output: Total sum: 15

// 2. .map() - Transforms Elements and Returns a New Array
// Best for: Transforming elements into a new array.
// Returns: A new array with transformed elements.

// Example:
const inNumbers = [1, 2, 3, 4, 5];

// Using map to create a new array with doubled values
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(inNumbers);        // Original array remains unchanged: [1, 2, 3, 4, 5]


const users = [
    { name: "Alex", age: 25 },
    { name: "John", age: 30 },
    { name: "Sara", age: 28 }
  ];
  
  // Using map to create an array of names
  const names = users.map((user) => user.name);
  console.log(names); // Output: ["Alex", "John", "Sara"]
  
  // Using forEach to log names
  users.forEach((user) => console.log(user.name));
  // Output:
  // Alex
  // John
  // Sara
  

// Questions:Create an array of 10 fruits. Use .map() to return an array of their lengths.
const fruits = ["apple", "banana", "orange", "kiwi", "mango", "grapes", "watermelon", "strawberry", "blueberry", "pineapple"];
const fruitLengths = fruits.map((fruit) => fruit.length);
console.log(fruitLengths); // Output: [5, 6, 6, 4, 5, 6, 10, 10, 9, 9]

// 2.	Use a for...of loop to print all numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

//   2.	Use a for...of loop to print all numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
