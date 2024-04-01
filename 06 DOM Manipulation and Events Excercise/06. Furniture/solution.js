function solve() {
  // Get elements
  const textareaElements = document.getElementsByTagName('textarea');
  const buttonElements = document.getElementsByTagName('button');
  const inputTextareaElement = textareaElements[0];
  const outputTextareaElement = textareaElements[1];
  const generateButtonElement = buttonElements[0];
  const buyButtonElement = buttonElements[1];
  const tableBodyElement = document.querySelector('.table tbody');

  // Add event listener to Generate button
  generateButtonElement.addEventListener('click', e => {
    // Get data from textarea
    const data = JSON.parse(inputTextareaElement.value);

    const trElements = data.map(item => {
      // Generate table row
      const trElement = document.createElement('tr');

      const imageTdElement = document.createElement('td');
      const imgElemnt = document.createElement('img');
      imgElemnt.src = item.img;
      imageTdElement.appendChild(imgElemnt);

      const nameTdElement = document.createElement('td');
      const namePElement = document.createElement('p');
      namePElement.textContent = item.name;
      nameTdElement.appendChild(namePElement);

      const priceTdElement = document.createElement('td');
      const pricePElement = document.createElement('p');
      pricePElement.textContent = item.price;
      priceTdElement.appendChild(pricePElement);

      const decFactorTdElement = document.createElement('td');
      const decFactorPElement = document.createElement('p');
      decFactorPElement.textContent = item.decFactor;
      decFactorTdElement.appendChild(decFactorPElement);

      const selectTdElement = document.createElement('td');
      const selectInputElement = document.createElement('input');
      selectInputElement.type = 'checkbox';
      selectTdElement.appendChild(selectInputElement);

      trElement.appendChild(imageTdElement);
      trElement.appendChild(nameTdElement);
      trElement.appendChild(priceTdElement);
      trElement.appendChild(decFactorTdElement);
      trElement.appendChild(selectTdElement);

      return trElement;
    });

    // Add tr to table body
    const trFragment = document.createDocumentFragment();
    trElements.forEach(element => trFragment.appendChild(element));
    tableBodyElement.appendChild(trFragment);

    // Clear input field
    inputTextareaElement.value = '';
  })

  // Add event listener to Buy button
  buyButtonElement.addEventListener('click', e => {
    const boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    const checkboxElements = tableBodyElement.querySelectorAll('input[type=checkbox]');

    for (const checkboxElement of checkboxElements) {
      if (checkboxElement.checked) {
        const trElement = checkboxElement.parentElement.parentElement;
        const tdElements = trElement.querySelectorAll('td');
        const nameTdElement = tdElements[1];
        const priceTdElement = tdElements[2];
        const decFactorTdElement = tdElements[3];

        const name = nameTdElement.querySelector('p').textContent;
        const price = Number(priceTdElement.querySelector('p').textContent);
        const decorationFactor = Number(decFactorTdElement.querySelector('p').textContent);

        boughtItems.push(name);
        totalPrice += price;
        totalDecFactor += decorationFactor;
      }
    }

    const decFactor = totalDecFactor / boughtItems.length;

    outputTextareaElement.value += `Bought furniture: ${boughtItems.join(', ')}\n`;
    outputTextareaElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputTextareaElement.value += `Average decoration factor: ${decFactor}`
  })
}