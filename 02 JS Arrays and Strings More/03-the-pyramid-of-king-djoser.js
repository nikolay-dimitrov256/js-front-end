function solve(base, increment) {
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;
    let step = 0;

    while (base > 2) {
        step += 1;
        let innerSectionVolume = ((base - 2) ** 2) * increment;
        stoneRequired += innerSectionVolume;
        let outerSectionVolume = ((base * 4) - 4) * increment;
        
        if (step % 5 == 0) {
            lapisLazuliRequired += outerSectionVolume;
        } else {
            marbleRequired += outerSectionVolume;
        }

        base -= 2;
    }

    goldRequired += (base ** 2) * increment;
    step += 1
    const totalHeight = step * increment;

    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23, 0.5);