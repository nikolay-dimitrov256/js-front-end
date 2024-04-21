function solve(input) {
    let [flights, changes, searchedStatus] = input;
    searchedStatus = searchedStatus[0];

    flights = flights
                .map(line => line.split(' '))
                .reduce((acc, flight) => {
                    const [code, ...words] = flight;
                    const destination = words.join(' ');
                    acc[code] = { 'Destination': destination };
                    return acc;
                }, {})

    changes
        .map(line => line.split(' '))
        .forEach(change => {
            const [code, status] = change;
            
            if (flights[code]) {
                flights[code]['Status'] = status;
            }
        });

    for (const key in flights) {
        if (flights[key]['Status'] && searchedStatus != 'Ready to fly') {
            console.log(flights[key]);
        } else if (!flights[key]['Status'] && searchedStatus === 'Ready to fly') {
            flights[key]['Status'] = 'Ready to fly';
            console.log(flights[key]);
        }
    }
}

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]);
console.log('-----------------------');
solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]);