function solve(input) {
    let message = input.shift();

    const takeEven = message => {
        message = message.split('').filter((ch, i) => i % 2 === 0).join('');
        console.log(message);
        return message;
    }

    const changeAll = (message, substring, replacement) => {
        message = message.split(substring).join(replacement);
        console.log(message);
        return message;
    }

    const reverse = (message, substring) => {
        if (!message.includes(substring)) {
            console.log('error');
            return message;
        }

        message = message.replace(substring, '');
        substring = substring.split('').reverse().join('');
        message += substring;

        console.log(message);
        return message;
    }

    for (const line of input) {
        if (line === 'Buy') {
            console.log(`The cryptocurrency is: ${message}`);
            break;
        }
        
        let [command, substring, replacement] = line.split('?');

        switch (command) {
            case 'TakeEven':
                message = takeEven(message);
                break;
            
            case 'ChangeAll':
                message = changeAll(message, substring, replacement);
                break;

            case 'Reverse':
                message = reverse(message, substring)
                break;
        }
    }
}

solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"]));