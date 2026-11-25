/* Cosima Tennis Club – kleine Helfer, ohne Tracking, ohne externe Skripte */
(function () {
  /* Mobiles Menü */
  const knopf = document.querySelector(".menue-knopf");
  const navi = document.getElementById("navi");
  if (knopf && navi) {
    knopf.addEventListener("click", () => {
      const offen = knopf.getAttribute("aria-expanded") === "true";
      knopf.setAttribute("aria-expanded", String(!offen));
      navi.classList.toggle("ist-offen", !offen);
    });
    navi.addEventListener("click", (e) => {
      if (e.target.closest("a")) { knopf.setAttribute("aria-expanded", "false"); navi.classList.remove("ist-offen"); }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navi.classList.contains("ist-offen")) {
        knopf.setAttribute("aria-expanded", "false"); navi.classList.remove("ist-offen"); knopf.focus();
      }
    });
  }

  /* Google Maps erst nach Klick laden (DSGVO) */
  document.querySelectorAll("[data-karte]").forEach((box) => {
    const btn = box.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = box.dataset.karte;
      iframe.title = "Google-Maps-Karte: Cosima Tennis Club, Cosimastraße 284, München";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.allowFullscreen = true;
      box.querySelector(".karte__zustimmung").remove();
      box.appendChild(iframe);
      iframe.focus();
    });
  });

  /* Jahr im Fußbereich */
  document.querySelectorAll("[data-jahr]").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
