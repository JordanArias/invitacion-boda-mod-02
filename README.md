# 💍 Invitación de Boda – Olivia & Daniel

Web interactiva de invitación de boda inspirada en la papelería editorial de lujo, con diseño elegante, romántico y minimalista.

---

## 🎨 Paleta y Tipografía

- **Colores**: Verde oliva oscuro (`#1d2319`, `#2c3527`, `#262f22`, `#3d4a36`), beige papel artesanal (`#f7f4ee`, `#eee8dd`) y acentos dorados (`#c2a673`, `#dfc99e`).
- **Fuentes**: *Cormorant Garamond*, *Playfair Display*, *Great Vibes* y *Montserrat*.
- **Texturas**: Simulación de papel artesanal fino (`bg-paper-texture`), bordes rasgados deckled edge (`torn-edge-top`, `torn-edge-bottom`), marco en arco (`arch-frame`) y sello de cera 3D (`wax-seal`).

---

## 📁 Estructura del Proyecto

```text
boda_mod-02/
├── index.html              # Web principal con pantalla inicial de sobre y toda la invitación
├── invitacion.html         # Invitación directa
├── .gitignore              # Archivo de exclusión para Git
├── README.md               # Documentación y guía del proyecto
│
├── css/
│   ├── global.css          # Paleta oficial, tipografía y utilidades base (sin Tailwind CDN)
│   ├── animations.css      # Keyframes sutiles, gentle-pulse, ping y transiciones
│   ├── envelope.css        # Pantalla de sobre elegante, sello de cera 3D y apertura
│   ├── invitation.css      # Estilos de todas las secciones de la invitación
│   └── responsive.css      # Adaptación completa para móviles, tablets y monitores de escritorio
│
├── js/
│   ├── config.js           # Archivo maestro de configuración centralizada (nombres, fechas, lugares)
│   ├── envelope.js         # Lógica de apertura del sobre, zoom suave y activación de música
│   ├── countdown.js        # Cuenta regresiva en tiempo real y enlace a Google Calendar
│   ├── music.js            # Control del reproductor y botón flotante de música
│   ├── gallery.js          # Visor modal Lightbox interactivo y botón "View More Photos"
│   ├── rsvp.js             # Confirmación vía WhatsApp y formulario en línea interactivo
│   └── interactions.js     # Enlaces a Google Maps, código QR y navegación suave
│
├── img/                    # Fotografías locales y gráficos SVG
│   ├── portada.jpg         # Retrato en marco de arco de los novios
│   ├── foto_1.jpg          # Fotografía de galería 1
│   ├── foto_2.jpg          # Fotografía de Villa Podere Gardens y galería
│   ├── foto_3.jpg          # Fotografía nocturna para el banner "With love"
│   ├── foto_4.jpg          # Fotografía de galería 3
│   ├── foto_5.jpg          # Fotografía de cierre para el footer "Thank You!"
│   ├── qr_transferencia.svg# Código QR de transferencia bancaria
│   └── Bizflow_logo.png    # Logotipo del pie de página
│
├── iconos/                 # Iconos y animaciones GIF temáticas
│   ├── iglesia.gif         # Ceremonia religiosa
│   ├── celebration.gif     # Celebración
│   ├── Novios_bailando.gif # Sesión de fotos / Baile
│   ├── brindis.gif         # Canapés & refrescos / Brindis
│   ├── dinner.gif          # Banquete
│   ├── love.gif            # Sello de amor / Brindis
│   ├── party.gif           # Fiesta
│   ├── regalo.gif          # Sugerencia de regalos
│   ├── music.gif           # Botón flotante de música fijo
│   └── flower.png          # Detalle floral
│
└── music/
    └── cancion_boda.mp3    # Archivo de audio MP3 de la boda
```

---

## ⚙️ Configuración Centralizada

Para modificar nombres, fechas, horarios, ubicaciones o el número de WhatsApp, edita el archivo:
👉 `js/config.js`

Todos los textos, enlaces y configuraciones se sincronizarán automáticamente en la web sin necesidad de tocar el código HTML.

---

## 📱 Sistema Responsive Adaptativo (Pantalla Completa Total)

- **Teléfonos Móviles (< 768px)**: Diseño vertical fluido adaptado al 100% del ancho del dispositivo, sin márgenes laterales que limiten la visibilidad, botones táctiles generosos (> 44px de alto) y tipografía nítida sin desbordamiento horizontal.
- **Tablets (768px – 1023px)**: Expansión a pantalla completa (100% width) sin espacios vacíos en los costados: los padres se organizan en **3 columnas**, las dos ubicaciones en **2 columnas**, el calendario y cuenta regresiva en **2 columnas**, y la galería en **4 columnas** horizontales.
- **Pantalla Setup / Computadoras / Escritorio (≥ 1024px / 1440px / 1920px)**: Experiencia a **pantalla completa (Full Screen Edge-to-Edge)**. Se han eliminado márgenes laterales y paddings innecesarios del contenedor principal para que los bloques (Encabezado, Padres, Calendario + Contador, Banner nocturno, Itinerario alternado, Dress code, Ubicaciones, Galería y RSVP) ocupen el ancho completo de la pantalla sin dejar espacios en blanco en los costados.
- **Computadoras y Pantallas Setup (≥ 1024px / 1280px)**: Experiencia editorial de lujo con ancho expandido a 960px – 1040px, aprovechando la pantalla con proporciones armoniosas:
  - Títulos tipográficos y retrato en arco de gran formato (460px x 520px).
  - Calendario y cuenta regresiva distribuidos lado a lado.
  - Línea de tiempo alternada a izquierda y derecha con línea guía central.
  - Tarjetas de ceremonia y recepción en 2 columnas amplias con mapa interactivo.
  - Galería completa en 4 columnas panorámicas con visor Lightbox.
  - Banner de cierre y formulario RSVP con márgenes holgados y legibilidad superior.

---

El proyecto está preparado para publicarse directamente sin ningún proceso de compilación (`build`):
1. Sube los archivos a tu repositorio en GitHub.
2. En Netlify, conecta tu repositorio:
   - **Build command**: (en blanco)
   - **Publish directory**: `.` (raíz del repositorio)
