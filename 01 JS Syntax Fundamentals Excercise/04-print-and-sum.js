function solve(first, second) {
    let sum = 0;
    let result = ''

    for (let i = first; i <= second; i++) {
        sum += i;
        result += i + ' ';
    }
    console.log(result.trim());
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
// solve(0, 26);
// solve(50, 60);
