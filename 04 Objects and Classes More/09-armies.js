function solve(input) {
    const leaders = input
                        .reduce((acc, line) => {
                            if (line.includes('arrives')) {
                                acc = arrive(acc, line);
                            } else if (line.includes(':')){
                                acc = addArmy(acc, line);
                            } else if (line.includes('+')) {
                                acc = fillArmy(acc, line);
                            } else if (line.includes('defeated')) {
                                acc = defeated(acc, line);
                            }

                            return acc;
                        }, {});

    Object.entries(leaders)
                        .sort((a, b) => b[1]['totalArmies'] - a[1]['totalArmies'])
                        .forEach(([leader, data]) => {
                            console.log(`${leader}: ${data['totalArmies']}`);
                            Object.entries(data['armies'])
                                                        .sort((a, b) => b[1] - a[1])
                                                        .forEach(([armyName, armyCount]) => console.log(`>>> ${armyName} - ${armyCount}`)
                                                        );
                        })

    function arrive(leaders, line) {
        let leader = line.split(' arrive')[0];
        leaders[leader] = {totalArmies: 0, armies: {}};

        return leaders;
    }

    function addArmy(leaders, line) {
        let [leader, data] = line.split(': ');
        let [armyName, armyCount] = data.split(', ');
        if (leaders[leader]) {
            leaders[leader]['armies'][armyName] = Number(armyCount);
            leaders[leader]['totalArmies'] += Number(armyCount);
        }

        return leaders;
    }

    function fillArmy(leaders, line) {
        let [armyName, armyCount] = line.split(' + ')

        for (const leader in leaders) {
            if (armyName in leaders[leader]['armies']) {
                leaders[leader]['armies'][armyName] += Number(armyCount);
                leaders[leader]['totalArmies'] += Number(armyCount);
                break;
            }
        }

        return leaders;
    }

    function defeated(leaders, line) {
        let leader = line.split(' defeated')[0];
        delete leaders[leader];

        return leaders;
    }
}

// solve(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
solve(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);
