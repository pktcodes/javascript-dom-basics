// Local Scope
// no name collision, can not be access from outside code blocks
// if - NOT VAR

let name = 'anna';

function calculate() {
  let name = 'anna';
  const age = 25;
  becomesGlobal = 'global variable';
  //when keyword not used, javascript takes it as global variable
}

calculate();
console.log(becomesGlobal);

// Just code block
{
  name: 'bobo';
  age: 25;
}

if (true) {
  // some other code.........
  console.log(name);
}

console.log(`Hi, my name is ${name} and I'm awesome`);
