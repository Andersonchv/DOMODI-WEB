// DOMODI — app.js

// ── Navegación por secciones ──
const navLinks = document.querySelectorAll('.nav-link[data-section]');
const heroSection = document.getElementById('hero-strip');
const carouselSection = document.querySelector('.carousel-section');
const businessSection = document.getElementById('section-business');
const aboutSection = document.getElementById('section-nosotros');
const legalSection = document.getElementById('section-legal');
const contactSection = document.getElementById('section-contacto');

function hideSections(sections) {
  sections.forEach(section => {
    if (section) {
      section.classList.remove('section-visible');
      section.hidden = true;
    }
  });
}

function showInicio() {
  // Inicio muestra Business. Hero y carrusel solo visibles en Inicio.
  heroSection.hidden = false;
  carouselSection.hidden = false;
  businessSection.hidden = false;
  legalSection.hidden = true;
  aboutSection.hidden = true;
  contactSection.hidden = true;

  businessSection.classList.remove('section-visible');
}

// Inicializar vista al cargar
document.addEventListener('DOMContentLoaded', () => {
  // Default to Inicio
  showInicio();
});

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Actualizar link activo
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    const section = this.dataset.section;

    if (section === 'inicio') {
      showInicio();
    } else if (section === 'business') {
      heroSection.hidden = true;
      carouselSection.hidden = true;
      hideSections([aboutSection, legalSection, contactSection]);
      businessSection.hidden = false;
      businessSection.classList.add('section-visible');
    } else if (section === 'nosotros') {
      heroSection.hidden = true;
      carouselSection.hidden = true;
      hideSections([businessSection, legalSection, contactSection]);
      aboutSection.hidden = false;
      aboutSection.classList.add('section-visible');
    } else if (section === 'legal') {
      heroSection.hidden = true;
      carouselSection.hidden = true;
      hideSections([businessSection, aboutSection, contactSection]);
      legalSection.hidden = false;
      legalSection.classList.add('section-visible');
    } else if (section === 'contacto') {
      heroSection.hidden = true;
      carouselSection.hidden = true;
      hideSections([businessSection, aboutSection, legalSection]);
      contactSection.hidden = false;
      contactSection.classList.add('section-visible');
    }

    // Cerrar menú móvil después de seleccionar
    const navMenu = document.getElementById('mainNav');
    const navToggle = document.querySelector('.nav-toggle');
    if (navMenu && navToggle && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('mainNav');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    const srText = navToggle.querySelector('.sr-only');
    if (srText) {
      srText.textContent = isOpen ? 'Cerrar menú' : 'Abrir menú';
    }
  });
}

// ── Botones "Ver información" ──
const detailPropertyIds = new Set([
  'hacienda-tenorio',
  'finca-playa-buena-vista',
  'finca-tempate',
  'proyecto-escazu'
]);

document.querySelectorAll('.botoninfo').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = this.closest('.property-card');
    const propertyId = card.dataset.propertyId;
    const contactLink = document.querySelector('.nav-link[data-section="contacto"]');
    
    if (propertyId && detailPropertyIds.has(propertyId)) {
      window.location.href = `property-detail.html?id=${propertyId}`;
      return;
    }

    if (contactLink) {
      contactLink.click();
    }
  });
});
