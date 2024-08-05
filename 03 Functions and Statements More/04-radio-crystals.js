function solve(input) {
    let [targetThickness, ...oreChunks] = input;
    
    for (const chunk of oreChunks) {
        console.log(`Processing chunk ${chunk} microns`);
        let [thickness, doneProcedures] = processChunk(targetThickness, chunk);

        printResult(thickness, doneProcedures)
    }

    function printResult(thickness, doneProcedures) {
        doneProcedures = doneProcedures.reduce((acc, procedure) => {
            let occurrences = count(doneProcedures, procedure);
            let text = procedure !== 'Transporting and washing' ? `${procedure} x${occurrences}` : procedure;

            if (text === 'Transporting and washing' || !acc.includes(text)) {
                acc.push(text);
            }
            
            return acc;
        }, [])

        doneProcedures.forEach(procedure => console.log(procedure))
        console.log(`Finished crystal ${thickness} microns`);
    }

    function count(arr, value) {
        let occurrences = 0;

        arr.forEach(element => {
            if (element === value) {
                occurrences++
            }
        });

        return occurrences;
    }

    function processChunk(targetThickness, thickness) {
        const transportAndWash = (thickness) => Math.floor(thickness);
        const doneProcedures = [];

        while (thickness !== targetThickness) {
            let [procedureName, procedure] = getProcedure(targetThickness, thickness);

            if ((procedureName !== doneProcedures[doneProcedures.length - 1] && 
                doneProcedures.length !== 0 && 
                doneProcedures[doneProcedures.length - 1] !== 'Transporting and washing') ||
                !procedureName
            ) {
                [procedureName, procedure] = ['Transporting and washing', transportAndWash];
            }

            thickness = procedure(thickness);
            doneProcedures.push(procedureName);
        }

        if (doneProcedures[doneProcedures.length - 1] !== 'X-ray') {
            doneProcedures.push('Transporting and washing')
        }

        return [thickness, doneProcedures];

        function getProcedure(targetThickness, thickness) {
            const cut = (thickness) => thickness / 4;
            const lap = (thickness) => thickness * 0.8;
            const grind = (thickness) => thickness - 20;
            const etch = (thickness) => thickness - 2;
            const xRay = (thickness) => thickness + 1;

            if (thickness / 4 >= targetThickness) {
                return ['Cut', cut];
            } else if (thickness * 0.8 >= targetThickness) {
                return ['Lap', lap];
            } else if (thickness - 20 >= targetThickness) {
                return ['Grind', grind];
            } else if (thickness - 1 >= targetThickness) {
                return ['Etch', etch];
            } else if (thickness < targetThickness) {
                return ['X-ray', xRay];
            } else {
                return [null, null];
            }
        }
    }
}

solve([1375, 50000]);
solve([1000, 4000, 8100]);
