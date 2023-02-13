// console.log(students);

// have access to students from data.js

// map
const updatedStudents = students.map(function (student) {
  student.role = 'student';
  return student;
});
// console.log(updatedStudents);

// filter
const highScores = students.filter(function (student) {
  // if (student.score >= 80) {
  //   return student;
  // }
  // if (student.score >= 80) return student;

  return student.score >= 80;
});

console.log(highScores);
