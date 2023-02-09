/* 
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name, age (15-25), status ('resident', 'tourist') keys
3. setup if else, condition where
    age must be greater than or equal to 18 and status must be
    equal to 'resident'
4. test with both objects
*/

const person1 = {
  name: 'anna',
  age: 18,
  status: 'resident',
};

const person2 = {
  name: 'bob',
  age: 17,
  status: 'tourist',
};

const age = person2.age;
const status = person1.status;

if (age >= 18 && status === 'resident') {
  console.log('you can cast a vote');
} else {
  console.log('you are not eligible');
}
