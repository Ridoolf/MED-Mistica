document.addEventListener("DOMContentLoaded", () => {
  const botonMenuMobile = document.getElementById("botonMenuMobile");
  const navegacionPrincipal = document.getElementById("navegacionPrincipal");
  const enlacesMenu = document.querySelectorAll(".navegacion-enlace");
  const elementosAnimados = document.querySelectorAll(".animacion-scroll");

  if (botonMenuMobile && navegacionPrincipal) {
    botonMenuMobile.addEventListener("click", () => {
      const menuActivo = navegacionPrincipal.classList.toggle("activo");

      document.body.classList.toggle("menu-abierto", menuActivo);
      botonMenuMobile.classList.toggle("activo", menuActivo);
      botonMenuMobile.setAttribute("aria-expanded", String(menuActivo));
    });
  }

  enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      navegacionPrincipal?.classList.remove("activo");
      botonMenuMobile?.classList.remove("activo");
      botonMenuMobile?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-abierto");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener("click", (event) => {
      const destinoId = enlace.getAttribute("href");
      if (!destinoId || destinoId === "#") return;

      const destino = document.querySelector(destinoId);
      if (!destino) return;

      event.preventDefault();
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
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
