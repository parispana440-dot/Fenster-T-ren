# Checkliste vor dem Livegang

Diese Datei ist nur für interne Zwecke und wird von Besuchern der Website nicht gesehen.
Sie ersetzt die früheren Hinweistexte, die versehentlich öffentlich auf den Seiten standen.

## Muss erledigt werden

### 1. Formulare an einen Versand anbinden
Kontakt- und Angebotsformular zeigen aktuell nur eine Bestätigung an, senden aber nichts.
Jede Anfrage geht verloren.

- Möglichkeit A: Web3Forms (kostenlos bis 250 Anfragen/Monat, kein Konto nötig)
- Möglichkeit B: Formspree (kostenlos bis 50 Anfragen/Monat, mit Dashboard)
- Möglichkeit C: Eigenes PHP-Skript – geht nur bei klassischem Webhosting, nicht bei GitHub Pages

Nach der Anbindung: In der Datenschutzerklärung Abschnitt 4 den Auftragsverarbeiter ergänzen
und einen Auftragsverarbeitungsvertrag (AVV) mit dem Anbieter abschließen.

### 2. Öffnungszeiten bestätigen
Auf `kontakt.html` stehen jetzt „Mo–Fr 08:00–17:00 Uhr" ohne Platzhalter-Hinweis.
Bitte einmal bestätigen, dass diese Zeiten stimmen, oder mir die richtigen nennen.

### 3. Referenzen-Seite mit echten Projekten füllen
`referenzen.html` ist aktuell als „im Aufbau" gekennzeichnet, steht aber in der Hauptnavigation.
Benötigt: Projektfotos (auch Handyfotos von Baustellen wirken authentisch), kurze
Beschreibungen, gern Kennzahlen wie Anzahl Wohneinheiten oder erzielte Energieeinsparung.

### 4. Social-Media-Profile verlinken
Im Footer sind Instagram und Facebook mit Platzhalter-Links (`#`) hinterlegt.
Sobald die Profile existieren, die echten URLs eintragen.

## Rechtlich prüfen lassen

Diese Punkte sollte ein Anwalt oder Steuerberater bestätigen – sie können nicht
allein aus der Website heraus beurteilt werden.

### 5. Komplementär-GmbH im Impressum
Im Impressum ist bisher nur die KG genannt (HRA 206366, Amtsgericht Hannover).
Bei einer GmbH & Co. KG wird üblicherweise zusätzlich die Komplementär-GmbH
mit eigener HRB-Nummer und deren Geschäftsführer angegeben. Bitte prüfen lassen,
ob und in welcher Form das hier nötig ist.

### 6. Widerrufsbelehrung für Fernabsatzverträge
Wenn Verträge mit Privatkunden per Telefon, E-Mail oder über das Formular zustande
kommen, handelt es sich um Fernabsatzverträge. Verbraucher haben dann ein
14-tägiges Widerrufsrecht, über das vor Vertragsschluss in Textform belehrt werden muss.
Das betrifft die Angebots- und Auftragsunterlagen, nicht die Website selbst.

## Bei Umzug auf eigenes Hosting anpassen

### 7. Datenschutzerklärung, Abschnitt 6 (Hosting)
Dort steht derzeit GitHub Pages als Hoster. Bei einem Wechsel zu einem eigenen
Webhosting muss der neue Anbieter dort eingetragen und ein AVV geschlossen werden.

### 8. Absolute Links prüfen
Die 404-Seite und interne Verlinkungen arbeiten mit relativen Pfaden. Bei einer
eigenen Domain (z. B. www.assos-projekt.de) funktioniert das weiterhin, bei einem
Unterverzeichnis sollte es einmal nachgeprüft werden.

### 9. Domain in SEO-Dateien eintragen
Die Website ist durchgängig auf `https://www.assos-projekt.de/` vorbereitet
(abgeleitet aus der E-Mail-Adresse). Weicht die echte Domain davon ab, muss sie
an genau diesen Stellen ersetzt werden:

- `sitemap.xml` (23 Einträge)
- `robots.txt` (Sitemap-Zeile)
- in jeder HTML-Datei: `<link rel="canonical">`, `og:url`, `og:image`,
  `twitter:image` sowie die URLs im JSON-LD-Block

Ein Suchen-und-Ersetzen über alle Dateien erledigt das in einem Schritt.
Danach die Sitemap in der Google Search Console einreichen.

## SEO: was ohne Sie nicht weitergeht

Die Website ist technisch vollständig für Suchmaschinen vorbereitet. Die
folgenden Punkte sind der Teil, der außerhalb der Website liegt – und laut
allen aktuellen Auswertungen der deutlich größere Hebel für lokale Anfragen.

### 10. Google-Unternehmensprofil anlegen
**Das ist der wichtigste offene Punkt überhaupt.** Auswertungen für 2026 ordnen
rund ein Drittel der Platzierung in der Kartenbox ("Local Pack") allein dem
Unternehmensprofil zu. Ohne Profil erscheint der Betrieb dort gar nicht – egal
wie gut die Website ist.

Beim Anlegen wichtig:
- Name, Adresse und Telefonnummer **zeichengenau** wie im Impressum:
  Assos GmbH & Co. KG · Borsigstraße 7 · 30916 Isernhagen · 0511 700 226 21
- Hauptkategorie: „Fensterbauer" oder „Bauunternehmen" – die Hauptkategorie
  ist einer der drei stärksten Rankingfaktoren
- mindestens 10 Fotos, danach monatlich 1–2 ergänzen
- Öffnungszeiten identisch zu `kontakt.html` und zum JSON-LD auf der Website
- Nach dem Anlegen: die Profil-URL nennen, damit ich sie als `sameAs` in die
  strukturierten Daten eintrage

### 11. Bewertungen einsammeln
Bewertungssignale sind von 16 % (2023) auf 20 % (2026) gestiegen – der stärkste
Zuwachs aller Faktoren. Als Schwelle gelten rund 25 Google-Bewertungen. Wichtig
sind Aktualität, Regelmäßigkeit und dass Sie antworten.
Praktischer Weg: nach jeder Montage eine kurze Nachricht mit dem direkten
Bewertungslink.

### 12. Exakte Koordinaten nachtragen
Im JSON-LD steht bewusst **keine** Geo-Koordinate. Eine falsche Koordinate wäre
schlimmer als keine – Google leitet den Standort sonst zuverlässig aus der
Adresse ab. Sobald das Unternehmensprofil steht, trage ich die dort bestätigte
Position nach.

### 13. Social-Media-Profile für `sameAs`
Sobald Instagram und Facebook existieren, gehören die URLs nicht nur in den
Footer, sondern auch in den `sameAs`-Eintrag der strukturierten Daten. Das
hilft Google, die Profile demselben Unternehmen zuzuordnen.

### 14. Öffnungszeiten bestätigen (hängt mit Punkt 2 zusammen)
Die Zeiten „Mo–Fr 08:00–17:00" stehen inzwischen an drei Stellen: auf
`kontakt.html`, im Kopfbereich jeder Seite und in den strukturierten Daten.
Wenn sie nicht stimmen, müssen alle drei geändert werden – und später auch das
Google-Unternehmensprofil.

## Später sinnvoll

- Kundenbewertungen auf der Startseite einbinden (sobald vorhanden)
- Foto und persönlicher Text des Geschäftsführers auf `ueber-uns.html`
- Echte Projektfotos auf `referenzen.html` – das ist gleichzeitig der beste
  Weg zu Inhalten, die sich von Wettbewerbern unterscheiden
- Bewusst **keine** eigenen Unterseiten je Ort ("Fenster Burgwedel",
  "Fenster Langenhagen"). Google stuft solche Seiten seit Jahren als
  Brückenseiten ein und straft sie ab; die Einsatzgebiet-Sektion auf
  `kontakt.html` deckt denselben Zweck regelkonform ab.
