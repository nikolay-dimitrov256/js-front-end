function solve(people, groupType, dayOfWeek) {
    let pricePerDay = 0;
    
    switch (groupType) {
        case 'Students':
            switch (dayOfWeek) {
                case 'Friday':
                pricePerDay = 8.45;
                break;
                case 'Saturday':
                pricePerDay = 9.80;
                break;
                case 'Sunday':
                pricePerDay = 10.46;
                break;
            } break;
        case 'Business':
            switch (dayOfWeek) {
                case 'Friday':
                pricePerDay = 10.90;
                break;
                case 'Saturday':
                pricePerDay = 15.60;
                break;
                case 'Sunday':
                pricePerDay = 16;
                break;
            } break;
        case 'Regular':
            switch (dayOfWeek) {
                case 'Friday':
                pricePerDay = 15;
                break;
                case 'Saturday':
                pricePerDay = 20;
                break;
                case 'Sunday':
                pricePerDay = 22.50;
                break;
            } break;
    }
    let totalPrice = pricePerDay * people;

    if (groupType === 'Students' && people >= 30) {
        totalPrice *= 0.85
    }
    if (groupType === 'Business' && people >= 100) {
        totalPrice -= 10 * pricePerDay
    }
    if (groupType === 'Regular' && people >= 10 && people <= 20) {
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


solve(30,
    "Students",
    "Sunday");
solve(40,
    "Regular",
    "Saturday");