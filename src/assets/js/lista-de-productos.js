// Array publicaciones
let listadoPublicaciones = [];

cargarDatos();

// Actualizar el listado de publicaciones
function actualizarListado() {
    const itemsContainer = document.getElementById("list-items");
    const image = "";
    itemsContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar elementos

    if (listadoPublicaciones.length === 0) {
        // Mostrar un mensaje si no hay publicaciones
        itemsContainer.innerHTML = "<p>No hay publicaciones.</p>";
    } else {

        listadoPublicaciones.forEach((item, index) => {//Mostrar tarjeta del objeto
            const itemHTML = `
                    <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
                        <div class="card text-center mx-auto h-100" >
                            <a style="cursor: pointer;" 
                              onclick='cargarProducto(${JSON.stringify(item)})'> 
                              <img src="${item.image}" class="mx-auto card-img-top text-center" alt="${item.description}" /> 
                            </a>
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

// Cargar los datos desde la API al cargar la página
function cargarDatos() {
    // Enviar una solicitud GET a la API para obtener el listado de publicaciones
    fetch("http://localhost:8080/api/products")
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            listadoPublicaciones = data;
            actualizarListado();
        })
        .catch(error => {
            console.error(error);
        });
}

function cargarProducto(item){
    const img = document.getElementById("product-img");
    const name = document.getElementById("product-name");
    const description = document.getElementById("product-description");
    const price = document.getElementById("product-price");
    const quantity = document.getElementById("product-quantity");
    const category = document.getElementById("product-category");
    const input = document.getElementById("productInput");

    img.src = item.image;
    name.innerHTML = item.name;
    description.innerHTML = item.description;
    price.innerHTML = `<b>Precio: </b> $${item.price}`;
    quantity.innerHTML = `<b>Disponibles: </b> ${item.stock}`;
    input.setAttribute('max', item.stock);
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
