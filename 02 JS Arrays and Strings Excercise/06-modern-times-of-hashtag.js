function solve(text) {
    matches = text.match(/#[a-zA-Z]+/g)

    for (let word of matches) {
        word = word.replace('#', '');
        console.log(word);
    }
}

function quickSolveolve(text) {
    matches = text.match(/#[a-zA-Z]+/g)
    matches.forEach(word => console.log(word.replace('#', '')))
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');