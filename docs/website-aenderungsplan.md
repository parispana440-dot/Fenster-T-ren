# Änderungsplan (Abschnitt 0, Schritt 2)

Stand: 15.10.2026 · Zuordnung der Aufgaben aus Abschnitt 3 zum Ist-Zustand (siehe `website-audit.md`)

**Branch:** Die Arbeitssitzung ist auf den Branch
`claude/fenster-tueren-website-aip95b` festgelegt. Der im Briefing genannte
Branch `feature/marketing-relaunch` wird nicht angelegt. Es gibt einen Commit
pro Schritt.

## P0 – in dieser Runde

| # | Aufgabe | Ist | Änderung | Status |
|---|---|---|---|---|
| 1 | Audit und Änderungsplan | – | `docs/website-audit.md`, `docs/website-aenderungsplan.md`, `docs/offene-fragen.md`, `docs/dienste-inventur.md` | erledigt |
| 2 | Botschaft und Förderaussagen auf der Startseite | Neue Startseite vom 15.10., aber mit „kostenlos“, Mehrhersteller-Aussage, ohne Fußnote | H1, Subline und Knöpfe nach Briefing. Vertrauensleiste mit 4 Punkten. Förderblock mit Pflicht-Fußnote und proKlima-Hinweis. Ablauf mit 6 Schritten nach Briefing. „Warum Assos“ mit 4 Beweispunkten. Häufige Fragen nur mit belegten Antworten, der Rest als TODO. Title nach Tabelle 4.1. | erledigt |
| 3 | Förderaussagen auf allen Seiten | Widerspruch auf der Förderseite, keine Fußnote | Widerspruch aufgelöst (Antrag mit Vollmacht durch Assos). Pflicht-Fußnote auf der Förderseite und überall, wo „15 %“ steht. proKlima-Absatz ohne Beträge. | erledigt |
| 4 | Unbelegte Berufsbegriffe | „zertifizierte Fensterbauer“, „RAL-Montage“, „Fachbetrieb“ | Ersetzt durch „von uns beauftragter Einbaubetrieb“ bzw. „Fachhändler mit Komplettservice“. Der Montage-Inhalt (Abdichtungsprinzip) bleibt sachlich erhalten. | erledigt |
| 5 | Kontaktformular | Pflicht: Name, E-Mail, Nachricht, Checkbox | Pflicht nur noch: Name, Telefon **oder** E-Mail, Ort/PLZ. Optionale Felder nach Briefing. Datenschutzhinweis am Knopf statt Pflicht-Häkchen. Weiterleitung auf `/danke.html` (`noindex`). Gilt für Kontakt **und** Angebot. | erledigt, Live-Test durch Inhaber |
| 6 | Consent-Gerüst und Dienste-Inventur | Eigenes Banner, keine Tracker | Banner geprüft, keine Änderung nötig. `docs/dienste-inventur.md` angelegt. | erledigt |
| 7 | Impressum/Datenschutz | Impressum vollständig, Web3Forms-Absatz lückenhaft | Lücken in `offene-fragen.md`. Web3Forms-Absatz **als Entwurf** um die Angaben aus dem Briefing ergänzt (Sitz Indien, SCC, Unterauftragsverarbeiter, Speicherdauer). Juristische Prüfung steht aus. | erledigt (Entwurf) |
| 8 | Title, Meta, Canonical, Sitemap, robots, Favicon, OG, 404 | weitgehend vorhanden | Title der Startseite nach Tabelle 4.1. Danke-Seite mit `noindex` und nicht in der Sitemap. www-Variante dokumentiert. | erledigt |
| 9 | Deployment Vercel | Website läuft auf 1blu | Entfällt: Die Website bleibt laut Inhaber bei 1blu. Auslieferung weiter per ZIP und FTP. | entfällt |

## P1 – nächste Runde (Vorschlag, noch nicht begonnen)

| Aufgabe | Ist | Plan |
|---|---|---|
| Seitenstruktur nach 4.1 | Produktseiten nach Material, keine Kosten- und Ablauf-Seite | `kosten.html` und `ablauf.html` neu. Bestehende Produktseiten behalten, weil sie in Google stehen. Neue Adressen nur mit 301-Weiterleitung. |
| Förder-Check | fehlt | Rechnung im Browser. Werte aus einer zentralen `js/business-config.js`. Preise bleiben Platzhalter, bis Frage I3 beantwortet ist. |
| Zentrale Konfiguration | Werte stehen verstreut im HTML | `js/business-config.js` für Förderwerte, Kontakt und Einsatzgebiet. Statisches HTML bleibt als Rückfall bestehen. |
| Ortsseiten | fehlen | erst nach Freigabe des Einsatzgebiets (I6) |
| Mobile Sticky-Leiste | Telefon nur im Menü und im Fußbereich | Keine Nummer im Kopfbereich (Vorgabe Inhaber). Eine Leiste unten auf dem Handy nur nach Rückfrage. |
| Schriftgröße 17–18 px | 16 px | anheben und alle Seiten prüfen |
| Pakete Basis/Komfort/Sicherheit | fehlen | erst mit Preisrahmen (I3) |
| Sicherheits-Header | teilweise | `Permissions-Policy`, HSTS nach Test |
| Mess-Ereignisse | – | nur wenn Tracking beschlossen ist (I15) |

## P2

Ratgeber-Artikel, Referenzen ausbauen, Bewertungen, EU-Formular-Backend,
weitere Ortsseiten. Unverändert wie im Briefing.
