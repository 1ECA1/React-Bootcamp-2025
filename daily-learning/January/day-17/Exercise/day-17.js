// function with Number
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

function modulus(a, b) {
    return a % b;
}

function square(num) {
    return num * num;
}

function cube(num) {
    return num ** 3;
}

function power(base, exponent) {
    return base ** exponent;
}

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

// function with string 
function greet(name) {
    return "Hello, " + name + "!";
}

function upperCase(str) {
    return str.toUpperCase();
}

function lowerCase(str) {
    return str.toLowerCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function concatenate(str1, str2) {
    return str1 + str2;
}

function getLength(str) {
    return str.length;
}

function charAtIndex(str, index) {
    return str.charAt(index);
}

function repeatString(str, times) {
    return str.repeat(times);
}

function startsWith(str, prefix) {
    return str.startsWith(prefix);
}

function endsWith(str, suffix) {
    return str.endsWith(suffix);
}

// function with boolean 
function isTruthy(value) {
    return !!value;
}

function isFalsy(value) {
    return !value;
}

function not(value) {
    return !value;
}

function and(a, b) {
    return a && b;
}

function or(a, b) {
    return a || b;
}

function xor(a, b) {
    return (a || b) && !(a && b);
}

function isGreater(a, b) {
    return a > b;
}

function isLess(a, b) {
    return a < b;
}

function isEqual(a, b) {
    return a === b;
}

function isNotEqual(a, b) {
    return a !== b;
}


// funtion with undefined and null
function returnUndefined() {
    return undefined;
}

function returnNull() {
    return null;
}

function isUndefined(value) {
    return value === undefined;
}

function isNull(value) {
    return value === null;
}

function isNullOrUndefined(value) {
    return value == null;  // true for both null and undefined
}

function defaultTo(value, defaultValue) {
    return value !== undefined ? value : defaultValue;
}

function checkType(value) {
    return typeof value;
}

function isNumber(value) {
    return typeof value === "number";
}

function isString(value) {
    return typeof value === "string";
}

function isBoolean(value) {
    return typeof value === "boolean";
}

// Non premative data type

// function with arrays
function createArray(...elements) {
    return elements;
}

function getFirstElement(arr) {
    return arr[0];
}

function getLastElement(arr) {
    return arr[arr.length - 1];
}

function arrayLength(arr) {
    return arr.length;
}

function pushElement(arr, element) {
    arr.push(element);
    return arr;
}

function popElement(arr) {
    return arr.pop();
}

function shiftElement(arr) {
    return arr.shift();
}

function unshiftElement(arr, element) {
    arr.unshift(element);
    return arr;
}

function reverseArray(arr) {
    return arr.reverse();
}

function sortArray(arr) {
    return arr.sort();
}

// function with Object
function createPerson(name, age) {
    return { name, age };
}

function getObjectKeys(obj) {
    return Object.keys(obj);
}

function getObjectValues(obj) {
    return Object.values(obj);
}

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function deleteProperty(obj, key) {
    delete obj[key];
    return obj;
}

function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}

function getProperty(obj, key) {
    return obj[key];
}

function updateProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}

function freezeObject(obj) {
    return Object.freeze(obj);
}

function cloneObject(obj) {
    return { ...obj };
}

// function with nexted object 
function createNestedObject() {
    return { user: { name: "Alex", age: 25 } };
}

function getNestedProperty(obj, key1, key2) {
    return obj[key1]?.[key2];
}

function addItemToArrayInObject(obj, key, item) {
    if (!Array.isArray(obj[key])) obj[key] = [];
    obj[key].push(item);
    return obj;
}

function removeItemFromArrayInObject(obj, key) {
    if (Array.isArray(obj[key])) obj[key].pop();
    return obj;
}

function deepMerge(obj1, obj2) {
    return JSON.parse(JSON.stringify({ ...obj1, ...obj2 }));
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function objectToArray(obj) {
    return Object.entries(obj);
}

function arrayToObject(arr) {
    return Object.fromEntries(arr);
}

function filterArray(arr, callback) {
    return arr.filter(callback);
}

function mapArray(arr, callback) {
    return arr.map(callback);
}

// funtion return other funtions
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}

function adder(value) {
    return function (num) {
        return num + value;
    };
}

function functionRunner(func, value) {
    return func(value);
}

function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}

function memoize(fn) {
    let cache = {};
    return function (arg) {
        if (cache[arg]) return cache[arg];
        return (cache[arg] = fn(arg));
    };
}

function once(fn) {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };
}

function createCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}

function callNTimes(fn, n) {
    return function (...args) {
        if (n > 0) {
            n--;
            return fn(...args);
        }
    };
}

function delayExecution(fn, time) {
    return function (...args) {
        setTimeout(() => fn(...args), time);
    };
}

function asyncWrapper(fn) {
    return async function (...args) {
        return await fn(...args);
    };
}