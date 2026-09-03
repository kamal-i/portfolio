(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("navMenu");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Close only one case study open at a time on mobile-friendly accordion feel
  var caseItems = document.querySelectorAll(".case-item");
  caseItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        caseItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
