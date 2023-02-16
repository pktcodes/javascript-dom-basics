// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const fruits = document.querySelector('#fruits');
// console.log(fruits);

// returns the child nodes along with whitespace - like non-element nodes like text and comment
console.log(fruits.childNodes);

// returns only element nodes
console.log(fruits.children);

// returns along with whitespace
console.log(fruits.firstChild);

// returns along with whitespace
console.log(fruits.lastChild);
