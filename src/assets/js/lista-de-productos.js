// Array publicaciones
let listadoPublicaciones = [];

cargarDatos();
if(!localStorage.getItem("publicaciones")){
    crearDatos();
}




// Actualizar el listado de publicaciones
function actualizarListado() {
    const itemsContainer = document.getElementById("list-items");
    const image = "";
    itemsContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar elementos

    if (listadoPublicaciones.length === 0) {
        // Mostrar un mensaje si no hay publicaciones
        itemsContainer.innerHTML = "<p>No hay publicaciones.</p>";
    } else {

    // Verificar si se seleccionó un archivo


        listadoPublicaciones.forEach((item, index) => {//Mostrar tarjeta del objeto
            const itemHTML = `
                    <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
        <div class="card text-center mx-auto h-100" >
          <a style="cursor: pointer;" 
          onclick='cargarProducto(${JSON.stringify(item)})'> 
          <img src="${item.img}" class="mx-auto card-img-top text-center" alt="${item.description}" /> </a>
          <div class="card-body">
            <h5 class="card-title subtitle">${item.name}</h5>
            <p class="card-text paragraph">${item.description}</p>
            <p class="card-text paragraph">$${item.price}</p>
            <div class="quantity-control container-fluid">
            </div>
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
    const itemsContainer = document.getElementById("list-items");

    // Establecer su contenido en vacío
    itemsContainer.innerHTML = "";
}
function crearDatos(){
    const itemList = [];
    itemList.push( {
        name: "Gorry Luffy",
        description: "Gorro para adulto",
        img: "../img/Gorro Luffy.jpg",
        price: "100",
        quantity: 3,
        category: "One piece"
    });

    itemList.push( {
        name: "Gorry Chopper",
        description: "Gorro infantil del personaje Chopper",
        img: "../img/Gorro Chopper.jpg",
        price: "140",
        quantity: 3,
        category: "One piece"
    });

    itemList.push( {
        name: "Gorry Ace",
        description: "Gorro para adulto del personaje Ace",
        img: "../img/Gorro Ace.jpg",
        price: "140",
        quantity: 3,
        category: "One piece"
    });

    itemList.push( {
        name: "Juguete Iron Man",
        description: "Juguete lanza discos de iron man",
        img: "../img/Juguete iron man.jpg",
        price: "70",
        quantity: 1,
        category: "Marvel"
    });

    itemList.push( {
        name: "Monedero de naruto",
        description: "Monedero que usa naruto en el ánime",
        img: "../img/Monedero naruto.jpg",
        price: "100",
        quantity: 3,
        category: "Naruto"
    });

    itemList.push( {
        name: "Figura pikachu gengar",
        description: "Figura de pikachu disfrazado de gengar con caja",
        img: "../img/Pikachu gengar.jpg",
        price: "270",
        quantity: 1,
        category: "Pokemon"
    });

    itemList.push( {
        name: "Playera zoro",
        description: "Playera neón talla Grande",
        img: "../img/Playera zoro.jpg",
        price: "200",
        quantity: 1,
        category: "One piece"
    });

    itemList.push( {
        name: "Playera pokemon",
        description: "Playera neón talla chica",
        img: "../img/Playera pokemon.jpg",
        price: "200",
        quantity: 1,
        category: "Pokemon"
    });

    itemList.push( {
        name: "Rosa amarilla armable",
        description: "Rosa armable tipo lego",
        img: "../img/Rosa amarilla armable.jpg",
        price: "120",
        quantity: 3,
        category: "Armable lego block"
    });

    itemList.push( {
        name: "Cartera kuromi",
        description: "Cartera de 30 x 15 cm",
        img: "../img/Cartera kuromi.jpg",
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
function cargarProducto(item){
    const img = document.getElementById("product-img");
    const name = document.getElementById("product-name");
    const description = document.getElementById("product-description");
    const price = document.getElementById("product-price");
    const quantity = document.getElementById("product-quantity");
    const category = document.getElementById("product-category");
    const input = document.getElementById("productInput");

    img.src = item.img;
    name.innerHTML = item.name;
    description.innerHTML = item.description;
    price.innerHTML = `<b>Precio: </b> $${item.price}`;
    quantity.innerHTML = `<b>Disponibles: </b> ${item.quantity}`;
    category.innerHTML =`<b> Categorias: </b> ${item.category}`;
    input.setAttribute('max', item.quantity);
    input.value = 1;
    openProductsMovil();
}

function closeProduct(){
    document.getElementById("show-product").style.display = "none";
}
document.getElementById("close-img").addEventListener("click", closeProduct);

function openProductsMovil(){
    document.getElementById("show-product").style.display = "block";
}