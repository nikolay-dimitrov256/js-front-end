function solve(number) {
    for (let i = 0; i < number; i++) {
        printRow(number);
    }

    function printRow(number) {
        let row = [];
        for (let i = 0; i < number; i++) {
            row.push(number);
        }

        console.log(row.join(' '));
    }
}

function fancySolve(number) {
    const fillRow = num => new Array(num).fill(num).join(' ');
    const printMatrix = num => new Array(num).fill(fillRow(num)).forEach(row => console.log(row));

    printMatrix(number);
}


fancySolve(3);
solve(7);
solve(2);