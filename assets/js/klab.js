/* Karaman Language & Cognition Lab — assets/js/klab.js
   Two small jobs: the mobile menu, and the one animated moment in the hero. */

(function () {
  "use strict";

  /* ---- mobile menu ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("sitenav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  /* ---- hero: the stream segments itself once, shortly after load ----
     Words are already marked up in index.html; this only adds the class
     that opens the gaps and draws the underlines. If the visitor asks for
     reduced motion, the segmented state is applied immediately instead. */
  var stream = document.querySelector(".stream");
  if (!stream) return;

  var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (still) {
    stream.classList.add("segmented");
  } else {
    window.setTimeout(function () {
      stream.classList.add("segmented");
    }, 1100);
  }
})();
