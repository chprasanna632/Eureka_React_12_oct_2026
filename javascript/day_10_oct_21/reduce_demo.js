let arr = [10, 20, 30, 40, 50];
// find the sum of all the numbers
let sum = arr.reduce((prev, curr) => {
    console.log(`prev:${prev} curr:${curr}`)
    return prev + curr;
}, 0)
console.log(`Sum is: ${sum}`)


let str = 'javascript';
// reverse this string using reduce()
let revStr = str.split('').reduce((prev, curr) => {
    console.log(`prev:${prev} curr:${curr}`)
    return curr + prev;
},'')
console.log(revStr)