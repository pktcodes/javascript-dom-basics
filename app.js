// Variable Lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 20;
  const result = num1 + num2 + globalNumber;

  function multiply() {
    const globalNumber = 10;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  // console.log(multiplyResult); - Accessing local to global will not work

  multiply();
  return result;
}

console.log(add(3, 4));
