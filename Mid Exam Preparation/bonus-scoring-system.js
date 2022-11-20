
function bonusScoringSystem(input) {
    const students = Number(input.shift());
    const lectures = Number(input.shift());
    const addBonus = Number(input.shift());
    
// {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
    let ranklist = [];
    let studentAttendances = 0;
    let winner = 0;
    let winnerAtt = 0;

    for (let i = 0; i < students; i++) {
        let studentAttendances = input[i];
        let bonus = studentAttendances / lectures * (5 + addBonus);
        // ranklist.push(bonus);
        if (bonus > winner) {
            winner = bonus;
            winnerAtt = studentAttendances;
        }
        
    }

    console.log(`Max Bonus: ${Math.ceil(winner)}.`)
    console.log(`The student has attended ${Math.ceil(winnerAtt)} lectures.`);

    
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  );