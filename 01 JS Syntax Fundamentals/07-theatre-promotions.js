function solve(dayType, age) {
    let ticketPrice = 0;

    if (0 <= age && age <= 18) {
        switch(dayType) {
            case 'Weekday':
                ticketPrice = 12;
                break

            case 'Weekend':
                ticketPrice = 15;
                break
            
            case 'Holiday':
                ticketPrice = 5;
        }

        console.log(`${ticketPrice}$`);

    } else if (18 < age && age <= 64) {
        switch(dayType) {
            case 'Weekday':
                ticketPrice = 18;
                break

            case 'Weekend':
                ticketPrice = 20;
                break
            
            case 'Holiday':
                ticketPrice = 12;
        }

        console.log(`${ticketPrice}$`);

    } else if (64 < age && age <= 122) {
        switch(dayType) {
            case 'Weekday':
                ticketPrice = 12;
                break

            case 'Weekend':
                ticketPrice = 15;
                break
            
            case 'Holiday':
                ticketPrice = 10;
        }

        console.log(`${ticketPrice}$`);
        
    } else {
        console.log('Error!');
    }
}

solve('Weekday', 42)
solve('Holiday', -12)
solve('Holiday', 15)