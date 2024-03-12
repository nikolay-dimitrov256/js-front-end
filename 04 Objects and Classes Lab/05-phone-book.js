function solve(data) {
    const phoneBook = {}
    
    for (let record of data) {
        let [name, number] = record.split(' ');
        phoneBook[name] = number;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);
console.log('');
solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']);