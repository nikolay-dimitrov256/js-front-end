function solve(data) {
    const appointments = {};

    data.forEach(element => {
        let [day, name] = element.split(' ');
        if (appointments[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            appointments[day] = name
            console.log(`Scheduled for ${day}`);
        }
    });

    for (const day in appointments) {
        console.log(`${day} -> ${appointments[day]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
console.log('');
solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);