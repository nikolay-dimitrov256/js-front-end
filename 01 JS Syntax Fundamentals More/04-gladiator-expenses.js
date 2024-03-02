function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmets = Math.floor(lostFights / 2);
    let brokenSwords = Math.floor(lostFights / 3);
    let brokenShields = Math.floor(lostFights / 6);
    let brokerArmours = Math.floor( brokenShields / 2);

    let expenses = (brokenHelmets * helmetPrice) + (brokenSwords * swordPrice) + (brokenShields * shieldPrice) + (brokerArmours * armorPrice);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(7,
    2,
    3,
    4,
    5);
solve(23,
    12.50,
    21.50,
    40,
    200);
