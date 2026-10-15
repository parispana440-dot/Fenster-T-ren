# Dienste-Inventur (Abschnitt 11.1)

Stand: 15.10.2026. Ermittelt aus dem Quelltext und geprüft im Browser:
26 Seiten × 2 Breiten × mit und ohne Einwilligung. Grundlage für die
Datenschutzerklärung.

| Dienst | Zweck | Anbieter / Sitz | Welche Daten | Wann | Rechtsgrundlage | Status in der Datenschutzerklärung |
|---|---|---|---|---|---|---|
| Webspace und Server-Logs | Auslieferung der Website | 1blu AG, Riedemannweg 60, 13627 Berlin | IP-Adresse, Zeitpunkt, angefragte Datei, Browser, Referrer | bei jedem Aufruf | Art. 6 Abs. 1 lit. f DSGVO | genannt; Löschfrist unbekannt (Frage D3) |
| E-Mail-Postfach | Empfang von Anfragen | 1blu AG | Inhalt der Anfrage | nach Absenden oder E-Mail | lit. b / lit. f | genannt (Abschnitt 5) |
| Web3Forms | Formular-Versand per E-Mail | Web3Forms, Sitz Indien (laut Anbieter); Unterauftragsverarbeiter u. a. AWS, Cloudflare, Hetzner | alle Formularfelder, IP-Adresse | nur beim Absenden | lit. b / lit. f; Drittland über Standardvertragsklauseln | **ergänzt als Entwurf**. Auftragsverarbeitungsvertrag akzeptiert? (Frage D1) |
| Spamschutz bei Web3Forms (CleanTalk / Akismet) | Spam-Erkennung | Drittanbieter | IP-Adresse, E-Mail-Adresse | beim Absenden, **falls im Web3Forms-Konto aktiviert** | lit. f | als bedingter Hinweis; Einstellung prüfen (Frage D2) |
| OpenStreetMap-Kacheln | Karte auf der Kontaktseite | OpenStreetMap Foundation, Cambridge (UK) | IP-Adresse | **nur nach Einwilligung** | lit. a, § 25 Abs. 1 TDDDG | genannt |
| Google Maps (Link) | Routenplanung | Google Ireland Ltd. | erst nach Klick, auf der Seite von Google | Klick auf „Route planen“ | – (verlässt die Website) | genannt |
| Schriften Inter, Source Serif 4, Cormorant Garamond | Darstellung | **lokal** auf dem eigenen Server | keine Übermittlung | – | – | genannt („keine Verbindung zu Google Fonts“) |
| Leaflet | Kartendarstellung | **lokal** | keine | – | – | genannt |
| Einwilligungsspeicher | merkt sich die Banner-Wahl | im Browser (`localStorage`, Schlüssel `assos-einwilligung`) | Zeitpunkt, gewählte Zwecke | nach Banner-Wahl | § 25 Abs. 2 Nr. 2 TDDDG | genannt |
| Google Search Console | Sichtbarkeit in Google | Google | **kein Code auf der Website**, nur eine Bestätigungsdatei | – | – | nicht nötig |

**Nicht im Einsatz:** Google Analytics, Google Ads, Google Tag Manager,
Meta-Pixel, YouTube, eingebettetes Google Maps, Bewertungs-Widgets,
WhatsApp-Button, Captcha-Dienste, Cookies.

Bevor einer dieser Dienste eingebaut wird, muss die Entscheidung zur
Einwilligungslösung fallen (Frage I15). Bei Google Ads oder Analytics heißt
das: Consent Mode v2 mit einer zertifizierten Einwilligungslösung (CMP).
