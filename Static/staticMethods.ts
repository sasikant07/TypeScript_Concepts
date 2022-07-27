class Employee {
    private static headCount = 0;

    constructor (private firstName: string, private lastName: string, private jobTitle: string) {
        Employee.headCount++; 
    }

    public static getHeadCount() {
        return Employee.headCount;
    }
}

let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Web Developer');

console.log(Employee.getHeadCount());
