/* 7. Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true */

let str = '([{}])';
let bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
}
let myStack = [];

for (let char of str) {
    let topMostChar = myStack[myStack.length - 1];

    if (char == "(" || char == "{" || char == "[") {
        myStack.push(char);
    } else if (topMostChar == bracketMap[char]) {
        myStack.pop();
    } else {
        console.log(false);
        break;
    }
}
console.log("is valid? ", myStack.length ? false : true)

