/**
 * ==========================================================================
 * COUNTDOWN.JS - TEMPORIZADOR Y ENLACE A GOOGLE CALENDAR
 * BODA OLIVIA & DANIEL
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const configDate = window.WEDDING_CONFIG?.fecha?.fechaHoraISO || "2027-12-20T16:00:00";
  const weddingDate = new Date(configDate);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date();
    let diff = weddingDate.getTime() - now.getTime();

    // Si la fecha ya pasó respecto al reloj del sistema, proyectar hacia adelante
    // para mantener el efecto demostrativo en vivo de los números
    if (diff <= 0) {
      const nextTarget = new Date(now.getFullYear(), 10, 22, 16, 0, 0);
      if (nextTarget <= now) {
        nextTarget.setFullYear(now.getFullYear() + 1);
      }
      diff = nextTarget.getTime() - now.getTime();
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => (n < 10 ? "0" + n : n.toString());

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Generación dinámica del enlace a Google Calendar
  const calendarBtn = document.getElementById("google-calendar-btn");
  if (calendarBtn && window.WEDDING_CONFIG) {
    const title = encodeURIComponent(`Boda ${window.WEDDING_CONFIG.novios.tituloPareja}`);
    const details = encodeURIComponent(
      `Acompáñanos a celebrar nuestra boda. Ceremonia: ${window.WEDDING_CONFIG.ceremonia.lugar} (${window.WEDDING_CONFIG.ceremonia.hora}). Recepción: ${window.WEDDING_CONFIG.recepcion.lugar} (${window.WEDDING_CONFIG.recepcion.hora}).`
    );
    const location = encodeURIComponent(
      `${window.WEDDING_CONFIG.ceremonia.lugar}, ${window.WEDDING_CONFIG.ceremonia.direccion}`
    );
    // 22 de Noviembre de 2025: 16:00 a 23:59 UTC
    const dates = "20251122T220000Z/20251123T060000Z";
    calendarBtn.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  }
});
