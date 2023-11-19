// we need the output to be Elzero web school""
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,L,2,0,Z";
let solution = myString.split(",")
.filter(function(ele){return isNaN(parseInt(ele))})
.map(function(ele) {return ele == "_" ? ' ' : ele})
.slice(0, -1)
.reduce(function(acc, current) {
    return acc + current
}).slice(1)
console.log(solution)
