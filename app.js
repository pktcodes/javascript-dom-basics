// innerHTML - to insert HTML elements
// textContent - to insert text inside the html element

const list = document.getElementById('list');
const firstItem = document.querySelector('.item');
const divContent = document.getElementById('divContent');

divContent.textContent = 'text implemented using text content';

const firstVar = 'first random variable';

// creating unordered list
const anotherList = document.createElement('ul');
anotherList.innerHTML = `<li class="item">${firstVar}</li><li>second item</li><li>third item</li>`;
document.body.appendChild(anotherList);

// same doesn't with textContent
const usingTextContent = document.createElement('ul');
usingTextContent.textContent = `<li class="item">${firstVar}</li><li>second item</li><li>third item</li>`;
document.body.appendChild(usingTextContent);
