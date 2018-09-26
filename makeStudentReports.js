'use strict';

function makeStudentReport(data) {
    let studentArray = [];
    for(let i = 0; i < data.length; i++) {
        studentArray.push(`${data[i].name}: ${data[i].grade}`);
    }
    return studentArray;
}

const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];

  console.log(makeStudentReport(testData));