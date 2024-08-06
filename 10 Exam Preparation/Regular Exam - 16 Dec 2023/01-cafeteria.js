function solve(input) {
    const baristas = {};
    const commandsMapper = {
        'Prepare': prepare,
        'Change Shift': changeShift,
        'Learn': learn,
        'Closed': () => {},
    };

    let baristasCount = Number(input.shift());

    for (let index = 0; index < baristasCount; index++) {
        const line = input[index];
        let [name, shift, drinks] = line.split(' ');
        baristas[name] = {shift, beverages: drinks.split(',')};
    }

    for (let index = baristasCount; index < input.length; index++) {
        const line = input[index];
        let [command, ...params] = line.split(' / ');

        commandsMapper[command](params)
    }

    for (const barista in baristas) {
        console.log(`Barista: ${barista}, Shift: ${baristas[barista]['shift']}, Drinks: ${baristas[barista]['beverages'].join(', ')}`);
    }

    function prepare(params) {
        const [name, shift, drink] = params;

        if (baristas[name] && baristas[name]['shift'] === shift && baristas[name]['beverages'].includes(drink)) {
            console.log(`${name} has prepared a ${drink} for you!`);
        } else {
            console.log(`${name} is not available to prepare a ${drink}.`);
        }
    }

    function changeShift(params) {
        const [name, shift] = params;
        baristas[name]['shift'] = shift;
        console.log(`${name} has updated his shift to: ${shift}`);
    }

    function learn(params) {
        const [name, drink] = params;

        if (baristas[name]['beverages'].includes(drink)) {
            console.log(`${name} knows how to make ${drink}.`);
        } else {
            baristas[name]['beverages'].push(drink);
            console.log(`${name} has learned a new coffee type: ${drink}.`);
        }
    }
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']);