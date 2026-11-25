# Website Cosima Tennis Club e.V. – Entwurf

Statische Website (HTML, CSS, etwas JavaScript), kein CMS, kein Framework, keine Build-Schritte.
Zum Ansehen `index.html` im Browser öffnen. Zum Veröffentlichen den kompletten Ordner auf einen
beliebigen Webspace hochladen.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Begrüßung, Buchen und Anmelden, Der Club, Öffnungszeiten und Anfahrt, Termine, Training/Tennisschule Mazany, Clubterrasse/Ela Mama, Mitglied werden |
| `mitgliedschaft.html` | Beiträge, Ablauf der Aufnahme, Aufnahmeantrag (PDF), Hinweis zum Gastspielbetrieb |
| `partner.html` | Raster für Sponsoren (Logo, Kurztext, Link) und „Partner werden“ |
| `kontakt.html` | Telefon, E-Mail, Adresse, Google Maps erst nach Klick |
| `impressum.html` | Platzhalter für Vereinsangaben |
| `datenschutz.html` | Gliederung als Platzhalter |

## Pflege

### Fotos austauschen
Alle Fotos sind Platzhalter-Dateien mit dem endgültigen Dateinamen. Zum Austauschen die Datei mit
einem eigenen Foto **gleichen Namens überschreiben**, am Code muss nichts geändert werden.
Bitte anschließend den Alt-Text (`alt="…"`) in der HTML-Datei kurz prüfen, ob er zum Foto passt.

| Datei | Wo | Format |
|---|---|---|
| `img/plaetze.jpg` | Startseite, Der Club | quer, 1500 × 1000 px |
| `img/clubhaus.jpg` | Startseite, Der Club | quer, 1500 × 1000 px |
| `img/jugendtraining.jpg` | Startseite, Training | hoch, 1200 × 1500 px |
| `img/terrasse.jpg` | Startseite, Clubterrasse | quer, 1500 × 1000 px |
| `img/eingang-parkplatz.jpg` | Kontakt | quer, 1500 × 1000 px |
| `img/sommerfest.jpg` | Reserve (z. B. für Termine) | quer, 1500 × 1000 px |
| `img/gastronomie.jpg` | Reserve | hoch, 1200 × 1500 px |
| `img/vorschaubild.jpg` | Vorschau beim Teilen in Messengern/sozialen Netzen | 1200 × 630 px |
| `img/partner/partner-1.png` … `-6.png` | Partnerseite | 600 × 300 px |

Tipp: Fotos vor dem Hochladen auf die angegebene Größe verkleinern (JPG, Qualität ca. 80 %),
dann bleibt die Seite schnell.

Das Logo liegt in `img/logo.png` (von der bisherigen Website übernommen, 700 × 700 px).
Falls eine bessere Originaldatei existiert, einfach ersetzen. Favicons: `img/favicon-32.png`,
`img/apple-touch-icon.png`, `img/icon-192.png`.

### Termine
In `js/termine.js` steht oben die Liste `TERMINE`. Einen Eintrag kopieren, Werte ändern, fertig.
Vergangene Termine wandern automatisch in den Rückblick. Gibt es keine kommenden Termine,
erscheint ein Hinweis.

### Partner
In `partner.html` ist jeder Partner ein `<li>`-Block (Anleitung als Kommentar im Code).

### Stimmen aus dem Club
In `index.html` liegt am Ende eine auskommentierte, leere Vorlage. Bitte nur mit echten Zitaten und
dem Einverständnis der Mitglieder verwenden.

### Gelb markierte Stellen
Text in `<span class="platzhalter">[…]</span>` ist gelb hinterlegt und muss vor dem Livegang
ausgefüllt werden.

## Datenschutz und Technik
- Keine Cookies, kein Tracking, keine externen Skripte.
- Die Schrift (Archivo, SIL Open Font License) liegt lokal in `fonts/`, nicht bei Google Fonts.
- Google Maps lädt erst nach Klick auf „Karte laden“.
- Externe Links (eBuSy, Sportision, Mazany, Ela Mama) öffnen in neuem Fenster.
- SEO: Seitentitel und Beschreibungen, strukturierte Daten (schema.org `SportsClub`),
  `sitemap.xml`, `robots.txt`. Canonical-URLs gehen von `https://cosima-tennis.de/` aus.
- Geprüft mit axe-core (WCAG 2.1 AA) auf Desktop und Handy, ohne Befunde.

## Vor dem Livegang klären
- [ ] Impressum: Vereinsname, Anschrift, Vorstand, Registergericht, VR-Nummer, Verantwortlicher nach MStV
- [ ] Datenschutzerklärung erstellen lassen (Hosting-Anbieter eintragen)
- [ ] Mitgliedschaft: Wohin wird der Antrag abgegeben?
- [ ] Aufnahmeantrag-PDF aktuell? (Stand „gültig ab 01.01.2024“; darin stehen eine private
      Handynummer und eine private E-Mail-Adresse – ist das weiterhin gewünscht?)
- [ ] Telefonnummer: Die Website nennt 0176 61639271, der Antrag die Anlage unter (089) 95 64 84.
      Welche soll öffentlich stehen?
- [ ] Termine für die Saison 2027 eintragen
- [ ] Partnerleistungen festlegen, Partnerlogos einholen
- [ ] Eigene Fotos aufnehmen (Einverständnis abgebildeter Personen, bei Kindern der Eltern)
