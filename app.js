// Arrays, Functions and Objects
// expressions - another way define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func,libraries,

// Function Definition / Declaration - Will invoke using function name
function addValues(number1, number2) {
  return number1 + number2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(10, 35);

// Function Expression - will invoke using variable name in reference to function
const add = function (number1, number2) {
  return number1 + number2;
};

const thirdValue = add(5, 6);

// const values = [firstValue, secondValue, add(5, 6)];
const values = [firstValue, secondValue, thirdValue];
console.log(values);

// From ES6 - Arrow function is a function expression
const mutliply = (number1, number2) => number1 * number2;

// In Gatsby - React Based Framework, function expression will be used
// export.newFunction = function () {};
