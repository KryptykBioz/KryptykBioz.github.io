/* ============================================
   MAIN.JS — Navigation, footer year, toggles
   ============================================ */

(function () {
  'use strict';

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navbar = document.getElementById('navbar');

  if (navToggle && navLinks && navbar) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      navbar.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu after clicking a link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navbar.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Footer year ---
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // --- Generic [data-toggle] expand/collapse for non-<details> elements ---
  document.querySelectorAll('[data-toggle]').forEach(function (btn) {
    const targetId = btn.getAttribute('data-toggle');
    const target = document.getElementById(targetId);
    if (!target) return;

    btn.addEventListener('click', function () {
      const isHidden = target.hasAttribute('hidden');
      if (isHidden) {
        target.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = btn.textContent.replace('[+]', '[-]');
      } else {
        target.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = btn.textContent.replace('[-]', '[+]');
      }
    });
  });

})();