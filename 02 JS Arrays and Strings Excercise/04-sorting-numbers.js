function solve(numbers) {
    numbers.sort((a, b) => a - b);
    let orderedNumbers = [];
    let iterations = Math.floor(numbers.length / 2);

    for (let i = 0; i < iterations; i++) {
        firstNum = numbers.shift();
        secondNum = numbers.pop();
        orderedNumbers.push(firstNum, secondNum);
    }

    if (numbers.length === 1) {
        orderedNumbers.push(numbers.pop());
    }

    return orderedNumbers;
}

function solveWhile(numbers) {
    numbers.sort((a, b) => a - b);
    let orderedNumbers = [];

    while (numbers.length > 0) {
        firstNum = numbers.shift();
        orderedNumbers.push(firstNum);

        if (numbers.length > 0) {
            secondNum = numbers.pop();
            orderedNumbers.push(secondNum);
        }
    }

    return orderedNumbers;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
