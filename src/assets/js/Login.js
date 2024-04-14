const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email-registro").value;
  const password = document.querySelector("#pass-registro").value;
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = Users.find(
    (user) => user.email === email && user.password === password
  );
  if (!validUser) {
    return showAlert("Usuario y/o contraseña incorrectos!", "danger");
  }
  localStorage.setItem("login_success", JSON.stringify(validUser));
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
