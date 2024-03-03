function solve(data) {
    const [username, ...tries] = data;
    password = username.split('').reverse().join('');

    tries.forEach((item, index) => {
        if (item === password) {
            return console.log(`User ${username} logged in.`);
        }

        if (index > 2) {
            return console.log(`User ${username} blocked!`);
        }

        console.log('Incorrect password. Try again.');
    })
}

solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);
