document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("site-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.getAttribute("data-open") === "true";
      menu.setAttribute("data-open", String(!isOpen));
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  // Mark current page in nav
  const links = document.querySelectorAll(".menu a");
  links.forEach((link) => {
    if (link.getAttribute("href") === location.pathname.split("/").pop()) {
      link.setAttribute("aria-current", "page");
    }
  });

  // (removed trifecta interactions)
});


