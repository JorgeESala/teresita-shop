const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email-registro").value;
  const password = document.querySelector("#pass-registro").value;

  // Crear objeto de usuario para enviar a la API
  const userCredentials = {
    email: email,
    password: password,
  };

  // Enviar solicitud POST a la API para autenticar al usuario
  fetch("http://localhost:8080/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCredentials),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Usuario y/o contraseña incorrectos!", "danger");
      }
      window.location.href = "/index.html"; // Redirigir a la página de inicio
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
