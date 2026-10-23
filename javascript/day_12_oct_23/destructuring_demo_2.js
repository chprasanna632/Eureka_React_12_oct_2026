let arr = [10, 20, 30, 40, 50]

// ES_5
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a, b, c);

// ES_6
let [p, q, r, s] = arr;  // array de-structuring
console.log(p, q, r, s);


let employees = [
    { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
    { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
    { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
    { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
    { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
    { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
];
let [e1, e2, e3] = employees;  // array destructuring
let { id, name, role, salary, status, gender } = e2;  // // object destructuring
console.log('Employee 2 data::', id, name, role, salary, status, gender)