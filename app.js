// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people = [
  { name: 'bob', age: 25, role: 'developer', id: 1, salary: 200 },
  { name: 'anna', age: 19, role: 'designer', id: 2, salary: 300 },
  { name: 'susan', age: 23, role: 'boss', id: 3, salary: 500 },
  { name: 'jennifer', age: 18, role: 'programmer', id: 4, salary: 200 },
];

const total = people.reduce(function (accumulator, currentItem) {
  console.log(`accumulator : ${accumulator}`);
  console.log(`currentItem : ${currentItem.salary} `);
  accumulator += currentItem.salary;
  return accumulator;
}, 0);

console.log(total);
