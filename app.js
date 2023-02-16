// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

const list = document.querySelector('#list');
list.style.backgroundColor = 'blue';

// selects first instance of multiple
const item = document.querySelector('.fruit');
console.log(item);
item.style.color = 'red';

const lastItem = document.querySelector('li:last-child');
lastItem.style.color = 'yellow';

const items = document.querySelectorAll('.fruit');
// console.log(items);

// for each works directly unlike previous selectors
items.forEach(function (item) {
  console.log(item);
  item.style.color = 'white';
});
