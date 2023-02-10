// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// Interpolation ${} - insert expression(value)

const name = 'peter';
const age = 25;

const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';
console.log(sentence);

/* Using Template Literal */
const value = `Hey it's ${name} and he is ${age} years old and here is the simple math: ${
  5 + 6
}`;
console.log(value);
