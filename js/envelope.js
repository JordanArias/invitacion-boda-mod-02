/**
 * ==========================================================================
 * ENVELOPE.JS - APERTURA CINEMÁTICA DEL SOBRE Y SELLO DE CERA
 * BODA OLIVIA & DANIEL
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const envelopeScreen = document.getElementById("envelope-screen");
  const openBtn = document.getElementById("open-envelope-btn");
  const waxSeal = document.getElementById("wax-seal-action");

  let isOpened = false;

  const handleOpen = () => {
    if (isOpened) return;
    isOpened = true;

    // Vibración en dispositivos móviles si está disponible
    if ("vibrate" in navigator) {
      try {
        navigator.vibrate(40);
      } catch (_) {}
    }

    // Efecto suave de escala, difuminado y desvanecimiento
    if (envelopeScreen) {
      envelopeScreen.style.transition =
        "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), filter 1.5s ease";
      envelopeScreen.style.filter = "blur(12px)";
      envelopeScreen.style.opacity = "0";
      envelopeScreen.style.transform = "scale(1.08)";
      envelopeScreen.style.pointerEvents = "none";

      window.dispatchEvent(new CustomEvent("envelopeOpened"));

      setTimeout(() => {
        envelopeScreen.classList.add("hidden");
      }, 1550);
    }

    // Disparar reproducción de música con el gesto del usuario
    const audio = document.getElementById("wedding-music");
    const musicBtn = document.getElementById("floating-music-btn");
    if (audio) {
      audio
        .play()
        .then(() => {
          if (musicBtn) {
            musicBtn.classList.remove("is-paused");
            musicBtn.classList.add("is-playing");
            musicBtn.setAttribute("title", "Pausar música");
          }
        })
        .catch((err) => {
          console.log("Audio en espera de interacción adicional:", err);
        });
    }
  };

  if (openBtn) {
    openBtn.addEventListener("click", handleOpen);
  }

  if (waxSeal) {
    waxSeal.addEventListener("click", handleOpen);
  }
});
