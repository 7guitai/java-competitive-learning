import { quizzes } from '../data/quizzes.js';

function getQuizProgress() {
  try {
    const d = JSON.parse(localStorage.getItem('quiz_progress') || '{}');
    return d;
  } catch { return {}; }
}

export function renderHome() {
  const progress = getQuizProgress();
  const answered = Object.keys(progress).length;
  const total = quizzes.length;
  const pct = total > 0 ? Math.round((answered / total) * 100) : 0;

  return `<div class="main-content fade-in">
    <div class="hero">
      <div class="hero__icon">☕</div>
      <h1 class="hero__title">Java 競プロ学習</h1>
      <p class="hero__sub">AtCoder D問題突破を目指して</p>
    </div>

    <div class="feature-grid">
      <div class="feature-card" data-nav="textbook" id="home-textbook">
        <div class="feature-card__icon">📖</div>
        <div>
          <div class="feature-card__title">教科書</div>
          <div class="feature-card__desc">全9章の講義を読む</div>
        </div>
      </div>
      <div class="feature-card" data-nav="cheatsheet" id="home-cheatsheet">
        <div class="feature-card__icon">🧠</div>
        <div>
          <div class="feature-card__title">チートシート</div>
          <div class="feature-card__desc">暗記カードで復習</div>
        </div>
      </div>
      <div class="feature-card" data-nav="quiz" id="home-quiz">
        <div class="feature-card__icon">🎯</div>
        <div>
          <div class="feature-card__title">クイズ</div>
          <div class="feature-card__desc">四択問題に挑戦</div>
        </div>
      </div>
    </div>

    <div class="progress-section">
      <div class="progress-section__title">📊 クイズ進捗</div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
      <div class="progress-label">${answered} / ${total} 問完了 (${pct}%)</div>
    </div>
  </div>`;
}
