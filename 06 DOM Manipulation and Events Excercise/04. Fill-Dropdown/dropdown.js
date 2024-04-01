function addItem() {
    // Get elemetns
    const menuElement = document.getElementById('menu');
    const textInputElement = document.getElementById('newItemText');
    const valueInputElement = document.getElementById('newItemValue');

    // Create option and set values
    const optionElement = document.createElement('option');
    optionElement.value = valueInputElement.value;
    optionElement.textContent = textInputElement.value;

    // Insert option in menu
    menuElement.appendChild(optionElement);

    // Clear fields
    textInputElement.value = '';
    valueInputElement.value = '';
}