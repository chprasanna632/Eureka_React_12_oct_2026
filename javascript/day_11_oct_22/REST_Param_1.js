// write a function that should be able to add any # of args

function add(...arr) {  // arr is REST param
    let sum = arr.reduce((sum, ele) => sum + ele);
    console.log('Sum: ', sum)
}

add(10, 20)
add(10, 20, 30)
add(10, 20, 30, 40)
add(10, 20, 30, 40, 50)