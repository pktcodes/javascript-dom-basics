// Arrays and for loop

const names = ['anna', 'susy', 'bob'];
const lastName = 'shakeandbake';
const newArray = [];

// for loop
for (i = 0; i < names.length; i++) {
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}

console.log(names);
console.log(newArray);
