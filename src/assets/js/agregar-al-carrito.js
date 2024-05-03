actualizarCarrito();


function agregarAlCarrito(userId, productId, quantity) {
    const cartProductRequest = {
        productId: productId,
        quantity: quantity
    };

    fetch(`http://localhost:8080/api/carts/${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartProductRequest),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al agregar producto al carrito");
            }
            return response.json();
        })
        .then(data => {
            actualizarCarrito(userId);
            alert("Producto agregado al carrito");
        })
        .catch(error => {
            console.error(error);
            alert("Error al agregar producto al carrito");
        });
}

function actualizarCarrito(userId) {
    fetch(`http://localhost:8080/api/carts/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener el carrito");
            }
            return response.json();
        })
        .then(cart => {
            const itemNumber = cart.products.length;
            const carro = document.getElementById("linkCarro");
            carro.innerHTML = `<span style="background-color: #65f1ff !important; color: black !important" class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">${itemNumber}</span>`;
        })
        .catch(error => {
            console.error(error);
        });
}