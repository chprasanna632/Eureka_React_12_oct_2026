let str = 'This is Javascript class. This is String Class, This is 7th class';

// replace 'class' with 'session'
let result1 = str.replace('class', 'session')
console.log(result1);

let result2 = str.replaceAll('class', 'session')
console.log(result2);

let result3 = str.replace(/class/gi, 'session')
console.log(result3);