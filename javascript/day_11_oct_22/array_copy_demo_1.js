let arr1 = [10, 20];
let arr2 = arr1;  // Reference Copy
// a new array is not being created, the same array address is stored on both arr1 & arr2
arr1.push(30);
arr2.push(40);
console.log('arr1: ', arr1);  // [ 10, 20, 30, 40 ]
console.log('arr2: ', arr2);  // [ 10, 20, 30, 40 ]


let arr3 = [10, 20, [30, 31]];
let arr4 = [...arr3]; // spread- Shallow Copy
// creates a new array, top level values are copied by value, nested arrays are copied by address
arr3.push(40, 50);
arr3[2].push(32, 33);
console.log('arr3: ', arr3); // [ 10, 20, [ 30, 31 ], 40, 50 ]
console.log('arr4: ', arr4); // [ 10, 20, [ 30, 31, 32, 33 ] ]


let arr5 = [10, 20, [30, 31]];
let arr6 = structuredClone(arr5); // Deep Copy
// creates a new array, copies everything by value(including nested arrays)
arr5.push(40, 50);
arr5[2].push(32, 33);
console.log('arr5: ', arr5); // [ 10, 20, [ 30, 31 ], 40, 50 ]
console.log('arr6: ', arr6); // [ 10, 20, [ 30, 31] ]