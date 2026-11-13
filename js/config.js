/**
 * ==========================================================================
 * CONFIGURACIÓN CENTRALIZADA - BODA OLIVIA & DANIEL
 * ==========================================================================
 * Este archivo centraliza los datos editables de la boda.
 * Puede actualizar nombres, fechas, lugares, enlaces, WhatsApp y música
 * directamente desde aquí sin modificar el HTML.
 */

const WEDDING_CONFIG = {
  novios: {
    nombreNovia: "Olivia",
    nombreNovio: "Daniel",
    tituloPareja: "Olivia & Daniel",
    monograma: "O&D",
    fechaCorta: "22.11"
  },
  fecha: {
    diaSemana: "Sábado",
    diaNumero: 20,
    mesNombre: "Noviembre",
    mesNumero: 12,
    anio: 2027,
    ciudadPais: "Valle Campestre, México",
    fechaTexto: "22 de Noviembre de 2025",
    // Fecha y hora para la cuenta regresiva y Google Calendar
    fechaHoraISO: "2027-12-20T16:00:00",
    fechaFinISO: "2027-12-20T02:00:00"
  },
  padresYPadrinos: {
    cita: "El amor no se mira con los ojos, sino con el alma... Con la bendición de Dios y el amor de nuestras familias.",
    padresNovia: {
      titulo: "PADRES DE LA NOVIA",
      nombres: ["Roberto Morales", "Carmen Castillo"]
    },
    padresNovio: {
      titulo: "PADRES DEL NOVIO",
      nombres: ["Fernando Rossi", "Elena Gutiérrez"]
    },
    padrinosVelacion: {
      titulo: "PADRINOS DE VELACIÓN",
      nombres: ["Alejandro Soto", "Mariana Vega"]
    }
  },
  ceremonia: {
    subtitulo: "SOLEMNE",
    titulo: "Ceremonia Religiosa",
    lugar: "Parroquia Nuestra Señora de la Esperanza",
    hora: "16:00 hrs",
    direccion: "Calle Las Rosas 450, Col. San Ángel",
    mapsUrl: "https://maps.google.com/?q=Calle+Las+Rosas+450+Col+San+Angel"
  },
  recepcion: {
    subtitulo: "CELEBRACIÓN",
    titulo: "Recepción Social",
    lugar: "Villa Podere Gardens",
    hora: "18:00 hrs",
    direccion: "Carretera Panamericana Km 14",
    mapsUrl: "https://maps.google.com/?q=Villa+Podere+Gardens"
  },
  itinerario: [
    {
      hora: "15:00",
      descripcion: "Guest Arrival / Llegada",
      icono: "iconos/iglesia.gif"
    },
    {
      hora: "15:30",
      descripcion: "Canapés & Refreshments / Cóctel",
      icono: "iconos/brindis.gif"
    },
    {
      hora: "16:00",
      descripcion: "Ceremony / Ceremonia Solemne",
      icono: "iconos/celebration.gif"
    },
    {
      hora: "16:30",
      descripcion: "Photo Session / Sesión de Fotos",
      icono: "iconos/Novios_bailando.gif"
    },
    {
      hora: "18:00",
      descripcion: "Banquet / Banquete Nupcial",
      icono: "iconos/dinner.gif"
    },
    {
      hora: "20:30",
      descripcion: "Dinner & Speeches / Brindis",
      icono: "iconos/love.gif"
    },
    {
      hora: "23:00",
      descripcion: "End of Evening / ¡Gran Fiesta!",
      icono: "iconos/party.gif"
    }
  ],
  whatsapp: {
    telefono: "5215512345678", // Número de WhatsApp para confirmaciones
    mensajePredefinido: "¡Hola Olivia y Daniel! Confirmo con mucha alegría mi asistencia a su boda."
  },
  sitioWeb: {
    urlTexto: "www.oliviaanddanielwedding.com",
    urlEnlace: "index.html"
  },
  musica: {
    archivo: "music/cancion_boda.mp3",
    titulo: "Canción de Boda - Olivia & Daniel"
  }
};

if (typeof window !== "undefined") {
  window.WEDDING_CONFIG = WEDDING_CONFIG;
}
