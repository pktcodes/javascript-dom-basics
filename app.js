/* 
setTimeout - runs function once after specific time

- pass function reference / anonymous function - traditional, arrow
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
- on window object 
*/

function sayHello() {
  console.log('Hi, I am John');
}

// setTimeout(sayHello, 1000);

// will not work as expected - why? the function gets immediately invoked when page loads
// setTimeout(sayHello(), 1000);

// alternative approach - ES6 arrow functions
setTimeout(function () {
  // console.log('Hello there, I am John');
}, 1000);

// pass arguments
function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}
// setTimeout(showScore, 1000, 'peter', '35');

// clearTimeout
const firstID = setTimeout(showScore, 1000, 'peter', '35');
const secondID = setTimeout(showScore, 1000, 'john', '40');

clearTimeout(firstID);

// on window
// window.setTimeout();
