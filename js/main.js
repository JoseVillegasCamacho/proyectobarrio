// Manejo del envío del formulario
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. Te contactaremos pronto.");
  this.reset(); // Limpia el formulario después de enviarlo
});

// Scroll suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Activar los tooltips de Bootstrap
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Cambiar el estilo del navbar al hacer scroll
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-dark", "navbar-dark");
    navbar.classList.remove("bg-light", "navbar-light");
  } else {
    navbar.classList.add("bg-light", "navbar-light");
    navbar.classList.remove("bg-dark", "navbar-dark");
  }
});
