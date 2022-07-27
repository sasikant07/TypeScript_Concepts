interface Person {
    readonly ssn: string,
    firstName: string,
    lastName: string
}

let person: Person;

person = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
}

console.log(person);

// person.ssn = '171-28-0000'  // ERROR: Cannot assign to 'ssn' because it is a read-only property.ts(2540)