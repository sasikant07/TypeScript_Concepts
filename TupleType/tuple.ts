let skill: [string, number];
skill = ['Programming', 5];

// skill = [5, 'Programming']; //Error: Reason(Order should be the same as declared)

console.log(skill);


// Simple tuple elements
let color: [number, number, number] = [255, 0, 0]
console.log(color);

// Optional Tuple Elements
let backgroundColor, headerColor: [number, number, number, number?];
backgroundColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

console.log(backgroundColor);
console.log(headerColor);
