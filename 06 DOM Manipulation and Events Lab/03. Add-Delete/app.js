function addItem() {
    // Get elements
    const ulItemsElement = document.getElementById('items');
    const newItemInputElement = document.getElementById('newItemText');

    // Get new element text content
    const newText = newItemInputElement.value;

    // Create new li element
    const newLiElement = document.createElement('li')
    newLiElement.textContent = newText;

    // Add delete element to li with event listener
    const deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]'
    deleteElement.addEventListener('click', event => newLiElement.remove());
    newLiElement.appendChild(deleteElement);
    console.log(deleteElement);

    // Attatch li element to DOM
    ulItemsElement.appendChild(newLiElement);
}