// 1 first is to creat an object named courses

const courses = {
    engineeringMath: "A",
    engineeringDrawing: "B",
    appliedElectrcity: "A",
    computerProgramming: "A",
    fludMechanics: "B",
    appliedMechanics: "A",
    libraryUse: "A",
    strengthOfMaterial: "c",
    generalEnglish: "A",
};

// second: hear we do the iteration command
for (const course in courses) {
    console.log(`course: ${course} Grade: ${courses[course]}`);
}

// Step 3: Grade analysis
const totalCourses = Object.keys(courses).length;

let gradeACount = 0;
let gradeBOrLowerCount = 0;

for (const grade of Object.values(courses)) {
  if (grade === "A") gradeACount++;
  if (["B", "C", "D", "F"].includes(grade)) gradeBOrLowerCount++;
}

console.log(`Total number of courses: ${totalCourses}`);
console.log(`Number of courses with grade A: ${gradeACount}`);
console.log(`Number of courses with grade B or lower: ${gradeBOrLowerCount}`);

// Step 4: Grade improvement plan
console.log("Plan for improving grades:");
console.log("1. Focus on strengthOfMaterial (C) by reviewing textbooks and solving practice problems.");
console.log("2. Improve fludMechanics (B) by attending extra tutoring sessions.");
console.log("3. Enhance engineeringDrawing (B) more practicing drawing."); 
