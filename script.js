document.getElementById('addItemButton').addEventListener('click', addItem);

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

    if (itemName && itemPrice > 0 && itemQuantity > 0) {
        const total = itemPrice * itemQuantity;
        const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];

        const newRow = invoiceTable.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insert Cell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.textContent = itemName;
        cell2.textContent = itemPrice.toFixed(2);
        cell3.textContent = itemQuantity;
        cell4.textContent = total.toFixed(2);

        updateTotalAmount(total);

        document.getElementById('billingForm').reset();
    } else {
        alert('Please enter valid item details.');
    }
}

function updateTotalAmount(total) {
    const totalAmountElement = document.getElementById('totalAmount');
    const currentTotal = parseFloat(totalAmountElement.textContent);
    const newTotal = currentTotal + total;
    totalAmountElement.textContent = newTotal.toFixed(2);
}
