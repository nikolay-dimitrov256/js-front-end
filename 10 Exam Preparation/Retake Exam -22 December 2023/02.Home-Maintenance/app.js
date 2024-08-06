window.addEventListener("load", solve);

function solve() {
    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');
    const addButtonElement = document.getElementById('add-btn');
    const tasksUlElement = document.getElementById('task-list');
    const doneUlElement = document.getElementById('done-list');
    
    addButtonElement.addEventListener('click', addTask);

    function doneTask(e) {
        const parentLiElement = e.target.parentElement.parentElement;
        const buttonsDivElement = parentLiElement.querySelector('.buttons');
        doneUlElement.appendChild(parentLiElement);
        buttonsDivElement.remove();

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.classList.add('delete');
        deleteButtonElement.addEventListener('click', deleteTask);

        parentLiElement.appendChild(deleteButtonElement);
    }

    function deleteTask(e) {
        const parentLiElement = e.target.parentElement;
        parentLiElement.remove();
    }

    function editTask(e, place, action, person) {
        placeInputElement.value = place;
        actionInputElement.value = action;
        personInputElement.value = person;

        const parentLiElement = e.target.parentElement.parentElement;
        parentLiElement.remove();
    }
    
    function addTask() {
        const place = placeInputElement.value;
        const action = actionInputElement.value;
        const person = personInputElement.value;
        
        if (!place || !action || !person) {
            return;
        }
        
        const liElement = createLiElement(place, action, person);
        tasksUlElement.appendChild(liElement);
        clearFields();
    }
    
    function createLiElement(place, action, person) {
        const placePElement = document.createElement('p');
        placePElement.textContent = `Place:${place}`
        
        const actionPElement = document.createElement('p');
        actionPElement.textContent = `Action:${action}`;
        
        const personPElement = document.createElement('p');
        personPElement.textContent = `Person:${person}`;
        
        const articleElement = document.createElement('article');
        articleElement.appendChild(placePElement);
        articleElement.appendChild(actionPElement);
        articleElement.appendChild(personPElement);
        
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'Edit'
        editButtonElement.addEventListener('click', (e) => editTask(e, place, action, person));
        
        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';
        doneButtonElement.addEventListener('click', doneTask);
        
        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(doneButtonElement);
        
        const liElement = document.createElement('li');
        liElement.classList.add('clean-task');
        
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsDivElement);
        
        return liElement;
    }
    
    function clearFields() {
        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';
    }
}