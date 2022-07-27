interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

let c: Customer = {
    name: 'ABC Inc.',
    credit: 100000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};

type EmployeeSales = Identity & BusinessPartner & Contact;

let es: EmployeeSales = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
}

console.log(e);
console.log(c);
console.log(es);
