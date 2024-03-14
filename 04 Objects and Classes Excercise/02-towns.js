function solve(input) {
    const towns = [];

    for (const line of input) {
        let [townName, latitude, longitude] = line.split(' | ');
        let town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };

        towns.push(town);
    }
    
    towns.forEach(town => console.log(town));
}

function fancySolve(input) {
    input
        .reduce((towns, line) => {
            let [townName, latitude, longitude] = line.split(' | ');
            let town = {
                town: townName,
                latitude: Number(latitude).toFixed(2),
                longitude: Number(longitude).toFixed(2),
            };

            towns.push(town);
            
            return towns;
        }, [])
        .forEach(town => console.log(town))
}

fancySolve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);