// console.log(students);

// have access to students from data.js

/* map */
const updatedStudents = students.map(function (student) {
  student.role = 'student';
  return student;
});
// console.log(updatedStudents);

/* filter */
const highScores = students.filter(function (student) {
  // if (student.score >= 80) {
  //   return student;
  // }
  // if (student.score >= 80) return student;

  return student.score >= 80;
});
// console.log(highScores);

/* find */
const specificId = students.find(function (student) {
  return student.id === 2;
});
// console.log(specificId);

/* reduce */
const averageScore =
  students.reduce(function (totalScore, student) {
    // console.log(totalScore);
    // console.log(student.score);
    totalScore += student.score;
    return totalScore;
  }, 0) / students.length;

console.log(averageScore);

/* Example - Square Bracket Notation */
const subject = 'physics';

const total = {};

// Static
total.math = 3;
total.history = 1;
total.arts = 1;

// Dynamic Property Creation based on variable
total[subject] = 'some value';

console.log(total);
