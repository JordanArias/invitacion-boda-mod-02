/**
 * ==========================================================================
 * INVITATION.JS - FUNCIONALIDADES GENERALES DE LA INVITACIÓN
 * Proyecto: Boda Andrés & Margot (invitacion.html)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------------------------------------------------------
     FLORES FLOTANTES MECIDAS POR EL VIENTO (iconos/flower.png)
     20 instancias orgánicas distribuidas a lo largo de la página
     -------------------------------------------------------------------------- */
  const flowerContainer = document.getElementById("floating-flowers-container");

  if (flowerContainer) {
    const flowerConfigs = [
      { topPercent: 2.0, left: "clamp(8px, 4vw, 42px)", size: 38, opacity: 0.65, anim: "windBreeze1", duration: 7.5, delay: 0, speedX: 0.08, speedY: 0.12 },
      { topPercent: 7.0, right: "clamp(10px, 4.5vw, 48px)", size: 44, opacity: 0.58, anim: "windBreeze2", duration: 9.0, delay: 1.2, speedX: -0.10, speedY: -0.14 },
      { topPercent: 12.0, left: "clamp(14px, 5.2vw, 55px)", size: 30, opacity: 0.62, anim: "windBreeze3", duration: 6.8, delay: 0.5, speedX: 0.11, speedY: 0.15 },
      { topPercent: 17.5, right: "clamp(8px, 3.8vw, 40px)", size: 42, opacity: 0.52, anim: "windBreeze4", duration: 8.5, delay: 2.0, speedX: -0.07, speedY: -0.11 },
      { topPercent: 22.5, left: "clamp(10px, 4vw, 44px)", size: 34, opacity: 0.68, anim: "windBreeze1", duration: 7.2, delay: 1.5, speedX: 0.09, speedY: 0.13 },
      { topPercent: 27.5, right: "clamp(12px, 4.8vw, 50px)", size: 36, opacity: 0.55, anim: "windBreeze2", duration: 8.0, delay: 0.8, speedX: -0.11, speedY: -0.16 },
      { topPercent: 33.0, left: "clamp(12px, 4.2vw, 45px)", size: 46, opacity: 0.48, anim: "windBreeze3", duration: 9.5, delay: 2.5, speedX: 0.12, speedY: 0.10 },
      { topPercent: 38.0, right: "clamp(6px, 3.2vw, 36px)", size: 28, opacity: 0.64, anim: "windBreeze4", duration: 6.5, delay: 0.3, speedX: -0.08, speedY: -0.12 },
      { topPercent: 43.0, left: "clamp(10px, 4.6vw, 48px)", size: 40, opacity: 0.56, anim: "windBreeze1", duration: 8.2, delay: 1.8, speedX: 0.10, speedY: 0.14 },
      { topPercent: 48.0, right: "clamp(8px, 4vw, 42px)", size: 32, opacity: 0.60, anim: "windBreeze2", duration: 7.0, delay: 1.0, speedX: -0.12, speedY: -0.15 },
      { topPercent: 53.0, left: "clamp(6px, 3.2vw, 35px)", size: 42, opacity: 0.50, anim: "windBreeze3", duration: 8.8, delay: 2.2, speedX: 0.07, speedY: 0.11 },
      { topPercent: 58.5, right: "clamp(10px, 4.5vw, 48px)", size: 36, opacity: 0.62, anim: "windBreeze4", duration: 7.6, delay: 0.7, speedX: -0.09, speedY: -0.13 },
      { topPercent: 64.0, left: "clamp(14px, 5vw, 52px)", size: 30, opacity: 0.58, anim: "windBreeze1", duration: 6.8, delay: 1.4, speedX: 0.11, speedY: 0.16 },
      { topPercent: 69.0, right: "clamp(8px, 3.6vw, 38px)", size: 44, opacity: 0.52, anim: "windBreeze2", duration: 9.2, delay: 2.8, speedX: -0.10, speedY: -0.12 },
      { topPercent: 74.5, left: "clamp(10px, 4vw, 42px)", size: 35, opacity: 0.66, anim: "windBreeze3", duration: 7.4, delay: 0.4, speedX: 0.08, speedY: 0.14 },
      { topPercent: 79.5, right: "clamp(12px, 4.6vw, 48px)", size: 38, opacity: 0.54, anim: "windBreeze4", duration: 8.4, delay: 1.9, speedX: -0.11, speedY: -0.15 },
      { topPercent: 84.5, left: "clamp(6px, 3.2vw, 34px)", size: 28, opacity: 0.62, anim: "windBreeze1", duration: 6.5, delay: 1.1, speedX: 0.12, speedY: 0.13 },
      { topPercent: 89.5, right: "clamp(10px, 4vw, 44px)", size: 42, opacity: 0.50, anim: "windBreeze2", duration: 8.7, delay: 2.4, speedX: -0.08, speedY: -0.10 },
      { topPercent: 94.5, left: "clamp(12px, 4.5vw, 46px)", size: 36, opacity: 0.65, anim: "windBreeze3", duration: 7.8, delay: 0.9, speedX: 0.10, speedY: 0.15 },
      { topPercent: 98.2, right: "clamp(8px, 3.8vw, 40px)", size: 40, opacity: 0.68, anim: "windBreeze4", duration: 8.1, delay: 1.7, speedX: -0.12, speedY: -0.14 }
    ];

    const flowerNodes = [];

    flowerConfigs.forEach((cfg) => {
      const flower = document.createElement("div");
      flower.className = "floating-flower-item";
      flower.style.top = `${cfg.topPercent}%`;
      if (cfg.left) flower.style.left = cfg.left;
      if (cfg.right) flower.style.right = cfg.right;
      flower.style.width = `${cfg.size}px`;
      flower.style.height = `${cfg.size}px`;
      flower.style.opacity = cfg.opacity;
      flower.style.animation = `${cfg.anim} ${cfg.duration}s ease-in-out infinite alternate`;
      flower.style.animationDelay = `${cfg.delay}s`;

      const img = document.createElement("img");
      img.src = "iconos/flower.png";
      img.alt = "";
      img.setAttribute("aria-hidden", "true");
      flower.appendChild(img);

      flowerContainer.appendChild(flower);
      flowerNodes.push({ el: flower, speedX: cfg.speedX, speedY: cfg.speedY });
    });

    // Parallax suave al desplazarse
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            flowerNodes.forEach((item) => {
              const yOffset = (scrollY * item.speedY) % 90;
              const xOffset = (scrollY * item.speedX) % 40;
              item.el.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
            });
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }
});
