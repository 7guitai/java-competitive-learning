// チートシート - 新しいカードを追加するにはcategoriesの該当カテゴリのcards配列に追加してください
export const cheatsheetCategories = [
  {
    id: 'io',
    name: '入出力',
    cards: [
      { front: 'Scanner の作成', back: 'Scanner sc = new Scanner(System.in);', desc: '標準入力を読むためのScannerオブジェクトを作成' },
      { front: '整数の入力', back: 'int n = sc.nextInt();', desc: 'int型（約±21億まで）' },
      { front: '大きな整数の入力', back: 'long n = sc.nextLong();', desc: 'long型（約±9×10¹⁸まで）' },
      { front: '文字列の入力', back: 'String s = sc.next();', desc: '空白/改行まで読み込む' },
      { front: '高速出力', back: 'PrintWriter out = new PrintWriter(System.out);\nout.println(ans);\nout.flush();', desc: 'System.out.printlnより高速。flush()必須！' },
    ]
  },
  {
    id: 'types',
    name: 'データ型',
    cards: [
      { front: 'int の範囲', back: '約 ±2×10⁹ (21億)', desc: '超えるとオーバーフロー→long使う' },
      { front: 'long の範囲', back: '約 ±9×10¹⁸', desc: 'リテラルには L をつける: 100000L' },
      { front: 'ラッパークラス', back: 'int→Integer, long→Long\ndouble→Double, char→Character', desc: 'コレクションに入れるには必須' },
      { front: '文字列の長さ', back: 's.length()', desc: '配列は .length（括弧なし）と間違えやすい' },
      { front: 'i番目の文字', back: 's.charAt(i)', desc: '0-indexed。戻り値はchar型' },
    ]
  },
  {
    id: 'collections',
    name: 'コレクション',
    cards: [
      { front: 'ArrayList', back: 'ArrayList<Integer> list = new ArrayList<>();\nlist.add(x); list.get(i); list.size();', desc: '可変長配列。最頻出' },
      { front: 'HashSet', back: 'HashSet<Integer> set = new HashSet<>();\nset.add(x); set.contains(x);', desc: '重複なし集合。検索O(1)' },
      { front: 'HashMap', back: 'HashMap<String,Integer> map = new HashMap<>();\nmap.put(k,v); map.getOrDefault(k,0);', desc: 'キーと値のペア。出現回数カウントに必須' },
      { front: 'Queue (BFS用)', back: 'Queue<Integer> q = new ArrayDeque<>();\nq.add(x); q.poll(); q.isEmpty();', desc: 'FIFO。BFSで必須' },
      { front: 'PriorityQueue', back: 'PriorityQueue<Integer> pq = new PriorityQueue<>();\npq.add(x); pq.poll(); // 最小値が出る', desc: '降順: Collections.reverseOrder()' },
    ]
  },
  {
    id: 'sort',
    name: 'ソート',
    cards: [
      { front: '配列ソート', back: 'Arrays.sort(arr);', desc: 'int[]等の基本型配列を昇順ソート' },
      { front: 'リストソート', back: 'Collections.sort(list);', desc: 'ArrayListを昇順ソート' },
      { front: '降順ソート', back: 'Collections.sort(list,\n  Collections.reverseOrder());', desc: '配列の降順はInteger[]にする必要あり' },
      { front: 'ラムダ式ソート', back: 'Arrays.sort(pairs,\n  (a,b)->Integer.compare(a[0],b[0]));', desc: '引き算(a-b)はオーバーフロー危険！' },
    ]
  },
  {
    id: 'algo',
    name: 'アルゴリズム',
    cards: [
      { front: '累積和', back: 'sum[i] = sum[i-1] + a[i];\nans = sum[R] - sum[L-1];', desc: '区間合計をO(1)で求める' },
      { front: 'めぐる式二分探索', back: 'long ok=0, ng=INF;\nwhile(|ok-ng|>1) {\n  mid=(ok+ng)/2;\n  if(isOk(mid)) ok=mid;\n  else ng=mid;\n}', desc: '条件の境界を探す万能テンプレート' },
      { front: 'DFS (再帰)', back: 'void dfs(int v) {\n  visited[v]=true;\n  for(int u:graph[v])\n    if(!visited[u]) dfs(u);\n}', desc: '深さ優先探索。連結判定など' },
      { front: 'BFS (キュー)', back: 'dist[s]=0; q.add(s);\nwhile(!q.isEmpty()) {\n  v=q.poll();\n  for(u:graph[v])\n    if(dist[u]==-1) {\n      dist[u]=dist[v]+1;\n      q.add(u);\n    }\n}', desc: '最短経路を求める' },
      { front: 'DP (階段)', back: 'dp[0]=1; dp[1]=1;\nfor(i=2;i<=N;i++)\n  dp[i]=dp[i-1]+dp[i-2];', desc: '漸化式で小→大へ計算' },
      { front: '方向配列', back: 'int[] dx={1,0,-1,0};\nint[] dy={0,1,0,-1};', desc: 'グリッド問題の上下左右移動' },
    ]
  },
  {
    id: 'complexity',
    name: '計算量',
    cards: [
      { front: '10⁸の法則', back: '1秒 ≈ 10⁸回のループ', desc: 'これを超えるとTLE' },
      { front: 'N=10⁵ で O(N²)', back: '10¹⁰ = 100億回 → 確実にTLE', desc: '2重ループ禁止。O(N log N)以下に' },
      { front: 'StringBuilder', back: 'sb.append(x) を使う', desc: 'String += はO(N²)でTLEの原因' },
    ]
  }
];
