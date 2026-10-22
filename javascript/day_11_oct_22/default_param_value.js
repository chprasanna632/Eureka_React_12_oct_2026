function add(a, b, c) {
    console.log(a + b + c); // a=10  b=20 c=undefined
}
add(10, 20); // NaN


function addition(a, b, c = 0) {
    console.log(a + b + c); // a=10  b=20 c=undefined
}
addition(10, 20); // 30
addition(10, 20, 30); // 60