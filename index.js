// This is my first JS code!
let fname = 'Thaija';
// console.log(fname);
const interestRate = 0.3;
// console.log(interestRate);

let selectedType = null;
let person = {
    fname: 'Thaija',
    age: 27
};
console.log(person);

// Dot Notation
person.fname = 'John';
console.log(person.fname);

// Bracket Notation
person['fname'] = 'Mary';
console.log(person.fname);

let selection = 'fname';
person[selection] = 'Mary';
console.log(person.fname);


// Array
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = '1';
console.log(selectedColors);
console.log(selectedColors.length);


//Function
function greet(name, lastName) {
   console.log('Hello ' + name + ' ' + lastName); 
}

greet('Thai', 'Smith');

// Calculating a value
function square(number) {
    return number * number;
}
console.log(square(2));