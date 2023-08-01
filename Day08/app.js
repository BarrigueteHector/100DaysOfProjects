// Obtener referencias a los elementos del DOM
const productNameInput = document.getElementById('product-name');
const productQuantityInput = document.getElementById('product-quantity');
const selectUnit = document.getElementById('select-unit');
const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete-list');
const productList = document.getElementById('product-list');

// Función para agregar un producto a la lista
function addProductToList() {
    const productName = productNameInput.value.trim();
    const productQuantity = parseInt(productQuantityInput.value);

    if (productName !== '' && !isNaN(productQuantity)) {
        // Crear un elemento de lista (HTML)
        const listItem = document.createElement('li');
        // Se le agrega información (texto) al elemento de lista
        listItem.textContent = `${productName}: ${productQuantity} ${selectUnit.value}`;
        // Se agrega el elemento de lista a la página
        productList.appendChild(listItem);

        // Mostrar el botón de limpiar lista
        deleteButton.style.display = 'inline-block';

        // Limpiar los campos de texto después de agregar el producto
        productNameInput.value = '';
        productQuantityInput.value = '';
        selectUnit.value = '';
    } else {
        alert('Por favor, ingresa el nombre del producto y la cantidad.');
    }
}

// Función para limpiar los campos de texto
function clearFields() {
    productNameInput.value = '';
    productQuantityInput.value = '';
    selectUnit.value = '';
}

// Función para limpiar la lista de productos
function clearList() {
    // Eliminar todos los elementos de la lista
    productList.innerHTML = '';
    
    // Ocultar el botón de limpiar lista
    if (productList.children.length === 0) {
        deleteButton.style.display = 'none';
    }
}

// Agregar eventos de escucha a los botones
addButton.addEventListener('click', addProductToList);
clearButton.addEventListener('click', clearFields);
deleteButton.addEventListener('click', clearList);
