// check if num is +ve change it to -ve and vice versa
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let afterInverting = []

function invert(arr) {
    for (let i = 0; i < arr.length; i++) {
        afterInverting.push(arr[i] * -1)
    }
    return afterInverting
}
console.log(invert(invertedNumbers))

// using map 
let inverted = invertedNumbers.map( 
    (element) => -element
)
console.log(inverted)