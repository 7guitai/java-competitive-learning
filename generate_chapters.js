import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chapterMeta = [
  { id: 1, title: 'Java競プロの基礎と入出力', subtitle: 'おまじない・Scanner・出力' },
  { id: 2, title: '変数・データ型・演算子', subtitle: 'int / long / オーバーフロー・値渡し' },
  { id: 3, title: '制御構文', subtitle: 'if / for / while / break・switch式' },
  { id: 4, title: '配列と文字列処理', subtitle: '1次元/2次元配列・StringBuilder' },
  { id: 5, title: 'メソッドとスコープ', subtitle: '関数定義・拡張for文・参照渡し' },
  { id: 6, title: 'コレクションフレームワーク', subtitle: 'ArrayList / Set / Map / Queue / PQ' },
  { id: 7, title: 'ソートとカスタム比較', subtitle: 'Arrays.sort / ラムダ式 / Comparable' },
  { id: 8, title: '探索系アルゴリズムの極意', subtitle: '累積和・二分探索・DFS/BFS・Bit全探索' },
  { id: 9, title: '高度なグラフアルゴリズム', subtitle: 'Union-Find・ダイクストラ・トポロジカルソート・最小全域木' },
  { id: 10, title: '動的計画法 (DP) 徹底入門', subtitle: '貰うDP/配るDP・ナップサックDP・部分和問題' },
  { id: 11, title: '競プロ数学と剰余演算 (Mod)', subtitle: 'Modの性質・GCD/LCM・素数判定・nCr' },
  { id: 12, title: '高速入出力と計算量', subtitle: '10⁸の法則・PrintWriter・FastScanner' }
];

const chapters = [];

for (const meta of chapterMeta) {
  const mdPath = path.join(__dirname, '..', `chapter_${meta.id}.md`);
  const content = fs.readFileSync(mdPath, 'utf-8');
  chapters.push({
    ...meta,
    content: content
  });
}

const fileContent = `// 教科書コンテンツ (自動生成) - 各種MDファイルから生成されています
export const chapters = ${JSON.stringify(chapters, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'chapters.js'), fileContent);
console.log("Successfully generated src/data/chapters.js");
