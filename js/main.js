// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  // Muss mit der Schwelle des Navigationsblocks in style.css übereinstimmen
  var isMobileNav = window.matchMedia('(max-width: 1200px)');

  function collapseSubmenus() {
    document.querySelectorAll('.nav-item-mega.mobile-open').forEach(function (item) {
      item.classList.remove('mobile-open');
      var trigger = item.querySelector('.mega-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      // Beim Schließen zurücksetzen, damit das Menü beim nächsten Öffnen wieder zu ist
      if (!isOpen) collapseSubmenus();
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        // Der Produkte-Eintrag klappt auf Mobil nur auf, er schließt das Menü nicht
        if (isMobileNav.matches && link.classList.contains('mega-trigger')) return;
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        collapseSubmenus();
      });
    });
  }

  // Mobil: Produkte-Untermenü ist zugeklappt und öffnet erst beim Antippen
  document.querySelectorAll('.nav-item-mega').forEach(function (item) {
    var trigger = item.querySelector('.mega-trigger');
    if (!trigger) return;

    function syncTriggerState() {
      if (isMobileNav.matches) {
        trigger.setAttribute('aria-expanded', item.classList.contains('mobile-open') ? 'true' : 'false');
      } else {
        trigger.removeAttribute('aria-expanded');
        item.classList.remove('mobile-open');
      }
    }

    trigger.addEventListener('click', function (event) {
      if (!isMobileNav.matches) return; // Am Desktop bleibt es ein normaler Link
      event.preventDefault();
      item.classList.toggle('mobile-open');
      syncTriggerState();
    });

    isMobileNav.addEventListener('change', syncTriggerState);
    syncTriggerState();
  });

  // Mega menu (Produkte): keep it open across brief cursor gaps between the narrow
  // trigger and the full-width panel, so a fast diagonal move toward a link doesn't
  // close it prematurely. Only wired on hover-capable/fine-pointer devices — on touch
  // (mobile) the panel is always expanded inline via CSS, no JS needed there.
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.nav-item-mega').forEach(function (item) {
      var closeTimer = null;
      var open = function () {
        clearTimeout(closeTimer);
        item.classList.add('mega-open');
      };
      var scheduleClose = function () {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(function () {
          item.classList.remove('mega-open');
        }, 300);
      };
      item.addEventListener('mouseenter', open);
      item.addEventListener('mouseleave', scheduleClose);
    });
  }

  // Mark current page link as active
  var here = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // FAQ accordions: click a question to reveal/hide its answer
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var button = item.querySelector('.faq-question');
    if (!button) return;
    button.addEventListener('click', function () {
      var isOpen = item.classList.toggle('open');
      button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // ------------------------------------------------------ Bildergalerie
  // Das Deckbild verweist auf die große Aufnahme, die übrigen stehen als
  // Liste darunter. Ohne Skript bleibt beides nutzbar. Mit Skript übernimmt
  // der Leuchtkasten: Liste ausblenden, Klick abfangen, Bilder erst dann laden.
  document.querySelectorAll('[data-galerie]').forEach(function (karte) {
    var deckbild = karte.querySelector('.galerie-deckbild');
    var liste = karte.querySelector('[data-galerie-liste]');
    if (!deckbild || !liste) return;

    var bilder = Array.prototype.map.call(liste.querySelectorAll('a[href]'), function (a) {
      return { quelle: a.getAttribute('href'), text: a.textContent.trim() };
    });
    if (bilder.length < 2) return;

    var titel = (karte.querySelector('h3') || {}).textContent || 'Bildergalerie';
    titel = titel.trim();
    karte.classList.add('ist-bereit');

    var kasten = null, stelle = 0, vorherigerFokus = null;

    function svg(pfad) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"'
        + ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + pfad + '</svg>';
    }

    function zeigen() {
      var b = bilder[stelle];
      var bild = kasten.querySelector('.lk-bild');
      bild.setAttribute('src', b.quelle);
      bild.setAttribute('alt', titel + ' – ' + b.text);
      kasten.querySelector('.lk-text').textContent = b.text;
      kasten.querySelector('.lk-zaehler').textContent = 'Bild ' + (stelle + 1) + ' von ' + bilder.length;
    }

    function blaettern(richtung) {
      stelle = (stelle + richtung + bilder.length) % bilder.length;
      zeigen();
    }

    function fokusFesthalten(e) {
      if (!kasten || e.key !== 'Tab') return;
      var ziele = kasten.querySelectorAll('button');
      if (!ziele.length) return;
      var erstes = ziele[0], letztes = ziele[ziele.length - 1];
      if (e.shiftKey && document.activeElement === erstes) {
        e.preventDefault(); letztes.focus();
      } else if (!e.shiftKey && document.activeElement === letztes) {
        e.preventDefault(); erstes.focus();
      }
    }

    function tasten(e) {
      if (!kasten) return;
      if (e.key === 'Escape') { e.preventDefault(); schliessen(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); blaettern(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); blaettern(1); }
      else fokusFesthalten(e);
    }

    function schliessen() {
      if (!kasten) return;
      document.removeEventListener('keydown', tasten, true);
      kasten.parentNode.removeChild(kasten);
      kasten = null;
      document.body.classList.remove('lk-offen');
      if (vorherigerFokus && vorherigerFokus.focus) vorherigerFokus.focus();
      vorherigerFokus = null;
    }

    function oeffnen(start) {
      if (kasten) return;
      stelle = start;
      vorherigerFokus = document.activeElement;

      kasten = document.createElement('div');
      kasten.className = 'lk';
      kasten.setAttribute('role', 'dialog');
      kasten.setAttribute('aria-modal', 'true');
      kasten.setAttribute('aria-label', 'Bildergalerie: ' + titel);
      kasten.innerHTML =
        '<div class="lk-kopf">'
        + '<span class="lk-titel">' + titel + '</span>'
        + '<span class="lk-zaehler" role="status" aria-live="polite"></span>'
        + '<button type="button" class="lk-knopf lk-zu" aria-label="Galerie schließen">'
        + svg('<path d="M18 6L6 18"/><path d="M6 6l12 12"/>') + '</button>'
        + '</div>'
        + '<div class="lk-buehne"><img class="lk-bild" alt=""></div>'
        + '<div class="lk-fuss">'
        + '<button type="button" class="lk-knopf lk-zurueck" aria-label="Vorheriges Bild">'
        + svg('<path d="M15 6l-6 6 6 6"/>') + '</button>'
        + '<p class="lk-text"></p>'
        + '<button type="button" class="lk-knopf lk-weiter" aria-label="Nächstes Bild">'
        + svg('<path d="M9 6l6 6-6 6"/>') + '</button>'
        + '</div>';

      document.body.appendChild(kasten);
      document.body.classList.add('lk-offen');
      zeigen();

      kasten.querySelector('.lk-zu').addEventListener('click', schliessen);
      kasten.querySelector('.lk-zurueck').addEventListener('click', function () { blaettern(-1); });
      kasten.querySelector('.lk-weiter').addEventListener('click', function () { blaettern(1); });
      // Ein Klick neben das Bild schließt - auf den Knöpfen und dem Bild nicht.
      kasten.addEventListener('click', function (e) {
        if (e.target === kasten || e.target.classList.contains('lk-buehne')) schliessen();
      });

      // Wischen auf dem Bild blättert.
      var startX = null;
      var buehne = kasten.querySelector('.lk-buehne');
      buehne.addEventListener('touchstart', function (e) {
        startX = e.changedTouches[0].clientX;
      }, { passive: true });
      buehne.addEventListener('touchend', function (e) {
        if (startX === null) return;
        var weg = e.changedTouches[0].clientX - startX;
        startX = null;
        if (Math.abs(weg) > 45) blaettern(weg < 0 ? 1 : -1);
      }, { passive: true });

      document.addEventListener('keydown', tasten, true);
      kasten.querySelector('.lk-zu').focus();
    }

    // Das Deckbild zeigt eine der Aufnahmen aus der Liste. Die Galerie startet
    // genau dort, damit der Klick zum Bild passt - welche Stelle das ist,
    // entscheidet allein das href im Markup.
    var deckstelle = 0;
    for (var i = 0; i < bilder.length; i++) {
      if (bilder[i].quelle === deckbild.getAttribute('href')) { deckstelle = i; break; }
    }

    deckbild.addEventListener('click', function (e) {
      e.preventDefault();
      oeffnen(deckstelle);
    });
    liste.querySelectorAll('a[href]').forEach(function (a, i) {
      a.addEventListener('click', function (e) { e.preventDefault(); oeffnen(i); });
    });
  });

  // ---------------------------------------------------- Bildvergleich
  // Zwei deckungsgleiche Aufnahmen desselben Objekts. Die obere Lage wird
  // per clip-path beschnitten; die Position steckt in der CSS-Variablen
  // --pos. Bedient wird sie von einem echten <input type="range">, das
  // unsichtbar über der Fläche liegt - damit sind Tastatur, Fingergeste
  // und Vorlesesoftware ohne Eigenbau abgedeckt.
  document.querySelectorAll('[data-vergleich]').forEach(function (figur) {
    var buehne = figur.querySelector('.vergleich-buehne');
    var regler = figur.querySelector('.vergleich-regler');
    if (!buehne || !regler) return;

    var markeLinks = figur.querySelector('.vergleich-marke-links');
    var markeRechts = figur.querySelector('.vergleich-marke-rechts');
    var masse = { breite: 0, links: 0, rechts: 0 };

    // Die Beschriftungen liegen in ihrer jeweiligen Bildhälfte. Wandert die
    // Kante über eine von ihnen hinweg, wäre sie halb abgeschnitten - dann
    // wird sie stattdessen ausgeblendet. Die Schwellen stehen in Pixeln,
    // weil die Beschriftung eine feste Breite hat, die Bühne aber nicht.
    function messen() {
      masse.breite = buehne.clientWidth;
      masse.links = markeLinks ? markeLinks.offsetWidth : 0;
      masse.rechts = markeRechts ? markeRechts.offsetWidth : 0;
    }

    function setzen() {
      var wert = Number(regler.value);
      if (!isFinite(wert)) wert = 50;
      buehne.style.setProperty('--pos', wert + '%');

      if (!masse.breite) messen();
      var kante = masse.breite * wert / 100;
      // Randabstand der Beschriftung plus etwas Luft, damit nichts anstößt
      figur.classList.toggle('marke-links-aus', kante < masse.links + 26);
      figur.classList.toggle('marke-rechts-aus', kante > masse.breite - masse.rechts - 26);
    }

    function wertSetzen(neuerWert) {
      var w = Math.max(0, Math.min(100, neuerWert));
      regler.value = String(Math.round(w));
      setzen();
    }

    // Gezogen wird ausschließlich am Griff. Ein Klick irgendwo ins Bild darf
    // die Kante nicht versetzen - deshalb hängen die Zeigerereignisse hier
    // und nicht auf der Fläche. Der Zeiger wird für die Dauer des Ziehens
    // festgehalten, damit es auch weitergeht, wenn er das Bild verlässt.
    var griff = figur.querySelector('.vergleich-griff');
    if (griff) {
      var zieht = false;

      function ausPosition(x) {
        var feld = buehne.getBoundingClientRect();
        if (!feld.width) return;
        wertSetzen((x - feld.left) / feld.width * 100);
      }

      griff.addEventListener('pointerdown', function (e) {
        zieht = true;
        figur.classList.add('wird-gezogen');
        try { griff.setPointerCapture(e.pointerId); } catch (err) {}
        // Der Regler bleibt das eigentliche Bedienelement: wer eben noch
        // gezogen hat, kann direkt mit den Pfeiltasten weitermachen.
        try { regler.focus({ preventScroll: true }); } catch (err) { regler.focus(); }
        e.preventDefault();
      });

      griff.addEventListener('pointermove', function (e) {
        if (!zieht) return;
        ausPosition(e.clientX);
        e.preventDefault();
      });

      function loslassen(e) {
        if (!zieht) return;
        zieht = false;
        figur.classList.remove('wird-gezogen');
        try { griff.releasePointerCapture(e.pointerId); } catch (err) {}
      }
      griff.addEventListener('pointerup', loslassen);
      griff.addEventListener('pointercancel', loslassen);
      // Ein Doppelklick auf den Griff soll nichts markieren.
      griff.addEventListener('dragstart', function (e) { e.preventDefault(); });
    }

    regler.addEventListener('input', setzen);
    regler.addEventListener('change', setzen);
    window.addEventListener('resize', function () { messen(); setzen(); });
    messen();
    setzen();

    // Erst jetzt Kante und Griff zeigen: ohne Skript bliebe der Regler
    // wirkungslos, und ein Bedienelement, das nichts tut, führt in die Irre.
    figur.classList.add('ist-bereit');
  });

  // Hero slideshow: auto-advancing slides with clickable progress-bar tabs
  document.querySelectorAll('[data-hero-slideshow]').forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('.hero-slide'));
    var tabs = Array.prototype.slice.call(root.querySelectorAll('.hero-slide-tab'));
    if (slides.length < 2 || tabs.length !== slides.length) return;

    var duration = 8000;
    var current = 0;
    var timer = null;
    var pauseKnopf = root.querySelector('.hero-slide-pause');
    // Wer Bewegung reduziert haben moechte, bekommt keinen automatischen Wechsel
    var ruheModus = window.matchMedia('(prefers-reduced-motion: reduce)');
    var angehalten = ruheModus.matches;

    function show(index) {
      slides.forEach(function (slide, i) { slide.classList.toggle('is-active', i === index); });
      // Das Objektfoto gehört zur ersten Folie, liegt technisch aber auf der
      // Sektion, damit es bis an die Bildschirmränder reicht.
      root.classList.toggle('zeigt-foto', index === 0);
      tabs.forEach(function (tab, i) {
        tab.classList.toggle('is-active', i === index);
        var fill = tab.querySelector('.hero-slide-tab-fill');
        if (!fill) return;
        fill.style.animation = 'none';
        if (i === index) {
          void fill.offsetWidth;
          fill.style.animation = '';
        }
      });
      current = index;
    }

    function stoppen() {
      clearInterval(timer);
      timer = null;
    }

    function restart() {
      stoppen();
      if (angehalten) return;
      timer = setInterval(function () { show((current + 1) % slides.length); }, duration);
    }

    function pauseKnopfAktualisieren() {
      if (!pauseKnopf) return;
      pauseKnopf.setAttribute('aria-pressed', angehalten ? 'true' : 'false');
      // Der Knopf zeigt nur ein Symbol - Name und Titel tragen die Bedeutung
      var beschriftung = angehalten ? 'Automatischen Wechsel fortsetzen' : 'Automatischen Wechsel anhalten';
      pauseKnopf.setAttribute('aria-label', beschriftung);
      pauseKnopf.setAttribute('title', beschriftung);
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        show(i);
        restart();
      });
    });

    if (pauseKnopf) {
      pauseKnopf.addEventListener('click', function () {
        angehalten = !angehalten;
        pauseKnopfAktualisieren();
        restart();
      });
    }

    // Der Wechsel haelt an, solange jemand mit dem Bereich arbeitet, und laeuft
    // danach weiter - sonst springt der Inhalt unter der Hand weg.
    root.addEventListener('mouseenter', stoppen);
    root.addEventListener('mouseleave', restart);
    root.addEventListener('focusin', stoppen);
    root.addEventListener('focusout', function (e) {
      if (!root.contains(e.relatedTarget)) restart();
    });
    // Im Hintergrundtab nicht weiterlaufen
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stoppen(); else restart();
    });
    ruheModus.addEventListener('change', function (e) {
      angehalten = e.matches;
      pauseKnopfAktualisieren();
      restart();
    });

    pauseKnopfAktualisieren();
    restart();
  });

  // ---------------------------------------------------------------------------
  // Kontakt- und Angebotsformular
  //
  // Solange am <form> kein data-endpoint hinterlegt ist, gibt es keinen Server,
  // der die Anfrage entgegennimmt. Dann oeffnet das Formular das E-Mail-Programm
  // des Besuchers mit einer fertig ausgefuellten Nachricht. Es wird in diesem
  // Fall ausdruecklich NICHT behauptet, die Anfrage sei bereits eingegangen.
  //
  // Sobald ein Versanddienst eingerichtet ist (z. B. Web3Forms), genuegt es,
  // am <form> data-endpoint="https://..." zu ergaenzen - dann wird regulaer
  // per fetch() abgeschickt. Der uebrige Code bleibt unveraendert.
  // ---------------------------------------------------------------------------
  var MELDUNGEN = {
    valueMissing: 'Bitte füllen Sie dieses Feld aus.',
    typeMismatch: 'Bitte prüfen Sie diese Eingabe.',
    email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. name@beispiel.de.',
    checkbox: 'Bitte bestätigen Sie diesen Punkt, damit wir Ihre Anfrage bearbeiten dürfen.',
    tooShort: 'Bitte schreiben Sie etwas mehr, damit wir Ihr Vorhaben einschätzen können.'
  };

  function fehlertextFuer(feld) {
    var v = feld.validity;
    if (v.valueMissing) {
      if (feld.type === 'checkbox') return MELDUNGEN.checkbox;
      return MELDUNGEN.valueMissing;
    }
    if (v.typeMismatch && feld.type === 'email') return MELDUNGEN.email;
    if (v.tooShort) return MELDUNGEN.tooShort;
    return MELDUNGEN.typeMismatch;
  }

  function fehlerAnzeigen(feld, text) {
    var feldBox = feld.closest('.field') || feld.parentElement;
    var hinweis = feldBox.querySelector('.field-error');
    if (!hinweis) {
      hinweis = document.createElement('p');
      hinweis.className = 'field-error';
      hinweis.id = (feld.id || feld.name) + '-fehler';
      feldBox.appendChild(hinweis);
    }
    hinweis.textContent = text;
    feld.setAttribute('aria-invalid', 'true');
    feld.setAttribute('aria-describedby', hinweis.id);
    feldBox.classList.add('has-error');
  }

  function fehlerLoeschen(feld) {
    var feldBox = feld.closest('.field') || feld.parentElement;
    var hinweis = feldBox.querySelector('.field-error');
    if (hinweis) hinweis.remove();
    feld.removeAttribute('aria-invalid');
    feld.removeAttribute('aria-describedby');
    feldBox.classList.remove('has-error');
  }

  function statusSetzen(form, text, art) {
    var status = form.querySelector('.form-status');
    if (!status) return;
    status.textContent = text;
    status.classList.remove('ok', 'warn', 'err');
    status.classList.add('show', art);
  }

  function mailtoBauen(form) {
    var daten = new FormData(form);
    var zeilen = [];
    form.querySelectorAll('input, select, textarea').forEach(function (feld) {
      if (!feld.name || feld.name === 'website' || feld.name === 'dsgvo') return;
      // Versteckte Felder sind Angaben fuer den Versanddienst (Zugriffsschluessel,
      // Betreff, Spamfalle) und keine Eingaben des Besuchers. Sie gehoeren nicht
      // in den Text der E-Mail.
      if (feld.type === 'hidden') return;
      if (feld.type === 'checkbox' && !feld.checked) return;
      var beschriftung = '';
      var label = form.querySelector('label[for="' + feld.id + '"]');
      if (label) beschriftung = label.textContent.replace(/\s*\*\s*$/, '').trim();
      if (!beschriftung) beschriftung = feld.name;
      var wert = feld.type === 'checkbox' ? feld.value || 'ja' : feld.value;
      if (!wert) return;
      zeilen.push(beschriftung + ': ' + wert);
    });
    var betreff = form.dataset.betreff || 'Anfrage über die Website';
    return 'mailto:info@assos-projekt.de'
      + '?subject=' + encodeURIComponent(betreff)
      + '&body=' + encodeURIComponent(zeilen.join('\n') + '\n\n--\nGesendet über assos-projekt.de');
  }

  document.querySelectorAll('form[data-form]').forEach(function (form) {
    // Eingaben korrigieren blendet den jeweiligen Fehler sofort wieder aus
    form.addEventListener('input', function (e) {
      if (e.target.matches('input, select, textarea') && e.target.checkValidity()) {
        fehlerLoeschen(e.target);
      }
    });
    form.addEventListener('change', function (e) {
      if (e.target.matches('input[type="checkbox"]') && e.target.checkValidity()) {
        fehlerLoeschen(e.target);
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Pflichtfelder pruefen
      var ersterFehler = null;
      form.querySelectorAll('input, select, textarea').forEach(function (feld) {
        if (feld.type === 'hidden' || feld.disabled) return;
        if (feld.checkValidity()) {
          fehlerLoeschen(feld);
        } else {
          fehlerAnzeigen(feld, fehlertextFuer(feld));
          if (!ersterFehler) ersterFehler = feld;
        }
      });

      if (ersterFehler) {
        statusSetzen(form, 'Bitte ergänzen Sie die markierten Felder – dann können wir Ihre Anfrage bearbeiten.', 'err');
        ersterFehler.focus();
        ersterFehler.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return;
      }

      // Spamfalle: von Menschen nie ausgefuellt, von einfachen Bots schon
      var falle = form.querySelector('input[name="website"]');
      if (falle && falle.value) return;

      var knopf = form.querySelector('button[type="submit"]');
      var endpunkt = form.dataset.endpoint;

      if (!endpunkt) {
        // Kein Versanddienst hinterlegt: E-Mail-Programm mit fertiger Nachricht oeffnen
        window.location.href = mailtoBauen(form);
        statusSetzen(form,
          'Ihr E-Mail-Programm öffnet sich mit der fertig ausgefüllten Nachricht – bitte dort noch auf „Senden" klicken. '
          + 'Falls sich nichts öffnet, erreichen Sie uns direkt unter 0511 700 226 21 oder info@assos-projekt.de.',
          'warn');
        return;
      }

      var urspruenglich = knopf ? knopf.textContent : '';
      if (knopf) { knopf.disabled = true; knopf.textContent = 'Wird gesendet …'; }
      statusSetzen(form, 'Ihre Anfrage wird übermittelt …', 'warn');

      fetch(endpunkt, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (antwort) {
        if (!antwort.ok) throw new Error('HTTP ' + antwort.status);
        statusSetzen(form, 'Vielen Dank! Ihre Anfrage ist bei uns eingegangen. Wir melden uns zeitnah bei Ihnen.', 'ok');
        form.reset();
      }).catch(function () {
        statusSetzen(form,
          'Die Übermittlung hat leider nicht geklappt. Bitte rufen Sie uns an unter 0511 700 226 21 '
          + 'oder schreiben Sie an info@assos-projekt.de – wir kümmern uns darum.',
          'err');
      }).then(function () {
        if (knopf) { knopf.disabled = false; knopf.textContent = urspruenglich; }
      });
    });
  });
});
