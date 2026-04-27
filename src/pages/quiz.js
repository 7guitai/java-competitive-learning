import { quizzes } from '../data/quizzes.js';

let currentIndex = 0;
let score = 0;
let answered = false;
let shuffledQuizzes = [];
let finished = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  shuffledQuizzes = shuffle(quizzes);
  currentIndex = 0;
  score = 0;
  answered = false;
  finished = false;
}

export function renderQuiz() {
  if (shuffledQuizzes.length === 0) startQuiz();

  if (finished) {
    const pct = Math.round((score / shuffledQuizzes.length) * 100);
    const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚';
    return `<div class="main-content fade-in">
      <h2 class="page-title">🎯 クイズ結果</h2>
      <div class="quiz-result">
        <div class="quiz-result__icon">${emoji}</div>
        <div class="quiz-result__score">${score} / ${shuffledQuizzes.length}</div>
        <div class="quiz-result__label">${pct}% 正解</div>
        <button class="quiz-result__btn" id="quiz-retry">もう一度挑戦する</button>
      </div>
    </div>`;
  }

  const q = shuffledQuizzes[currentIndex];
  return `<div class="main-content fade-in">
    <h2 class="page-title">🎯 クイズ</h2>
    <div class="quiz-header">
      <span class="quiz-progress">${currentIndex + 1} / ${shuffledQuizzes.length}</span>
      <span class="quiz-score">スコア: ${score}</span>
    </div>
    <div class="quiz-card">
      <div class="quiz-card__chapter">Chapter ${q.chapter}</div>
      <div class="quiz-card__question">${q.question}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" data-opt="${i}" id="quiz-opt-${i}">${opt}</button>
        `).join('')}
      </div>
      <div id="quiz-feedback"></div>
    </div>
    <button class="quiz-next" id="quiz-next" style="display:none">次の問題へ →</button>
  </div>`;
}

export function bindQuizEvents(container) {
  if (finished) {
    const retry = container.querySelector('#quiz-retry');
    if (retry) retry.addEventListener('click', () => {
      startQuiz();
      window.dispatchEvent(new CustomEvent('rerender'));
    });
    return;
  }

  const options = container.querySelectorAll('.quiz-option');
  const feedback = container.querySelector('#quiz-feedback');
  const nextBtn = container.querySelector('#quiz-next');
  const q = shuffledQuizzes[currentIndex];

  options.forEach(btn => {
    btn.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      const selected = parseInt(btn.dataset.opt);
      const correct = q.answer;

      options.forEach(b => {
        b.disabled = true;
        const idx = parseInt(b.dataset.opt);
        if (idx === correct) b.classList.add('correct');
        if (idx === selected && selected !== correct) b.classList.add('wrong');
      });

      if (selected === correct) score++;

      // Save progress
      try {
        const progress = JSON.parse(localStorage.getItem('quiz_progress') || '{}');
        progress[`q_${currentIndex}`] = selected === correct;
        localStorage.setItem('quiz_progress', JSON.stringify(progress));
      } catch {}

      feedback.innerHTML = `<div class="quiz-explanation">${q.explanation}</div>`;
      nextBtn.style.display = 'block';
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      answered = false;
      if (currentIndex >= shuffledQuizzes.length) {
        finished = true;
      }
      window.dispatchEvent(new CustomEvent('rerender'));
    });
  }
}

export function resetQuiz() {
  startQuiz();
}
