function attachGradientEvents() {
    // Get elements
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    // Get mouse position
    gradientElement.addEventListener('mousemove', event => {
        const targetWidth = event.target.clientWidth;
        const mousePosition = event.offsetX;
        
        // Calculate percentage
        const percentHovered = Math.trunc(mousePosition / (targetWidth - 1) * 100);

        // Output result
        resultElement.textContent = percentHovered + '%'
    })
}