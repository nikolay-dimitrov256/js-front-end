function colorize() {
    const evenRowElements = document.querySelectorAll('tr:nth-child(even)');
    
    for (const row of evenRowElements) {
        row.style.backgroundColor = 'Teal';
    }
}