// previousSibling
// nextSibling
// return whitespace

const firstItem = document.querySelector('.first');
const secondSibling = firstItem.nextSibling;

//return whitespace
console.log(secondSibling);
// returns the element
console.log(secondSibling.nextSibling);

const lastItem = document.querySelector('#last');
const thirdItem = lastItem.previousSibling.previousSibling;
thirdItem.style.color = 'red';

// return null when sibling is present
console.log(lastItem.nextSibling.nextSibling);
