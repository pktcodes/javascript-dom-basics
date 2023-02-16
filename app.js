// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('classname');

// node-list =  array-like object
// index, length property but not array methods

const fruits = document.getElementsByClassName('fruit');
console.log(fruits);
fruits[2].style.color = 'red';
