/**
 * ==========================================================================
 * INVITATION.JS - TRANSICIONES Y REVELADO CINEMÁTICO SUAVE (DIFUMINADO)
 * BODA OLIVIA & DANIEL
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector(".main-invitation-container");
  const envelope = document.getElementById("envelope-screen");
  const isEnvelopePresent = envelope && !envelope.classList.contains("hidden");

  // 1. Activar el difuminado cinematográfico inicial al comienzo
  if (mainContainer) {
    mainContainer.classList.add("page-dreamy-entrance");

    if (!isEnvelopePresent) {
      // En invitacion.html: Iniciar difuminado suave de aparición al cargar
      requestAnimationFrame(() => {
        setTimeout(() => {
          mainContainer.classList.add("page-ready");
        }, 90);
      });
    } else {
      // En index.html: Iniciar difuminado suave cuando se abre el sobre
      window.addEventListener(
        "envelopeOpened",
        () => {
          setTimeout(() => {
            mainContainer.classList.add("page-ready");
          }, 150);
        },
        { once: true }
      );
    }
  }

  // 2. Elementos con revelado suave difuminado
  const revealGroups = [
    // Encabezado y Retrato Principal (Hero inicial con entrada pausada y difuminada)
    { selector: ".top-floral-banner", class: "top-floral-reveal", delay: "delay-1" },
    { selector: ".wedding-main-header", class: "scroll-reveal", delay: "delay-2" },
    { selector: ".arch-photo-wrapper", class: "scroll-reveal-scale", delay: "delay-3" },
    { selector: ".arch-floral-corner img", class: "floral-bloom", delay: "delay-4" },

    // Mensaje de invitación
    { selector: ".invitation-text-section", class: "scroll-reveal", delay: "delay-5" },

    // Cita y Padres
    { selector: ".blessing-quote-card", class: "scroll-reveal" },
    { selector: ".parent-card-item", class: "scroll-reveal", stagger: true },

    // Save the Date & Calendario
    { selector: ".save-the-date-section .section-floral-corner img", class: "floral-bloom" },
    { selector: ".save-the-date-title", class: "scroll-reveal" },
    { selector: ".date-three-box", class: "scroll-reveal-scale", delay: "delay-1" },
    { selector: ".saturday-sub", class: "scroll-reveal", delay: "delay-2" },
    { selector: ".calendar-wrapper", class: "scroll-reveal", delay: "delay-1" },
    { selector: ".countdown-container", class: "scroll-reveal", delay: "delay-2" },

    // Foto nocturna
    { selector: ".night-photo-break", class: "scroll-reveal-scale" },

    // Itinerario (Camino en curva de colina)
    { selector: ".wedding-program-section .program-header", class: "scroll-reveal" },
    { selector: ".timeline-row", class: "scroll-reveal", stagger: true },

    // Lugares de Celebración
    { selector: ".venues-section .section-floral-corner img", class: "floral-bloom" },
    { selector: ".venues-title", class: "scroll-reveal" },
    { selector: ".venues-subtitle", class: "scroll-reveal" },
    { selector: ".venue-card", class: "scroll-reveal", stagger: true },

    // Galería de Recuerdos
    { selector: ".gallery-section .gallery-title", class: "scroll-reveal" },
    { selector: ".gallery-thumb-item", class: "scroll-reveal-scale", stagger: true },
    { selector: ".view-more-photos-btn", class: "scroll-reveal" },

    // Sitio Web y QR
    { selector: ".website-qr-section", class: "scroll-reveal" },

    // RSVP
    { selector: ".rsvp-section .section-floral-corner img", class: "floral-bloom" },
    { selector: ".rsvp-box-card", class: "scroll-reveal-scale" },

    // Cierre
    { selector: ".closing-blessing-section", class: "scroll-reveal" },
    { selector: ".final-closing-box", class: "scroll-reveal-scale" }
  ];

  // 3. Aplicar clases de transición a los elementos encontrados
  const allTargets = [];
  revealGroups.forEach((group) => {
    const nodes = document.querySelectorAll(group.selector);
    nodes.forEach((node, index) => {
      node.classList.add(group.class);
      if (group.delay) {
        node.classList.add(group.delay);
      }
      if (group.stagger) {
        const staggerIndex = (index % 6) + 1;
        node.classList.add(`delay-${staggerIndex}`);
      }
      allTargets.push(node);
    });
  });

  // Fallback si no hay soporte para IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    allTargets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // 4. Configurar IntersectionObserver con umbral suave
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Iniciar la observación
  const startObserving = () => {
    allTargets.forEach((el) => observer.observe(el));
  };

  if (!isEnvelopePresent) {
    // Si la invitación está abierta directamente (invitacion.html)
    setTimeout(() => {
      startObserving();
    }, 150);
  } else {
    // Si hay sobre (index.html), esperar a su disolución
    window.addEventListener(
      "envelopeOpened",
      () => {
        setTimeout(() => {
          startObserving();
        }, 350);
      },
      { once: true }
    );
  }

  // 5. Trazado del camino en curva dinámico para el Itinerario (Camino en colina)
  const updateTimelineCurve = () => {
    const container = document.querySelector(".timeline-container");
    const badges = document.querySelectorAll(".timeline-icon-badge");
    const pathDashed = document.querySelector(".timeline-path-dashed");

    if (!container || badges.length === 0 || !pathDashed) return;

    const cRect = container.getBoundingClientRect();
    const points = [];

    badges.forEach((badge) => {
      const bRect = badge.getBoundingClientRect();
      const x = bRect.left - cRect.left + bRect.width / 2;
      const y = bRect.top - cRect.top + bRect.height / 2;
      points.push({ x, y });
    });

    if (points.length < 2) return;

    // Generar camino ondulado con curvas Bézier suaves que serpentean de izquierda a derecha
    let d = `M ${points[0].x} ${points[0].y - 25} L ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const dy = p1.y - p0.y;
      // Puntos de control que generan una curva en forma de colina suave
      const cp1x = p0.x;
      const cp1y = p0.y + dy * 0.52;
      const cp2x = p1.x;
      const cp2y = p1.y - dy * 0.52;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
    }
    d += ` L ${points[points.length - 1].x} ${points[points.length - 1].y + 30}`;

    pathDashed.setAttribute("d", d);
  };

  // Calcular la curva al inicio
  updateTimelineCurve();
  window.addEventListener("load", updateTimelineCurve);

  // Recalcular con ResizeObserver para respuesta perfecta al redimensionar la ventana o rotar pantalla
  if ("ResizeObserver" in window) {
    const timelineContainer = document.querySelector(".timeline-container");
    if (timelineContainer) {
      const ro = new ResizeObserver(() => {
        updateTimelineCurve();
      });
      ro.observe(timelineContainer);
    }
  } else {
    window.addEventListener("resize", updateTimelineCurve);
  }

  // 6. Smooth Scroll para enlaces internos con animación fluida
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });
});
