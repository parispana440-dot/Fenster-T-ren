# Offene Fragen und Platzhalter

Stand: 15.10.2026. Jede Frage nennt, was davon abhängt. Im Code sind die
zugehörigen Stellen mit `TODO` markiert und die Nummer der Frage steht
dabei, z. B. `TODO (I2)`.

## Beantwortet vom Inhaber (15.10.2026)

| Nr. | Antwort | Umgesetzt |
|---|---|---|
| H1 | Die Website **bleibt bei 1blu**. Kein Umzug zu Vercel. | Abschnitt 13 entfällt; Hochladen weiter per FTP |
| I4 | Die Zahlungsweise wird **individuell mit dem Kunden** vereinbart. Es gibt kein festes Modell. | Startseite: Frage „Wann zahle ich?“ mit dieser Antwort; Satz „Zahlungen erfolgen erst danach“ entfernt |
| I5 | Beratung und Aufmaß sind **kostenlos**. | Startseite: Knopf „Kostenlose Beratung anfragen“, Unterzeile, Ablauf, Abschluss. Die Unterseiten sagen es schon. |
| I18 | **Keinen Herstellernamen nennen.** Stattdessen „europäische Herstellung“; alle Fenster stammen von Herstellern in Europa. | Startseite sagt „aus europäischer Fertigung“. Drutex wird nirgends genannt. P2-Artikel „Drutex-Erfahrungen“ und Drutex-Seitentitel entfallen. |
| I19 | **Keine Telefonnummer im Kopfbereich.** | Bleibt so. Die Nummer steht im Klappmenü (Handy), im Fußbereich und im Kontaktblock. Eine Leiste unten auf dem Handy (P1) nur nach Rückfrage. |

## H – Hosting und Ablauf

| Nr. | Frage | Hängt davon ab |
|---|---|---|
| H2 | Das Briefing nennt `info@assos-projekt.de`. Auf Ihren Wunsch steht überall `fenster@assos-projekt.de`, und Web3Forms sendet dorthin. Bleibt es bei `fenster@`? | Kontakt, Schema, Datenschutz |

## I – Eingaben des Inhabers (Abschnitt 15 des Briefings)

| Nr. | Frage | Hängt davon ab |
|---|---|---|
| I1 | Telefon +49 155 60238878: Gilt das auch für das Google-Profil? Erreichbarkeit bisher „Mo–Fr 9–15 Uhr“, bitte bestätigen. WhatsApp ja/nein? | Fußbereich, Schema |
| I2 | **Reaktionszeit:** Wie schnell melden Sie sich nach einer Anfrage zurück (z. B. „am selben Werktag“, „innerhalb von 24 Stunden“, „innerhalb von 2 Werktagen“)? Und wie schnell kommt nach dem Aufmaß das Angebot? Heute stehen drei verschiedene Aussagen auf der Website: „zeitnah“, „innerhalb eines Werktages“, „innerhalb von 1–2 Werktagen“. Welche gilt? | Formular, Danke-Seite, Angebotsseite |
| I3 | Preisrahmen pro Fenster je Paket (Basis/Komfort/Sicherheit) und Aufpreise | Förder-Check, Pakete, Kosten-Seite |
| I6 | Einsatzgebiet: Auf der Website stehen Hannover, Langenhagen, Burgwedel, Wedemark, Burgdorf, Lehrte, Garbsen, Sehnde und Laatzen. Stimmt das? | FAQ, Schema, Ortsseiten |
| I7 | Vorgaben zu Logo, Farben, Schrift? Team- und Projektfotos | Über uns, Startseite |
| I8 | Drutex-Datenblätter (Uw, Schall, Einbruchschutz) und erlaubte Bildrechte | Produktseiten, Downloads |
| I9 | Gibt es einen Showroom oder Musterkoffer? | Kontakt |
| I10 | Wer tritt namentlich auf (Name, Funktion, Foto)? | Über uns |
| I11 | Gewährleistung: Wer ist Ansprechpartner bei Mängeln? Text dazu | FAQ „Was ist, wenn …“ (ausgeblendet) |
| I12 | Darf der Energieberater genannt werden? | Förderseite |
| I13 | Gesamtdauer von der Anfrage bis zum Einbau | FAQ, Ablauf |
| I14 | Auftragsverarbeitungsvertrag bei Web3Forms akzeptiert? Spamschutz im Konto an oder aus? | Datenschutz (siehe D1/D2) |
| I15 | Einwilligungslösung und Tracking: ohne Tracking starten (Empfehlung) oder Google Ads/Analytics mit zertifizierter Einwilligungslösung (CMP)? | Consent, Mess-Ereignisse |
| I16 | Rückfrage beim Energieberater: Wann wird der Zuschuss ausgezahlt, und wie lange dauert die Bearbeitung? | Förderseite, FAQ |
| I17 | Die Referenzseite zeigt eigene Bauprojekte (Neubau, Denkmal, Raffstore). Dürfen sie bleiben, und waren Fenster und Türen dabei von Assos? Laut Briefing soll `/referenzen` bis zu echten Fensterprojekten `noindex` sein; die vorhandenen Projekte sind aber echt. Vorerst unverändert. | Referenzen, Startseite |
| I20 | Montage: Die Montageseite beschrieb „zertifizierte Fensterbauer nach RAL-Montagerichtlinien“. Laut Briefing nicht belegt, deshalb entfernt. Gibt es Nachweise des Einbaubetriebs (RAL-Gütezeichen, Meistertitel)? Dann darf es mit Beleg wieder hinein. | Montage |
| I21 | Fertigungszeiten „Kunststoff ca. 2, Aluminium ca. 4 Wochen“ hatten Sie bestätigt. Gelten sie auch für Drutex? | Ablauf, FAQ |

## D – Datenschutz und Recht (für Anwalt bzw. Generator)

| Nr. | Punkt |
|---|---|
| D1 | Web3Forms-Absatz: Ich habe ihn **als Entwurf** mit den Angaben aus dem Briefing ergänzt (Sitz Indien, Standardvertragsklauseln, Unterauftragsverarbeiter AWS/Cloudflare/Hetzner, Speicherung bis 3 Jahre). Er ist zu prüfen, und der Auftragsverarbeitungsvertrag ist zu akzeptieren und abzulegen. |
| D2 | Spamschutz CleanTalk/Akismet in Web3Forms: deaktivieren (der Honeypot reicht) oder in der Datenschutzerklärung fest benennen. Bis zur Entscheidung steht ein bedingter Satz darin. |
| D3 | Wie lange speichert 1blu die Server-Logs? |
| D4 | AGB: offene Punkte aus der früheren Prüfung (Gewährleistung 5 Jahre bei Bauwerken, Widerrufsrecht bei Vertragsschluss beim Kunden, Eigentumsvorbehalt, Gefahrübergang, Preise inkl. USt.). Dazu kommt neu: Vertrag mit aufschiebender Bedingung und Zahlungsmodell. |
| D5 | Wettbewerbsrechtliche Prüfung der Förderwerbung („Förderantrag inklusive“) |
| D6 | Barrierefreiheitsstärkungsgesetz: Gilt es für Assos? |
| D7 | Impressum: vollständig (Komplementärin, VSBG, kein EU-OS-Link). Keine Lücke offen. |
