/* input: 'ABC'
output: ABC, ACB, BCA, BAC ... */

function printPermutation(str, res = '') {
    if (!str.length) {
        console.log(res); // printing happens here
    }
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let remainingChars = str.substr(0, i) + str.substr(i + 1);
        printPermutation(remainingChars, res + currentChar);
    }
}
printPermutation('ABC');