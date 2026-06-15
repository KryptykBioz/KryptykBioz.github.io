/* ============================================
   SCROLL-EFFECTS.JS — Navbar shadow + reveal-on-scroll
   ============================================ */

(function () {
  'use strict';

  // --- Navbar scrolled state ---
  const navbar = document.getElementById('navbar');

  function onScroll() {
    if (!navbar) return;
    if (window.scrollY > 12) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Reveal-on-scroll for sections/cards ---
  const revealTargets = document.querySelectorAll(
    '.project-card, .timeline__item, .setup-step, .faq__item, .support-card, .section__header'
  );

  revealTargets.forEach(function (el) {
    el.classList.add('reveal');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: reveal everything immediately
    revealTargets.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

})();