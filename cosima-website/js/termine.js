/* =========================================================
   TERMINE PFLEGEN
   ---------------------------------------------------------
   Einfach einen Eintrag kopieren, Werte ändern, speichern.
   - beginn / ende im Format JJJJ-MM-TT (ende ist optional)
   - zeit ist optional, z. B. "ab 18 Uhr"
   - anmeldung ist optional (Link, z. B. zu Sportision)
   Vergangene Termine wandern automatisch in den Rückblick.
   Reihenfolge egal – die Liste wird nach Datum sortiert.
   ========================================================= */

const SPORTISION = "https://www.sportision.de/club/cosima-2";

const TERMINE = [
  {
    titel: "Grill & Chill Abend",
    beginn: "2026-07-04",
    text: "Feiern Sie mit uns bei Essen, Musik und Spielen im Freien.",
    anmeldung: SPORTISION,
  },
  {
    titel: "Sommerfest",
    beginn: "2026-07-25",
    text: "Sommerfest mit Doppelturnier für Erwachsene und Abendbuffet.",
    anmeldung: SPORTISION,
  },
  {
    titel: "Kinder-Sommercamp (1. Woche)",
    beginn: "2026-08-03",
    ende: "2026-08-07",
    text: "Spaß und Training für Kinder mit professionellen Trainern.",
    anmeldung: SPORTISION,
  },
  {
    titel: "Kinder-Sommercamp (2. Woche)",
    beginn: "2026-09-07",
    ende: "2026-09-11",
    text: "Spaß und Training für Kinder mit professionellen Trainern.",
    anmeldung: SPORTISION,
  },
];

/* ---------- ab hier nichts ändern ---------- */
(function () {
  const ziel = document.getElementById("termine-liste");
  if (!ziel) return;

  const WOCHENTAG = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const MONAT = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli",
    "August", "September", "Oktober", "November", "Dezember"];

  const datum = (s) => { const [j, m, t] = s.split("-").map(Number); return new Date(j, m - 1, t); };
  const heute = new Date(); heute.setHours(0, 0, 0, 0);

  const liste = TERMINE
    .map((t) => ({ ...t, von: datum(t.beginn), bis: datum(t.ende || t.beginn) }))
    .sort((a, b) => a.von - b.von);

  const kommend = liste.filter((t) => t.bis >= heute);
  const vorbei = liste.filter((t) => t.bis < heute).reverse();

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function datumHtml(t) {
    const tag = `${WOCHENTAG[t.von.getDay()]}, ${t.von.getDate()}.`;
    let rest = `${MONAT[t.von.getMonth()]} ${t.von.getFullYear()}`;
    if (t.ende && t.ende !== t.beginn) {
      rest = `bis ${WOCHENTAG[t.bis.getDay()]}, ${t.bis.getDate()}. ${MONAT[t.bis.getMonth()]} ${t.bis.getFullYear()}`;
      if (t.von.getMonth() !== t.bis.getMonth()) rest = `${MONAT[t.von.getMonth()]} ` + rest;
    }
    return `<time datetime="${esc(t.beginn)}"><span class="tag">${tag}</span>${rest}</time>`;
  }

  function eintrag(t, istVorbei) {
    const link = !istVorbei && t.anmeldung
      ? `<a class="knopf knopf--rahmen" href="${esc(t.anmeldung)}" target="_blank" rel="noopener">Anmelden<span class="visually-hidden"> zu ${esc(t.titel)} (Sportision, öffnet in neuem Fenster)</span></a>`
      : "";
    return `<li class="termin${istVorbei ? " termin--vorbei" : ""}">
      <div class="termin__datum">${datumHtml(t)}</div>
      <div><h3>${esc(t.titel)}</h3>${t.zeit ? `<p><strong>${esc(t.zeit)}</strong></p>` : ""}<p>${esc(t.text || "")}</p></div>
      <div>${link}</div>
    </li>`;
  }

  let html = "";
  if (kommend.length) {
    html += `<ul class="termine">${kommend.map((t) => eintrag(t, false)).join("")}</ul>`;
  } else {
    html += `<div class="termine-hinweis"><p><strong>Die nächsten Termine stehen noch nicht fest.</strong></p>
      <p>Sobald der Kalender für die kommende Saison steht, finden Sie ihn hier. Anmeldungen laufen über <a href="${SPORTISION}" target="_blank" rel="noopener">Sportision</a>.</p></div>`;
  }
  if (vorbei.length) {
    const jahr = vorbei[0].von.getFullYear();
    const inhalt = `<ul class="termine">${vorbei.map((t) => eintrag(t, true)).join("")}</ul>`;
    html += kommend.length
      ? `<details><summary>Vergangene Termine anzeigen</summary>${inhalt}</details>`
      : `<h3 class="rueckblick-titel">Rückblick ${jahr}</h3>${inhalt}`;
  }
  ziel.innerHTML = html;
})();
