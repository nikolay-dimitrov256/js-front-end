function solve(number) {
    const [full, empty] = calculateFullAndEmptyParts(number);
    const bar = renderBar(full, empty);
    printResult(number, bar);

    function calculateFullAndEmptyParts(number) {
        const full = number / 10;
        const empty = 10 - full;

        return [full, empty]
    }

    function renderBar(full, empty) {
        const bar = `[${'%'.repeat(full)}${'.'.repeat(empty)}]`

        return bar;
    }

    function printResult(number, bar) {
        if (number === 100) {
            console.log('100% Complete!');
            console.log(bar);
        } else {
            console.log(`${number}% ${bar}`);
            console.log('Still loading...');
        }
    }
}

solve(30);
solve(50);
solve(100);