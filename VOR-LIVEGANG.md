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

### 2. Öffnungszeiten final festlegen
Auf `kontakt.html` steht derzeit „Mo–Fr 08:00–17:00 Uhr (Platzhalter – bitte final ergänzen)".
Sobald die echten Zeiten feststehen, dort eintragen und den Platzhalter-Hinweis entfernen.

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

### 9. Sitemap-URLs eintragen
Sobald die endgültige Domain feststeht, in `sitemap.xml` die Platzhalter-Domain
durch die echte ersetzen und die Sitemap in der Google Search Console einreichen.

## Später sinnvoll

- Google-Unternehmensprofil anlegen und pflegen (größter Hebel für lokale Anfragen)
- Kundenbewertungen einsammeln und auf der Startseite einbinden
- Foto und persönlicher Text des Geschäftsführers auf `ueber-uns.html`
