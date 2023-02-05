// Implicit Type Conversion

const number1 = 50;
const number2 = 20;
const numberTotal = number1 + number2;
console.log(numberTotal);

const string1 = 'praveen';
const string2 = 'kumar';
const stringSubtract = string1 - string2;
console.log('stringSubtract: ' + stringSubtract); //Output: NaN - Not a number

const stringNumber1 = '35';
const stringNumber2 = '40';

const stringNumberSubtract = stringNumber1 - stringNumber2;
console.log('stringNumberSubtract: ' + stringNumberSubtract);
//Output: -5 - Javascript tries to convert the string to number if possible and will do the calculation

const stringNumberMultiply = stringNumber1 * stringNumber2;
console.log('stringNumberMultiply: ' + stringNumberMultiply);

const stringNumberDivision = stringNumber1 / stringNumber2;
console.log('stringNumberDivision: ' + stringNumberDivision);

// But for addition it will concatenate
const stringNumberaddition = stringNumber1 + stringNumber2;
console.log('stringNumberaddition: ' + stringNumberaddition);

// Even if there is a number, because of the other string value it will concatenate
const numberForAdd = 1;
const stringNumberForAdd = '20';
const stringTextForAdd = 'pants';

const numberAndStringNumber = numberForAdd + stringNumberForAdd;
console.log('numberAndStringNumber: ' + numberAndStringNumber);

const numberAndStringText = numberForAdd + stringTextForAdd;
console.log('numberAndStringText: ' + numberAndStringText);

// From input we are getting string by default so we are parsing it
const randomNumber = 13;
document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();
  let value = document.getElementById('amount').value;
  value = parseInt(value);
  console.log('Input Value Type');
  console.log(value);
  console.log('Sum of Two Values');
  console.log(randomNumber + value);
});
