

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