/**
 * ==========================================================================
 * WELCOME.JS - COMPORTAMIENTO Y NAVEGACIÓN DE LA PANTALLA DE BIENVENIDA
 * Proyecto: Boda Andrés & Margot (index.html)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-button");
  const buttonLabel = document.getElementById("button-label");
  const welcomeBody = document.getElementById("welcome-body") || document.body;
  let isNavigating = false;

  if (enterBtn) {
    enterBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Evitar pulsaciones múltiples
      if (isNavigating) return;
      isNavigating = true;

      // Guardar consentimiento de interacción para iniciar música en la siguiente pantalla
      try {
        sessionStorage.setItem("boda_musica_activa", "true");
      } catch (err) {
        console.warn("Storage no disponible:", err);
      }

      // Respuesta háptica en móviles si está disponible
      if ("vibrate" in navigator) {
        try {
          navigator.vibrate(35);
        } catch (_) {}
      }

      // Feedback visual inmediato en el botón
      if (buttonLabel) {
        buttonLabel.textContent = "Abriendo invitación...";
      }
      enterBtn.style.opacity = "0.9";
      enterBtn.style.cursor = "wait";

      // Aplicar animación suave de salida (desvanecimiento y escala)
      welcomeBody.classList.add("portal-closing");

      // Navegación fluida a invitacion.html dentro del rango 500-800 ms
      setTimeout(() => {
        window.location.href = "invitacion.html";
      }, 650);
    });
  }
});
