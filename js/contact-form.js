/* ============================================
   CONTACT-FORM.JS — mailto-based submission (no backend)
   ============================================ */

(function () {
  'use strict';

  const form = document.getElementById('contactForm');
  const status = document.getElementById('cfStatus');

  if (!form) return;

  const CONTACT_EMAIL = 'KryptykBioz@outlook.com';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !message) {
      if (status) status.textContent = '[Error] All fields are required.';
      return;
    }

    const subject = encodeURIComponent('Portfolio contact from ' + name);
    const body = encodeURIComponent(
      message + '\n\n---\nFrom: ' + name + ' <' + email + '>'
    );

    const mailtoUrl = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;

    window.location.href = mailtoUrl;

    if (status) {
      status.textContent = '[OK] Opening your email client...';
    }
  });

})();