// Date

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturtday',
];

// const date = new Date();
const date = new Date('11/13/1995');
console.log(date.getDate());

const day = date.getDay();
console.log(days[day]);

const month = date.getMonth();
console.log(months[month]);

const year = date.getFullYear();
console.log(year);

const fullDate = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;
console.log(fullDate);
