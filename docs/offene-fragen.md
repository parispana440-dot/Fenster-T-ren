# Offene Fragen und Platzhalter

Stand: 15.10.2026. Jede Frage nennt, was davon abhängt. Im Code sind die
zugehörigen Stellen mit `TODO` markiert und die Nummer der Frage steht
dabei, z. B. `TODO (I2)`.

## H – Hosting und Ablauf

| Nr. | Frage | Hängt davon ab |
|---|---|---|
| H1 | Soll die Website von 1blu (live, per FTP) zu **Vercel** umziehen, wie im Briefing vorgesehen? Vorteile: Vorschau-Adressen, Auslieferung direkt aus GitHub. Aufwand: neue Hoster-Angaben in der Datenschutzerklärung, Umbau der `.htaccess`-Regeln, DNS-Eintrag A/CNAME. MX, SPF und DKIM blieben unverändert. | Abschnitt 13 |
| H2 | Das Briefing nennt `info@assos-projekt.de`. Auf Ihren Wunsch steht überall `fenster@assos-projekt.de`, und Web3Forms sendet dorthin. Bleibt es bei `fenster@`? | Kontakt, Schema, Datenschutz |

## I – Eingaben des Inhabers (Abschnitt 15 des Briefings)

| Nr. | Frage | Hängt davon ab |
|---|---|---|
| I1 | Telefon +49 155 60238878: Gilt das auch für das Google-Profil? Erreichbarkeit bisher „Mo–Fr 9–15 Uhr“, bitte bestätigen. WhatsApp ja/nein? | Fußbereich, Schema |
| I2 | **Reaktionszeit** auf Anfragen. Heute stehen drei verschiedene Aussagen auf der Website: „zeitnah“, „innerhalb eines Werktages“, „innerhalb von 1–2 Werktagen“. Welche gilt? | Formular, Danke-Seite, Angebotsseite |
| I3 | Preisrahmen pro Fenster je Paket (Basis/Komfort/Sicherheit) und Aufpreise | Förder-Check, Pakete, Kosten-Seite |
| I4 | Zahlungsmodell: 40/30/30 oder 70/30? Zahlungen erst nach dem Zuwendungsbescheid? | FAQ „Wann zahle ich?“ (auf der Startseite noch ausgeblendet) |
| I5 | **Sind Beratung und Aufmaß kostenlos?** Steht heute auf 16 Seiten. Auf der Startseite habe ich es vorerst entfernt. Wenn ja, setze ich es dort wieder ein. Wenn nein, entferne ich es auf allen Seiten. | Startseite, Angebot, Produktseiten |
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
| I18 | **Hersteller:** Laut Briefing verkauft Assos Drutex. Startseite und Über uns sagten „an keinen einzelnen Hersteller gebunden, mehrere europäische Markenhersteller“. Auf der Startseite habe ich das neutral formuliert. Auf der Über-uns-Seite steht es noch, weil Sie es dort bestätigt hatten. Was gilt? Soll „Drutex“ genannt werden? | Startseite, Über uns, Produktseiten |
| I19 | **Telefon im Kopfbereich:** Das Briefing will die Nummer im Kopfbereich und in einer Leiste unten auf dem Handy. Sie hatten früher gesagt, die Nummer solle nicht in den Kopfbereich. Was gilt? | P1 Sticky-Leiste |
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
