let arr = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100]]]]];
console.log(arr, arr.length);

let result1 = arr.flat(); //depth=1
console.log('Result-1: ', result1, result1.length)

let result2 = arr.flat(2); //depth=2
console.log('Result-2: ', result2, result2.length)

let result3 = arr.flat(Infinity); //depth=n
console.log('Result-3: ', result3, result3.length)