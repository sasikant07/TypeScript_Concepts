interface Person {
    firstName: string,
    lastName: string
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log(getFullName(john));

let jane = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22
}

console.log(getFullName(jane));
