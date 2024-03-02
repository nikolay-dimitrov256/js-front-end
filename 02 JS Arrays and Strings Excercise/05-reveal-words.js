function solve(words, template) {
    words = words.split(', ');
    const matches = template.match(/\*+/g);

    for (let match of matches) {
        for (let word of words) {
            if (match.length == word.length) {
                template = template.replace(match, word);
            }
        }
    }

    console.log(template);
}

solve('great',
'softuni is ***** place for learning new programming languages');
solve('great, learning',
'softuni is ******** place for ***** new programming languages');