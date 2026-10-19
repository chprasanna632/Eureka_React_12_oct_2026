let employees = [
    { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
    { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
    { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
    { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
    { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
    { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
];

// 1. display the first female employee 
let first_female_emp = employees.find((emp) => emp.gender === 'female');
console.log('first_female_emp: ', first_female_emp);

// 2. display the index number for the first female employee 
let first_female_emp_ind = employees.findIndex((emp) => emp.gender === 'female');
console.log('first_female_emp_ind: ', first_female_emp_ind)

// 3. display the last female employee 
let last_female_emp = employees.findLast((emp) => emp.gender === 'female');
console.log('last_female_emp: ', last_female_emp);

// 4. display the index number for the last female employee 
let last_female_emp_ind = employees.findLastIndex((emp) => emp.gender === 'female');
console.log('last_female_emp_ind: ', last_female_emp_ind)

// 5. display all the female employees
let all_female_emps = employees.filter((emp) => emp.gender === 'female');
console.log('all_female_emps: ', all_female_emps)

// 6. check if every employee is 'Active'
let isEveryEmpActive = employees.every((emp) => emp.status === 'Active');
console.log('isEveryEmpActive: ', isEveryEmpActive)

// 7. check if atleast 1 employee is 'Active'
let atLeast1EmpActive = employees.some((emp) => emp.status === 'Active');
console.log('atLeast1EmpActive: ', atLeast1EmpActive)