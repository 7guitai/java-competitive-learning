import { chapters } from '../data/chapters.js';
import { Marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import hljs from 'highlight.js/lib/core';
import java from 'highlight.js/lib/languages/java';
import 'highlight.js/styles/github-dark.css';

hljs.registerLanguage('java', java);

const marked = new Marked({
  renderer: {
    code({ text, lang }) {
      const highlighted = lang && hljs.getLanguage(lang)
        ? hljs.highlight(text, { language: lang }).value
        : text;
      return `<pre><code class="hljs language-${lang || ''}">${highlighted}</code></pre>`;
    }
  }
});

marked.use(markedKatex({
  throwOnError: false,
  displayMode: false
}));

let currentChapter = null;

export function renderTextbook() {
  if (currentChapter !== null) {
    return renderChapterContent(currentChapter);
  }
  return renderChapterList();
}

function renderChapterList() {
  return `<div class="main-content fade-in">
    <h2 class="page-title">📖 教科書</h2>
    <div class="chapter-list">
      ${chapters.map(ch => `
        <div class="chapter-item" data-chapter="${ch.id}" id="chapter-${ch.id}">
          <div class="chapter-item__num">${ch.id}</div>
          <div>
            <div class="chapter-item__title">${ch.title}</div>
            <div class="chapter-item__sub">${ch.subtitle}</div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

function renderChapterContent(id) {
  const ch = chapters.find(c => c.id === id);
  if (!ch) return renderChapterList();
  const html = marked.parse(ch.content);
  return `<div class="main-content fade-in">
    <button class="chapter-back" id="chapter-back-top">← 章一覧に戻る</button>
    <div class="md-content">${html}</div>
    <div style="margin-top: 2rem; text-align: center;">
      <button class="chapter-back" id="chapter-back-bottom" style="padding: 1rem 2rem; font-size: 1.1rem; width: 100%;">← 章一覧に戻る</button>
    </div>
  </div>`;
}

export function bindTextbookEvents(container) {
  container.querySelectorAll('[data-chapter]').forEach(el => {
    el.addEventListener('click', () => {
      currentChapter = parseInt(el.dataset.chapter);
      window.dispatchEvent(new CustomEvent('rerender'));
    });
  });
  container.querySelectorAll('.chapter-back').forEach(backBtn => {
    backBtn.addEventListener('click', () => {
      currentChapter = null;
      window.dispatchEvent(new CustomEvent('rerender'));
      window.scrollTo(0, 0); // 上に戻す
    });
  });
}

export function resetTextbook() {
  currentChapter = null;
}
