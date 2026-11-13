/**
 * ==========================================================================
 * MUSIC.JS - REPRODUCTOR Y CONTROL DE MÚSICA NUPCIAL
 * BODA OLIVIA & DANIEL
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("floating-music-btn");
  const audio = document.getElementById("wedding-music");

  if (!musicBtn || !audio) return;

  audio.volume = 0.75;

  function updateVisual(isPlaying) {
    if (isPlaying) {
      musicBtn.classList.remove("is-paused");
      musicBtn.classList.add("is-playing");
      musicBtn.setAttribute("title", "Pausar música");
      musicBtn.setAttribute("aria-label", "Pausar música");
    } else {
      musicBtn.classList.remove("is-playing");
      musicBtn.classList.add("is-paused");
      musicBtn.setAttribute("title", "Reproducir música");
      musicBtn.setAttribute("aria-label", "Reproducir música");
    }
  }

  musicBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (audio.paused) {
      audio
        .play()
        .then(() => updateVisual(true))
        .catch((err) => console.log("Error al reproducir audio:", err));
    } else {
      audio.pause();
      updateVisual(false);
    }
  });
});
