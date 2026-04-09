document.addEventListener("DOMContentLoaded", () => {
  const botonMenuMobile = document.getElementById("botonMenuMobile");
  const navegacionPrincipal = document.getElementById("navegacionPrincipal");
  const enlacesMenu = document.querySelectorAll(".navegacion-enlace");
  const elementosAnimados = document.querySelectorAll(".animacion-scroll");

  if (botonMenuMobile && navegacionPrincipal) {
    botonMenuMobile.addEventListener("click", () => {
      navegacionPrincipal.classList.toggle("activo");
      document.body.classList.toggle("menu-abierto");
      botonMenuMobile.classList.toggle("activo");
    });
  }

  enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      navegacionPrincipal.classList.remove("activo");
      document.body.classList.remove("menu-abierto");
      botonMenuMobile.classList.remove("activo");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    elementosAnimados.forEach((elemento) => {
      elemento.classList.add("preparado-para-animar");
      observer.observe(elemento);
    });
  }
});