function solve(data) {
    const addressBook = data.reduce((book, record) => {
        let [name, address] = record.split(':');
        book[name] = address;
        return book;
    }, {});

    sortetBook = Object.entries(addressBook)
                                            .sort((a, b) => a[0].localeCompare(b[0]))
                                            .forEach(element => console.log(`${element[0]} -> ${element[1]}`));
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);
console.log('');
solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);