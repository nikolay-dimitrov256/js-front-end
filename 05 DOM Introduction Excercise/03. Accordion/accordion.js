function toggle() {
    const extraContentElement = document.getElementById('extra');
    const toggleButtonElement = document.querySelector('.head .button');

    if (toggleButtonElement.textContent == 'More') {
        extraContentElement.style.display = 'block';
        toggleButtonElement.textContent = 'Less';
    } else {
        extraContentElement.style.display = 'none';
        toggleButtonElement.textContent = 'More';
    }
}