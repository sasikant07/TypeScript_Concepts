function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var john = {
    firstName: 'John',
    lastName: 'Doe'
};
var jane = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe'
};
console.log(getFullName(john));
console.log(getFullName(jane));
