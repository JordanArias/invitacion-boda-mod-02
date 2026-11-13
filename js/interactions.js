/**
 * ==========================================================================
 * INTERACTIONS.JS - ENLACES DE MAPAS, CÓDIGO QR Y OTRAS INTERACCIONES
 * BODA OLIVIA & DANIEL
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  if (window.WEDDING_CONFIG) {
    // Configurar enlaces a Google Maps
    const churchBtn = document.getElementById("church-map-btn");
    if (churchBtn && window.WEDDING_CONFIG.ceremonia?.mapsUrl) {
      churchBtn.href = window.WEDDING_CONFIG.ceremonia.mapsUrl;
    }

    const receptionBtn = document.getElementById("reception-map-btn");
    if (receptionBtn && window.WEDDING_CONFIG.recepcion?.mapsUrl) {
      receptionBtn.href = window.WEDDING_CONFIG.recepcion.mapsUrl;
    }

    // Configurar enlace del código QR / sitio web
    const qrLink = document.getElementById("website-qr-link");
    if (qrLink && window.WEDDING_CONFIG.sitioWeb?.urlEnlace) {
      qrLink.href = window.WEDDING_CONFIG.sitioWeb.urlEnlace;
    }
  }
});
