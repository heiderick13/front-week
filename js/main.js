// Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenu = document.querySelector("#close-menu");
const menuMobile = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];
// '...' "espalha" as listas para criar uma só, contendo ambas (semelhante ao split()):

const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

// Funções
function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  setTimeout(() => {
    if (menuMobile.classList.contains("menu-active")) {
      menuMobile.classList.remove("menu-active");
    }
  }, 500);
}

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

// Eventos
[menuBtn, closeMenu].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menuMobile.classList.toggle("menu-active");
    console.log("Olá, mundo!");
  });
});

allLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Inicialização
showSlides();
