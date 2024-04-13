function solve(input) {
    const heroesCount = Number(input.shift());
    const party = {};
    const commandsMapper = {
        'FireShot': fireShot,
        'TakeHit': takeHit,
        'Reload': reload,
        'PatchUp': patchUp,
    }

    // Gather party
    for (let index = 0; index < heroesCount; index++) {
        const line = input[index];
        const [name, hp, bullets] = line.split(' ');
        party[name] = {hp, bullets};
    }

    // Process commands
    for (let index = heroesCount; index < input.length; index++) {
        const line = input[index];
        
        if (line === "Ride Off Into Sunset") {
            printResult();
            break;
        }

        const [command, ...params] = line.split(' - ');

        commandsMapper[command](params);
    }

    function fireShot(params) {
        const [name, target] = params;
        
        if (party[name].bullets > 0) {
            party[name].bullets -= 1
            console.log(`${name} has successfully hit ${target} and now has ${party[name].bullets} bullets!`);
        } else {
            console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
        }
    }

    function takeHit(params) {
        let [name, damage, attacker] = params;
        damage = Number(damage);

        const character = party[name];
        character.hp -= damage;

        if (character.hp > 0) {
            console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${character.hp} HP!`);
        } else {
            delete party[name];
            console.log(`${name} was gunned down by ${attacker}!`);
        }
    }

    function reload(params) {
        const name = params[0];

        const character = party[name];

        if (character.bullets < 6) {
            const reloadedBullets = 6 - character.bullets;
            character.bullets = 6;
            console.log(`${name} reloaded ${reloadedBullets} bullets!`);
        } else {
            console.log(`${name}'s pistol is fully loaded!`);
        }
    }

    function patchUp(params) {
        let [name, amount] = params;
        amount = Number(amount);
        const character = party[name];
        
        if (character.hp < 100) {
            const recoveredAmount = character.hp + amount <= 100 ? amount : 100 - character.hp;
            character.hp += recoveredAmount;
            console.log(`${name} patched up and recovered ${recoveredAmount} HP!`);
        } else {
            console.log(`${name} is in full health!`);
        }
    }

    function printResult() {
        for (const name in party) {
            const message = [
                name, 
                ` HP: ${party[name].hp}`, 
                ` Bullets: ${party[name].bullets}`
            ];

            console.log(message.join('\n'));
        }
    }
}

solve((["2",
"Gus 100 0",
"Walt 100 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"Ride Off Into Sunset"]));
console.log('-----------------------------');
solve((["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"]));
 console.log('----------------------------');
 solve((["2",
 "Gus 100 4",
 "Walt 100 5",
 "FireShot - Gus - Bandit",
 "TakeHit - Walt - 100 - Bandit",
 "Reload - Gus",
 "Ride Off Into Sunset"]));