// Arrays, Functions and Objects
// params - when declare/define
// placeholders, local vars
// arguments - when invoke/call/run
// use vars/values, multiple params, undefined

const bob = 'bob';
const anna = 'anna';
const susan = 'susan';

function greet(name, second) {
  console.log(second);
  console.log('Hello there ' + name);
}
// greet Bob
greet(45);

// greet Anna
greet(anna, bob);

// greet Susan
greet('susan');

/*
============================
Without Params and Arguments
============================
*/
// function helloBob() {
//   console.log('Hello there, Bob');
// }
// function helloJohn() {
//   console.log('Hello there, John');
// }
// function helloSusan() {
//   console.log('Hello there, Susan');
// }

// // greet bob
// helloBob();

// // greet john
// helloJohn();

// // greet susan
// helloSusan();
