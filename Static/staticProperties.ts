class Employee {
    static headCount = 0;

    constructor (private firstName: string, private lastName: string, private jobTitle: string) {
        Employee.headCount++; 
    }
}

let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Web Developer');

console.log(Employee.headCount);
