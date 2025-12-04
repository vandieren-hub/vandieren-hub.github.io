// Mobile hotdog / hamburger menu
const navToggle = document.querySelector(".nav-toggle");
const body = document.body;
const navLinks = document.querySelectorAll(".site-nav a");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    navToggle && navToggle.setAttribute("aria-expanded", "false");
  });
});

// Easter egg logic: click the tiny dot 5 times
const eggTrigger = document.querySelector("[data-egg-trigger]");
const secretSection = document.querySelector(".secret");
let eggClicks = 0;

if (eggTrigger && secretSection) {
  eggTrigger.addEventListener("click", () => {
    eggClicks += 1;

    if (eggClicks === 5) {
      secretSection.classList.add("secret--visible");
      secretSection.setAttribute("aria-hidden", "false");
      eggTrigger.classList.add("egg-found");
    }
  });
}

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
