let arr = [10, 20, 10, 10, 30, 30, 40, 40, 40, 50, 50, 10, 10, 20];
// Remove the duplicates
let uniqueSet = new Set(arr);
console.log('uniqueSet: ', uniqueSet, uniqueSet);

let uniqueArr = [...uniqueSet];
console.log('uniqueArr: ', uniqueArr);

