// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistake

let name = 'anna';
name = 'peter';

function calculate() {
  console.log(name);
  name = 'orange';
  function innerFunction(params) {
    console.log(`Hi, my name is ${name} and I'm inner function`);
    name = 'inner function';
  }
  innerFunction();
}

calculate();

if (true) {
  // some other code.........
  console.log(name);
}

console.log(`Hi, my name is ${name} and I'm awesome`);
