// DOMODI — property-detail.js

// Datos de propiedades (sincronizar con index.html)
const properties = {
  "hacienda-tenorio": {
    title: "Hacienda Tenorio",
    location: "Cañas, Guanacaste",
    price: "$12,500,000",
    availability: "Disponible",
    description:
      "Propiedad de mayor extensión en Costa Rica con origen desde 1600. Conformada por 6 fincas agrupadas en 3 sociedades, libres de gravámenes. Alta accesibilidad con 17 km de frente a carretera hacia Upala y Tierra Morenas.",
    image: "assets/img/hacienda-tenorio.png",
    stats: [
      { value: "4,461", label: "Hectáreas" },
      { value: "6", label: "Fincas" },
      { value: "17 km", label: "Frente carretera" },
    ],
    contact: "info@domodi.com | +506 2100-0000",
  },
  "finca-playa-buena-vista": {
    title: "Finca Playa Buena Vista",
    location: "Playa Buena Vista, Guanacaste",
    price: "$3,850,000",
    availability: "Disponible",
    description:
      "Dos fincas estratégicamente ubicadas en uno de los corredores turísticos más importantes del país. Propiedad principal de 75 ha con finca adicional en elevación. Combinación única de extensión, privacidad y cercanía a destinos de alta demanda.",
    image: "assets/img/finca-playa-buena-vista.png",
    stats: [
      { value: "75", label: "Hectáreas" },
      { value: "2", label: "Fincas" },
      { value: "Alto", label: "Valor turístico" },
    ],
    contact: "info@domodi.com | +506 2100-0000",
  },
  "finca-tempate": {
    title: "Finca Tempate",
    location: "Santa Cruz, Guanacaste",
    price: "$2,150,000",
    availability: "Disponible",
    description:
      "Ubicada a 5 km de Playa Potrero, en una de las zonas con mayor crecimiento y proyección turística de Costa Rica. Accesibilidad, entorno natural y conexión con los destinos clave del Pacífico Norte.",
    image: "assets/img/finca-tempate.png",
    stats: [
      { value: "5 km", label: "A Playa Potrero" },
      { value: "Alta", label: "Proyección" },
      { value: "P. Norte", label: "Corredor" },
    ],
    contact: "info@domodi.com | +506 2100-0000",
  },
  "proyecto-escazu": {
    title: "PROYECTO RESIDENCIAL ESCAZU",
    location: "Bello Horizonte, Escazú",
    price: "$4,500,000",
    availability: "Disponible",
    description:
      "Un proyecto residencial ubicado en Bello Horizonte, Escazú, una de las zonas de mayor plusvalía y demanda del país. Se desarrolla dentro de un condominio consolidado con amenidades, integrando un concepto de vivienda orientado a inversión y generación de rentas. Su configuración lo posiciona como una oportunidad estratégica para desarrolladores o inversionistas que buscan proyectos listos para ejecución inmediata en ubicaciones premium.",
    image: "assets/img/proyecto-residencial-escazu.png",
    stats: [
      { value: "5 Torres", label: "3 Niveles" },
      { value: "1,712 m2", label: "1,564m2 de área constructiva" },
      { value: "Alta demanda", label: "excelente conectividad" },
    ],
    contact: "info@domodi.com | +506 2100-0000",
  },
  "proyecto-XD": {
    title: "PROYECTO RESIDENCIAL ESCAZU",
    location: "Bello Horizonte, Escazú",
    price: "$4,500,000",
    availability: "Disponible",
    description:
      "Un proyecto residencial ubicado en Bello Horizonte, Escazú, una de las zonas de mayor plusvalía y demanda del país. Se desarrolla dentro de un condominio consolidado con amenidades, integrando un concepto de vivienda orientado a inversión y generación de rentas. Su configuración lo posiciona como una oportunidad estratégica para desarrolladores o inversionistas que buscan proyectos listos para ejecución inmediata en ubicaciones premium.",
    image: "assets/img/proyecto-residencial-escazu.png",
    stats: [
      { value: "5 Torres", label: "3 Niveles" },
      { value: "1,712 m2", label: "1,564m2 de área constructiva" },
      { value: "Alta demanda", label: "excelente conectividad" },
    ],
    contact: "info@domodi.com | +506 2100-0000",
  },
};

// Obtener ID de propiedad desde URL
function getPropertyIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Llenar detalles de propiedad
function loadPropertyDetail() {
  const propertyId = getPropertyIdFromUrl();

  if (!propertyId || !properties[propertyId]) {
    document.querySelector(".property-detail-section").innerHTML = `
      <div class="container-fluid" style="max-width: 1400px; margin: 0 auto; padding: 3rem 2rem; text-align: center;">
        <h2>Propiedad no encontrada</h2>
        <p>La propiedad solicitada no existe.</p>
        <a href="index.html" class="botoninfo" style="display: inline-block; margin-top: 1rem;">Volver al inicio</a>
      </div>
    `;
    return;
  }

  const property = properties[propertyId];

  // Llenar imagen
  document.getElementById("detailImage").src = property.image;
  document.getElementById("detailImage").alt = property.title;

  // Llenar ubicación
  document.getElementById("detailLocation").textContent = property.location;

  // Llenar título
  document.getElementById("detailTitle").textContent = property.title;

  // Llenar precio
  document.getElementById("detailPrice").textContent = property.price;

  // Llenar disponibilidad
  const availabilityEl = document.getElementById("detailAvailability");
  availabilityEl.textContent = property.availability;
  availabilityEl.classList.add(
    property.availability === "Disponible" ? "available" : "not-available",
  );

  // Llenar descripción
  document.getElementById("detailDescription").textContent =
    property.description;

  // Llenar estadísticas
  const statsHTML = property.stats
    .map(
      (stat) => `
    <div class="stat">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `,
    )
    .join("");
  document.getElementById("detailStats").innerHTML =
    `<div style="display: flex; gap: 1.5rem; padding: 1rem 0; border-top: 1px solid rgba(201, 168, 76, 0.12); border-bottom: 1px solid rgba(201, 168, 76, 0.12);">${statsHTML}</div>`;

  // Llenar contacto
  document.getElementById("detailContact").textContent = property.contact;

  // Actualizar título de página
  document.title = `${property.title} - DOMODI LEGAL & BUSINESS`;
}

// Evento para botón de contacto
document.addEventListener("DOMContentLoaded", function () {
  loadPropertyDetail();

  const contactBtn = document.querySelector(".btn-contact");
  if (contactBtn) {
    contactBtn.addEventListener("click", function () {
      const propertyId = getPropertyIdFromUrl();
      const property = properties[propertyId];
      alert(
        `Gracias por tu interés en ${property.title}.\n\nNos pondremos en contacto pronto.`,
      );
      // Aquí puedes agregar lógica para enviar email o redirigir a formulario
    });
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("mainNav");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      const srText = navToggle.querySelector(".sr-only");
      if (srText) {
        srText.textContent = isOpen ? "Cerrar menú" : "Abrir menú";
      }
    });
  }
});
