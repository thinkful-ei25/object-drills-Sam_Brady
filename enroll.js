'use strict';

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];
  
function enrollInSummerSchool(students) {
  // your code here
  students.map(student => student.status = 'In Summer School');
  return students;
}

/*   enrollInSummerSchool(studentData);

  console.log(studentData); */

console.log(enrollInSummerSchool(studentData));