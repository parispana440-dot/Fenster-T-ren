/* ===========================================================================
   Standortkarte auf der Kontaktseite
   ---------------------------------------------------------------------------
   Die Karte lädt ausschließlich nach erteilter Einwilligung. Vorher steht an
   ihrer Stelle ein Platzhalter mit Anschrift und einem Knopf, der die
   Einwilligung nachholt - es geht also nichts verloren, wenn jemand im Banner
   zunächst abgelehnt hat.

   Leaflet liegt lokal im Ordner vendor/leaflet. Erst beim Laden der Karte
   entsteht eine Verbindung nach außen, und zwar nur zum Kachelserver.

   Anmutung: Die Kacheln werden per CSS entsättigt und aufgehellt, damit die
   Karte im hellen Grauton der Website erscheint statt in den Farben des
   Kartenanbieters. Der Standort ist ein Haus-Symbol im Firmenblau.
   =========================================================================== */
(function () {
  'use strict';

  var LEAFLET_JS  = 'vendor/leaflet/leaflet.js';
  var LEAFLET_CSS = 'vendor/leaflet/leaflet.css';

  var ladeVersprechen = null;

  function leafletLaden() {
    if (window.L) return Promise.resolve(window.L);
    if (ladeVersprechen) return ladeVersprechen;

    ladeVersprechen = new Promise(function (erfuellen, ablehnen) {
      var stil = document.createElement('link');
      stil.rel = 'stylesheet';
      stil.href = LEAFLET_CSS;
      document.head.appendChild(stil);

      var skript = document.createElement('script');
      skript.src = LEAFLET_JS;
      skript.async = true;
      skript.onload = function () {
        window.L ? erfuellen(window.L) : ablehnen(new Error('Leaflet nicht verfügbar'));
      };
      skript.onerror = function () { ablehnen(new Error('Leaflet konnte nicht geladen werden')); };
      document.head.appendChild(skript);
    });
    return ladeVersprechen;
  }

  function hausSymbol(L) {
    // Eigenes Symbol statt des Leaflet-Standardmarkers: Haus im Firmenblau,
    // darunter ein weicher Schatten, damit es sich vom grauen Grund abhebt.
    return L.divIcon({
      className: 'karte-marker',
      html:
        '<span class="karte-marker-schatten" aria-hidden="true"></span>' +
        '<span class="karte-marker-puls" aria-hidden="true"></span>' +
        '<span class="karte-marker-haus">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
          'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<path d="M3 10.6 12 3.2l9 7.4"/><path d="M5.2 9.4V20.4h13.6V9.4"/>' +
          '<path d="M9.9 20.4v-5.6h4.2v5.6"/></svg>' +
        '</span>',
      iconSize: [46, 52],
      iconAnchor: [23, 46],
      popupAnchor: [0, -44]
    });
  }

  function popupInhalt(d) {
    return '' +
      '<div class="karte-popup">' +
        '<p class="karte-popup-marke">' + d.marke + '</p>' +
        '<p class="karte-popup-name">' + d.name + '</p>' +
        '<address class="karte-popup-adresse">' + d.strasse + '<br>' + d.ort + '</address>' +
        '<dl class="karte-popup-daten">' +
          '<dt>Telefon</dt><dd><a href="tel:' + d.telLink + '">' + d.tel + '</a></dd>' +
          '<dt>E-Mail</dt><dd><a href="mailto:' + d.mail + '">' + d.mail + '</a></dd>' +
          '<dt>Zeiten</dt><dd>' + d.zeiten + '</dd>' +
        '</dl>' +
        '<a class="karte-popup-route" href="' + d.route + '" target="_blank" rel="noopener noreferrer">' +
          'Route planen' +
          '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' +
          '<path d="M4 2h6v6"/><path d="M10 2 2.5 9.5"/></svg>' +
        '</a>' +
      '</div>';
  }

  function karteAufbauen(box) {
    if (box.dataset.geladen === 'ja') return;
    box.dataset.geladen = 'ja';

    var d = {
      lat:      parseFloat(box.dataset.lat),
      lon:      parseFloat(box.dataset.lon),
      zoom:     parseInt(box.dataset.zoom || '16', 10),
      marke:    box.dataset.marke   || '',
      name:     box.dataset.name    || '',
      strasse:  box.dataset.strasse || '',
      ort:      box.dataset.ort     || '',
      tel:      box.dataset.tel     || '',
      telLink:  box.dataset.telLink || '',
      mail:     box.dataset.mail    || '',
      zeiten:   box.dataset.zeiten  || '',
      route:    box.dataset.route   || '#'
    };

    if (isNaN(d.lat) || isNaN(d.lon)) {
      fehlerZeigen(box, 'Für diesen Standort ist keine Position hinterlegt.');
      return;
    }

    box.innerHTML = '<div class="karte-flaeche"></div>';
    var flaeche = box.querySelector('.karte-flaeche');

    leafletLaden().then(function (L) {
      var karte = L.map(flaeche, {
        center: [d.lat, d.lon],
        zoom: d.zoom,
        scrollWheelZoom: false,   // sonst bleibt die Seite beim Scrollen hängen
        zoomControl: true,
        attributionControl: true
      });

      // Leaflet setzt dem Hinweis standardmäßig ein Flaggen-Emoji voran.
      // Die Nennung bleibt, der Zusatz passt nicht zum Auftritt.
      karte.attributionControl.setPrefix(
        '<a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a>');

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 5,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>-Mitwirkende'
      }).addTo(karte);

      var marker = L.marker([d.lat, d.lon], {
        icon: hausSymbol(L),
        keyboard: true,
        title: d.name + ', ' + d.strasse
      }).addTo(karte);

      marker.bindPopup(popupInhalt(d), {
        className: 'karte-popup-huelle',
        maxWidth: 300,
        minWidth: 272,
        closeButton: true,
        autoPanPadding: [20, 20]
      });

      // Das Popup geht erst beim Anklicken des Haus-Symbols auf. Dadurch bleibt
      // die Karte zunächst frei und das Symbol gut sichtbar.

      // Mausrad zoomt erst nach einem Klick in die Karte
      karte.on('click', function () { karte.scrollWheelZoom.enable(); });
      karte.on('mouseout', function () { karte.scrollWheelZoom.disable(); });

      // Nach dem Einblenden die Größe neu berechnen, sonst bleiben graue Flächen
      setTimeout(function () { karte.invalidateSize(); }, 120);
      window.addEventListener('resize', function () { karte.invalidateSize(); });

      box.classList.add('ist-geladen');
    }).catch(function () {
      box.dataset.geladen = 'nein';
      fehlerZeigen(box,
        'Die Karte lässt sich gerade nicht laden. Sie finden uns in der ' +
        d.strasse + ', ' + d.ort + '.');
    });
  }

  function fehlerZeigen(box, text) {
    box.innerHTML =
      '<div class="karte-hinweis">' +
        '<p>' + text + '</p>' +
        '<a class="btn btn-outline btn-sm" href="' + (box.dataset.route || '#') + '" ' +
        'target="_blank" rel="noopener noreferrer">Route planen</a>' +
      '</div>';
  }

  function platzhalterZeigen(box) {
    if (box.dataset.geladen === 'ja') return;
    box.classList.remove('ist-geladen');
    box.innerHTML =
      '<div class="karte-hinweis">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' +
        '<path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>' +
        '<p><strong>' + (box.dataset.strasse || '') + ', ' + (box.dataset.ort || '') + '</strong></p>' +
        '<p class="karte-hinweis-text">Die Kartenansicht ist ausgeblendet, weil Sie externen ' +
        'Inhalten nicht zugestimmt haben. Dabei würde Ihre IP-Adresse an den Kartenserver ' +
        'übertragen. Die Route funktioniert auch ohne Karte.</p>' +
        '<div class="karte-hinweis-knoepfe">' +
          '<button type="button" class="btn btn-primary btn-sm" data-karte-zustimmen>Karte anzeigen</button>' +
          '<a class="btn btn-outline btn-sm" href="' + (box.dataset.route || '#') + '" ' +
          'target="_blank" rel="noopener noreferrer">Route planen</a>' +
        '</div>' +
      '</div>';

    var knopf = box.querySelector('[data-karte-zustimmen]');
    if (knopf) {
      knopf.addEventListener('click', function () {
        // Führt zur Einwilligung - ohne sie wird nichts nachgeladen
        if (window.AssosEinwilligung) window.AssosEinwilligung.oeffnen();
      });
    }
  }

  function start() {
    var boxen = document.querySelectorAll('[data-karte]');
    if (!boxen.length) return;

    function anwenden(zwecke) {
      boxen.forEach(function (box) {
        if (zwecke && zwecke.karten) karteAufbauen(box);
        else platzhalterZeigen(box);
      });
    }

    if (window.AssosEinwilligung) {
      window.AssosEinwilligung.beiAenderung(anwenden);
      if (!window.AssosEinwilligung.entschieden()) anwenden({ karten: false });
    } else {
      anwenden({ karten: false });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
