let arr1 = [30, 20, 40, 50, 10];
arr1.sort();
console.log('arr1: ', arr1);

let arr2 = [101, 9, 8, 102, 7, 6, 81, 82, 91, 92, 107, 5]
arr2.sort(); // not numeric sort, this is string sort
console.log('arr2: ', arr2);

arr2.sort((a, b) => a - b) // Acs
// arr2.sort((a,b)=>b-a) // Desc
console.log('arr2: ', arr2);


let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
// sort the employees by empId in Asc order
employees.sort((emp1, emp2) => emp1.eId - emp2.eId);
console.log(employees)

// sort the employees by name in Asc order
employees.sort((emp1, emp2) => emp1.name.localeCompare(emp2.name));
console.log(employees)

//Find the employee with the highest salary
let highest_salaried_emp = employees.sort((emp1, emp2) => emp2.sal-emp1.sal)[0]
console.log('highest_salaried_emp: ',highest_salaried_emp)