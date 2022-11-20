
function schoolGrades(input) {
    let students = {};

    for (let line of input) {
        let currentStudent = line.split(' ');
        let name = currentStudent.shift();
        let grades = [];

        while (currentStudent.length > 0) {
            let currentGrade = Number(currentStudent.shift());
            grades.push(currentGrade);
        }
        if (students[name]) {
            for (let grade of students[name]) {
                grades.push(grade);
            }

        }
        students[name] = grades;

    }



    let sortedStudents = Array.from(Object.entries(students)).sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    sortedStudents.forEach(el => {

        let average = (el[1].reduce((a,b) => a + b, 0)) / el[1].length;

        console.log(`${el[0]}: ${average.toFixed(2)}`)
    });

}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);