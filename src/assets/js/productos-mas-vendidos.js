// Array publicaciones
let listadoPublicaciones = [];

cargarDatos();
if(!localStorage.getItem("publicaciones")){
    crearDatos();
}



// Actualizar el listado de publicaciones
function actualizarListado() {
    const itemsContainer = document.getElementById("items-inicio");
    const image = "";
    itemsContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar elementos

    if (listadoPublicaciones.length === 0) {
        // Mostrar un mensaje si no hay publicaciones
        itemsContainer.innerHTML = "<p>No hay publicaciones.</p>";
    } else {

    // Verificar si se seleccionó un archivo


        listadoPublicaciones.forEach((item, index) => {//Mostrar tarjeta del objeto
            const itemHTML = `
                   
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div class="card text-center h-100">
            <a href= "./src/assets/pages/productos.html"><img src="${item.img}" class=" card-img-top" alt="${item.description}" /> </a>
          <div class="card-body">
            <a href= "./src/assets/pages/productos.html"> <h4 class="card-title">${item.name}</h5></a>
            <h5 class="card-text">$${item.price}</h4>
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
    const itemsContainer = document.getElementById("items-inicio");

    // Establecer su contenido en vacío
    itemsContainer.innerHTML = "";
}
function crearDatos(){
    const itemList = [];
    itemList.push( {
        name: "Gorra Luffy",
        description: "Gorro para adulto",
        img: "./src/assets/img/Gorro Luffy.jpg",
        price: "100",
        quantity: 3,
        category: "One piece"
    });

    itemList.push( {
        name: "Gorra Chopper",
        description: "Gorro infantil del personaje Chopper",
        img: "./src/assets/img/Gorro Chopper.jpg",
        price: "140",
        quantity: 3,
        category: "One piece"
    });

    itemList.push( {
        name: "Gorra Ace",
        description: "Gorro para adulto del personaje Ace",
        img: "./src/assets/img/Gorro Ace.jpg",
        price: "140",
        quantity: 3,
        category: "One piece"
    });

    itemList.push( {
        name: "Juguete Iron Man",
        description: "Juguete lanza discos de iron man",
        img: "./src/assets/img/Juguete iron man.jpg",
        price: "70",
        quantity: 1,
        category: "Marvel"
    });

    itemList.push( {
        name: "Monedero de naruto",
        description: "Monedero que usa naruto en el ánime",
        img: "./src/assets/img/Monedero naruto.jpg",
        price: "100",
        quantity: 3,
        category: "Naruto"
    });

    itemList.push( {
        name: "Figura pikachu gengar",
        description: "Figura de pikachu disfrazado de gengar con caja",
        img: "./src/assets/img/Pikachu gengar.jpg",
        price: "270",
        quantity: 1,
        category: "Pokemon"
    });

    itemList.push( {
        name: "Playera zoro",
        description: "Playera neón talla Grande",
        img: "./src/assets/img/Playera zoro.jpg",
        price: "200",
        quantity: 1,
        category: "One piece"
    });

    itemList.push( {
        name: "Playera pokemon",
        description: "Playera neón talla chica",
        img: "./src/assets/img/Playera pokemon.jpg",
        price: "200",
        quantity: 1,
        category: "Pokemon"
    });

    itemList.push( {
        name: "Rosa amarilla armable",
        description: "Rosa armable tipo lego",
        img: "./src/assets/img/Rosa amarilla armable.jpg",
        price: "120",
        quantity: 3,
        category: "Armable lego block"
    });

    itemList.push( {
        name: "Cartera kuromi",
        description: "Cartera de 30 x 15 cm",
        img: "./src/assets/img/Cartera kuromi.jpg",
        price: "100",
        quantity: 1,
        category: "Kuromi San Rio"
    });

    for(const item of itemList){
        listadoPublicaciones.push(item);
    }
    actualizarListado();
}

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


