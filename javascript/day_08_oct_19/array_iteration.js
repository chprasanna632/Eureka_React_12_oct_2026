let cars = ['Tata', 'Honda', 'Maruti', 'Hyundai'];

// 1. for loop
console.log("1. For Loop::")
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// 2. for-in loop
console.log("2. For-in Loop::")
for (i in cars) {
    console.log(cars[i]);
}

// 3. for-of loop
console.log("3. For-of Loop::")
for (car of cars) {
    console.log(car)
}

// 4. forEach()
console.log("4. forEach()::")
cars.forEach((val, ind, arr) => {
    console.log(val, ind, arr)
})