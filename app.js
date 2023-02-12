// forEach
// does not return new array

const people = [
  { name: 'bob', age: 25, role: 'developer' },
  { name: 'anna', age: 19, role: 'designer' },
  { name: 'susan', age: 23, role: 'boss' },
];

function showPeople(person) {
  console.log(person.role);
}

// people.forEach(showPeople);

people.forEach(function (person) {
  console.log(person.role.toUpperCase());
});
