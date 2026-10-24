let user = {            // Object
    name: 'Sanjay',
    address: 'Bangalore',
    role: 'Trainer'
}
console.log(user);
console.log('Size: ', Object.keys(user).length);

console.log("=====================")

let userMap = new Map();        // Map
userMap.set('name', 'BHarath')
userMap.set('addree', 'Kansas')
userMap.set('role', 'Student')
console.log(userMap);
console.log('Size: ', userMap.size);