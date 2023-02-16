// previousElementSibling
// nextElementSibling

// does not return whitespace

const firstItem = document.querySelector('.first');
firstItem.nextElementSibling.style.color = 'red';

const lastItem = document.querySelector('#last');
lastItem.previousElementSibling.style.color = 'blue';
