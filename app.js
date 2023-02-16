// getAttribute();
// setAttribute();

const first = document.querySelector('.first');
const classValue = first.getAttribute('class');
console.log(classValue);

const link = document.getElementById('link');
const linkValue = link.getAttribute('href');
console.log(linkValue);

// Dynamically setting the attributes and value of element
const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'i also have class of attribute';
console.log(last);

const links = document.querySelectorAll('.first');
console.log(links);
