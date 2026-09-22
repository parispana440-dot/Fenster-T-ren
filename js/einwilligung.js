/* ===========================================================================
   Einwilligungsverwaltung (Cookie-Banner)
   ---------------------------------------------------------------------------
   Diese Website setzt von sich aus keine Cookies, lädt keine Analyse- oder
   Werbedienste und stellt ohne Zustimmung keine Verbindung zu Dritten her.
   Zustimmungspflichtig ist deshalb genau ein Punkt: die Kartenansicht auf der
   Kontaktseite, für die Kartenkacheln von einem externen Server geladen werden.

   Rechtlicher Rahmen, der die Gestaltung bestimmt:
   - § 25 Abs. 1 TDDDG: Speichern auf dem Endgerät braucht eine Einwilligung.
     Die Entscheidung selbst wird deshalb im localStorage abgelegt - das ist
     nach § 25 Abs. 2 Nr. 2 TDDDG unbedingt erforderlich und einwilligungsfrei.
   - Art. 7 Abs. 3 DSGVO: Ablehnen muss so einfach sein wie Zustimmen. Beide
     Schaltflächen stehen deshalb gleichberechtigt nebeneinander.
   - Keine Vorauswahl: der Schalter für die Karte ist standardmäßig aus.
   - Widerruf jederzeit möglich über den Link im Fußbereich.

   Das Skript lädt als erstes im <head>, damit das Banner ohne Aufblitzen
   erscheint und eine bereits erteilte Zustimmung sofort verfügbar ist.
   =========================================================================== */
(function () {
  'use strict';

  var SCHLUESSEL = 'assos-einwilligung';
  var FASSUNG = 1; // bei inhaltlichen Änderungen erhöhen -> erneut fragen

  // ---------------------------------------------------------------- Speicher
  // Im privaten Modus oder bei gesperrtem Speicher wirft der Zugriff. Dann
  // arbeitet die Seite ohne Gedächtnis weiter, statt mit einem Fehler zu enden.
  function lesen() {
    try {
      var roh = window.localStorage.getItem(SCHLUESSEL);
      if (!roh) return null;
      var wert = JSON.parse(roh);
      if (!wert || wert.fassung !== FASSUNG) return null;
      return wert;
    } catch (e) {
      return null;
    }
  }

  function schreiben(wert) {
    try {
      window.localStorage.setItem(SCHLUESSEL, JSON.stringify(wert));
    } catch (e) {
      /* ohne Speicher gilt die Entscheidung nur für diesen Seitenaufruf */
    }
  }

  var zustand = lesen();

  // ------------------------------------------------------------ Öffentliche API
  var horcher = [];

  var API = {
    /** Wurde für diesen Zweck zugestimmt? */
    erlaubt: function (zweck) {
      return !!(zustand && zustand.zwecke && zustand.zwecke[zweck] === true);
    },
    /** Liegt überhaupt eine Entscheidung vor? */
    entschieden: function () {
      return !!zustand;
    },
    /** Callback bei jeder Änderung; wird sofort mit dem Ist-Stand aufgerufen. */
    beiAenderung: function (rueckruf) {
      horcher.push(rueckruf);
      if (zustand) rueckruf(zustand.zwecke);
    },
    /** Entscheidung speichern und alle Beteiligten benachrichtigen. */
    setzen: function (zwecke) {
      zustand = {
        fassung: FASSUNG,
        zeitpunkt: new Date().toISOString(),
        zwecke: zwecke
      };
      schreiben(zustand);
      horcher.forEach(function (r) {
        try { r(zustand.zwecke); } catch (e) {}
      });
      bannerSchliessen();
    },
    /** Widerruf: Entscheidung verwerfen und erneut fragen. */
    widerrufen: function () {
      try { window.localStorage.removeItem(SCHLUESSEL); } catch (e) {}
      zustand = null;
      horcher.forEach(function (r) {
        try { r({ karten: false }); } catch (e) {}
      });
      window.location.reload();
    },
    /** Banner erneut zeigen, z. B. über den Link im Fußbereich. */
    oeffnen: function () {
      bannerZeigen(true);
    }
  };

  window.AssosEinwilligung = API;

  // ------------------------------------------------------------------- Banner
  var banner = null;
  var vorherigerFokus = null;

  var TEXTE = {
    titel: 'Ihre Entscheidung über externe Inhalte',
    einleitung:
      'Diese Website kommt ohne Tracking aus: Wir setzen keine Werbe- oder ' +
      'Analyse-Cookies, messen Ihr Verhalten nicht und geben nichts an Dritte weiter. ' +
      'Eine einzige Sache braucht Ihre Zustimmung.',
    notwendigTitel: 'Notwendig',
    notwendigText:
      'Damit die Seite überhaupt funktioniert und wir uns Ihre Entscheidung von hier merken können. ' +
      'Es werden dabei keine Daten übertragen und kein Profil gebildet. Lässt sich nicht abwählen.',
    kartenTitel: 'Kartenansicht auf der Kontaktseite',
    kartenText:
      'Zeigt unseren Standort auf einer Karte. Dafür werden Kartenausschnitte von ' +
      'OpenStreetMap nachgeladen; dabei erfährt der Kartenserver Ihre IP-Adresse. ' +
      'Ohne Zustimmung zeigen wir die Adresse als Text und verlinken auf einen Routenplaner.'
  };

  function knopf(beschriftung, klasse, aktion) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'ce-btn ' + klasse;
    b.textContent = beschriftung;
    b.addEventListener('click', aktion);
    return b;
  }

  function bannerBauen() {
    var huelle = document.createElement('div');
    huelle.className = 'ce-huelle';
    huelle.setAttribute('role', 'dialog');
    huelle.setAttribute('aria-modal', 'true');
    huelle.setAttribute('aria-labelledby', 'ce-titel');
    huelle.setAttribute('aria-describedby', 'ce-text');

    huelle.innerHTML =
      '<div class="ce-karte">' +
        '<div class="ce-kopf">' +
          '<span class="ce-marke" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">' +
            '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>' +
          '</span>' +
          '<div>' +
            '<h2 id="ce-titel">' + TEXTE.titel + '</h2>' +
            '<p id="ce-text">' + TEXTE.einleitung + '</p>' +
          '</div>' +
        '</div>' +
        '<ul class="ce-liste">' +
          '<li class="ce-zweck">' +
            '<div class="ce-schalter ce-schalter-fest" aria-hidden="true"><span></span></div>' +
            '<div><strong>' + TEXTE.notwendigTitel + '</strong>' +
            '<p>' + TEXTE.notwendigText + '</p></div>' +
            '<span class="ce-fest">Immer aktiv</span>' +
          '</li>' +
          '<li class="ce-zweck">' +
            '<label class="ce-schalter" for="ce-karten">' +
              '<input type="checkbox" id="ce-karten"><span></span>' +
            '</label>' +
            '<div><strong><label for="ce-karten">' + TEXTE.kartenTitel + '</label></strong>' +
            '<p>' + TEXTE.kartenText + '</p></div>' +
          '</li>' +
        '</ul>' +
        '<div class="ce-aktionen"></div>' +
        '<p class="ce-fuss">Sie können Ihre Entscheidung jederzeit über den Link ' +
        '„Cookie-Einstellungen" im Fußbereich ändern. Mehr dazu in unserer ' +
        '<a href="datenschutz.html">Datenschutzerklärung</a>.</p>' +
      '</div>';

    var aktionen = huelle.querySelector('.ce-aktionen');
    var haken = huelle.querySelector('#ce-karten');

    // Ablehnen steht bewusst zuerst und ist optisch gleichwertig (Art. 7 DSGVO)
    aktionen.appendChild(knopf('Nur Notwendiges', 'ce-btn-ablehnen', function () {
      API.setzen({ karten: false });
    }));
    aktionen.appendChild(knopf('Auswahl speichern', 'ce-btn-schlicht', function () {
      API.setzen({ karten: haken.checked });
    }));
    aktionen.appendChild(knopf('Alles akzeptieren', 'ce-btn-voll', function () {
      API.setzen({ karten: true });
    }));

    return huelle;
  }

  function fokusFesthalten(e) {
    if (!banner || e.key !== 'Tab') return;
    var ziele = banner.querySelectorAll('button, input, a[href]');
    if (!ziele.length) return;
    var erstes = ziele[0], letztes = ziele[ziele.length - 1];
    if (e.shiftKey && document.activeElement === erstes) {
      e.preventDefault(); letztes.focus();
    } else if (!e.shiftKey && document.activeElement === letztes) {
      e.preventDefault(); erstes.focus();
    }
  }

  function bannerZeigen(erneut) {
    if (banner) return;
    vorherigerFokus = document.activeElement;
    banner = bannerBauen();
    document.body.appendChild(banner);
    document.body.classList.add('ce-offen');
    if (erneut && zustand) {
      var h = banner.querySelector('#ce-karten');
      if (h) h.checked = API.erlaubt('karten');
    }
    // Fokus auf den ersten Knopf, damit Tastaturnutzer sofort entscheiden können
    var ersterKnopf = banner.querySelector('.ce-btn');
    if (ersterKnopf) ersterKnopf.focus();
    document.addEventListener('keydown', fokusFesthalten, true);
  }

  function bannerSchliessen() {
    if (!banner) return;
    document.removeEventListener('keydown', fokusFesthalten, true);
    banner.remove();
    banner = null;
    document.body.classList.remove('ce-offen');
    if (vorherigerFokus && vorherigerFokus.focus) vorherigerFokus.focus();
    vorherigerFokus = null;
  }

  // Kein Schließen per Escape oder Klick daneben: eine Entscheidung ohne
  // Entscheidung wäre keine Einwilligung und auch kein wirksames Ablehnen.

  function start() {
    // Link „Cookie-Einstellungen" im Fußbereich verdrahten
    document.querySelectorAll('[data-einwilligung-oeffnen]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        API.oeffnen();
      });
    });
    if (!zustand) bannerZeigen(false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
