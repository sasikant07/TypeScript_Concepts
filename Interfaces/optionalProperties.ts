interface Person {
    firstName: string,
    middleName?: string,
    lastName: string
}

function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`
    }
    return `${person.firstName} ${person.lastName}`
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
}

let jane = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe'
}

console.log(getFullName(john));
console.log(getFullName(jane));
