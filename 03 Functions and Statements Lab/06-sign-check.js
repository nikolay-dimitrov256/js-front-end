function solve(...numbers) {
    const negatives = countNegatives(numbers);
    const isNegativeResult = checkForNegativeResult(negatives);
    const message = getMessage(isNegativeResult);

    console.log(message);


    function checkForNegativeResult(negatives) {
        return negatives.length % 2 !== 0;
    }

    function countNegatives(numbers) {
        return numbers.filter(num => num < 0);
    }

    function getMessage(isNegativeResult) {
        if (isNegativeResult) {
            return 'Negative';
        }
    
        return 'Positive';
    }
}

solve( 5,
    12,
   -15);
solve(-6,
    -12,
     14);
solve(-1,
    -2,
    -3);
solve(-5,
    1,
    1);