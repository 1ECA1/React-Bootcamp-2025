// Group 2 – Objects & Object Methods
// Subjective Questions:
// 1.	What is the this keyword in JavaScript? Explain with an example.

const me = {
    name: "Alex",
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
me.greet(); // Output: Hello, my name is Alex

  
// 2.	Differentiate between dot notation and bracket notation for accessing object properties.

// Dot Notation (object.property):
// used when the property name is a valid identifier (no spaces or special characters).
const car = { brand: "Toyota" };
console.log(car.brand); // Output: Toyota

// Bracket Notation (object["property"]):
// Used when the property name has spaces, special characters, or is stored in a variable.
const myCar = { "car brand": "Honda" };
console.log(car["myCar brand"]); // Output: Honda

// 3.	What is an object method? Provide an example.
// An object method is a function defined inside an object. It can access the object's properties using the this keyword.
const calculator = {
    add: function(a, b) {
      return a + b;
    }
  };
  
  console.log(calculator.add(5, 3)); // Output: 8
  
// Coding Questions:
// 1.	Create an object person with properties: name, age, gender, and a method greet() that logs a greeting using template strings.
const person = {
    name: "Alex",
    age: 23,
    gender: "Male",
    greet: function() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and identify as ${this.gender}.`);
    }
  };
  
  person.greet();
  // Output: Hello, my name is Alex, I am 23 years old and identify as Male.

// 2.   Create a car object with a method getCarInfo() and add a new property:
  const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getCarInfo: function() {
      return `This car is a ${this.year} ${this.brand} ${this.model}.`;
    }
  };
  
  // 3. Adding a new property using bracket notation
  car["color"] = "Red";
  
  console.log(car.getCarInfo()); // Output: This car is a 2020 Toyota Corolla.
  console.log(`The car color is ${car.color}`); // Output: The car color is Red
  
  
  