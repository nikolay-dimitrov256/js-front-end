const baseUrl = 'http://localhost:3030/jsonstore/gifts';

const presentInputElement = document.getElementById('gift');
const forInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');
const addButtonElement = document.getElementById('add-present');
const editButtonElement = document.getElementById('edit-present');
const loadButtonElement = document.getElementById('load-presents');
const presentsDivElement = document.getElementById('gift-list');

loadButtonElement.addEventListener('click', loadGifts);

addButtonElement.addEventListener('click', addGift);

function addGift() {
    // Get data
    // TODO: check for empty fields
    const giftRecord = {
        gift: presentInputElement.value,
        for: forInputElement.value,
        price: priceInputElement.value,
    }
    
    // Send POST request to server
    fetch(baseUrl, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(giftRecord)
    })
    .then(response => {
        if (!response.ok) {
            return;
        }
        
        // Reload gift items
        loadGifts();
        
        // Clear input fields
        clearFields();
    })
}

function loadGifts() {
    clearGiftsDiv();
    editButtonElement.setAttribute('disabled', 'disabled');
    
    fetch(baseUrl)
    .then(response => response.json())
    .then(gifts => {
        for (const key in gifts) {
            const giftSockElement = createGiftSock(gifts[key]);
            presentsDivElement.appendChild(giftSockElement);
        }
    })
    .catch(err => console.log(err.message))
}

function clearGiftsDiv() {
    presentsDivElement.innerHTML = '';
}

function clearFields() {
    presentInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
}

function createGiftSock(gift) {
    const giftPElement = document.createElement('p');
    giftPElement.textContent = gift.gift;
    
    const forPElement = document.createElement('p');
    forPElement.textContent = gift.for;
    
    const pricePElement = document.createElement('p');
    pricePElement.textContent = gift.price;
    
    const contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');
    contentDivElement.appendChild(giftPElement);
    contentDivElement.appendChild(forPElement);
    contentDivElement.appendChild(pricePElement);
    
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', (e) => changeGift(e, gift))
    
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', (e) => deleteGift(e, gift))
    
    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);
    
    const giftSockElement = document.createElement('div');
    giftSockElement.classList.add('gift-sock');
    giftSockElement.appendChild(contentDivElement);
    giftSockElement.appendChild(buttonsDivElement);
    
    return giftSockElement;
}

function changeGift(e, gift) {
    // Remove present from DOM
    const presentElement = e.target.parentElement.parentElement
    presentElement.remove();
    
    // Populate input fields
    presentInputElement.value = gift.gift;
    forInputElement.value = gift.for;
    priceInputElement.value = gift.price;
    
    // Activate Edit button
    editButtonElement.removeAttribute('disabled');
    
    // Deactivate Add button
    addButtonElement.setAttribute('disabled', 'disabled');
    
    // Set event listener to Edit button
    editButtonElement.addEventListener('click', (e) => editGift(e, gift));
}

function editGift(e, gift) {
    // Get data
    const giftRecord = {
        gift: presentInputElement.value,
        for: forInputElement.value,
        price: priceInputElement.value,
    }

    // Send PUT request to server
    fetch(`${baseUrl}/${gift._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(giftRecord),
    })
    .then(response => {
        if (!response.ok) {
            return;
        }

        // Fetch items again
        loadGifts();
        clearFields();

        // Deactivate Edit button
        editButtonElement.setAttribute('disabled', 'disabled');

        // Activate Add button
        addButtonElement.removeAttribute('disabled');
    })
}

function deleteGift(e, gift) {
    // Send DELETE request to server
    fetch(`${baseUrl}/${gift._id}`, {
        method: 'DELETE'
    })
    .then(res => {
        if (!res.ok) {
            return;
        }

        // Fetch gifts again
        loadGifts();
    })
}