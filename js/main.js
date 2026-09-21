// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var isMobileNav = window.matchMedia('(max-width: 900px)');

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

  // Map embeds load only after the visitor agrees (no data to Google before that)
  document.querySelectorAll('[data-map-consent]').forEach(function (box) {
    var button = box.querySelector('button');
    if (!button) return;
    button.addEventListener('click', function () {
      var frame = document.createElement('iframe');
      frame.src = box.dataset.mapSrc;
      frame.title = 'Standort Assos GmbH & Co. KG';
      frame.width = '100%';
      frame.height = '100%';
      frame.style.border = '0';
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer-when-downgrade';
      box.innerHTML = '';
      box.appendChild(frame);
    });
  });

  // Hero slideshow: auto-advancing slides with clickable progress-bar tabs
  document.querySelectorAll('[data-hero-slideshow]').forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('.hero-slide'));
    var tabs = Array.prototype.slice.call(root.querySelectorAll('.hero-slide-tab'));
    if (slides.length < 2 || tabs.length !== slides.length) return;

    var duration = 8000;
    var current = 0;
    var timer = null;

    function show(index) {
      slides.forEach(function (slide, i) { slide.classList.toggle('is-active', i === index); });
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

    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { show((current + 1) % slides.length); }, duration);
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        show(i);
        restart();
      });
    });

    restart();
  });

  // Contact / quote request forms: client-side only (no backend configured yet)
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Vielen Dank! Ihre Anfrage wurde erfasst. Wir melden uns zeitnah bei Ihnen.';
        status.classList.add('show', 'ok');
      }
      form.reset();
    });
  });
});
