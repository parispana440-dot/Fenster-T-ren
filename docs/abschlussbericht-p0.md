# Abschlussbericht P0 (Briefing vom 15.10.2026)

Stand: 15.10.2026 · Branch `claude/fenster-tueren-website-aip95b`

## Erledigt

| P0-Aufgabe | Ergebnis | Commit |
|---|---|---|
| Audit und Änderungsplan | `docs/website-audit.md`, `docs/website-aenderungsplan.md`, `docs/dienste-inventur.md`, `docs/offene-fragen.md` | 60b4c22 |
| Startseite: Botschaft und Förderung | H1, Subline und Knöpfe nach Briefing. Vertrauensleiste, Förderblock mit Pflicht-Fußnote und proKlima, 6 Schritte, „Warum Assos“, Fragen mit belegten Antworten. Title nach Tabelle 4.1. | 7e97dfa |
| Förderaussagen und Berufsbegriffe auf allen Seiten | Widerspruch auf der Förderseite aufgelöst. Fußnote auf 9 Seiten. proKlima ohne Beträge. Montageseite ohne unbelegte Zertifikate. „Fachbetrieb“ als Selbstbezeichnung ersetzt. | 5ca5104 |
| Kontaktformular | Pflicht nur Name, Ort/PLZ und Telefon oder E-Mail. Datenschutzhinweis am Knopf. Danke-Seite mit `noindex`. Gilt für Kontakt und Angebot. | 25d04ea |
| Consent und Dienste-Inventur | Banner geprüft, keine Tracker, keine externen Anfragen vor Einwilligung. Inventur angelegt. | 60b4c22 |
| Impressum/Datenschutz | Impressum ohne Lücke. Datenschutz um Formularfelder ergänzt, Web3Forms-Abschnitt **als Entwurf** ergänzt. | 9283807 |
| SEO-Grundlagen | waren vorhanden. Startseiten-Title angepasst, Danke-Seite vollständig und mit `noindex`. | 7e97dfa, f9c209d |
| Deployment Vercel | **nicht umgesetzt.** Die Website läuft live auf 1blu (Frage H1). | – |

## Platzhalter (im Code mit `TODO` und Fragennummer markiert)

| Stelle | TODO |
|---|---|
| Startseite, vor den Knöpfen | Satz zur Reaktionszeit (I2). Zweiter Knopf „Förder-Check starten“ (P1). |
| Startseite, Ablauf Schritt 3 | Angebotsfrist (I2) |
| Startseite, Sortiment | Hersteller nennen (I18) |
| Startseite, Fragen | Zahlung (I4), Mängel (I11), Drutex (I18), Gesamtdauer (I13), Einsatzgebiet (I6) |
| Startseite, „Warum Assos“ | Satz „Zahlungen erfolgen erst danach“ nach Bestätigung des Zahlungsmodells prüfen (I4) |
| Montageseite | Nachweise des Einbaubetriebs (I20) |
| Angebotsseite | Reaktionszeit vereinheitlichen (I2) |
| Danke-Seite | Reaktionszeit (I2), Bewertungs-Link (P2) |
| Datenschutz | Web3Forms-Absatz ist ein Entwurf (D1, D2) |

## Wie getestet wurde

| Prüfung | Ergebnis |
|---|---|
| Aufbau aller 27 Seiten (Links, Bilder, Ankerziele) | ohne Befund; die Danke-Seite fehlt bewusst in der Sitemap |
| SEO: Title, Description, Canonical, OG, JSON-LD | ohne Befund außer der Danke-Seite. Ihr fehlen bewusst Sitemap-Eintrag und JSON-LD, weil sie `noindex` hat. |
| Strukturierte Daten auf allen Seiten gültig (JSON) | ok |
| Barrierefreiheit (eigene Prüfung: Labels, Kontrast, Überschriften, Fokus) | 27 Seiten ohne Befund |
| Externe Anfragen und Einwilligung | 27 Seiten × 2 Breiten × 2 Zustände: 0 Probleme. Vor der Einwilligung gibt es keine Anfrage an fremde Server. |
| Seitenbreite 320 und 390 px | keine Seite breiter als der Bildschirm |
| Formulare mit nachgestelltem Versanddienst | Leeres Absenden zeigt 4 Fehler und sendet nichts. Eine ungültige E-Mail wird erkannt. Mit nur Telefon wird gesendet (Felder: name, ort, telefon) und auf `danke.html` weitergeleitet. Kontakt und Angebot verhalten sich gleich. |
| Unzulässige Formulierungen („bis zu 20 %“, „Förderung inklusive“, „zertifizierte Fensterbauer“, „RAL-Montage“, „Meisterbetrieb“, „Innungsbetrieb“) | keine Fundstelle |
| **Echte Übermittlung an Web3Forms** | **nicht möglich aus dieser Umgebung** (keine Verbindung zum Dienst). Muss der Inhaber nach dem Hochladen einmal testen: Kontaktformular mit nur Telefonnummer absenden, Eingang in `fenster@assos-projekt.de` prüfen. |
| Lighthouse | nicht gelaufen (kein Zugriff auf die Live-Seite) |

## Nicht geändert, obwohl im Briefing

- **Vercel und Branch `feature/marketing-relaunch`:** Die Website ist live auf
  1blu. Diese Sitzung darf nur auf ihren festgelegten Branch schreiben.
- **`info@`-Adresse:** Es bleibt bei `fenster@`, wie vom Inhaber festgelegt (H2).
- **„kostenlos“ auf Unterseiten:** steht noch auf 15 Unterseiten. Auf der
  Startseite ist es entfernt. Nach Antwort auf I5 wird das in einem Schritt
  vereinheitlicht.
- **Telefon im Kopfbereich und Sticky-Leiste:** P1, und es widerspricht einer
  früheren Vorgabe des Inhabers (I19).

## Nachtrag 15.10.2026 – Antworten des Inhabers umgesetzt

- „Kostenlos“ ist bestätigt. Die Startseite sagt es wieder (Knopf
  „Kostenlose Beratung anfragen“), die Unterseiten waren bereits stimmig.
- Kein Herstellername, nur „europäische Herstellung“.
- Zahlungsweise individuell: neue Frage auf der Startseite, kein
  Zahlungsversprechen mehr.
- Hosting bleibt bei 1blu, keine Telefonnummer im Kopfbereich.
- Offen bleibt vor allem I2 (Reaktionszeit).
