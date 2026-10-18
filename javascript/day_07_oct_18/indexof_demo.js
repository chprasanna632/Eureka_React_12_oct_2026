let str = 'ENTERTAINMENT';

console.log(str.indexOf('Q')); // -1 character not found

console.log(str.indexOf('N'));  // 1
console.log(str.lastIndexOf('N'));  // 11

// find the index of 2nd 'N'
console.log(str.indexOf('N', 2))