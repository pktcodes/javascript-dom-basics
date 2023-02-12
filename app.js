// Truthy and Falsy
// "",'',``,0 ,-0 ,NaN ,false, null, undefined - Javascript evaluates these as false except these others are true

// const boolean1 = true;
// const boolean2 = 2 > 1;

// if (boolean1) {
//   console.log('hey, it works!');
// }
// if (boolean2) {
//   console.log('hey, it also works!');
// }

const truthyValue = 'john';
const falsyValue = '';

if (falsyValue) {
  console.log('the value is truthy');
} else {
  console.log('the value is falsy');
}
