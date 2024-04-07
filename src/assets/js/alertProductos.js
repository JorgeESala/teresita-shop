function newItemForm() {
    var newItemName = document.getElementById('newItemName').value.trim();
    var newItemDescription = document.getElementById('newItemDescription').value.trim();
    var newItemPrice = document.getElementById('newItemPrice').value.trim();
    var newItemQuantity = document.getElementById('newItemQuantity').value.trim();
    var newItemCategory = document.getElementById('newItemCategory').value.trim();
    var valid = true;

    
    var alertPlaceholder = document.getElementById('alertPlaceholder');
    alertPlaceholder.innerHTML = '';

   
    if (!newItemName) {
        mostrarAlerta('Por favor, ingrese un nombre.', 'danger');
        valid = false;
    }
    if (!newItemDescription) {
        mostrarAlerta('Por favor, ingrese una descripción.', 'danger');
        valid = false;
    }
    if (!newItemPrice) {
        mostrarAlerta('Por favor, ingrese un precio.', 'danger');
        valid = false;
    }
    if (!newItemQuantity) {
        mostrarAlerta('Por favor, ingrese una cantidad.', 'danger');
        valid = false;
    }
    if (!newItemCategory) {
        mostrarAlerta('Por favor, ingrese una categoría.', 'danger');
        valid = false;
    }

    return valid;
}

function mostrarAlerta(message, type) {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-' + type;
    alertDiv.appendChild(document.createTextNode(message));

    var alertPlaceholder = document.getElementById('alertPlaceholder');
    alertPlaceholder.appendChild(alertDiv);
}
