const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email-registro");
  const password = document.querySelector("#pass-registro");
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = Users.find(
    (user) => user.email === email.value && user.password === password.value
  );
  if (!validUser) {
    email.style.borderColor = "red";
    password.style.borderColor = "red";
    return showAlert(
      "Usuario y/o contraseña incorrectos!",
      loginForm,
      "danger"
    );
  }
  localStorage.setItem("login_success", JSON.stringify(validUser));
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
