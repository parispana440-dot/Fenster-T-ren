# Website-Audit (Abschnitt 0, Schritt 1)

Stand: 15.10.2026 · Grundlage: Repo `parispana440-dot/Fenster-T-ren`, Commit `5c7c3d8`

## 1. Wichtigste Abweichung vom Briefing

Das Briefing geht davon aus, dass die Website „auf GitHub liegt, noch nicht
live“ ist und auf **Vercel** gehen soll. Das trifft nicht zu:

- Die Website ist seit Oktober 2026 **live unter https://www.assos-projekt.de**.
- Sie liegt auf dem **Webspace von 1blu** (Vertrag 289773) und wird per FTP
  hochgeladen (WebFTP „Monsta FTP“, Zugang `ftp289773-assos`, Ordner
  `/www/assos-projekt`).
- Die Domain liegt bei 1blu. Die **Google Search Console ist verifiziert**
  (über eine HTML-Datei im Stammverzeichnis), und die Sitemap mit 25 Seiten ist
  eingereicht.
- Für den Formularversand eingerichtet ist nur `fenster@assos-projekt.de`, nicht
  `info@…`. Diese Adresse ist auf ausdrücklichen Wunsch des Inhabers im
  Einsatz.

**Folge:** Abschnitt 13 (Vercel) wird nicht umgesetzt, sondern als offene
Entscheidung geführt (siehe `offene-fragen.md`, Frage H1). Ein Umzug würde die
Datenschutzerklärung (Hoster), die `.htaccess`-Regeln und das Hochladeverfahren
ändern. An der DNS wird nichts verändert.

## 2. Technik (Ist-Zustand)

| Bereich | Befund |
|---|---|
| Framework / Build | **Keins.** Statisches HTML, 26 Seiten, ein Stylesheet (`css/style.css`), drei Skripte ohne Bibliotheken. Kein `package.json`, kein Build-Schritt, kein `npm audit` möglich oder nötig. |
| Seiten | Start, Produkte-Übersicht, 12 Produktseiten, Montage, Förderung, Bauen & Immobilien, Referenzen, Über uns, Kontakt, Angebot, Impressum, Datenschutz, AGB, Widerruf, 404 |
| Gestaltung | Neugestaltung vom 15.10.2026: Überschriften in Source Serif 4, Fließtext in Inter. Beide Schriften liegen **lokal**. Mindestschriftgröße im Fließtext 16 px (Briefing: 17–18 px → P1). |
| Formulare | Kontakt und Angebot. Versand über **Web3Forms** per `fetch` mit Rückfall auf normales Absenden. Honeypot (`website`) plus `botcheck` des Dienstes. Eigene Prüfung mit deutschen Fehlermeldungen und `role="status"`. Kein Weiterleiten auf eine Danke-Seite. |
| Zugriffsschlüssel Web3Forms | steht im HTML. Das ist bei statischen Seiten unvermeidlich und beim Dienst so vorgesehen; der Schlüssel erlaubt nur das Senden an die hinterlegte Adresse. Eine „Umgebungsvariable“ gibt es ohne Build-Schritt nicht. |
| Einwilligung | Eigenes Banner (`js/einwilligung.js`). Speichert die Wahl im `localStorage` unter `assos-einwilligung`. Einziger einwilligungspflichtiger Dienst ist die OpenStreetMap-Karte auf der Kontaktseite. „Nur Notwendiges“ ist gleichwertig zu „Alles akzeptieren“, und die Einstellungen sind über den Fußbereich jederzeit erreichbar. |
| Tracking / Ads | **Keine.** Kein Analytics, kein Pixel, keine Google- oder Meta-Tags. |
| Externe Anfragen vor Einwilligung | Keine. Schriften, Leaflet und Bilder liegen auf dem eigenen Server. Geprüft auf 26 Seiten × 2 Breiten × 2 Einwilligungszustände. |
| SEO | Jede Seite hat ihren eigenen Title, Description, Canonical, Open Graph und Twitter-Karte. OG-Bild 1200×630 ist vorhanden. `sitemap.xml` (25 Seiten), `robots.txt` mit Sitemap-Verweis, Favicon und Apple-Touch-Icon. Eigene 404-Seite mit `noindex`. JSON-LD: `HomeAndConstructionBusiness`, `WebSite`, `BreadcrumbList`, `FAQPage` auf 15 Seiten. Kein Bewertungs-Markup. |
| Weiterleitungen | `.htaccess`: immer https, immer **www**, 301-Weiterleitungen alter Adressen. |
| Sicherheit | Header `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`. Kein HSTS und keine `Permissions-Policy` (→ P1). |
| Barrierefreiheit | Skip-Link, Fokusrahmen, Formularlabels, Kontraste geprüft. Eigene Prüfung über 26 Seiten ohne Befund. Lighthouse lief hier nicht (kein Netz zur Live-Seite). |
| Karussell | Auf der Startseite seit der Neugestaltung entfernt. |

## 3. Inhalte gegen die Leitplanken (Abschnitt 2)

| Leitplanke | Befund | Schwere |
|---|---|---|
| 2.1 „15 %“, nie „bis zu 20 %“ | Keine Aussage „bis zu 20 %“. Der iSFP-Hinweis ist auf Start- und Förderseite korrekt. | ok |
| 2.1 Pflicht-Fußnote | fehlt überall | **P0** |
| 2.1 Wer stellt den Antrag? | **Widerspruch** auf `foerderung.html`: oben „Den Antrag stellen wir“, unten „Sie stellen den Antrag gemeinsam mit Ihrem Energieeffizienz-Experten“. Laut Briefing stellt Assos ihn mit Vollmacht. | **P0** |
| 2.1 proKlima | wird nirgends erwähnt | P0 (Förderseite) |
| 2.2 „kostenlos“ | „kostenloses Aufmaß / kostenlos und unverbindlich“ auf **16 Seiten**. Laut Briefing nicht bestätigt (Frage I5). | **P0 Startseite**, sonst offene Frage |
| 2.2 Reaktionszeit | Drei verschiedene Aussagen: „zeitnah“ (Kontakt), „in der Regel innerhalb eines Werktages“ (Angebot), „innerhalb von 1–2 Werktagen“ (Angebot, Ablaufkasten) | offene Frage I2 |
| 2.3 Berufsbegriffe | `montage.html`: „zertifizierte Fensterbauer“ (5×) und „nach RAL-Montagerichtlinien“ (Title, Meta, Schema, Text). Mehrere Seiten: „Fachbetrieb“ als Selbstbezeichnung (Start-Meta, Kontakt, Über uns: „Fensterfachbetrieb“) | **P0** (Harte Verbote: keine Zertifikate erfinden) |
| 2.4 Bewertungen/Referenzen | Keine Bewertungen und kein Rating-Markup. Die Referenzseite zeigt **echte Projekte** des Inhabers mit Fotos, kein Stock. | ok – siehe Frage I17 |
| Hersteller | Startseite und Über uns: „an keinen einzelnen Hersteller gebunden … mehrere europäische Markenhersteller“. Laut Briefing verkauft Assos **Drutex**. | **P0** (Startseite), Über uns → offene Frage I18 |
| 2.5 Preise | keine Assos-Preise auf der Website | ok |
| 2.6 Ton | Sie-Form, ruhig. Vereinzelt Superlative im Produkttext? Nicht systematisch geprüft. | P1 |
| Einbau | Die Website lässt offen, wer einbaut. Laut Briefing: Subunternehmer, den Assos beauftragt und bezahlt. | P0 (Startseite: Beweispunkt) |

## 4. Rechtstexte (Abschnitt 12)

| Punkt | Befund |
|---|---|
| Impressum § 5 DDG | vollständig inkl. Komplementärin (Assos-Holding GmbH, AG Hannover HRB 225142, GF Nikolaos Panagiotidis) |
| VSBG-Hinweis | vorhanden („nicht bereit und nicht verpflichtet“) |
| EU-OS-Plattform-Link | **bereits entfernt** |
| Erreichbarkeit | E-Mail und Telefon vorhanden |
| Datenschutz Web3Forms | **lückenhaft:** Anbieter, Sitz (Indien), Drittlandübermittlung (SCC), Unterauftragsverarbeiter, Speicherdauer und Spamschutz-Dienste fehlen |
| Datenschutz Hoster | 1blu korrekt genannt (nicht Vercel) |
| Verlinkung am Formular | über die Pflicht-Checkbox vorhanden; nach dem Umbau als Hinweis am Absende-Knopf |

## 5. Was gut ist und bleibt

Die schnelle, statische Auslieferung, keine Tracker, die lokalen Schriften,
die eigene Einwilligungslösung, die echten Projektfotos, Impressum inklusive
Komplementärin, die korrekte iSFP-Regel und die Neugestaltung.
