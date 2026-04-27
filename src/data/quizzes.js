// クイズデータ - 新しい問題を追加するにはこの配列にオブジェクトを追加してください
// answer は 0~3 のインデックスで正解を指定します
export const quizzes = [
  {
    chapter: 1,
    question: 'AtCoderでJavaの提出時、クラス名は何にする必要がありますか？',
    options: ['Solution', 'Main', 'AtCoder', 'Answer'],
    answer: 1,
    explanation: 'AtCoderではクラス名を必ず Main にして提出する必要があります。'
  },
  {
    chapter: 1,
    question: '標準入力から整数を1つ読み込むコードとして正しいものは？',
    options: ['sc.readInt()', 'sc.nextInt()', 'sc.getInt()', 'sc.parseInt()'],
    answer: 1,
    explanation: 'Scannerクラスの nextInt() メソッドで整数を読み込みます。'
  },
  {
    chapter: 2,
    question: '<code>int</code> 型の最大値はおよそいくつですか？',
    options: ['約100万', '約1億', '約21億', '約9×10¹⁸'],
    answer: 2,
    explanation: 'int型は約±21億（2×10⁹）まで。それ以上はlong型を使います。'
  },
  {
    chapter: 2,
    question: '<code>long</code> 型のリテラルを書くとき、数字の末尾に何をつけますか？',
    options: ['D', 'F', 'L', 'N'],
    answer: 2,
    explanation: 'long型のリテラルには末尾に L をつけます。例: 100000000000L'
  },
  {
    chapter: 2,
    question: '整数同士の割り算 <code>5 / 2</code> の結果は？',
    options: ['2.5', '2', '3', 'エラー'],
    answer: 1,
    explanation: '整数同士の割り算は小数点以下が切り捨てられます。5/2=2 です。'
  },
  {
    chapter: 3,
    question: '<code>for (int i = 0; i < N; i++)</code> でループは何回実行されますか？',
    options: ['N-1回', 'N回', 'N+1回', '無限ループ'],
    answer: 1,
    explanation: 'i=0からi=N-1まで、ちょうどN回ループします。'
  },
  {
    chapter: 3,
    question: 'ループを途中で完全に終了するキーワードは？',
    options: ['continue', 'return', 'break', 'exit'],
    answer: 2,
    explanation: 'breakはループを完全に終了します。continueはその回だけスキップです。'
  },
  {
    chapter: 4,
    question: '配列 <code>int[] a = new int[5]</code> で有効なインデックスの範囲は？',
    options: ['0〜5', '1〜5', '0〜4', '1〜4'],
    answer: 2,
    explanation: 'Javaの配列は0-indexedなので、サイズ5なら0〜4が有効範囲です。'
  },
  {
    chapter: 4,
    question: 'ループ中で大量の文字列結合をする場合、何を使うべきですか？',
    options: ['String +', 'StringBuffer', 'StringBuilder', 'CharArray'],
    answer: 2,
    explanation: 'StringBuilderを使うことでO(N)で結合できます。String+はO(N²)でTLEの原因に。'
  },
  {
    chapter: 5,
    question: 'mainメソッドから直接呼び出すメソッドに必要な修飾子は？',
    options: ['public', 'static', 'final', 'private'],
    answer: 1,
    explanation: 'mainがstaticなので、直接呼び出すメソッドにもstaticが必要です。'
  },
  {
    chapter: 6,
    question: '<code>HashSet</code> の要素検索の計算量は？',
    options: ['O(N)', 'O(log N)', 'O(1)', 'O(N²)'],
    answer: 2,
    explanation: 'HashSetはハッシュを使うため、平均O(1)で検索できます。'
  },
  {
    chapter: 6,
    question: 'BFS（幅優先探索）で使うデータ構造は？',
    options: ['Stack', 'Queue', 'PriorityQueue', 'ArrayList'],
    answer: 1,
    explanation: 'BFSではQueue（FIFO）を使って近い頂点から順に探索します。'
  },
  {
    chapter: 6,
    question: '<code>HashMap</code> でキーが存在しない場合にデフォルト値を返すメソッドは？',
    options: ['get()', 'getDefault()', 'getOrDefault()', 'getIfAbsent()'],
    answer: 2,
    explanation: 'map.getOrDefault(key, defaultValue) でキーがなければデフォルト値を返します。'
  },
  {
    chapter: 7,
    question: 'カスタムソートで <code>a[0] - b[0]</code> の代わりに何を使うべきですか？',
    options: ['Math.compare()', 'Integer.compare()', 'Objects.compare()', 'Arrays.compare()'],
    answer: 1,
    explanation: 'Integer.compare(a, b) を使えばオーバーフローのリスクを避けられます。'
  },
  {
    chapter: 7,
    question: '<code>PriorityQueue</code> をデフォルトで使うと、何が先に出てきますか？',
    options: ['最後に入れた要素', '最初に入れた要素', '最小の要素', '最大の要素'],
    answer: 2,
    explanation: 'デフォルトでは昇順（最小値が先）です。降順にはCollections.reverseOrder()を使います。'
  },
  {
    chapter: 8,
    question: '累積和を使うと、区間 [L, R] の合計を求める計算量は？',
    options: ['O(N)', 'O(log N)', 'O(1)', 'O(R-L)'],
    answer: 2,
    explanation: '累積和配列を事前に作っておけば sum[R] - sum[L-1] でO(1)です。'
  },
  {
    chapter: 8,
    question: 'DFS（深さ優先探索）の実装で一般的に使う手法は？',
    options: ['キュー', '再帰関数', '累積和', 'ソート'],
    answer: 1,
    explanation: 'DFSは再帰関数を使って「行けるところまで深く進む」のが一般的です。'
  },
  {
    chapter: 9,
    question: 'N=10⁵ のとき、O(N²) のアルゴリズムは間に合いますか？',
    options: ['余裕で間に合う', 'ギリギリ間に合う', '確実にTLE', '問題による'],
    answer: 2,
    explanation: '10⁵×10⁵=10¹⁰（100億回）。10⁸の法則から確実にTLEです。'
  },
  {
    chapter: 9,
    question: '<code>PrintWriter</code> で出力した後、最後に必ず呼ぶメソッドは？',
    options: ['close()', 'flush()', 'end()', 'finish()'],
    answer: 1,
    explanation: 'flush()を呼ばないとバッファに溜まったまま出力されません。'
  },
  {
    chapter: 8,
    question: '最短経路を求めるのに適したアルゴリズムは？',
    options: ['DFS', 'BFS', '累積和', 'ソート'],
    answer: 1,
    explanation: 'BFS（幅優先探索）は各辺のコストが等しい場合の最短経路を求められます。'
  },
];
