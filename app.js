// className - to check, add, remove classes
// classList - a better approach to work with

// className - to check class
const firstHeading = document.getElementById('first');
const checkClass = firstHeading.className;
// console.log(checkClass);

// className - to add class
const secondHeading = document.getElementById('second');

// problem - it overrides existing class
// secondHeading.className = 'colors';
// secondHeading.className = 'text';

// solution - too add multiple classes using className
const checkClassSecond = (secondHeading.className = 'colors text');
// console.log(checkClassSecond);

// classlist - to add class
const thirdHeading = document.getElementById('third');
// const addClassToThird = thirdHeading.classList.add('colors');
const addClassToThird = thirdHeading.classList.add('colors', 'text');

const thirdClassList = thirdHeading.classList;
console.log(thirdClassList);

// classList - to remove class
thirdHeading.classList.remove('colors');
console.log(thirdClassList);

// classList - to check class
const checkClassThird = thirdHeading.classList.contains('colors');
console.log(checkClassThird);
if (checkClassThird) {
  console.log('It contains colors class');
} else {
  console.log('it contains text class');
}
