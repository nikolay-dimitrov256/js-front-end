function solve(commands) {
    const result = calulateResult(commands);
    console.log(`The car is ${result.toFixed(2)}% clean.`);

    function calulateResult(commands) {
        let value = 0;
        for (let command of commands) {
            let calculation = getCalculation(command);
            value = calculation(value);
        }

        return value
    }

    function getCalculation(operation) {
        switch (operation) {
            case 'soap':
                return x => x + 10;
            case 'water':
                return x => x * 1.2;
            case 'vacuum cleaner':
                return x => x * 1.25;
            case 'mud':
                return x => x * 0.9;
        }
    }
}


function quickSolve(commands) {
    const operationsMapper = {
        'soap': x => x + 10,
        'water': x => x * 1.2,
        'vacuum cleaner': x => x * 1.25,
        'mud': x => x * 0.9
    }

    const result = commands.reduce((accumulator, x) => operationsMapper[x](accumulator), 0);

    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);