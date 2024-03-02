function solve(numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        firstElement = numbers.shift();
        numbers.push(firstElement);
    }

    console.log(numbers.join(' '));
}

solve([51, 47, 32, 61, 21], 2);