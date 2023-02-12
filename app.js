// Reference vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

const name1 = 'bob';
let name2 = name1;
name2 = 'peter';
console.log(name1);
console.log(name2);

const person = {
  name: 'bob',
};
// const person2 = person;
const person2 = { ...person };
person2.name = 'peter';
console.log(person.name);
console.log(person2.name);
