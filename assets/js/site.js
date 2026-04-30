// Sentinel Pathway · shared site behavior
const menuBtn = document.getElementById('menuBtn');
const aside = document.getElementById('aside');

if (menuBtn && aside) {
  menuBtn.addEventListener('click', () => {
    const open = aside.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!aside || !menuBtn) return;
  if (window.innerWidth > 820) return;
  if (aside.contains(target) || menuBtn.contains(target)) return;
  aside.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
});
