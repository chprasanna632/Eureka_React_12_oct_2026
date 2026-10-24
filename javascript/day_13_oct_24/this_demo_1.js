console.log("Program Starts Here...")
console.log(this); // this = window
console.log("Program Ends Here...")

// code is written directly in a module
try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let userArr = await response.json();
    console.log("userArr: ", userArr);
} catch (err) {
    console.log(err);
}
