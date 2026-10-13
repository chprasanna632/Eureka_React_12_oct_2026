let a = 100;
let b = 200;

console.log(`Addition of ${a} & ${b} is ${a + b}`); // works on both browser & Nodejs
console.log(`Maximum value: ${Math.max(a, b)}`);  // works on both browser & Nodejs

window.alert(`Addition of ${a} & ${b} is ${a + b}`); // this code works in browser but not in nodejs