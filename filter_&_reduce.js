/*
Reduce
Longest Word
Remove Characters + Use Reduce
*/
let thebiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"]

let check = thebiggest.reduce(function(acc, curr) {
    if (acc.length > curr.length) {
        return acc;
    } else {
        return curr
    }
})
console.log(check)
let removeChars = ["E", "@", "@", "L","Z", "@", "@", "E", "R", "@", "O"]

let removed = removeChars.filter(function(ele) {
    return !ele.startsWith("@")
}).reduce(function(acc, curr) {
    return acc + curr
})
console.log(removed)
