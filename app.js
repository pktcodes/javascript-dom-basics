// String properties and methods
// wrapper String Object, don't memorize methods

const text = ' Peter Jordon';
const result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.trim());
console.log(text.indexOf('p'));
console.log(text.indexOf('P'));
console.log(text.trim().toLowerCase().startsWith('p'));
console.log(text.slice(0, 2));
console.log(text.slice(0, 6));
console.log(text.slice(-3));
console.log(text.includes('eter'));

/* Object properties and methods */
// const person = {
//   name: 'Peter Jordon', //property since it has value
//   greeting() {
//     console.log('Hello, This is Peter.');
//   },
// };

// console.log(person.name);
// person.greeting();
