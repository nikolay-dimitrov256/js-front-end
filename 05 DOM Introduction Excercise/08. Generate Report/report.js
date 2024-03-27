function generateReport() {
    // Get elements
    const headerInputElements = document.querySelectorAll('table thead th input');
    const tableRowsElements = document.querySelectorAll('table tbody tr');
    const textAreaElement = document.getElementById('output');

    // Get input values
    const headerProperties = Array.from(headerInputElements);

    // Get data from table cells
    const tableData = [];

    for (const rowElement of tableRowsElements) {
        const rowData = {};
        const cellElements = rowElement.querySelectorAll('td');

        for (let i = 0; i < cellElements.length; i++) {
            if (headerProperties[i].checked) {
                let propertyName = headerProperties[i].name;
                rowData[propertyName] = cellElements[i].textContent;
            }
        }

        tableData.push(rowData);
    }

    // Output data to page
    textAreaElement.value = JSON.stringify(tableData, null, 2);
}
