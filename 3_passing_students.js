/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/

function passingStudents(students) {
  // your code here...
  let result = [];
  for (let i = 0; i < students.length; i++) {
    let currentStudentGrades = students[i].grades;
    let total = 0
    for (let j = 0; j < currentStudentGrades.length; j++) {
      total += currentStudentGrades[j].score
    }
    if (total / currentStudentGrades.length >= 70) {
      result.push(students[i].name)
    }
  }
  return result;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;
