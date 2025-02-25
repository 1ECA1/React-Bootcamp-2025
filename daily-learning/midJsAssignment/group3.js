// Group 3 – Functions & Conditional StatementsSubjective 
// Questions:Explain the difference between function declaration and function expression with examples.
// Function Declaration: 
// A function declaration is a function that is defined using the function keyword followed by the function name and parameters.
// It can be called before it is defined in the code.
function greet() {
  console.log(`Hello!`);
}
greet(); // Output: Hello!
// 

// Function Expression:
// A function expression is a function that is defined as part of an expression, such as a variable assignment.
// It cannot be called before it is defined in the code.
const greet = function() {
  console.log(`Hello`);
};
greet(); // Output: Hello


// What is an arrow function, and how does it handle the this keyword differently from a regular function?
// An arrow function is a more concise way to write functions in JavaScript using the => syntax.
// It does not have its own this keyword and instead inherits the this value from the surrounding code.
// This makes arrow functions particularly useful for callbacks and event handlers.
// Example:
const person = {
  name: "Alex",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
    }, 1000);
  }
};
person.greet(); // Output: Hello, my name is Alex
// OR
const person1 = {
    name: "Alex",
    greet: () => {
      
        console.log(`Hello, my name is ${person1.name}`);
    }
  };
  person.greet(); 




// How do you use a switch statement in JavaScript? // Provide an example.
// A switch statement is used to perform different actions based on different conditions.
// It evaluates an expression and matches the value of the expression to a case clause.
// If a match is found, the code block associated with that case is executed.
// If no match is found, the default code block is executed.
// Example:

function dayOfWeek(day) {
    switch (day) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid day";
    }
  }

    console.log(dayOfWeek(3)); // Output: Wednesday
    console.log(dayOfWeek(7)); // Output: Sunday


// Coding Questions:
// Write a function isEven() that accepts a number and returns "Even" if it is even and "Odd" if it is odd.
// Use the % (modulo) operator to determine if a number is even or odd.
// Example:
const isEven = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(isEven(4)); // Output: Even
console.log(isEven(7)); // Output: Odd

// // Create a function gradeCalculator() that accepts a score and returns grades:90 and above: "A"80 to 89: "B"70 to 79: "C"Below 70: 
function gradeCalculator(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else return "F";
  }
  
  console.log(gradeCalculator(85)); // Output: "B"
  


// // "F"Use a switch statement to create a function dayOfWeek() that returns the day of the week based on a number (1 for Monday, 2 for Tuesday, etc.).

function dayOfWeek(number) {
    switch (number) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid day number";
    }
  }
  
  console.log(dayOfWeek(3)); // Output: "Wednesday"
  console.log(dayOfWeek(7)); // Output: "Sunday"