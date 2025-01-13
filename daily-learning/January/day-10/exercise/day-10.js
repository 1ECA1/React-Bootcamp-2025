// Step 1: Create the student object
let student = {
    name: "John Doe",
    age: 16,
    subjects: ["Math", "Science", "English"]
};

// Step 2: Add a new key-value pair (grade: 'A+')
student.grade = "A+";

// Step 3: Remove the age property
delete student.age;

// Step 4: Log all properties of the student object using Object.keys()
console.log("Properties:", Object.keys(student));

// Step 5: Log all values of the student object using Object.values()
console.log("Values:", Object.values(student));

// Step 6: Use a for...in loop to print key-value pairs
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}