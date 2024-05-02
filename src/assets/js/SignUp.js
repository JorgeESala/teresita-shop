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

  // Crear objeto de usuario
  const newUser = {
    name: name,
    number: number,
    email: email,
    password: password,
    password1: password1,
  };

  // Enviar solicitud POST a la API para registrar el usuario
  fetch("http://localhost:8080/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al registrar el usuario");
      }
      return response.json();
    })
    .then((data) => {
      if (data.message === "El usuario ya está registrado") {
        showAlert(data.message);
      } else {
        showAlert("Registro exitoso!", "success");
        window.location.href = "/index.html";
      }
    })
    .catch((error) => {
      showAlert(error.message);
    });
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
