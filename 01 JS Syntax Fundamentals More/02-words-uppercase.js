function solve(text) {
    text = text.toUpperCase();
    let pattern = /\w+/g;
    let words = text.match(pattern);

    console.log(words.join(', '));
}

solve('Hi, how are you?');
solve('hello');