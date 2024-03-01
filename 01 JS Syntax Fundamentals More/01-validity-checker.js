function solve(x1, y1, x2, y2) {
    let firstToZero = Math.sqrt(x1 ** 2 + y1 ** 2);
    let secondToZero = Math.sqrt(x2 ** 2 + y2 ** 2);
    let firstToSecond = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    let firstToZeroIsValid = (firstToZero % 1 == 0) ? 'valid' : 'invalid';
    let secondToZeroIsValid = (secondToZero % 1 == 0) ? 'valid' : 'invalid';
    let firstToSecondIsValid = (firstToSecond % 1 == 0) ? 'valid' : 'invalid';

    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstToZeroIsValid}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondToZeroIsValid}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${firstToSecondIsValid}`);
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);