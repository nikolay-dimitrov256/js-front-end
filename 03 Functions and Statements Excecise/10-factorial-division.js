function solve(first, second) {
    const result = findFactorial(first) / findFactorial(second);
    console.log(result.toFixed(2));

    function findFactorial(number) {
        if (number <= 1) {
            return 1;
        }

        return number * findFactorial(number - 1);
    }
}
solve(5, 2);
solve(6, 2);