/* ============================================================
   MAIN APPLICATION LOGIC & INTERACTIVE SYSTEMS LAB
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Scroll Reveal Animations
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
  );

  reveals.forEach((el) => revealObserver.observe(el));

  // Mobile Navigation Drawer
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('mobileDrawerClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    if (drawer) drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  mobileLinks.forEach((l) => l.addEventListener('click', closeDrawer));

  // Dynamic Query Latency Simulation in Hero
  const latencyEl = document.getElementById('dynLatency');
  if (latencyEl) {
    setInterval(() => {
      const ms = Math.floor(Math.random() * 12) + 34; // 34ms to 46ms
      latencyEl.textContent = `< ${ms}ms LOCAL`;
    }, 3800);
  }

  // Copy Email to Clipboard helper
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'amritprakash254@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = 'COPIED TO CLIPBOARD ✓';
        copyBtn.style.background = 'var(--accent-emerald)';
        copyBtn.style.color = '#fff';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2200);
      });
    });
  }

  // WIP Notification Banner & Expandable Sync Log Controller
  const wipToggleBtn = document.getElementById('wipDetailsToggle');
  const wipDrawer = document.getElementById('wipDrawer');
  const wipCloseBtn = document.getElementById('wipCloseBtn');
  const wipFloatingChip = document.getElementById('wipFloatingChip');

  if (wipToggleBtn && wipDrawer) {
    wipToggleBtn.addEventListener('click', () => {
      const isOpen = wipDrawer.classList.toggle('is-open');
      wipToggleBtn.textContent = isOpen ? 'Sync Log ▴' : 'Sync Log ▾';
    });
  }

  if (wipCloseBtn) {
    wipCloseBtn.addEventListener('click', () => {
      document.body.classList.add('banner-hidden');
      if (wipDrawer) wipDrawer.classList.remove('is-open');
      if (wipToggleBtn) wipToggleBtn.textContent = 'Sync Log ▾';
    });
  }

  if (wipFloatingChip) {
    wipFloatingChip.addEventListener('click', () => {
      document.body.classList.remove('banner-hidden');
      if (wipDrawer) {
        wipDrawer.classList.add('is-open');
        if (wipToggleBtn) wipToggleBtn.textContent = 'Sync Log ▴';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
