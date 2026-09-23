# Checkliste vor dem Livegang

Diese Datei ist nur für interne Zwecke und wird von Besuchern der Website nicht gesehen.
Sie ersetzt die früheren Hinweistexte, die versehentlich öffentlich auf den Seiten standen.

## Muss erledigt werden

### 1. Formulare an einen Versanddienst anbinden
**Stand jetzt:** Die Formulare prüfen alle Pflichtfelder und öffnen beim Absenden
das E-Mail-Programm des Besuchers mit einer fertig ausgefüllten Nachricht. Es geht
also nichts mehr verloren und es wird auch nichts Falsches behauptet – aber der
Besucher muss in seinem Mailprogramm noch auf „Senden" klicken. Auf dem Handy
klappt das zuverlässig, an manchen Büro-Rechnern ohne eingerichtetes Mailprogramm
nicht.

**Der saubere Zustand** ist ein Versanddienst, der die Anfrage direkt zustellt.
Der Anschluss ist vorbereitet und dauert zwei Minuten:

1. Auf web3forms.com die eigene E-Mail-Adresse eintragen → es kommt ein
   Zugriffsschlüssel per Mail (kostenlos bis 250 Anfragen/Monat, kein Konto nötig)
2. In `kontakt.html` und `angebot.html` beim `<form>` ergänzen:
   `data-endpoint="https://api.web3forms.com/submit"`
3. In beiden Formularen direkt vor dem Absenden-Knopf einfügen:
   `<input type="hidden" name="access_key" value="DER-SCHLÜSSEL">`

Mehr ist nicht nötig – das Skript erkennt den Endpunkt selbst, schickt dann
regulär ab, zeigt einen Sende- und einen Fehlerzustand und nennt im Fehlerfall
Telefonnummer und E-Mail als Ausweg.

Nach der Anbindung:
- In der Datenschutzerklärung, Abschnitt 4, den Absatz „Hinweis zum aktuellen
  Stand" entfernen und den Auftragsverarbeiter (Web3Forms) eintragen
- Einen Auftragsverarbeitungsvertrag (AVV) mit dem Anbieter abschließen

### 2. Öffnungszeiten bestätigen
Auf `kontakt.html` stehen jetzt „Mo–Fr 08:00–17:00 Uhr" ohne Platzhalter-Hinweis.
Bitte einmal bestätigen, dass diese Zeiten stimmen, oder mir die richtigen nennen.

### 3. Referenzen-Seite mit echten Projekten füllen
`referenzen.html` ist aktuell als „im Aufbau" gekennzeichnet, steht aber in der Hauptnavigation.
Benötigt: Projektfotos (auch Handyfotos von Baustellen wirken authentisch), kurze
Beschreibungen, gern Kennzahlen wie Anzahl Wohneinheiten oder erzielte Energieeinsparung.

### 4. Social-Media-Profile ergänzen
Die Platzhalter-Links auf Instagram und Facebook sind entfernt – sie zeigten ins
Leere, was auf einer Seite, die Vertrauen aufbauen soll, schlechter wirkt als gar
kein Eintrag. An ihrer Stelle steht jetzt im Footer die Spalte „Direkter Draht"
mit Telefon, E-Mail und Angebotslink.

Sobald echte Profile existieren, gehören sie an zwei Stellen eingetragen: in den
Footer und in das Feld `sameAs` der strukturierten Daten (siehe Punkt 13).

## Rechtlich prüfen lassen

Diese Punkte sollte ein Anwalt oder Steuerberater bestätigen – sie können nicht
allein aus der Website heraus beurteilt werden.

### 4a. Erlaubnis nach § 34c GewO — WICHTIG vor dem Livegang
Die neue Seite `bauen-immobilien.html` nennt auch Leistungen rund um
Immobilien. Hier ist eine Grenze zu beachten, die leicht übersehen wird:

**Erlaubnispflichtig nach § 34c GewO sind unter anderem**
- die Vermittlung von Kauf- oder Mietverträgen über Immobilien (Maklertätigkeit)
- die Tätigkeit als Bauträger (Bauen im eigenen Namen auf fremde Rechnung)
- die Baubetreuung (wirtschaftliche Vorbereitung und Durchführung für andere)
- die Verwaltung von Wohnungseigentum und Mietwohnungen

Wer solche Leistungen ohne Erlaubnis **anbietet oder bewirbt**, verstößt gegen
eine Marktverhaltensregel im Sinne des UWG. Das ist abmahnfähig, zusätzlich
droht ein Bußgeld von bis zu 5.000 €.

**Was ich deshalb getan habe:** Der vierte Leistungsblock heißt bewusst
„Immobilien einschätzen & vorbereiten" und beschreibt die Einordnung des
Marktwerts, die wertsteigernden Maßnahmen und deren Ausführung. Eine
Vermittlung gegen Provision wird an keiner Stelle behauptet.

**Was Sie klären müssen:**

| Fall | Was zu tun ist |
|---|---|
| Sie haben die Erlaubnis bereits | Sagen Sie mir Bescheid – dann formuliere ich den Abschnitt offensiver („Wir vermitteln Ihre Immobilie"). Zusätzlich muss ins Impressum: der Hinweis auf die Erlaubnis nach § 34c GewO und die zuständige Aufsichtsbehörde. Fehlt das, ist auch das abmahnfähig. |
| Sie haben sie nicht | Text bleibt wie er ist. Vermitteln Sie nicht selbst, sondern arbeiten Sie mit einem Makler zusammen. |
| Unklar | Kurze Rückfrage bei der IHK Hannover – die Auskunft ist kostenlos. |

### 4b. Berufsbezeichnungen Architekt, Bauingenieur, Statiker
„Architekt" und „Bauingenieur" sind in Deutschland geschützte Berufsbezeichnungen,
die an eine Kammermitgliedschaft gebunden sind. Auch die Bauvorlageberechtigung –
also das Recht, den Bauantrag einzureichen – hängt daran.

Auf der Website steht deshalb: „Für Planung, Statik und Bauleitung arbeiten wir
mit Architektinnen und Architekten, Bauingenieuren und Statikern zusammen, die
wir seit Jahren kennen." Das ist korrekt, egal ob diese Fachleute angestellt
oder Partner sind.

**Wenn diese Fachkräfte bei Ihnen angestellt sind**, dürfen wir deutlicher
werden („unsere Architekten", „eigene Statik") – das wirkt stärker. Sagen Sie
mir in dem Fall, wer fest zum Unternehmen gehört, dann passe ich die
Formulierungen an. Ohne Anstellungsverhältnis wäre „eigene Architekten"
irreführend.

### 4c. Angaben zur Erfahrung
An mehreren Stellen steht „seit über 15 Jahren". Das stammt aus Ihrer
Beschreibung. Bitte einmal gegenprüfen, dass sich das belegen lässt – etwa
über die Historie des Unternehmens oder der handelnden Personen. Angaben zur
Unternehmensdauer werden in Wettbewerbsstreitigkeiten regelmäßig angegriffen.

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

### 8. 404-Seite – erledigt, aber gut zu wissen
Die 404-Seite lädt CSS, Schriften und Logos über absolute Pfade und fällt bei
Bedarf automatisch auf relative zurück. Sie sieht damit sowohl unter einer
eigenen Domain als auch im GitHub-Unterverzeichnis richtig aus.

Die Navigationslinks darauf sind bewusst relativ geblieben. Bei einer Fehlseite
direkt unter der Domain (der Normalfall, z. B. ein Tippfehler in der Adresse)
stimmen sie. Nur bei einer sehr tief verschachtelten Fantasie-Adresse zeigen sie
daneben – das lässt sich ohne Server nicht lösen und fällt praktisch nicht ins
Gewicht.

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

### 12. Koordinate der Karte bestätigen — BITTE ZUERST PRÜFEN
Die Karte auf `kontakt.html` setzt das Haus-Symbol auf **52.4283 / 9.8146**.
Diese Koordinate ist **von mir geschätzt** und nicht überprüft: Ich konnte aus
dieser Arbeitsumgebung heraus keinen Geokodierungsdienst erreichen. Sie zeigt
das Gewerbegebiet Isernhagen Süd, möglicherweise aber nicht exakt die
Borsigstraße 7.

So bestätigen oder korrigieren Sie sie in zwanzig Sekunden:

1. In Google Maps die Borsigstraße 7 suchen
2. Mit der rechten Maustaste auf das Gebäude klicken
3. Ganz oben stehen zwei Zahlen, z. B. `52,42831, 9,81462` — anklicken kopiert sie
4. In `kontakt.html` im Block `<div class="karte-box" ...>` eintragen:
   `data-lat="52.42831"` und `data-lon="9.81462"` (Punkt statt Komma!)

Nur diese eine Stelle bestimmt die Position. Der Knopf „Route planen" arbeitet
mit der Anschrift und führt deshalb auch dann richtig, wenn die Koordinate noch
nicht stimmt.

Sobald die Koordinate bestätigt ist, trage ich sie zusätzlich als `geo` in die
strukturierten Daten ein — dort steht sie bewusst noch nicht, weil eine falsche
Angabe schlechter wäre als gar keine.

### 12a. Kartenkacheln bei wachsendem Besuch
Die Karte bezieht ihre Ausschnitte von den öffentlichen Servern der
OpenStreetMap Foundation. Das ist für eine Firmenwebsite in dieser Größe
üblich und kostenlos. Sollte die Seite einmal sehr viel Zuspruch bekommen,
gehört ein eigener Kachel-Zugang dazu (z. B. MapTiler, kostenloses Kontingent,
Server in der EU). Zu ändern wäre dann genau eine Zeile in `js/karte.js`.

### 13. Social-Media-Profile für `sameAs`
Sobald Instagram und Facebook existieren, gehören die URLs nicht nur in den
Footer, sondern auch in den `sameAs`-Eintrag der strukturierten Daten. Das
hilft Google, die Profile demselben Unternehmen zuzuordnen.

### 14. Öffnungszeiten bestätigen (hängt mit Punkt 2 zusammen)
Die Zeiten „Mo–Fr 08:00–17:00" stehen inzwischen an drei Stellen: auf
`kontakt.html`, im Kopfbereich jeder Seite und in den strukturierten Daten.
Wenn sie nicht stimmen, müssen alle drei geändert werden – und später auch das
Google-Unternehmensprofil.

### 15. Uw-Wert des Holzfensters gegen das Datenblatt halten
Der Wert „ab 0,79 W/(m²K)" auf `holzfenster.html` stammt ursprünglich aus der
Holz-Aluminium-Fassung. Nachrecherchiert: Für ein **reines** Holzfenster ist er
erreichbar — mit entsprechender Dreifachverglasung werden genau 0,79 W/(m²K)
genannt, ein Massivholzfenster mit 92 mm Bautiefe kommt auf 0,75. Der Uw-Wert
entsteht aus Rahmen und Glas; die hinterlüftete Aluminiumschale trägt thermisch
kaum bei, weshalb beide Bauarten bei gleicher Profiltiefe nah beieinander
liegen.

Zu tun bleibt: den Wert einmal gegen das Datenblatt Ihres Lieferanten halten
und die Profiltiefe dazu festhalten. Er steht an vier Stellen — im Datenblatt,
in zwei FAQ-Antworten und in der Kurzfassung für die Suche.

Offen ist außerdem der **Einbruchschutz bis RC2**: der hängt am Beschlag, nicht
am Material, und gehört gegen das Lieferprogramm geprüft.

### 16. Meranti ist aus dem Angebot genommen — bitte gegenprüfen
Bei den Holzarten stand „u. a. Kiefer, Lärche, Meranti und Eiche". Meranti ist
ein tropisches Laubholz und wird von Umweltschutzorganisationen als die
bedenklichste Holzart im Fensterbau eingestuft, weil ein großer Teil aus
illegalem Einschlag in Indonesien und Malaysia stammt. Das passte nicht zur
eigenen Aussage „aus bewirtschafteten europäischen Wäldern", die direkt daneben
stand.

Die Aufzählung nennt jetzt Kiefer, Lärche und Eiche — auf `holzfenster.html`
und auf `holztueren.html`. Lärche und Eiche erreichen eine vergleichbare
Witterungsbeständigkeit. Die FAQ-Antwort zur Holzart sagt ausdrücklich, dass
Sie Tropenhölzer nicht führen; das ist ein Verkaufsargument, kein Mangel.

**Wenn Sie Meranti tatsächlich anbieten**, sagen Sie Bescheid — dann formuliere
ich es als Option auf Anfrage statt es zu verschweigen. Dabei zu bedenken: Die
EU-Entwaldungsverordnung (EUDR) gilt ab **30. Dezember 2026**, für Klein- und
Kleinstunternehmen ab **30. Juni 2027**. Holz fällt darunter. Wer Ware weiter
verarbeitet oder vertreibt, die bereits in Verkehr gebracht wurde, muss zwar
keine eigene Sorgfaltserklärung abgeben, aber die Referenznummer des
Inverkehrbringers aufbewahren und die Rückverfolgbarkeit sichern.

### 17. Förderbegleitung: drei Punkte für Ihren Berater
Die Website bewirbt jetzt ausdrücklich, dass Sie Antrag, Nachweise und Fristen
übernehmen und mit einem Leistungsvertrag unter aufschiebender Bedingung
arbeiten. Das ist der richtige Weg — das BAFA verlangt bei Antragstellung
ausdrücklich einen Liefer- oder Leistungsvertrag, dessen Wirksamkeit von der
Förderzusage abhängt. Drei Dinge sollten dazu stehen, bevor die Seite live geht:

1. **Vertragsmuster.** Die aufschiebende Bedingung muss tatsächlich im
   Vertragstext stehen und an die Förderzusage geknüpft sein. Eine Klausel, die
   nur auf „Förderfähigkeit" abstellt, reicht nicht. Das Verbraucher-Widerrufs-
   recht bleibt davon unberührt und gilt zusätzlich (siehe Punkt zur
   Widerrufsbelehrung).
2. **BAFA-Vollmacht.** Für die Antragstellung als bevollmächtigte Person
   braucht das BAFA das unterschriebene Vollmachtsformular. Wer bevollmächtigt
   ist, übernimmt die Aufgaben und Pflichten des Antragstellers und ist
   Ansprechpartner der Behörde — das ist keine reine Serviceleistung, sondern
   eine Verantwortung. Formular unter www.bafa.de/beg.
3. **Rechtsdienstleistungsgesetz.** Das Stellen eines Förderantrags für Kunden
   dürfte als Nebenleistung zum Hauptgeschäft nach § 5 RDG zulässig sein. Da
   die Website damit wirbt, lohnt eine kurze anwaltliche Bestätigung.

Inhaltlich geprüft und aktuell: 15 % Grundförderung, iSFP-Bonus von 5 % erst
oberhalb von 30.000 € förderfähiger Kosten (Änderung vom 21.07.2026), Uw
höchstens 0,95 W/(m²K), Energieeffizienz-Experte mit Technischer
Projektbeschreibung verpflichtend, Verwendungsnachweis sechs Monate nach Ende
des Bewilligungszeitraums. Fördersätze ändern sich erfahrungsgemäß mehrmals
pro Jahr — die Förderseite gehört auf eine Wiedervorlage.

## Später sinnvoll

- Kundenbewertungen auf der Startseite einbinden (sobald vorhanden)
- Foto und persönlicher Text des Geschäftsführers auf `ueber-uns.html`
- Echte Projektfotos auf `referenzen.html` – das ist gleichzeitig der beste
  Weg zu Inhalten, die sich von Wettbewerbern unterscheiden
- Bewusst **keine** eigenen Unterseiten je Ort ("Fenster Burgwedel",
  "Fenster Langenhagen"). Google stuft solche Seiten seit Jahren als
  Brückenseiten ein und straft sie ab; die Einsatzgebiet-Sektion auf
  `kontakt.html` deckt denselben Zweck regelkonform ab.
