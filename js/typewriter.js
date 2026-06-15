/* ============================================
   TYPEWRITER.JS — Hero terminal command sequence
   ============================================ */

(function () {
  'use strict';

  const target = document.getElementById('heroTyped');
  if (!target) return;

  // Respect reduced-motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const commands = [
    './init_agent.sh --cognitive-loop',
    'status: ONLINE',
    'loading ANNA_AI framework...'
  ];

  if (prefersReducedMotion) {
    target.textContent = commands[0];
    return;
  }

  let cmdIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const HOLD_TIME = 1800;

  function tick() {
    const current = commands[cmdIndex];

    if (!deleting) {
      charIndex++;
      target.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      target.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        cmdIndex = (cmdIndex + 1) % commands.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
})();