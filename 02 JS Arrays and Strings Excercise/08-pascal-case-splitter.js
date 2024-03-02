function solve(string) {
    const matches = string.match(/[A-Z][a-z]*/g);

    console.log(matches.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');