// 教科書コンテンツ - 新しい章を追加するにはこの配列にオブジェクトを追加してください
export const chapters = [
  {
    id: 1,
    title: 'Java競プロの基礎と入出力',
    subtitle: 'おまじない・Scanner・出力',
    content: `# Chapter 1: Java競プロの基礎と入出力

AtCoderなどの競技プログラミングにおいて、Javaで問題を解くための最初のステップを学びます。

## 1. Javaの基本構造

Javaのプログラムは必ず**クラス（Class）**の中に書き、その中に**メソッド（Method）**という処理のまとまりを書きます。プログラムを実行したとき、最初に呼ばれるのが \`main\` メソッドです。

AtCoderでは、クラス名を必ず \`Main\` にする必要があります。

\`\`\`java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, AtCoder!");
    }
}
\`\`\`

- \`import java.util.*;\` : 便利機能を使うための宣言。競プロでは必ず書く「おまじない」です。
- \`public class Main\` : クラスの宣言。AtCoderでは \`Main\` クラスで提出します。
- \`public static void main(String[] args)\` : メインメソッド。ここからプログラムがスタートします。

## 2. 標準入力（データの受け取り）

Javaでは \`Scanner\` クラスを使うのが最も簡単です。

\`\`\`java
Scanner sc = new Scanner(System.in);
int a = sc.nextInt();       // 整数
long b = sc.nextLong();     // 大きな整数
String s = sc.next();       // 文字列
double d = sc.nextDouble(); // 小数
\`\`\`

| メソッド | 説明 |
|---|---|
| \`nextInt()\` | 整数 (\`int\`型) として読み込む |
| \`nextLong()\` | 大きな整数 (\`long\`型) として読み込む |
| \`next()\` | 文字列 (\`String\`型) として読み込む |
| \`nextDouble()\` | 小数 (\`double\`型) として読み込む |

> **ポイント**: \`Scanner\`の \`next...()\` メソッドは空白も改行も自動で区切りとして認識します。

## 3. 標準出力

\`\`\`java
System.out.println("Ans: " + a); // 改行付きで出力
System.out.print(a);             // 改行なしで出力
\`\`\`

## 4. Javaの注意点

1. **TLE (Time Limit Exceeded)** : JavaはC++より遅いため、計算量と入出力速度を意識する必要があります。
2. **MLE (Memory Limit Exceeded)** : 巨大な配列を無駄に作るとメモリオーバーになります。
`
  },
  {
    id: 2,
    title: '変数・データ型・演算子',
    subtitle: 'int / long / オーバーフロー',
    content: `# Chapter 2: 変数・データ型・演算子

**AtCoderで最も多いバグの原因の1つが「型」に関するものです。**

## 1. 基本データ型

| 型名 | 説明 | 範囲 |
|---|---|---|
| \`int\` | 整数 | 約 ±21億 |
| \`long\` | 大きな整数 | 約 ±9×10¹⁸ |
| \`double\` | 小数 | 高精度実数 |
| \`boolean\` | 真偽値 | \`true\` / \`false\` |
| \`char\` | 文字 | 1文字 |

\`\`\`java
int a = 10;
long b = 100000000000L; // Lをつける
double pi = 3.14159;
boolean isOk = true;
char c = 'A';
\`\`\`

## 2. 【超重要】オーバーフローと long 型

> **⚠️ AtCoderのD問題以降で最も頻発するバグが「オーバーフロー」です。**

\`int\`型は最大約21億まで。A×Bが10¹⁸になるなら \`int\` では桁あふれします。

**【鉄則】** 迷ったら最初からすべて \`long\` 型で計算する。

\`\`\`java
long a = sc.nextLong();
long b = sc.nextLong();
System.out.println(a * b); // long同士ならOK
\`\`\`

## 3. 文字列 (String)

\`\`\`java
String s = "Hello";
int len = s.length();        // 5
char c = s.charAt(0);        // 'H'
String sub = s.substring(1, 4); // "ell"
\`\`\`

## 4. 演算子

- 算術: \`+\`, \`-\`, \`*\`, \`/\`, \`%\`
- 比較: \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`

> **注意**: 整数同士の割り算は小数点以下が切り捨てられます。\`5 / 2\` → \`2\`

## 5. Mathクラス

\`\`\`java
Math.max(a, b);   // 最大値
Math.min(a, b);   // 最小値
Math.abs(-15);    // 絶対値 → 15
Math.pow(2, 3);   // 累乗 → 8.0
\`\`\`
`
  },
  {
    id: 3,
    title: '制御構文',
    subtitle: 'if / for / while / break',
    content: `# Chapter 3: 制御構文

## 1. 条件分岐 (if文)

\`\`\`java
if (a > 5) {
    System.out.println("aは5より大きい");
} else if (a == 5) {
    System.out.println("aは5です");
} else {
    System.out.println("aは5より小さい");
}
\`\`\`

### 論理演算子
- \`&&\` (かつ / AND)
- \`||\` (または / OR)
- \`!\` (否定 / NOT)

## 2. 繰り返し (for文)

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// 出力: 0, 1, 2, 3, 4
\`\`\`

> **ポイント**: \`i = 0; i < N; i++\` でちょうど N 回ループ。

## 3. 繰り返し (while文)

\`\`\`java
int n = 10;
while (n > 0) {
    System.out.print(n + " ");
    n /= 2;
}
// 出力: 10 5 2 1
\`\`\`

## 4. break と continue

- **\`break\`** : ループを完全に終了
- **\`continue\`** : その回をスキップして次へ

\`\`\`java
for (int i = 0; i < 10; i++) {
    if (i == 3) break;
    System.out.print(i + " "); // 0 1 2
}

for (int i = 0; i < 5; i++) {
    if (i == 2) continue;
    System.out.print(i + " "); // 0 1 3 4
}
\`\`\`
`
  },
  {
    id: 4,
    title: '配列と文字列処理',
    subtitle: '1次元/2次元配列・StringBuilder',
    content: `# Chapter 4: 配列と文字列処理

## 1. 1次元配列

\`\`\`java
int n = sc.nextInt();
int[] a = new int[n]; // 全て0で初期化
for (int i = 0; i < n; i++) {
    a[i] = sc.nextInt();
}
\`\`\`

> **注意**: インデックスは0から始まる。\`a[n]\` にアクセスするとRE。

## 2. 2次元配列（グリッド問題向け）

\`\`\`java
int[][] grid = new int[h][w];
for (int i = 0; i < h; i++)
    for (int j = 0; j < w; j++)
        grid[i][j] = sc.nextInt();
\`\`\`

### 上下左右への移動テンプレート

\`\`\`java
int[] dx = {1, 0, -1, 0};
int[] dy = {0, 1, 0, -1};
for (int i = 0; i < 4; i++) {
    int ny = y + dy[i], nx = x + dx[i];
    if (ny >= 0 && ny < h && nx >= 0 && nx < w) {
        // grid[ny][nx] を処理
    }
}
\`\`\`

## 3. 文字列処理

\`\`\`java
String s = sc.next();
for (int i = 0; i < s.length(); i++) {
    char c = s.charAt(i);
}
String sub = s.substring(1, 4);
\`\`\`

### 【超重要】StringBuilder

> **⚠️** ループ中の \`String + "a"\` は O(N²) でTLEの危険！

\`\`\`java
// 良い例
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 100000; i++) {
    sb.append("a");
}
String ans = sb.toString();
\`\`\`
`
  },
  {
    id: 5,
    title: 'メソッドとスコープ',
    subtitle: '関数定義・拡張for文・クラスフィールド',
    content: `# Chapter 5: メソッドとスコープ

## 1. メソッドの定義

\`\`\`java
public class Main {
    public static void main(String[] args) {
        int result = add(10, 20);
        System.out.println(result); // 30
    }
    
    public static int add(int x, int y) {
        return x + y;
    }
}
\`\`\`

- 競プロでは \`static\` をつける必要あり
- 返す値がない場合は \`void\`

## 2. 拡張 for 文

\`\`\`java
int[] a = {10, 20, 30};
for (int x : a) {
    System.out.println(x);
}
\`\`\`

## 3. スコープとクラスフィールド

変数は宣言されたブロック \`{}\` の中だけで有効。

### グローバル変数として使うクラスフィールド

\`\`\`java
public class Main {
    static int n;
    static int[] a;
    static ArrayList<Integer>[] graph;
    
    public static void main(String[] args) {
        n = sc.nextInt();
        a = new int[n];
        // ...
    }
    
    public static void dfs(int v) {
        // n, a, graph にアクセスできる
    }
}
\`\`\`

> **ポイント**: DFSなどでグラフや visited 配列をクラスフィールドに置くのが王道パターン。
`
  },
  {
    id: 6,
    title: 'コレクションフレームワーク',
    subtitle: 'ArrayList / Set / Map / Queue / PQ',
    content: `# Chapter 6: コレクションフレームワーク

D問題突破に必須のデータ構造です。

## 1. ArrayList (可変長配列)

\`\`\`java
ArrayList<Integer> list = new ArrayList<>();
list.add(10);           // 追加
int x = list.get(0);    // 取得
list.set(0, 50);        // 更新
list.size();            // サイズ
\`\`\`

> **注意**: 基本型は使えない。\`Integer\`, \`Long\` 等のラッパークラスを使う。

## 2. HashSet / TreeSet (集合)

\`\`\`java
HashSet<Integer> set = new HashSet<>();
set.add(10);
set.add(10); // 重複は無視される
set.contains(10); // true (O(1))
set.size(); // 1
\`\`\`

- **HashSet**: O(1) で検索。順序なし。
- **TreeSet**: O(log N) で検索。自動ソート。

## 3. HashMap / TreeMap (連想配列)

\`\`\`java
HashMap<String, Integer> map = new HashMap<>();
map.put("apple", 100);
map.get("apple"); // 100
map.getOrDefault("orange", 0); // 0

// 出現回数カウント
for (String w : words) {
    map.put(w, map.getOrDefault(w, 0) + 1);
}
\`\`\`

## 4. Queue / Deque (BFS用)

\`\`\`java
Queue<Integer> q = new ArrayDeque<>();
q.add(1);       // 末尾に追加
q.poll();       // 先頭を取り出し
q.peek();       // 先頭を見る
q.isEmpty();    // 空かどうか
\`\`\`

## 5. PriorityQueue (優先度付きキュー)

\`\`\`java
PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.add(30); pq.add(10); pq.add(20);
pq.poll(); // 10 (最小値が出る)

// 降順にしたい場合
PriorityQueue<Integer> pqMax = 
    new PriorityQueue<>(Collections.reverseOrder());
\`\`\`
`
  },
  {
    id: 7,
    title: 'ソートとカスタム比較',
    subtitle: 'Arrays.sort / ラムダ式 / Comparable',
    content: `# Chapter 7: ソートとカスタム比較

## 1. 基本的なソート

\`\`\`java
int[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr); // {1, 2, 5, 8, 9}

ArrayList<Integer> list = new ArrayList<>(Arrays.asList(5, 2, 8));
Collections.sort(list);

// 降順
Collections.sort(list, Collections.reverseOrder());
\`\`\`

## 2. カスタムソート

### Comparable を実装

\`\`\`java
class Item implements Comparable<Item> {
    int weight, value;
    public int compareTo(Item o) {
        if (this.value != o.value)
            return Integer.compare(o.value, this.value); // 降順
        return Integer.compare(this.weight, o.weight);   // 昇順
    }
}
\`\`\`

### ラムダ式

\`\`\`java
int[][] pairs = new int[N][2];
Arrays.sort(pairs, (a, b) -> Integer.compare(a[0], b[0]));
\`\`\`

> **⚠️** \`a[0] - b[0]\` はオーバーフローの危険あり。必ず \`Integer.compare()\` を使おう！
`
  },
  {
    id: 8,
    title: 'D問題頻出のアルゴリズム',
    subtitle: '累積和・二分探索・DFS/BFS・DP',
    content: `# Chapter 8: D問題頻出のアルゴリズム

## 1. 累積和

区間の合計を O(1) で求めるテクニック。

\`\`\`java
long[] sum = new long[n + 1];
for (int i = 1; i <= n; i++)
    sum[i] = sum[i - 1] + a[i];

// 区間 [L, R] の合計
long ans = sum[R] - sum[L - 1];
\`\`\`

## 2. 二分探索

### めぐる式二分探索

\`\`\`java
long ok = 0, ng = 1000000000000L;
while (Math.abs(ok - ng) > 1) {
    long mid = (ok + ng) / 2;
    if (isOk(mid)) ok = mid;
    else ng = mid;
}
\`\`\`

## 3. DFS / BFS

### グラフの表現（隣接リスト）

\`\`\`java
ArrayList<Integer>[] graph = new ArrayList[N];
for (int i = 0; i < N; i++) graph[i] = new ArrayList<>();
graph[u].add(v);
graph[v].add(u);
\`\`\`

### DFS (再帰)

\`\`\`java
static boolean[] visited;
public static void dfs(int v) {
    visited[v] = true;
    for (int next : graph[v])
        if (!visited[next]) dfs(next);
}
\`\`\`

### BFS (キュー)

\`\`\`java
Queue<Integer> q = new ArrayDeque<>();
int[] dist = new int[N];
Arrays.fill(dist, -1);
dist[0] = 0; q.add(0);
while (!q.isEmpty()) {
    int v = q.poll();
    for (int next : graph[v])
        if (dist[next] == -1) {
            dist[next] = dist[v] + 1;
            q.add(next);
        }
}
\`\`\`

## 4. 動的計画法 (DP)

\`\`\`java
// 階段の登り方（1段 or 2段）
long[] dp = new long[N + 1];
dp[0] = 1; dp[1] = 1;
for (int i = 2; i <= N; i++)
    dp[i] = dp[i - 1] + dp[i - 2];
\`\`\`
`
  },
  {
    id: 9,
    title: '高速入出力と計算量',
    subtitle: '10⁸の法則・PrintWriter・FastScanner',
    content: `# Chapter 9: 高速入出力と計算量

## 1. 計算量の見積もり（10⁸の法則）

> **「1秒間に処理できるループ回数は約10⁸（1億）回」**

| N | O(N) | O(N log N) | O(N²) |
|---|---|---|---|
| 10⁵ | ✅ 0.001秒 | ✅ 0.002秒 | ❌ 100億回 |
| 10⁶ | ✅ 0.01秒 | ✅ 0.02秒 | ❌ TLE |

## 2. PrintWriter (高速出力)

\`\`\`java
PrintWriter out = new PrintWriter(System.out);
for (int i = 0; i < 100000; i++)
    out.println(i);
out.flush(); // 必ず呼ぶ！
\`\`\`

## 3. FastScanner (高速入力)

\`\`\`java
class FastScanner {
    private final InputStream in = System.in;
    private final byte[] buffer = new byte[1024];
    private int head = 0, tail = 0;
    
    private boolean hasNextByte() {
        if (head < tail) return true;
        head = 0;
        try { tail = in.read(buffer); }
        catch (IOException e) { e.printStackTrace(); }
        return tail > 0;
    }
    private int readByte() { 
        return hasNextByte() ? buffer[head++] : -1; 
    }
    public int nextInt() { return (int) nextLong(); }
    public long nextLong() {
        // ... (バイト単位で高速に読み込む)
    }
}
\`\`\`

> **ポイント**: D問題以降では FastScanner + PrintWriter をテンプレートとして使おう！
`
  }
];
