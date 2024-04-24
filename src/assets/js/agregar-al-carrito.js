actualizarCarrito();
function agregarAlCarrito(quantity){

    if(localStorage.getItem("carrito")){
        let carNumber = parseInt(localStorage.getItem("carrito")) + parseInt(quantity);
        localStorage.setItem("carrito",carNumber);
    }else {
        localStorage.setItem("carrito", quantity);
    }
    console.log(localStorage.getItem("carrito"));
    actualizarCarrito();
    alert("Producto agregado");
}


function actualizarCarrito(){
    if(localStorage.getItem("carrito")){
       let itemNumber = parseInt(localStorage.getItem("carrito"));
       const carro = document.getElementById("linkCarro");
       carro.innerHTML += `<span style="background-color: #65f1ff !important; color: black !important" class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">${itemNumber}</span>`;
    }
}