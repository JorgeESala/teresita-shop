const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name-registro");
  const number = document.querySelector("#tel-registro");
  const email = document.querySelector("#email-registro");
  const password = document.querySelector("#pass-registro");
  const password1 = document.querySelector("#repetir-pass-registro");

  // Validación del nombre
  const nameRegex = /^[a-zA-Z\s]+$/; // Solo acepta letras y espacios
  if (!nameRegex.test(name.value)) {
    return showAlert(
      "Por favor, introduce un nombre válido (solo letras)",
      name
    );
  }

  // Validación de correo electrónico
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(email.value)) {
    return showAlert(
      "Por favor, introduce un correo electrónico válido",
      email
    );
  }

  // Validación del teléfono
  const phoneRegex = /^\d{10}$/; // Asume que el número de teléfono tiene 10 dígitos
  if (!phoneRegex.test(number.value)) {
    return showAlert(
      "Por favor, introduce un número de teléfono válido",
      number
    );
  }

  // Contraseña coincide
  if (password.value !== password1.value) {
    return showAlert("Las contraseñas no coinciden", password1);
  }

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = Users.find((user) => user.email === email.value);
  if (isUserRegistered) {
    return showAlert("El usuario ya esta registrado", email);
  }

  // Verificación de número de teléfono
  const isNumberRegistered = Users.find((user) => user.number === number.value);
  if (isNumberRegistered) {
    return showAlert("El número de teléfono ya está registrado", number);
  }

  Users.push({
    name: name.value,
    number: number.value,
    email: email.value,
    password: password.value,
    password1: password1.value,
  });
  localStorage.setItem("users", JSON.stringify(Users));
  showAlert("Registro exitoso!", signupForm, "success");
  window.location.href = "/index.html";
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
