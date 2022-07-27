var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headCount++;
    }
    Employee.headCount = 0;
    return Employee;
}());
var john = new Employee('John', 'Doe', 'Front-end Developer');
var jane = new Employee('Jane', 'Doe', 'Web Developer');
console.log(Employee.headCount);
