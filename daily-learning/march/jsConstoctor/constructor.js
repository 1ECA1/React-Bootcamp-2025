class HouseCleaner {
    constructor(name, age, likesDoing, yearsOfExperience, languages) {
        this.name = name;
        this.age = age;
        this.likesDoing = likesDoing;
        this.yearsOfExperience = yearsOfExperience;
        this.languages = languages;
    }
}

const cleaners = [
    new HouseCleaner("Grace", 30, "Organizing closets", 5, ["English", "Igbo"]),
    new HouseCleaner("Daniel", 45, "Deep cleaning kitchens", 20, ["English"]),
    new HouseCleaner("Sophia", 28, "Vacuuming carpets", 6, ["English", "French"]),
    new HouseCleaner("Michael", 40, "Washing windows", 15, ["English", "Yoruba"]),
    new HouseCleaner("Success", 35, "Dusting furniture", 10, ["English", "Yoruba"]),
    new HouseCleaner("Chioma", 50, "Floor polishing", 25, ["Igbo", "English"]),
    new HouseCleaner("Fatima", 27, "Laundry and ironing", 4, ["English", "Arabic", "Yoruba"]),
    new HouseCleaner("John", 32, "Bathroom sanitizing", 8, ["English"]),
    new HouseCleaner("Isha", 29, "Organizing shelves", 7, ["English", "Hausa"]),
    new HouseCleaner("Samuel", 38, "Mopping floors", 12, ["English", "Yoruba"]),
    new HouseCleaner("Amaka", 31, "Making beds", 9, ["English", "Igbo"]),
    new HouseCleaner("Leo", 26, "Pet hair cleaning", 3, ["English", "Portuguese"]),
];

function showTheLastTwo() {
    for (let i = cleaners.length - 2; i < cleaners.length; i++) {
        console.log(`Cleaner: ${cleaners[i].name}
Age: ${cleaners[i].age}
Likes: ${cleaners[i].likesDoing}
Experience: ${cleaners[i].yearsOfExperience} years
Languages: ${cleaners[i].languages.join(", ")}
--------------------------`);
    }
}



showTheLastTwo(); 