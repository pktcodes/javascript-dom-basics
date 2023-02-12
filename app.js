// Functions, return, if, arrays, for loop

const gas = [20, 30, 50, 40];
const food = [30, 10, 20, 30];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log('Whoa! You are spending way too much.');
    return total;
  }
  console.log('You are spending is less than 100.');
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const utilitiesTotal = calculateTotal([525 + 21 + 75 + 50]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  utilities: utilitiesTotal,
});
