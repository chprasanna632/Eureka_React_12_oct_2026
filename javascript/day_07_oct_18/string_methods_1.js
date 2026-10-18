let str = 'JavaScript';  // String Literal
console.log('length: ', str.length); // How many characters present
console.log('Uppercase: ', str.toUpperCase());
console.log('LowerCase: ', str.toLowerCase());

console.log(str[1]); // a
console.log(str.charAt(1)); // a
console.log(str.at(1)); // a

console.log(str.charAt(-1)); // a
console.log(str.at(-1)); // a 
// at() works with both +ve and -ve index

console.log(str.charCodeAt(1)); // a = 97

let str2 = str.concat(' Training');
console.log('str2: ', str2);