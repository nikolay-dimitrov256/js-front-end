function solve(input) {
    let movies = [];

    for (const record of input) {
        if (record.includes('addMovie')) {
            let movieName = record.replace('addMovie ', '');
            movies.push({name: movieName});
        } else if (record.includes('directedBy')) {
            let [movieName, director] = record.split(' directedBy ');
            let movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director;
            }
        } else if (record.includes('onDate')) {
            let [movieName, date] = record.split(' onDate ');
            let movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }

    for (const movie of movies) {
        if (movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);