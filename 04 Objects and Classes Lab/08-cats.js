function solve(cats) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const record of cats) {
        let [name, age] = record.split(' ');
        let cat = new Cat(name, Number(age));
        cat.meow()
    }
}

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);