/* Hayes Tree Service sample preview - minimal enhancement only.
   Native anchor links work normally when this file is absent.
   No active-nav, no scroll effects, no animation-dependent content. */

(function () {
  "use strict";

  document.addEventListener("click", function (event) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    var el = event.target;
    if (!el || typeof el.closest !== "function") return;

    var link = el.closest("a[href^='#']");
    if (!link) return;

    var id = link.getAttribute("href").slice(1);
    if (!id) return;

    var target = document.getElementById(id);
    if (!target) return;

    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
    }

    // Let the browser run its normal anchor jump, then move keyboard focus
    // to the destination without fighting the scroll position.
    window.requestAnimationFrame(function () {
      try {
        target.focus({ preventScroll: true });
      } catch (err) {
        target.focus();
      }
    });
  });
})();
