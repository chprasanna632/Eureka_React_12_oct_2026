let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

let grouped_employees = Object.groupBy(employees, (emp) => emp.gender);

/* let grouped_employees = { male: [], female: [] };
for (emp of employees) {
    if (emp.gender == 'male') {
        grouped_employees.male.push(emp)
    } else {
        grouped_employees.female.push(emp)
    }
} */

console.log('grouped_employees', grouped_employees)