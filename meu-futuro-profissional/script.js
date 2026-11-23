// 1. Alternância entre Tema Claro e Escuro
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  
  if (isDark) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

// 2. Menu Responsivo para Celulares e Tablets
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// 3. Cartões Expansíveis na Seção de Objetivos Profissionais
function toggleGoal(card) {
  card.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const firstGoal = document.querySelector('.goal-card');
  if (firstGoal) {
    firstGoal.classList.add('active');
  }
});

// 4. Botão Voltar ao Topo
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
