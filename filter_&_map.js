// filter strings and multiply them
let mix = "A13BS2ZX";

let str = mix.split("").filter(function(element) {
    return !isNaN(parseInt(element))
}).map(function(ele) {
    return ele * ele
})

console.log(str)