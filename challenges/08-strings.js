/* 
## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter
*/

// const fullName = function (firstName, lastName) {
//   const fullName = `Hi, my name is ${firstName} ${lastName}.`;
//   return fullName.toUpperCase();
// };
// console.log(fullName('praveen', 'kumar'));

/* Here, the order of passing the value is not important since object looks for keynames*/
function fullName({ firstName, lastName }) {
  const fullName = `Hi, my name is ${firstName} ${lastName}.`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: 'kumar', firstName: 'praveen' }));
