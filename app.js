// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - is afunction which is passed to a another function as an an argument and executed inside that function

// Callback function
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.repeat(3)} `;
}

// Higher Order Funtion
function greet(name, cb) {
  const myName = 'praveen';
  console.log(`${cb(name)}, my name is ${myName}.`);
}

greet('bobo', morning);
greet('peter', afternoon);

// function greetMorning(name) {
//   const myName = 'praveen';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = 'praveen';
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }

// greetMorning('bob');
// greetAfternoon('peter');
