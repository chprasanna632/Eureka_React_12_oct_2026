// ES_5
function Student(roll, name, course, branch) { // Constructor/Class 
    this.roll = roll;
    this.name = name;
    this.course = course;
    this.branch = branch;
}
let std1 = new Student(101, 'Sathwik', 'ReactJS', 'Tenneesee');
let std2 = new Student(102, 'Amar', 'Angular', 'Kansas');

console.log('Student-1: ', std1)
console.log('Student-2: ', std2)