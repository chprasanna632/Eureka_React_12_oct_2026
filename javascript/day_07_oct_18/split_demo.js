let str = 'This is JavaScript Training';

console.log(str.split(' '));  // [ 'This', 'is', 'JavaScript', 'training' ]
console.log(str.split(''));  // [ 'T', 'h', 'i', 's', ' ', 'i'.... ]
console.log(str.split('This'));  // ['', ' is JavaScript training']
console.log(str.split('Java'));  // ['This is ', 'Script training']
console.log(str.split('Training'));  // ['This is JavaScript ', '']
console.log(str.split('Python'));  // ['This is JavaScript Training']