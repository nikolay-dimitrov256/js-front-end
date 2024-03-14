function solve(input) {
    const employees = {};

    for (const employee of input) {
        employees[employee] = employee.length
    }

    for (const employeeName in employees) {
        console.log(`Name: ${employeeName} -- Personal Number: ${employees[employeeName]}`);
    }
}

function fancySolve(input) {
    let employees = input.reduce((employees, employee) => {
        employees[employee] = employee.length;
        return employees;
    }, {})

    for (const employeeName in employees) {
        console.log(`Name: ${employeeName} -- Personal Number: ${employees[employeeName]}`);
    }
}

fancySolve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);