/*Function - Random Argument Challenge
Create Function- showDetails
Function Accept 3 Parameters• [a, b, c]
Data Types For Info Is
- String => Name
- Number => Age
- Boolean =› Status
- Argument Is Random
Data Is Not Sorted Output Depend On Data Types
•Use Ternary Conditional Operator
*/
function showDetails(a, b, c) {
    const name = typeof a === 'string' ? a : (typeof b === 'string' ? b : c)
    const age = typeof a === 'number' ? a : (typeof b === 'number' ? b : c)
    const status = typeof a === 'boolean' ? a : (typeof b === 'boolean' ? b : c)

    const hiringStatus = status ? "You Are Available For Hire" : "You Are Not Available For Hire"

    console.log(`Hello ${name}, Your Age Is ${age}, ${hiringStatus}`)


}
showDetails ("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire" 
showDetails (38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire" 
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is  38, You Are Available For Hire" 
showDetails(false, "Osama", 38); // "Hello Osama, Your Age IS 38, You Are Not Available For Hire"


/*
typeof(a) ==  'string' ? console.log(`hello ${a}`) 
    : typeof(a) ==  'number' ? console.log(`Your Age Is ${a}`) 
    : typeof(a) ==  'boolean' ? a == true ? console.log(`You Are Available For Hire`) : console.log(`You Are Not Available For Hire`)
    : console.log("wrong input")
     typeof(b) ==  'string' ? console.log(`hello ${b}`) 
    : typeof(b) ==  'number' ? console.log(`Your Age Is ${b}`)
    : typeof(b) ==  'boolean' ? b == true ? console.log(`You Are Available For Hire`) : console.log(`You Are Not Available For Hire`)
    : console.log("wrong input")
     typeof(c) ==  'string' ? console.log(`hello ${c}`) 
    : typeof(c) ==  'number' ? console.log(`Your Age Is ${c}`) 
    : typeof(c) ==  'boolean' ? c == true ? console.log(`You Are Available For Hire`) : console.log(`You Are Not Available For Hire`)
   
    : console.log("wrong input")
*/