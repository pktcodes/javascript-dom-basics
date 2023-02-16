// parent

const heading = document.querySelector('.secondHeading');
// console.log(heading);
const parent = heading.parentElement;
parent.style.color = 'red';

parent.parentElement.style.color = 'blue';
console.log(parent.parentElement.parentElement.parentElement);
