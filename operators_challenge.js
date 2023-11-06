/* Challenge 1 • */
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 101
console.log (++a + -b + +c++ - -a++ + +a); // 91
console.log(--c + +b + - -a * +b++ -+b * a + --a - +true) // 21608

/*
[++a] [+]
[++al
• Value:
- •Explain:
[+ ]
- Explain:
* /

/* Challenge 2. */
let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// •Do Not Use Variable Twice
console.log("----- challenge2 -----");
console. log(-d * +e); // 2000
console.log(-d + +e*2 + f +++true*3); // 173