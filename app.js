// Arrays, Functions and Objects
// Objects - key/value pairs  methods
// dot notation

const person = {
  name: 'john',
  age: 25,
  education: true,
  married: false,
  siblings: ['peter', 'susan', 'anna'],
  greeting: function () {
    console.log('Hi, I am John');
  },
  // From ES6 - shorthand for the method
  // greeting() {
  //   console.log('Hi, I am John');
  // },
};

// Override value of property
person.name = 'bob';

console.log(person.name);
console.log(person.siblings[1]);

person.greeting();
