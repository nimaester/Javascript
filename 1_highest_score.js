/*******************************************************************************
Write a function Score(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the  score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the  score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

Score(students); //=> 'TD2'
*******************************************************************************/

function Score(students) {
  // your code here...

  function Score(students) {
    // your code here...
    let highScore = 0;
    let highestStudent;
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      if (student.score > highScore) {
        highScore = student.score;
        highestStudent = student;
      }
    }
    let person = highestStudent.name.split(' ')
    return person[0][0] + person[1][0] + highestStudent.id
  }

}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = Score;
