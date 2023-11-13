// swap the upper case and the lower case lettes
let swappingCases = "WonDeRfUl"

let swapped = [];

function swap(word) {
    // word.split("").toUpperCase() ? word.toLowerCase() : word.toUpperCase()
    // return swapped.push(word).join()
    for (let i=0; i<word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            swapped.push(word[i].toLowerCase())
        } else if(word[i] === word[i].toLowerCase()){
            swapped.push(word[i].toUpperCase())
        }
    }
    return swapped.join("")
}
console.log(swap(swappingCases))


// another way using .map

let sw = swappingCases.split("").map((a) => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join("");
console.log(sw)