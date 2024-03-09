function solve(number) {
    const isPerfect = evaluateNumber(number);
    printResult(isPerfect);

    function printResult(result) {
        if (result) {
            console.log('We have a perfect number!');
        } else {
            console.log('It\'s not so perfect.');
        }
    }

    function evaluateNumber(number) {
        let sum = 0;
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }

        return sum === number;
    }
}

solve(6);
solve(28);
solve(1236498);