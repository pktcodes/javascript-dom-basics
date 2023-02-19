/* 
setInterval - runs function repeatedly at specific intervals

- pass function reference / anonymous function - traditional, arrow
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearInterval to cancel
- on window object 
*/

function showScore(name, score) {
  console.log(`Hi ${name}, your score is ${score}`);
}

// setInterval(showScore, 1000);

const firstID = setInterval(showScore, 1000, 'peter', 35);
// console.log(firstID);
const secondID = setInterval(showScore, 4000, 'susan', 50);

// clearInterval
clearInterval(firstID);
