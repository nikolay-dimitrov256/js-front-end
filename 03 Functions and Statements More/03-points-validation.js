function solve(coordinates) {
    const [x1, y1, x2, y2] = coordinates
    const firstToZeroisValid = validatePoints(x1, y1, 0, 0);
    const secondToZeroIsValid = validatePoints(x2, y2, 0, 0);
    const firstToSecondIsValid = validatePoints(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstToZeroisValid ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondToZeroIsValid ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${firstToSecondIsValid ? 'valid' : 'invalid'}`);

    function validatePoints(x1, y1, x2, y2) {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(distance);
    }
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);