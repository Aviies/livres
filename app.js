'use strict';
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.book-card');
const count = document.getElementById('book-count');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let visible = 0;
  cards.forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.group !== button.dataset.filter;
    if (!card.hidden) visible++;
  });
  count.textContent = `Показано ${visible} из ${cards.length} книг`;
}));
document.querySelectorAll('a[href^="#book-"]').forEach(link => link.addEventListener('click', () => {
  filters[0].click();
  const target = document.querySelector(link.getAttribute('href'));
  if (target) target.querySelector('details').open = true;
}));
document.getElementById('year').textContent = new Date().getFullYear();
