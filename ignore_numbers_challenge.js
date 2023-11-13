// ignore the numbers in the string
let ignoreNumbers = "alwak123eel40";

let ignored = ignoreNumbers.split("").map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : ""
}).join("")
console.log(ignored)