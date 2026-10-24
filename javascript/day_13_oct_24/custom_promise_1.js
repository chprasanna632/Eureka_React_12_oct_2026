function add(a, b) {  // add returns a value immediately
    let addResult;
    addResult = a + b;
    return addResult;
}
console.log(add(10, 20));


function addition(a, b) { // addition() returns undefined
    let addResult; // undefined
    setTimeout(() => {
        addResult = a + b;
    }, 1000);
    return addResult; // undefined
}
console.log(addition(100, 200))


function mul(a, b) {
    return new Promise((resolve, reject) => { // we are creating promise
        if (Number.isInteger(a) && Number.isInteger(b)) {
            setTimeout(() => {
                resolve(a * b);
            }, 3000);
        } else {
            reject('Error: Provide Both a & b values');
        }
    })
}
mul(10, NaN).then(
    (response)=>console.log(response),
    (error)=>console.log(error),
)