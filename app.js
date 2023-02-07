// Arrays, Functions and Objects
// return
// default undefined, shortcuts, ignores after
// 1 inch = 2.54 cms

const wallHeight = 80;

function calculate(value) {
  // const newValue = value * 2.54;
  // console.log('The value in cm: ' + newValue + 'cm');
  // return newValue;

  return value * 2.54;

  //code gets ignored after return
  console.log('hello world');
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];

console.log(dimensions);
