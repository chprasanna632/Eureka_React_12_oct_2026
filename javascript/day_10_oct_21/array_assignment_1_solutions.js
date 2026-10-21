var employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

// 4. filter the employees whose salary between 6000 and 8000;
let result1 = employees.filter(emp => emp.sal >= 6000 && emp.sal <= 8000)
console.log(result1)

// 5.  increase salary of every employee by 10%
let result2 = employees.map((emp) => {
    return { ...emp, sal: emp.sal * 1.1 };  // ... spread
})
console.log(result2)

// 6. add "comp:ibm" to every employee;
let result3 = employees.map((emp) => {
    return { ...emp, comp: 'IBM' }
})
console.log(result3)
console.log(employees)


// 7. add Dept info for each employee
var employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
]
var departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
]
let result4 = employees.map(emp => {
    let deptInfo = departments.find(dept => dept.eId === emp.eId);
    return { ...emp, dept: deptInfo.dept }
})
console.table(result4)