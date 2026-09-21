// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

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
