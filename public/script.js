// Menu mobile
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const backdrop = document.getElementById('navBackdrop');

const setMenu = (open) => {
  menu.classList.toggle('is-open', open);
  if (backdrop) backdrop.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  document.body.style.overflow = open ? 'hidden' : '';
};

burger.addEventListener('click', () => {
  setMenu(!menu.classList.contains('is-open'));
});

// Fecha o menu ao clicar no fundo escuro
if (backdrop) {
  backdrop.addEventListener('click', () => setMenu(false));
}

// Fecha o menu ao clicar em um link
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

// Fecha o menu com a tecla Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false);
});

// Navbar com fundo ao rolar
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Animação de entrada das seções
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();
