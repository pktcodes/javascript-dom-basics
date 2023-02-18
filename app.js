// to remove elements from DOM
// remove() - to remove an element
// removeChild() - to remove the child from an element

const result = document.querySelector('#result');
console.log(result);
// result.remove();

const heading = result.querySelector('h1');
result.removeChild(heading);
