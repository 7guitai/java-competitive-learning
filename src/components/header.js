const BOOK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>';
const CARD_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>';
const QUIZ_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
const HOME_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';

export function renderHeader() {
  return `<header class="header">
    <span class="header__logo">☕ Java競プロ学習</span>
    <span class="header__spacer"></span>
  </header>`;
}

export function renderBottomNav(active) {
  const items = [
    { id: 'home', icon: HOME_ICON, label: 'ホーム' },
    { id: 'textbook', icon: BOOK_ICON, label: '教科書' },
    { id: 'cheatsheet', icon: CARD_ICON, label: 'チートシート' },
    { id: 'quiz', icon: QUIZ_ICON, label: 'クイズ' },
  ];
  return `<nav class="bottom-nav">${items.map(item =>
    `<button class="nav-item ${active === item.id ? 'active' : ''}" data-nav="${item.id}" id="nav-${item.id}">
      ${item.icon}<span>${item.label}</span>
    </button>`
  ).join('')}</nav>`;
}
