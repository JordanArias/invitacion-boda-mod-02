/**
 * ==========================================================================
 * GALLERY.JS - GALERÍA Y VISOR LIGHTBOX
 * BODA OLIVIA & DANIEL
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");
  const galleryThumbs = document.querySelectorAll(".gallery-thumb-item img, .arch-photo-img");
  const viewMoreBtn = document.getElementById("view-more-photos-btn");

  if (!lightbox || !lightboxImg) return;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "Fotografía de boda";
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  galleryThumbs.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      openLightbox(img.src, img.alt);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === lightboxClose) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });

  if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", () => {
      // Abre la primera foto destacada en el lightbox
      const firstImg = document.querySelector(".gallery-thumb-item img");
      if (firstImg) {
        openLightbox(firstImg.src, firstImg.alt);
      }
    });
  }
});
