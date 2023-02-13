// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
  { name: 'bob', age: 25, role: 'developer' },
  { name: 'anna', age: 19, role: 'designer' },
  { name: 'susan', age: 23, role: 'boss' },
  { name: 'jennifer', age: 18, role: 'programmer' },
];

// returns same size - 4
const newArray = people.map(function (person) {
  return `hello world`;
});

console.log(newArray);

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

console.log(newPeople);

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join('');
console.log(names);
