/* 
String Challenge
All Solutions Must Be In One Chain
You Can Use Concatenate
*/
let a ="Elzero Web School";

// Include This Methods In Your Solution• (slice, charAt] 
console.log(a.charAt(2).toUpperCase()+ a.slice(3,7)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)) // HHHHHHHH


// Return Array
console.log(a.substr(0,6).split()); // [Elzero]

// Return Array
console.log(a.split(" ", 1)); // [Elzero]

// Use Only "substr" Method + Template Literals In Your solution
console.log(`${a.substr(0,6)} ${a.substr(11)}`); // Elzero School

//Solution Must Be Dynamic And String May Change 
console.log(`${a.charAt(0).toLowerCase()}${a.slice(1, -1).toUpperCase()}${a.charAt(a.length - 1).toLowerCase()}`); // eLZERO WEB SCHOO1


//Solution Must Be Dynamic And String May Change 
console.log(a.charAt(0).toLowerCase() + a.substring(1, a.length -1).toUpperCase() + a.charAt(a.length - 1).toLowerCase()); // eLZERO WEB SCHOO1
