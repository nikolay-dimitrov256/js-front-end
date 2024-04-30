function solve(input) {
    const register = input
        .map(record => {
            let [name, grade, avgScore] = record.split(', ');
            name = name.split(': ')[1];
            grade = grade.split(': ')[1];
            avgScore = Number(avgScore.split(': ')[1]);

            return { name, grade, avgScore };
        })
        .filter(student => student.avgScore >= 3)
        .reduce((acc, student) => {
            if (!acc[student.grade]) {
                acc[student.grade] = [];
            }

            acc[student.grade].push(student);

            return acc;
        }, {})

    for (const grade in register) {
        console.log(`${Number(grade) + 1} Grade`);
        const studentsList = register[grade].map(student => student.name);
        console.log(`List of students: ${studentsList.join(', ')}`);
        const avgScore = register[grade].reduce((acc, student) => acc + student.avgScore, 0) / register[grade].length;
        console.log(`Average annual score from last year: ${avgScore.toFixed(2)}`);
        console.log('');
    }
}

solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]);

solve([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]);