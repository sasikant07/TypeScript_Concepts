function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var john = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(john));
var jane = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22
};
console.log(getFullName(jane));
