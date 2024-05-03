
/*
const submitButton = document.getElementById("enviar");

// Se le agrega la función de validar datos al botón de enviar
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("error-message").innerHTML = "";
    const name =  document.getElementById("name").value;
    const email =  document.getElementById("email").value;
    const message =  document.getElementById("message").value;
    if(isValidEmail(email) && !isEmpty(name) && !isEmpty(message)){
        document.getElementById("contact-form").submit();
    }
});

// Valida el campo email
function isValidEmail(email){
    const regex = /\S+@\S+\.\S+/;
    const isValidEmail = regex.test(email)
    if(!isValidEmail){
        printError("Email incorrecto")
    }
    return isValidEmail;
}
// Valida que no haya un campo vacio
function isEmpty(value){
    const isEmptyString = value == "";
    if(isEmptyString){
        printError("Por favor llene todos los campos")
    }
    return isEmptyString;
}

// Agrega el mensaje de error en la parte posterior de la pantalla
function printError(error){
    const errorList = document.getElementById("error-message");
    errorList.innerHTML += `<li>${error}</li>`;
}

// Cambiar "redes sociales" por "contacto" en dispositivos móviles
window.addEventListener('DOMContentLoaded', (event) => {
    var elementoRS = document.querySelector('.rs');
    if (window.innerWidth <= 768) {
      elementoRS.textContent = "Contacto";
    }
});
*/
const form = document.querySelector("#contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  // Validación del nombre
  const nameRegex = /^[a-zA-Z\s]+$/; // Solo acepta letras y espacios
  if (!nameRegex.test(name.value)) {
    name.classList.add("is-invalid");
    return showAlert(
      "Por favor, introduce un nombre válido (solo letras)",
      name
    );
  } else {
    name.classList.remove("is-invalid");
  }

  // Validación de correo electrónico
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(email.value)) {
    email.classList.add("is-invalid");
    return showAlert(
      "Por favor, introduce un correo electrónico válido",
      email
    );
  } else {
    email.classList.remove("is-invalid");
  }

  // Validación del mensaje
  if (message.value.trim() === "") {
    message.classList.add("is-invalid");
    return showAlert("Por favor, introduce un mensaje", message);
  } else {
    message.classList.remove("is-invalid");
  }

  showAlert("Mensaje enviado con éxito!", form, "success");
  form.submit(); // Envía el formulario
});

function showAlert(message, element, type = "danger") {
  const existingAlert = document.querySelector(".alert");
  if (existingAlert) existingAlert.remove();

  const alertTemplate = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  element.insertAdjacentHTML("beforebegin", alertTemplate);
  const alertElement = document.querySelector(".alert");
  alertElement.scrollIntoView({ behavior: "smooth" });
}
