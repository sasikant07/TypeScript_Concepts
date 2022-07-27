class Person {
    constructor (private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullname(): string {
        return  `${this.firstName} ${this.lastName}`
    }

    describe(): string {
        return `This is ${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor (firstName: string, lastName: string, private jobTitle: string) {
        super(firstName, lastName);
        // this.jobTitle = jobTitle;
    }
}

let employee = new Employee('John', 'Doe', 'Front-end Developer');

console.log(employee.getFullname());
console.log(employee.describe());

