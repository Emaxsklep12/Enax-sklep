𝒜🤍, [Jan 25, 2025 at 14:52]
// Скріпт для мобільного меню
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Зміна мови
const changeLanguage = (lang) => {
  alert(`Zmiana języka na: ${lang}`);
  // Тут можна додати функціональність для перекладу товарів і цін
}
