const merge = <U extends object, V extends object>(obj1: U, obj2: V) => {
    return {
        ...obj1,
        ...obj2
    }
}

// Compilation Error
// let person = merge(
//     {name: 'John'},
//     25      // Error: Argument of type 'number' is not assignable to parameter of type 'object'.
// );

let person = merge(
    {name: "John"},
    {age: 27}
);

console.log(person);


// Using Type Parameter Generic Constraints
const prop = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
}

let str = prop({name: "John"}, 'name');
console.log(str);
