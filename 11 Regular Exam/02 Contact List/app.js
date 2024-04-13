window.addEventListener("load", solve);

function solve() {
  // Get elements
  const nameInputElement = document.getElementById('name');
  const phoneInputElement = document.getElementById('phone');
  const categorySelectElement = document.getElementById('category');
  const addButtonElement = document.getElementById('add-btn');
  const checkListUlElement = document.getElementById('check-list');
  const contactListUlElement = document.getElementById('contact-list');
  
  // Add event listener to Add button
  addButtonElement.addEventListener('click', addRecord)
  
  
  
  function addRecord() {
    // Get data
    const name = nameInputElement.value;
    const phone = phoneInputElement.value;
    const category = categorySelectElement.value;
    
    // Check for empty fields
    if (!name || !phone || !category) {
      return;
    }
    
    // Create li element
    const liElement = createLiElement(name, phone, category);
    
    // Attach li element
    checkListUlElement.appendChild(liElement);
    
    // Clear fields
    clearFields();
  }
  
  function createLiElement(name, phone, category) {
    const namePElement = document.createElement('p');
    namePElement.textContent = `name:${name}`;
    
    const phonePElement = document.createElement('p');
    phonePElement.textContent = `phone:${phone}`;
    
    const categoryPElement = document.createElement('p');
    categoryPElement.textContent = `category:${category}`;
    
    const articleElement = document.createElement('article');
    articleElement.appendChild(namePElement);
    articleElement.appendChild(phonePElement);
    articleElement.appendChild(categoryPElement);
    
    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('edit-btn');
    editButtonElement.addEventListener('click', (e) => edit(e, name, phone, category))
    
    const saveButtonElement = document.createElement('button');
    saveButtonElement.classList.add('save-btn');
    saveButtonElement.addEventListener('click', save);
    
    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons');
    buttonsDivElement.appendChild(editButtonElement);
    buttonsDivElement.appendChild(saveButtonElement);
    
    const liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(buttonsDivElement);
    
    return liElement;
  }
  
  function edit(e, name, phone, category) {
    // Populate input fields
    nameInputElement.value = name;
    phoneInputElement.value = phone;
    categorySelectElement.value = category;
    
    // Remove li element
    const parentLiElement = e.target.parentElement.parentElement;
    parentLiElement.remove();
  }

  function save(e) {
    // Get parent element
    const parentLiElement = e.target.parentElement.parentElement;

    // Move li to contact list
    contactListUlElement.appendChild(parentLiElement);
    
    // Remove buttons div
    const buttonsDivElement = parentLiElement.querySelector('.buttons');
    buttonsDivElement.remove();

    // Create delete button
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('del-btn');
    deleteButtonElement.addEventListener('click', deleteRecord);

    // Attach delete button
    parentLiElement.appendChild(deleteButtonElement);
  }

  function deleteRecord(e) {
    const parentLiElement = e.target.parentElement;
    parentLiElement.remove();
  }
  
  function clearFields() {
    nameInputElement.value = '';
    phoneInputElement.value = '';
    categorySelectElement.value = '';
  }
}
