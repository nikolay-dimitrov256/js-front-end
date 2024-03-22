function setSolve(input) {
    let parkingLot = new Set();

    for (const line of input) {
        let [direction, number] = line.split(', ');

        direction == 'IN' ? parkingLot.add(number) : parkingLot.delete(number)
    }

    if (parkingLot.size === 0) {
        return console.log('Parking Lot is Empty');
    }

    Array.from(parkingLot.values())
                                .sort((a, b) => a.localeCompare(b))
                                .forEach(number => console.log(number))
}

function solve(input) {
    const parkingLot = {};

    for (const line of input) {
        let [direction, number] = line.split(', ');
        if (direction == 'IN') {
            parkingLot[number] = direction;
        } else if (direction == 'OUT') {
            delete parkingLot[number];
        }
    }

    const sortedCars = Object.entries(parkingLot).sort((car1, car2) => car1[0].localeCompare(car2[0]))
    
    sortedCars.length === 0 ? console.log('Parking Lot is Empty') : sortedCars.forEach(car => console.log(car[0]))
}

setSolve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
console.log('----------');
setSolve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);