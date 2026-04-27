import './style.css';
import { renderHeader, renderBottomNav } from './components/header.js';
import { renderHome } from './pages/home.js';
import { renderTextbook, bindTextbookEvents, resetTextbook } from './pages/textbook.js';
import { renderCheatsheet, bindCheatsheetEvents } from './pages/cheatsheet.js';
import { renderQuiz, bindQuizEvents } from './pages/quiz.js';

const app = document.getElementById('app');
let currentPage = 'home';

function render() {
  let pageContent = '';
  switch (currentPage) {
    case 'textbook':
      pageContent = renderTextbook();
      break;
    case 'cheatsheet':
      pageContent = renderCheatsheet();
      break;
    case 'quiz':
      pageContent = renderQuiz();
      break;
    default:
      pageContent = renderHome();
  }

  app.innerHTML = renderHeader() + pageContent + renderBottomNav(currentPage);
  bindEvents();
  window.scrollTo(0, 0);
}

function bindEvents() {
  // Navigation
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.nav;
      if (target !== currentPage) {
        currentPage = target;
        render();
      }
    });
  });

  // Page-specific bindings
  const content = app;
  switch (currentPage) {
    case 'textbook':
      bindTextbookEvents(content);
      break;
    case 'cheatsheet':
      bindCheatsheetEvents(content);
      break;
    case 'quiz':
      bindQuizEvents(content);
      break;
  }
}

// Rerender event (from child pages)
window.addEventListener('rerender', () => render());

// Initial render
render();
