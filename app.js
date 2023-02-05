// Data Types - 7 total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

//string
const text = 'some text';

// number
const number = 4;

//boolean
const value1 = true;
const value2 = false;

// null
const result = null;

// undefined
let randomNumber;

// typeof
console.log(typeof text);
console.log(typeof 'hello world');
console.log(typeof number);
console.log(typeof value1);

console.log(typeof result);
// It shows object instead of null because javascript has this bug from the beginning since a lot of code is dependent on it, they will not fix it.

console.log(typeof randomNumber);
