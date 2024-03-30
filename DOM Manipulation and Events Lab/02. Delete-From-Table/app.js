function deleteByEmail() {
    const tableTbodyElement = document.querySelector('#customers tbody'); // Redundant
    const tableTrElements = document.querySelectorAll('#customers tbody tr');
    const inputFieldElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');

    const searchedEmail = inputFieldElement.value;
    
    const searchedElement = Array.from(tableTrElements).find(element => element.textContent.includes(searchedEmail));
    
    if (searchedElement) {
        // tableTbodyElement.removeChild(searchedElement);
        searchedElement.remove();
        resultElement.textContent = 'Deleted.'
    } else {
        resultElement.textContent = 'Not found.'
    }
}