// Array publicaciones
let listadoPublicaciones = [];


// Cargar los datos almacenados en la API al cargar la página
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

    // Crear un objeto de publicación y agregarlo a la API
    const newItem = {
        name: newItemName,
        description: newItemDescription,
        img: newItemImage,
        price: newItemPrice,
        quantity: newItemQuantity,
        category: newItemCategory
    };

    // Enviar una solicitud POST a la API para agregar el elemento
    fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    })
        .then(response => response.json())
        .then(data => {
            listadoPublicaciones.push(data);
            actualizarListado();
        })
        .catch(error => console.error(error));

    // Limpiar formulario
    document.getElementById("newItemForm").reset();
});


// Actualizar el listado de publicaciones
function actualizarListado() {
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar elementos

    if (listadoPublicaciones.length === 0) {
        // Mostrar un mensaje si no hay publicaciones
        itemsContainer.innerHTML = "<p>No hay publicaciones.</p>";
    } else {

        // Verificar si se seleccionó un archivo


        listadoPublicaciones.forEach((item, index) => {//Mostrar tarjeta del objeto
            const itemHTML = `
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center mb-3">
        <div class="card text-center h-100" >
          <img src="${item.img}" class="mx-auto card-img-top text-center" alt="${item.description}" />
          <div class="card-body">
            <h5 class="card-title subtitle">${item.name}</h5>
            <p class="card-text paragraph">${item.description}</p>
            <p class="card-text paragraph">${item.price}</p>
            <p class="card-text paragraph">Disponibles: ${item.quantity}</p>
            <p class="card-text paragraph">${item.category}</p>
            <div class="quantity-control container-fluid">
              <div class="row justify-content-center mb-3">
                <input id="1" value="0" class="col-3 paragraph" type="number" min="0" max="${item.quantity}" />
              </div>
            </div>
            <button href="#" class="button">
              Agregar al carrito
            </button>
            <button href="#" onclick="eliminarPublicacion(${index})" class="button">
            Eliminar
            </button>
            <button href="#" onclick="modificarPublicacion(${index})" class="button mt-1">
            Modificar
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
    // Enviar una solicitud DELETE a la API para eliminar el elemento en el servidor
    fetch(`http://localhost:8080/api/products/${listadoPublicaciones[index].id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                // Si la solicitud fue exitosa, eliminar el elemento de la lista
                listadoPublicaciones.splice(index, 1);
                actualizarListado();
            } else {
                console.error('Error al eliminar el elemento');
            }
        })
        .catch(error => console.error(error));
}


// Modificar una publicación del listado
function modificarPublicacion(index) {

    const item = listadoPublicaciones[index];

    // Rellenar el formulario con los datos del elemento
    document.getElementById("newItemName").value = item.name;
    document.getElementById("newItemDescription").value = item.description;
    document.getElementById("newItemPrice").value = item.price;
    document.getElementById("newItemQuantity").value = item.quantity;
    document.getElementById("newItemCategory").value = item.category;

    // Enviar la solicitud PUT a la API para actualizar el elemento
    fetch(`http://localhost:8080/api/products/${index}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(data => {
            listadoPublicaciones[index] = data;
            // Eliminar el elemento del listado
            listadoPublicaciones.splice(index, 1);
            actualizarListado();
        })
        .catch(error => console.error(error));
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

// Cargar los datos almacenados en la API al cargar la página
function cargarDatos() {
    // Enviar una solicitud GET a la API para obtener el listado de publicaciones
    fetch("http://localhost:8080/api/products")
        .then(response => response.json())
        .then(data => {
            listadoPublicaciones = data;
            actualizarListado();
        })
        .catch(error => console.error(error));
}


// Función para eliminar todas las publicaciones
function limpiarListado() {
    // Enviar una solicitud DELETE a la API para eliminar todas las publicaciones
    fetch("http://localhost:8080/api/products", {
        method: 'DELETE'
    })
        .then(() => {
            listadoPublicaciones = [];
            actualizarListado();
        })
        .catch(error => console.error(error));
}


/* function crearDatos() {
    const itemList = [];
    itemList.push({
        name: "Gorry Luffy",
        description: "Gorro para adulto",
        img: "../img/Gorro Luffy.jpg",
        price: "100",
        quantity: 3,
        category: "One piece"
    });

    itemList.push({
        name: "Gorry Chopper",
        description: "Gorro infantil del personaje Chopper",
        img: "../img/Gorro Chopper.jpg",
        price: "140",
        quantity: 3,
        category: "One piece"
    });

    itemList.push({
        name: "Gorry Ace",
        description: "Gorro para adulto del personaje Ace",
        img: "../img/Gorro Ace.jpg",
        price: "140",
        quantity: 3,
        category: "One piece"
    });

    itemList.push({
        name: "Juguete Iron Man",
        description: "Juguete lanza discos de iron man",
        img: "../img/Juguete iron man.jpg",
        price: "70",
        quantity: 1,
        category: "Marvel"
    });

    itemList.push({
        name: "Monedero de naruto",
        description: "Monedero que usa naruto en el ánime",
        img: "../img/Monedero naruto.jpg",
        price: "100",
        quantity: 3,
        category: "Naruto"
    });

    itemList.push({
        name: "Figura pikachu gengar",
        description: "Figura de pikachu disfrazado de gengar con caja",
        img: "../img/Pikachu gengar.jpg",
        price: "270",
        quantity: 1,
        category: "Pokemon"
    });

    itemList.push({
        name: "Playera zoro",
        description: "Playera neón talla Grande",
        img: "../img/Playera zoro.jpg",
        price: "200",
        quantity: 1,
        category: "One piece"
    });

    itemList.push({
        name: "Playera pokemon",
        description: "Playera neón talla chica",
        img: "../img/Playera pokemon.jpg",
        price: "200",
        quantity: 1,
        category: "Pokemon"
    });

    itemList.push({
        name: "Rosa amarilla armable",
        description: "Rosa armable tipo lego",
        img: "../img/Rosa amarilla armable.jpg",
        price: "120",
        quantity: 3,
        category: "Armable lego block"
    });

    itemList.push({
        name: "Cartera kuromi",
        description: "Cartera de 30 x 15 cm",
        img: "../img/Cartera kuromi.jpg",
        price: "100",
        quantity: 1,
        category: "Kuromi San Rio"
    });

    for (const item of itemList) {
        listadoPublicaciones.push(item);
    }
    actualizarListado();
} */

function handleFileUpload() {
    const fileInput = document.getElementById("newItemImage");

    // Verificar si se seleccionó un archivo
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const itemsContainer = document.getElementById("list-items");
            const itemHTML = `<img src="${e.target.result}" class="mx-auto card-img-top text-center" alt="Imagen" />`;
            itemsContainer.innerHTML += itemHTML;
        }

        // Leer el contenido del archivo como una URL de datos
        reader.readAsDataURL(fileInput.files[0]);
    }
}
