// Array publicaciones
let listadoPublicaciones = [];

cargarDatos();

document.getElementById("newItemForm").addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const newItemName = document.getElementById("newItemName").value;
    const newItemDescription = document.getElementById("newItemDescription").value;
    const newItemImage = document.getElementById("newItemImage").value;
    const newItemPrice = document.getElementById("newItemPrice").value;
    const newItemQuantity = document.getElementById("newItemQuantity").value;
    const newItemCategory = document.getElementById("newItemCategory").value;

    // Crear un objeto de publicación y agregarlo al array
    const newItem = {
        name: newItemName,
        description: newItemDescription,
        img: newItemImage,
        price: newItemPrice,
        quantity: newItemQuantity,
        category: newItemCategory
    };
    listadoPublicaciones.push(newItem);

    // Limpiar formulario
    document.getElementById("newItemForm").reset();

    // Almacenar en el localstorage
    localStorage.setItem("publicaciones", JSON.stringify(listadoPublicaciones));

    // Actualizar el listado
    actualizarListado();
});

// Actualizar el listado de publicaciones
function actualizarListado() {
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar elementos

    if (listadoPublicaciones.length === 0) {
        // Mostrar un mensaje si no hay publicaciones
        itemsContainer.innerHTML = "<p>No hay publicaciones.</p>";
    } else {
        listadoPublicaciones.forEach((item, index) => {//Mostrar tarjeta del objeto
            const itemHTML = `
                    <div class="col-3 text-center">
        <div class="card text-center card" style="width: 18rem">
          <img src="${item.img}" class="mx-auto card-img-top text-center" alt="${item.description}" />
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <p class="card-text">${item.price}</p>
            <p class="card-text">Disponibles: ${item.quantity}</p>
            <p class="card-text">${item.category}</p>
            <div class="quantity-control container-fluid">
              <div class="row justify-content-center mb-3">
                <input id="1" value="0" class="col-3" type="number" min="0" max="$1" />
              </div>
            </div>
            <button href="#" class="btn btn-primary">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
                `;
            itemsContainer.innerHTML += itemHTML;
        });
    }
}

// Eliminar una publicación del listado
function eliminarPublicacion(index) {
    listadoPublicaciones.splice(index, 1);
    actualizarListado();
    localStorage.setItem("publicaciones", JSON.stringify(listadoPublicaciones));
}

// Modificar una publicación del listado
function modificarPublicacion(index) {

    const item = listadoPublicaciones[index];

    // Rellenar el formulario con los datos del elemento
    document.getElementById("newItemName").value = item.name;
    document.getElementById("newItemDescription").value = item.description;
    document.getElementById("newItemImage").value = item.img;
    document.getElementById("newItemPrice").value = item.price;
    document.getElementById("newItemQuantity").value = item.quantity;
    document.getElementById("newItemCategory").value = item.category;

    // Eliminar el elemento del listado
    listadoPublicaciones.splice(index, 1);

    // Actualizar el listado de publicaciones en la página
    actualizarListado();
    localStorage.setItem("publicaciones", JSON.stringify(listadoPublicaciones));
}

// Mostrar el listado de publicaciones en formato JSON
function mostrarJSON() {
    const jsonOutput = document.getElementById("listado");
    if (jsonOutput.hidden) {
        jsonOutput.innerHTML = JSON.stringify(listadoPublicaciones, null, 4);
        jsonOutput.hidden = false;
    } else {
        jsonOutput.hidden = true
    }
}

// Cargar los datos almacenados localmente al cargar la página
function cargarDatos() {
    let publicacionesGuardadas = localStorage.getItem('publicaciones');
    if (publicacionesGuardadas) {
        listadoPublicaciones = JSON.parse(publicacionesGuardadas);
        actualizarListado();
    }
}

// Función para eliminar todas las publicaciones
function limpiarListado() {
    // Limpiar el listado de publicaciones
    listadoPublicaciones = [];

    // Eliminar publicaciones del localstorage
    localStorage.removeItem("publicaciones");

    // Obtener el contenedor de las tarjetas
    const itemsContainer = document.getElementById("list-items");

    // Establecer su contenido en vacío
    itemsContainer.innerHTML = "";
}