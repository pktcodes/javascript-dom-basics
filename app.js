// Array Properties and Methods
const names = ['john', 'bobo', 'barry', 'olga', 'ben'];

// length
console.log(names.length);
console.log(names[names.length - 1]);

// concat
const otherNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(otherNames);
console.log(allNames);

// reverse
console.log(allNames.reverse());

// unshift - insert item at start of array
allNames.unshift('susan');
console.log(allNames);

// shift - remove item from start of array
allNames.shift();
console.log(allNames);

// push - insert item at the end of array
allNames.push('anna');
console.log(allNames);

// pop - remove item at the end of array
allNames.pop();
console.log(allNames);

// splice - mutates the original array
const specificNames = allNames.splice(1, 3);
console.log(specificNames);
console.log(allNames);
