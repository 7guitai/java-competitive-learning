import { cheatsheetCategories } from '../data/cheatsheets.js';

let activeCategory = cheatsheetCategories[0]?.id || '';

function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

export function renderCheatsheet() {
  const cat = cheatsheetCategories.find(c => c.id === activeCategory) || cheatsheetCategories[0];
  return `<div class="main-content fade-in">
    <h2 class="page-title">🧠 暗記チートシート</h2>
    <div class="cs-category-tabs">
      ${cheatsheetCategories.map(c =>
        `<button class="cs-tab ${c.id === activeCategory ? 'active' : ''}" data-cat="${c.id}" id="cs-tab-${c.id}">${c.name}</button>`
      ).join('')}
    </div>
    <div class="cs-grid">
      ${(cat?.cards || []).map((card, i) => `
        <div class="flip-card" data-flip="${i}" id="flip-${i}">
          <div class="flip-card__inner">
            <div class="flip-card__front">
              <div class="flip-card__front-title">${escapeHtml(card.front)}</div>
              <div class="flip-card__front-hint">タップして確認</div>
            </div>
            <div class="flip-card__back">
              <pre><code>${escapeHtml(card.back)}</code></pre>
              <div class="flip-card__back-desc">${escapeHtml(card.desc)}</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

export function bindCheatsheetEvents(container) {
  container.querySelectorAll('.cs-tab').forEach(el => {
    el.addEventListener('click', () => {
      activeCategory = el.dataset.cat;
      window.dispatchEvent(new CustomEvent('rerender'));
    });
  });
  container.querySelectorAll('.flip-card').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('flipped');
    });
  });
}
