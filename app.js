// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
  { name: 'bob', age: 25, role: 'developer' },
  { name: 'anna', age: 19, role: 'designer' },
  { name: 'susan', age: 23, role: 'boss' },
  { name: 'jennifer', age: 18, role: 'programmer' },
];

const youngPeople = people.filter(function (person) {
  return person.age < 25;
});
console.log(youngPeople);

const developers = people.filter(function (person) {
  return person.role == 'developer';
});
console.log(developers);

// empty array
const seniorDevelopers = people.filter(function (person) {
  return person.role == 'senior developer';
});
console.log(seniorDevelopers);
