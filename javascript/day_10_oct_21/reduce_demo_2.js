let arr = [10, 20, 30, 40, 50, 10, 50, 10];

let obj = {}
for (ele of arr) {
    if (obj[ele]) {
        obj[ele] = obj[ele] + 1;
    } else {
        obj[ele] = 1;
    }
}
console.log(obj);

// ========================

let result = arr.reduce((obj, num) => {
    if (obj[num]) {
        obj[num] = obj[num] + 1;
    } else {
        obj[num] = 1;
    }
    return obj;
}, {})
console.log(result)
