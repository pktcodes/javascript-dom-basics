// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

const people = [
  { name: 'bob', age: 25, role: 'developer', id: 1 },
  { name: 'anna', age: 19, role: 'designer', id: 2 },
  { name: 'susan', age: 23, role: 'boss', id: 3 },
  { name: 'jennifer', age: 18, role: 'programmer', id: 4 },
];

const names = ['bob', 'peter', 'anna', 'susan'];
console.log(
  names.find(function (item) {
    return item === 'bob';
  })
);

const person = people.find(function (item) {
  return item.id === 3;
});
console.log(person);

// undefined
const personUndefined = people.find(function (item) {
  return item.id === 5;
});
console.log(personUndefined);

// Using Filter
const personFilter = people.filter(function (item) {
  return item.name === 'bob';
});

console.log(personFilter[0].name);
