const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadGamesButton = document.getElementById('load-games');
const nameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');
const gamesListDivElement = document.getElementById('games-list');
const addButtonElement = document.getElementById('add-game');
const editButtonElement = document.getElementById('edit-game');

loadGamesButton.addEventListener('click', loadGames);

addButtonElement.addEventListener('click', addGame);

function addGame() {
    // Get data from fields
    const name = nameInputElement.value;
    const type = typeInputElement.value;
    const players = playersInputElement.value;
    const game = {name, type, players};
    
    // Send POST request to server
    fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(game)
    })
    .then(res => {
        if (!res.ok) {
            return;
        }
        
        // Fetch games again
        loadGames()
        
        // Clear input fields
        clearFields();
    })
}

function loadGames() {
    // Clear games list
    gamesListDivElement.innerHTML = '';
    
    // Fetch records
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        Object.values(data)
        .forEach(game => {
            // Create div elements
            const gameDivElement = createGameElement(game)
            // Attach to DOM
            gamesListDivElement.appendChild(gameDivElement);
        })
        
        // Deactivate Edit button
        editButtonElement.setAttribute('disabled', 'disabled');
    })
}

function createGameElement(game) {
    const namePElement = document.createElement('p');
    namePElement.textContent = game.name;
    
    const typePElement = document.createElement('p');
    typePElement.textContent = game.type;
    
    const playersPElement = document.createElement('p');
    playersPElement.textContent = game.players;
    
    const contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');
    contentDivElement.appendChild(namePElement);
    contentDivElement.appendChild(typePElement);
    contentDivElement.appendChild(playersPElement);
    
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', (e) => changeGame(e, game))
    
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', (e) => deleteGame(e, game._id));
    
    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);
    
    const gameDivElement = document.createElement('div');
    gameDivElement.classList.add('board-game');
    gameDivElement.appendChild(contentDivElement);
    gameDivElement.appendChild(buttonsDivElement);
    
    return gameDivElement;
}

function deleteGame(e, _id) {
    // Send DELETE request to server
    fetch(`${baseUrl}/${_id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
        if (!response.ok) {
            return;
        }

        // Fetch games again
        loadGames();
    })

    
}

function changeGame(e, game) {
    // Populate input fields
    nameInputElement.value = game.name;
    typeInputElement.value = game.type;
    playersInputElement.value = game.players;
    
    // Avtivate edit button
    editButtonElement.removeAttribute('disabled');
    
    // Deactivate add button
    addButtonElement.setAttribute('disabled', 'disabled');
    
    // Add event listener to edit button
    editButtonElement.addEventListener('click', (e) => editGame(e, game._id));
}

function editGame(e, _id) {
    // Gather data
    const name = nameInputElement.value;
    const type = typeInputElement.value;
    const players = playersInputElement.value;
    const game = {name, type, players, _id};

    // Sent PUT reqest to server
    fetch(`${baseUrl}/${_id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(game)
    })
    .then(response => {
        if (!response.ok) {
            return;
        }

        // Fetch games again
        loadGames();

        // Deactivate edit button
        editButtonElement.setAttribute('disabled', 'disabled');

        // Activate add button
        addButtonElement.removeAttribute('diabled');

        // Clear input fields
        clearFields();
    })
}

function clearFields() {
    nameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
}