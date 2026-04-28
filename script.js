/* ========== NAVBAR HIDE ON SCROLL ========== */
(function () {
  const nav = document.querySelector('.navbar');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('hidden', y > lastY && y > 80);
    lastY = y;
  }, { passive: true });
})();

/* ========== HAMBURGER MENU ========== */
(function () {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('active');
      links.classList.remove('open');
    });
  });
})();

/* ========== TYPING EFFECT ========== */
(function () {
  const el = document.getElementById('typingText');
  if (!el) return;
  const phrases = [
    'Coordenador-Geral de Ciência de Dados',
    'Escola Nacional de Administração Pública',
    'Pesquisador em Políticas Públicas',
    'Cientista Político & Analista de Dados'
  ];
  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const phrase = phrases[pi];
    el.textContent = phrase.substring(0, ci);
    if (!deleting) {
      ci++;
      if (ci > phrase.length) { deleting = true; setTimeout(tick, 2000); return; }
    } else {
      ci--;
      if (ci < 0) { ci = 0; deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 500); return; }
    }
    setTimeout(tick, deleting ? 30 : 60);
  }
  tick();
})();

/* ========== SCROLL REVEAL ========== */
(function () {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ========== SKILL BAR ANIMATION ========== */
(function () {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.skill-category').forEach(el => obs.observe(el));
})();

/* ========== FLOATING PARTICLES ========== */
(function () {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#ff6b35', '#f7c948', '#e84393', '#00cec9', '#6c5ce7'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 16) + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
    container.appendChild(p);
  }
})();

/* ========== SMOOTH ANCHOR SCROLL ========== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ========== ACTIVE NAV LINK HIGHLIGHT ========== */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? '#e84393' : '';
    });
  }, { passive: true });
})();
