// =========================
// MOBILE MENU (HOTDOG)
// =========================

const body = document.body;
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking a nav link (mobile UX)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================
// EASTER EGG: SECRET SECTION
// =========================

const trigger = document.querySelector(".secret-trigger");
const secretSection = document.querySelector(".secret-section");
let clickCount = 0;
const REQUIRED_CLICKS = 5;

if (trigger && secretSection) {
  trigger.addEventListener("click", () => {
    clickCount += 1;

    if (clickCount >= REQUIRED_CLICKS) {
      secretSection.classList.add("is-visible");
      trigger.classList.add("is-found");
      secretSection.setAttribute("aria-hidden", "false");
    }
  });
}

// =========================
// FOOTER YEAR
// =========================

const yearSpan = document.getElementById("yr");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
