// Arrays Challenges
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here without using numbers!
console.log(my.slice(zero, my.indexOf("Gamal")).reverse()) ; // ["Osama", "Elham", "Mazero", "Ahmed" ]
console.log(my.slice(counter/counter, my.indexOf("Osama"))); // ["Elham", "Mazero"]
console.log(my.splice(zero,(counter+counter),"Elzero")); // "Elzero"
console.log() // "rO"