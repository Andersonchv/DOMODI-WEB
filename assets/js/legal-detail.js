// DOMODI — legal-detail.js

const legalCodes = {
  "codigo-civil": {
    title: "Código Civil",
    location: "Derecho Civil",
    description:
      "Regula obligaciones, contratos, responsabilidad civil y derechos reales para proteger patrimonio y relaciones civiles.",
    image: "assets/img/CODIGO CIVIL.png",
    links: [
      {
        label: "Enlace al Código Civil",
        url: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=15437",
        type: "Código Civil",
      },
      {
        label: "Enlace al Código Procesal Civil",
        url: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?param1=NRTC&nValor1=1&nValor2=12443&nValor3=75676&strTipM=TC",
        type: "Código Procesal Civil",
      },
    ],
    stats: [
      { value: "98+", label: "Casos exitosos" },
      { value: "16", label: "Años de experiencia" },
      { value: "10", label: "Profesionales" },
    ],
    contact: "legal@domodi.com | +506 8888-0002",
  },
  "codigo-penal": {
    title: "Código Penal",
    location: "Derecho Penal",
    description:
      "Defensa penal y asesoría en delitos, penas y procesos criminales para empresas y personas en Costa Rica.",
    image: "assets/img/CODIGO PENAL .png",
    links: [
      {
        label: "Enlace al Código Penal",
        url: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=5027",
        type: "Código Penal",
      },
      {
        label: "Enlace al Código Procesal Penal",
        url: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=41297",
        type: "Código Procesal Penal",
      },
    ],
    stats: [
      { value: "120+", label: "Casos exitosos" },
      { value: "18", label: "Años de experiencia" },
      { value: "12", label: "Profesionales" },
    ],
    contact: "legal@domodi.com | +506 8888-0002",
  },
  "codigo-trabajo": {
    title: "Código de Trabajo",
    location: "Derecho Laboral",
    description:
      "Regula relaciones laborales, condiciones de empleo, negociación colectiva y protección al trabajador conforme a la normativa nacional.",
    image: "assets/img/CODIGO DE TRABAJO.png",
    links: [
      {
        label: "Enlace al Código de Trabajo",
        url: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?param1=NRTC&nValor1=1&nValor2=8045&nValor3=150791&strTipM=TC",
        type: "Código de Trabajo",
      }
    ],
    stats: [
      { value: "110+", label: "Casos exitosos" },
      { value: "17", label: "Años de experiencia" },
      { value: "11", label: "Profesionales" },
    ],
    contact: "legal@domodi.com | +506 8888-0002",
  },
  "codigo-fiscal": {
    title: "Código Fiscal",
    location: "Derecho Fiscal",
    description:
      "Asesoría en obligaciones tributarias, procedimientos fiscales y auditorías ante la Administración Tributaria de Costa Rica.",
    image: "assets/img/CODIGO FISCAL.png",
    links: [
       
      {
        label: "Enlace al Código Fiscal",
        url: "https://www.pgr.go.cr/codigo-fiscal",
        type: "Código Fiscal",
      },
      {
        label: "Enlace al Código Procesal Fiscal",
        url: "https://www.pgr.go.cr/codigo-procesal-fiscal",
        type: "Código Procesal Fiscal",
      },
    ],
    stats: [
      { value: "75+", label: "Casos exitosos" },
      { value: "13", label: "Años de experiencia" },
      { value: "8", label: "Profesionales" },
    ],
    contact: "legal@domodi.com | +506 8888-0002",
  },
  "codigo-familia": {
    title: "Código de Familia",
    location: "Derecho de Familia",
    description:
      "Asesoría en divorcios, custodia, pensiones alimentarias y medidas de protección de menores con un enfoque humano y técnico.",
    image: "assets/img/CODIGO DE FAMILIA .png",
    links: [
       
      {
        label: "Enlace al Código de Familia",
        url: "https://www.pgr.go.cr/codigo-familia",
        type: "Código de Familia",
      },
      {
        label: "Enlace al Código Procesal de Familia",
        url: "https://www.pgr.go.cr/codigo-procesal-familia",
        type: "Código Procesal de Familia",
      },
    ],
    stats: [
      { value: "85+", label: "Casos exitosos" },
      { value: "14", label: "Años de experiencia" },
      { value: "8", label: "Profesionales" },
    ],
    contact: "legal@domodi.com | +506 8888-0002",
  },
  "codigo-comercial": {
    title: "Código Comercial",
    location: "Derecho Mercantil",
    description:
      "Regula sociedades, actos de comercio, contratos mercantiles y títulos valores en el contexto empresarial costarricense.",
    image: "assets/img/CODIGO COMERCIAL .png",
    links: [
       
      {
        label: "Enlace al Código Comercial",
        url: "https://www.pgr.go.cr/codigo-comercial",
        type: "Código Comercial",
      },
      {
        label: "Enlace al Código Procesal Civil",
        url: "https://www.pgr.go.cr/codigo-procesal-civil",
        type: "Código Procesal Civil",
      },
    ],
    stats: [
      { value: "90+", label: "Casos exitosos" },
      { value: "15", label: "Años de experiencia" },
      { value: "9", label: "Profesionales" },
    ],
    contact: "legal@domodi.com | +506 8888-0002",
  },
  "codigo-administrativo": {
    title: "Código Administrativo",
    location: "Derecho Administrativo",
    description:
      "Asesoría en recursos administrativos, sanciones, licencias y trámites frente a entidades públicas de Costa Rica.",
    image: "assets/img/CODIGO ADMINISTRATIVO .png",
    links: [
       
      {
        label: "Enlace al Código Administrativo",
        url: "https://www.pgr.go.cr/codigo-administrativo",
        type: "Código Administrativo",
      },
      {
        label: "Enlace al Código Procesal Administrativo",
        url: "https://www.pgr.go.cr/codigo-procesal-administrativo",
        type: "Código Procesal Administrativo",
      },
    ],
    stats: [
      { value: "68+", label: "Casos exitosos" },
      { value: "13", label: "Años de experiencia" },
      { value: "7", label: "Profesionales" },
    ],
    contact: "legal@domodi.com | +506 8888-0002",
  },
};

function getCodeIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function loadLegalDetail() {
  const codeId = getCodeIdFromUrl();
  const code = legalCodes[codeId];

  if (!code) {
    document.querySelector(".property-detail-section").innerHTML = `
      <div class="container-fluid" style="max-width: 1400px; margin: 0 auto; padding: 3rem 2rem; text-align: center;">
        <h2>Código legal no encontrado</h2>
        <p>El código solicitado no existe o no está disponible.</p>
        <a href="index.html" class="botoninfo" style="display: inline-block; margin-top: 1rem;">Volver al inicio</a>
      </div>
    `;
    return;
  }

  document.getElementById("detailImage").src = code.image;
  document.getElementById("detailImage").alt = code.title;
  document.getElementById("detailLocation").textContent = code.location;
  document.getElementById("detailTitle").textContent = code.title;
  document.getElementById("detailDescription").textContent = code.description;

  const linksHTML = code.links
    .map(
      (link) => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="detail-link">
      ${link.label} (${link.type})
    </a>
  `,
    )
    .join("");
  document.getElementById("detailLinks").innerHTML = linksHTML;

  const statsHTML = code.stats
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
    `<div class="detail-stats-grid">${statsHTML}</div>`;

  document.getElementById("detailContact").textContent = code.contact;
  document.title = `${code.title} - DOMODI LEGAL & BUSINESS`;
}

function setupDetailPage() {
  const contactBtn = document.querySelector(".btn-contact");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      const codeId = getCodeIdFromUrl();
      const code = legalCodes[codeId];
      alert(
        `Gracias por tu interés en ${code.title}.\n\nNos pondremos en contacto pronto.`,
      );
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
}

window.addEventListener("DOMContentLoaded", () => {
  loadLegalDetail();
  setupDetailPage();
});
