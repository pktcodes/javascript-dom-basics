// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
// node-list =  array-like object
// index, length property but not array methods

const headings = document.getElementsByTagName('h2');
// console.log(headings.length);
headings[0].style.color = 'red';

document.getElementsByTagName('li')[2].style.color = 'orange';

const items = document.getElementsByTagName('li');
items[4].style.color = 'blue';
console.log(items);

/* Converting to array so we can use methods */
const betterItems = [...items];
console.log(betterItems);

betterItems.forEach(function (item) {
  console.log(item);
});
