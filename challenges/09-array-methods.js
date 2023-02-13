// console.log(students);

// have access to students from data.js

// map
const updatedStudents = students.map(function (student) {
  student.role = 'student';
  return student;
});

console.log(updatedStudents);
