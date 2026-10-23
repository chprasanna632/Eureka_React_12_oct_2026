let user = { name: 'Sanjay', role: 'Trainer' };
console.log(user.name); // sanjay
console.log(user.phone); // undefined
console.log(user.email); // undefined
// console.log(user.address.city); // Error:Cannot read properties of undefined (reading 'city')
console.log(user?.address?.city);

console.log('Thank You!!')