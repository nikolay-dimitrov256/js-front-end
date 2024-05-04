function solve(input) {
    const garages = {};

    for (const line of input) {
        const [garage, data] = line.split(' - ');
        if (!garages[garage]) {
            garages[garage] = [];
        }

        const car = data
                        .split(', ')
                        .reduce((acc, infoType) => {
                            const [key, value] = infoType.split(': ');
                            acc[key] = value;

                            return acc;
                        }, {});

        garages[garage].push(car);
    }

    for (const garage in garages) {
        console.log(`Garage № ${garage}`);
        garages[garage].forEach(car => {
            let result = [];
            for (const key in car) {
                result.push(`${key} - ${car[key]}`)
            }

            console.log(`--- ${result.join(', ')}`);
        });
    }
}

solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
console.log('--------------------');
solve(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']);