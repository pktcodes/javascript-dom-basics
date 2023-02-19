// Web Storage API - provided by browser
// session storage - persisting data between sessions i.e the current browser tab
// local storage - persisting data when opening and closing browser
// setItem, getItem , removeItem, clear
// JSON.stringify(), JSON.parse

const friends = ['praveen', 'john', 'peter'];

// localStorage.setItem('friends', friends);

/* problem - when access complex data types like array gives back strings when accessing */
// const values = localStorage.getItem('friends');
// console.log(values[1]);

// solution
localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[0]);

let fruits;
if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}

console.log(fruits);
// fruits.push('apple');
fruits.push('orange');
console.log(fruits);
localStorage.setItem('fruits', JSON.stringify(fruits));
