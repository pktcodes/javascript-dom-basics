// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementById('element');

const h1 = document.getElementById('title');
h1.style.color = 'red';

// document.getElementById('btn').style.backgroundColor = 'blue';
// document.getElementById('btn').style.color = 'white';

/* Refactoring - using variable - efficient when selecting same element multiple times*/
const btn = document.getElementById('btn');
btn.style.backgroundColor = 'blue';
btn.style.color = 'white';
