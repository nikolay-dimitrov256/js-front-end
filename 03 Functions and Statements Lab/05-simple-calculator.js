function solve(first, second, operator) {
    // const result = getOperation(operator)(first, second);  // This works!!!
    const operation = getOperation(operator);
    const result = operation(first, second);

    console.log(result);

    function getOperation(operator) {
        switch (operator) {
            case 'add':
                return (a, b) => a + b;
            
            case 'subtract':
                return (a, b) => a - b;
                
            case 'multiply':
                return (a, b) => a * b;

            case 'divide':
                return (a, b) => a / b;
        }
    }
}

solve(5,
    5,
    'multiply');
solve(40,
    8,
    'divide');
solve(12,
    19,
    'add');
solve(50,
    13,
    'subtract');