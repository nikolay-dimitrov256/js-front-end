function addItem() {
    const ulItemsElement = document.getElementById('items');
    const inputNewElement = document.getElementById('newItemText');

    const newLi = document.createElement('li');
    const text = inputNewElement.value
    newLi.textContent = text;
    ulItemsElement.appendChild(newLi);
}