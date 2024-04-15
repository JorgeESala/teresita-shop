const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name-registro").value;
  const number = document.querySelector("#tel-registro").value;
  const email = document.querySelector("#email-registro").value;
  const password = document.querySelector("#pass-registro").value;
  const password1 = document.querySelector("#repetir-pass-registro").value;

  // Validación de correo electrónico
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(email)) {
    return showAlert("Por favor, introduce un correo electrónico válido");
  }

  // Validación del teléfono
  const phoneRegex = /^\d{10}$/; // Asume que el número de teléfono tiene 10 dígitos
  if (!phoneRegex.test(number)) {
    return showAlert("Por favor, introduce un número de teléfono válido");
  }

  // Contraseña coincide
  if (password !== password1) {
    return showAlert("Las contraseñas no coinciden");
  }

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = Users.find((user) => user.email === email);
  if (isUserRegistered) {
    return showAlert("El usuario ya esta registrado");
  }

  Users.push({
    name: name,
    number: number,
    email: email,
    password: password,
    password1: password1,
  });
  localStorage.setItem("users", JSON.stringify(Users));
  showAlert("Registro exitoso!", "success");
  window.location.href = "/index.html";
});

function showAlert(message, type = "danger") {
  const existingAlert = document.querySelector(".alert");
    if (existingAlert) existingAlert.remove();
    
  const alertTemplate = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", alertTemplate);
  window.scrollTo(0, 0);
}
