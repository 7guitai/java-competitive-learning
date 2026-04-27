// クイズデータ (自動生成) - 128問収録
// answer は 0~3 のインデックスで正解を指定します
export const quizzes = [
  {
    "chapter": 1,
    "question": "AtCoderでJavaの提出時、クラス名は何にする必要がありますか？",
    "options": [
      "Solution",
      "Main",
      "AtCoder",
      "Answer"
    ],
    "answer": 1,
    "explanation": "AtCoderではクラス名を必ず Main にして提出する必要があります。"
  },
  {
    "chapter": 1,
    "question": "標準入力から整数を1つ読み込むコードとして正しいものは？",
    "options": [
      "sc.readInt()",
      "sc.nextInt()",
      "sc.getInt()",
      "sc.parseInt()"
    ],
    "answer": 1,
    "explanation": "Scannerクラスの nextInt() メソッドで整数を読み込みます。"
  },
  {
    "chapter": 1,
    "question": "Javaのプログラムで最初に実行されるメソッドのシグネチャは？",
    "options": [
      "public static void main(String[] args)",
      "public void main(String args)",
      "static void main()",
      "public static int main()"
    ],
    "answer": 0,
    "explanation": "JVMがエントリポイントとして public static void main(String[] args) を探します。"
  },
  {
    "chapter": 1,
    "question": "System.out.println() と System.out.print() の違いは？",
    "options": [
      "出力速度",
      "改行の有無",
      "出力できる型",
      "エラーの有無"
    ],
    "answer": 1,
    "explanation": "println() は出力の最後に改行を追加しますが、print() は追加しません。"
  },
  {
    "chapter": 1,
    "question": "Scannerを使うためにインポートするパッケージは？",
    "options": [
      "java.io.*",
      "java.util.*",
      "java.math.*",
      "java.lang.*"
    ],
    "answer": 1,
    "explanation": "Scannerは java.util パッケージに含まれています。"
  },
  {
    "chapter": 1,
    "question": "Scannerで空白区切りの文字列を1つ読み込むメソッドは？",
    "options": [
      "nextLine()",
      "nextString()",
      "next()",
      "read()"
    ],
    "answer": 2,
    "explanation": "next() は次の空白文字までの文字列を読み込みます。"
  },
  {
    "chapter": 1,
    "question": "Scannerのメモリリークを防ぐために推奨されるメソッドは？",
    "options": [
      "delete()",
      "free()",
      "clear()",
      "close()"
    ],
    "answer": 3,
    "explanation": "公式には close() メソッドでリソースを解放することが推奨されます。"
  },
  {
    "chapter": 1,
    "question": "AtCoderのJava実行時間制限は通常どれくらいですか？",
    "options": [
      "0.5秒",
      "1秒",
      "2秒",
      "5秒"
    ],
    "answer": 2,
    "explanation": "ほとんどの問題で実行時間制限は2秒（2000ms）に設定されています。"
  },
  {
    "chapter": 1,
    "question": "System.out.printf() の機能は？",
    "options": [
      "エラー出力",
      "フォーマット指定出力",
      "配列の出力",
      "文字列の結合"
    ],
    "answer": 1,
    "explanation": "C言語の printf と同様に、桁数などを指定して出力できます。"
  },
  {
    "chapter": 1,
    "question": "Javaのコンパイルと実行の仕組みとして正しいものは？",
    "options": [
      "直接機械語に変換",
      "インタプリタのみ",
      "バイトコードにコンパイル後JVMで実行",
      "ブラウザで実行"
    ],
    "answer": 2,
    "explanation": "Javaは一度バイトコードにコンパイルされ、JVM上で実行されます。"
  },
  {
    "chapter": 2,
    "question": "int型の最大値はおよそいくつですか？",
    "options": [
      "約100万",
      "約1億",
      "約21億",
      "約9×10¹⁸"
    ],
    "answer": 2,
    "explanation": "int型（32bit）は約±21億（2×10⁹）まで。それ以上はlong型を使います。"
  },
  {
    "chapter": 2,
    "question": "long型のリテラルを書くとき、数字の末尾に何をつけますか？",
    "options": [
      "D",
      "F",
      "L",
      "N"
    ],
    "answer": 2,
    "explanation": "long型のリテラルには末尾に L をつけます。例: 100000000000L"
  },
  {
    "chapter": 2,
    "question": "整数同士の割り算 `5 / 2` の結果は？",
    "options": [
      "2.5",
      "2",
      "3",
      "エラー"
    ],
    "answer": 1,
    "explanation": "整数同士の割り算は小数点以下が切り捨てられます。5/2=2 です。"
  },
  {
    "chapter": 2,
    "question": "Stringオブジェクトの性質を表す言葉は？",
    "options": [
      "ミュータブル",
      "イミュータブル",
      "ダイナミック",
      "プリミティブ"
    ],
    "answer": 1,
    "explanation": "Stringはイミュータブル（不変）であり、一度作成されると中身を変更できません。"
  },
  {
    "chapter": 2,
    "question": "文字列 s1 と s2 の中身が同じか判定する正しい方法は？",
    "options": [
      "s1 == s2",
      "s1 === s2",
      "s1.equals(s2)",
      "s1.sameAs(s2)"
    ],
    "answer": 2,
    "explanation": "== は参照（メモリアドレス）の比較になるため、中身の比較には equals() を使います。"
  },
  {
    "chapter": 2,
    "question": "Math.abs(-15) の戻り値は？",
    "options": [
      "-15",
      "0",
      "15",
      "エラー"
    ],
    "answer": 2,
    "explanation": "Math.abs() は絶対値を返します。"
  },
  {
    "chapter": 2,
    "question": "Math.max(10, 20) の戻り値は？",
    "options": [
      "10",
      "20",
      "30",
      "0"
    ],
    "answer": 1,
    "explanation": "引数のうち大きい方の値を返します。"
  },
  {
    "chapter": 2,
    "question": "double型の精度（有効桁数）は？",
    "options": [
      "約7桁",
      "約15桁",
      "約30桁",
      "無限"
    ],
    "answer": 1,
    "explanation": "64ビット浮動小数点数であるdouble型の精度は約15桁です。"
  },
  {
    "chapter": 2,
    "question": "プリミティブ型に該当しないものはどれ？",
    "options": [
      "int",
      "boolean",
      "String",
      "char"
    ],
    "answer": 2,
    "explanation": "String はクラス（参照型）です。"
  },
  {
    "chapter": 2,
    "question": "int型の最大値に 1 を足すとどうなる？",
    "options": [
      "エラーになる",
      "自動でlongになる",
      "最小値（マイナス）にループする",
      "値は変わらない"
    ],
    "answer": 2,
    "explanation": "オーバーフローが発生し、符号ビットが反転して負の最小値になります。"
  },
  {
    "chapter": 2,
    "question": "文字列sの長さを取得する方法は？",
    "options": [
      "s.size",
      "s.length",
      "s.size()",
      "s.length()"
    ],
    "answer": 3,
    "explanation": "文字列の長さは length() メソッドで取得します。"
  },
  {
    "chapter": 2,
    "question": "char型は何ビットで1文字を表現しますか？",
    "options": [
      "8 bit",
      "16 bit",
      "32 bit",
      "64 bit"
    ],
    "answer": 1,
    "explanation": "Javaのchar型はUTF-16（16ビット）で表現されます。"
  },
  {
    "chapter": 3,
    "question": "for (int i = 0; i < N; i++) でループは何回実行されますか？",
    "options": [
      "N-1回",
      "N回",
      "N+1回",
      "無限ループ"
    ],
    "answer": 1,
    "explanation": "i=0からi=N-1まで、ちょうどN回ループします。"
  },
  {
    "chapter": 3,
    "question": "ループを途中で完全に終了するキーワードは？",
    "options": [
      "continue",
      "return",
      "break",
      "exit"
    ],
    "answer": 2,
    "explanation": "breakはループを完全に終了します。continueはその回だけスキップです。"
  },
  {
    "chapter": 3,
    "question": "論理演算子「かつ」を表す記号は？",
    "options": [
      "||",
      "&&",
      "!",
      "=="
    ],
    "answer": 1,
    "explanation": "&& は論理積（AND / かつ）を表します。"
  },
  {
    "chapter": 3,
    "question": "論理演算子のショートサーキット（短絡評価）とは？",
    "options": [
      "エラーを無視する",
      "高速なCPUを使う",
      "左から評価し、結果が確定したら右側を評価しない",
      "常にtrueを返す"
    ],
    "answer": 2,
    "explanation": "A && B で Aがfalseの場合、Bは評価されません。"
  },
  {
    "chapter": 3,
    "question": "Java 14以降の新しい switch 式の構文で使われる記号は？",
    "options": [
      "=>",
      "->",
      "::",
      ">>"
    ],
    "answer": 1,
    "explanation": "アロー構文 (->) を使うことで、breakを省略してスッキリ書けます。"
  },
  {
    "chapter": 3,
    "question": "多重ループを一気に抜けるためのJavaの機能は？",
    "options": [
      "goto",
      "super break",
      "ラベル付き break",
      "exit(0)"
    ],
    "answer": 2,
    "explanation": "ループにラベルを付けることで、外側のループごと break できます。"
  },
  {
    "chapter": 3,
    "question": "while (true) の意味は？",
    "options": [
      "1回だけ実行",
      "エラーになる",
      "無限ループ",
      "実行されない"
    ],
    "answer": 2,
    "explanation": "条件が常に true なので、内部で break しない限り無限ループになります。"
  },
  {
    "chapter": 3,
    "question": "ループの「現在の回をスキップして次へ進む」キーワードは？",
    "options": [
      "break",
      "continue",
      "pass",
      "next"
    ],
    "answer": 1,
    "explanation": "continue は残りの処理をスキップし、次の反復へ進みます。"
  },
  {
    "chapter": 3,
    "question": "if (a = 5) はコンパイルエラーになる。なぜ？",
    "options": [
      "= は代入演算子だから",
      "括弧が足りないから",
      "数字が間違っているから",
      "型が違うから"
    ],
    "answer": 0,
    "explanation": "比較には == を使います。= は代入になるため条件式として不正です。"
  },
  {
    "chapter": 3,
    "question": "if文で else if を使う目的は？",
    "options": [
      "処理を遅くする",
      "複数の条件を順番に判定する",
      "必ず実行する処理を書く",
      "エラーを防ぐ"
    ],
    "answer": 1,
    "explanation": "前の条件がfalseだった場合に、別の条件を判定するために使います。"
  },
  {
    "chapter": 3,
    "question": "do-while文の特徴は？",
    "options": [
      "逆順にループする",
      "条件に関わらず最低1回は実行される",
      "無限ループ専用",
      "配列専用"
    ],
    "answer": 1,
    "explanation": "条件判定がループの最後に行われるため、必ず1回は処理が実行されます。"
  },
  {
    "chapter": 3,
    "question": "switch文で条件分岐の終わりに書く、デフォルトの処理は？",
    "options": [
      "else",
      "finally",
      "default",
      "other"
    ],
    "answer": 2,
    "explanation": "どの case にも一致しなかった場合は default の処理が実行されます。"
  },
  {
    "chapter": 4,
    "question": "配列 int[] a = new int[5] で有効なインデックスの範囲は？",
    "options": [
      "0〜5",
      "1〜5",
      "0〜4",
      "1〜4"
    ],
    "answer": 2,
    "explanation": "Javaの配列は0-indexedなので、サイズ5なら0〜4が有効範囲です。"
  },
  {
    "chapter": 4,
    "question": "ループ中で大量の文字列結合をする場合、何を使うべきですか？",
    "options": [
      "String +",
      "StringBuffer",
      "StringBuilder",
      "CharArray"
    ],
    "answer": 2,
    "explanation": "StringBuilderを使うことでO(N)で結合できます。String+はO(N²)でTLEの原因に。"
  },
  {
    "chapter": 4,
    "question": "基本型(intなど)の配列を new した直後の中身は？",
    "options": [
      "null",
      "ランダムな値",
      "0 で初期化される",
      "エラー"
    ],
    "answer": 2,
    "explanation": "Javaでは基本型の配列は自動的に 0 (booleanならfalse) で初期化されます。"
  },
  {
    "chapter": 4,
    "question": "配列の要素数を取得する方法は？",
    "options": [
      "a.size",
      "a.length",
      "a.size()",
      "a.length()"
    ],
    "answer": 1,
    "explanation": "配列の要素数は length （括弧なし）で取得します。"
  },
  {
    "chapter": 4,
    "question": "2次元配列 grid[i][j] で、i が表すのは通常どれ？",
    "options": [
      "幅 (x座標)",
      "高さ (y座標)",
      "奥行き",
      "色"
    ],
    "answer": 1,
    "explanation": "行（縦・高さ）を最初のインデックスにするのが一般的です。"
  },
  {
    "chapter": 4,
    "question": "String.substring(1, 4) の戻り値の文字数は？",
    "options": [
      "2文字",
      "3文字",
      "4文字",
      "5文字"
    ],
    "answer": 1,
    "explanation": "インデックス1から3（4の直前）までの 3文字 が返されます。"
  },
  {
    "chapter": 4,
    "question": "StringBuilderに追加した文字を最終的にStringに戻すメソッドは？",
    "options": [
      "toString()",
      "parseString()",
      "getString()",
      "value()"
    ],
    "answer": 0,
    "explanation": "sb.toString() で String 型に変換します。"
  },
  {
    "chapter": 4,
    "question": "StringBuilder と StringBuffer の違いは？",
    "options": [
      "速度は同じ",
      "Bufferの方が速い",
      "Builderはマルチスレッド非対応だが速い",
      "Builderは文字列専用"
    ],
    "answer": 2,
    "explanation": "競プロのようなシングルスレッド環境では、同期化処理のない StringBuilder の方が高速です。"
  },
  {
    "chapter": 4,
    "question": "Javaで配列のサイズを後から変更することはできる？",
    "options": [
      "できる",
      "できない",
      "条件付きでできる",
      "メソッドを使えばできる"
    ],
    "answer": 1,
    "explanation": "配列のサイズは固定です。可変長にしたい場合は ArrayList を使います。"
  },
  {
    "chapter": 4,
    "question": "文字列 s を文字の配列 (char[]) に変換するメソッドは？",
    "options": [
      "toChars()",
      "split()",
      "toCharArray()",
      "chars()"
    ],
    "answer": 2,
    "explanation": "s.toCharArray() で char の配列に変換できます。"
  },
  {
    "chapter": 4,
    "question": "盤面の探索で使う方向配列 dx, dy を4方向分定義するときの要素数は？",
    "options": [
      "2",
      "4",
      "8",
      "9"
    ],
    "answer": 1,
    "explanation": "上下左右の4方向なので、要素数は4です。"
  },
  {
    "chapter": 4,
    "question": "配列の範囲外にアクセスしたときに発生する例外は？",
    "options": [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "ArithmeticException",
      "ClassCastException"
    ],
    "answer": 1,
    "explanation": "インデックスが負、またはサイズ以上の場合に発生します。"
  },
  {
    "chapter": 5,
    "question": "mainメソッドから直接呼び出すメソッドに必要な修飾子は？",
    "options": [
      "public",
      "static",
      "final",
      "private"
    ],
    "answer": 1,
    "explanation": "mainがstaticなので、直接呼び出すメソッドにもstaticが必要です。"
  },
  {
    "chapter": 5,
    "question": "Javaのメソッドの引数は、どのような方式で渡される？",
    "options": [
      "値渡し (Pass by Value)",
      "参照渡し (Pass by Reference)",
      "ポインタ渡し",
      "名前渡し"
    ],
    "answer": 0,
    "explanation": "Javaはすべて「値渡し」です。参照型の場合は「アドレスの値」がコピーして渡されます。"
  },
  {
    "chapter": 5,
    "question": "int型の引数をメソッドに渡し、メソッド内で変更した場合、元の変注はどうなる？",
    "options": [
      "変更される",
      "変更されない",
      "エラーになる",
      "nullになる"
    ],
    "answer": 1,
    "explanation": "プリミティブ型は値そのものがコピーされるため、元の変数は影響を受けません。"
  },
  {
    "chapter": 5,
    "question": "配列を引数としてメソッドに渡し、メソッド内で配列の要素を変更した場合、元の配列はどうなる？",
    "options": [
      "変更される",
      "変更されない",
      "エラーになる",
      "新しい配列ができる"
    ],
    "answer": 0,
    "explanation": "同じメモリアドレスを参照しているため、元の配列も変更されます。"
  },
  {
    "chapter": 5,
    "question": "戻り値がないメソッドの定義に使うキーワードは？",
    "options": [
      "null",
      "empty",
      "void",
      "none"
    ],
    "answer": 2,
    "explanation": "void は「戻り値なし」を意味します。"
  },
  {
    "chapter": 5,
    "question": "メソッド名が同じでも、引数の型や数が違えば複数定義できる機能を何と呼ぶ？",
    "options": [
      "オーバーライド",
      "オーバーロード",
      "カプセル化",
      "ポリモーフィズム"
    ],
    "answer": 1,
    "explanation": "引数違いの同名メソッドを定義することをオーバーロードと呼びます。"
  },
  {
    "chapter": 5,
    "question": "拡張for文 (for-each) でできないことは？",
    "options": [
      "要素の出力",
      "全要素の合計",
      "配列のインデックスの取得",
      "要素のカウント"
    ],
    "answer": 2,
    "explanation": "拡張for文は要素を順番に取り出すだけなので、インデックス番号（i）を直接扱うことはできません。"
  },
  {
    "chapter": 5,
    "question": "クラスの直下（メソッドの外）に定義された変数を何と呼ぶ？",
    "options": [
      "ローカル変数",
      "スコープ変数",
      "クラスフィールド",
      "ブロック変数"
    ],
    "answer": 2,
    "explanation": "クラス全体で共有できる変数をフィールドと呼びます。"
  },
  {
    "chapter": 5,
    "question": "変数名の有効な範囲（見える範囲）のことを何と呼ぶ？",
    "options": [
      "ライフサイクル",
      "スコープ",
      "ブロック",
      "ポインタ"
    ],
    "answer": 1,
    "explanation": "変数は宣言されたブロック {} の中（スコープ）でのみ有効です。"
  },
  {
    "chapter": 5,
    "question": "拡張for文の正しい構文は？",
    "options": [
      "for (int x in a)",
      "for (int x : a)",
      "for (x from a)",
      "foreach (int x : a)"
    ],
    "answer": 1,
    "explanation": "for (型 変数名 : 配列やリスト) の形式で記述します。"
  },
  {
    "chapter": 6,
    "question": "HashSet の要素検索の平均計算量は？",
    "options": [
      "O(N)",
      "O(log N)",
      "O(1)",
      "O(N²)"
    ],
    "answer": 2,
    "explanation": "HashSetはハッシュテーブルを使うため、平均O(1)で検索できます。"
  },
  {
    "chapter": 6,
    "question": "HashMap でキーが存在しない場合にデフォルト値を返すメソッドは？",
    "options": [
      "get()",
      "getDefault()",
      "getOrDefault()",
      "getIfAbsent()"
    ],
    "answer": 2,
    "explanation": "map.getOrDefault(key, defaultValue) でキーがなければデフォルト値を返します。"
  },
  {
    "chapter": 6,
    "question": "可変長配列の実装クラスはどれ？",
    "options": [
      "Array",
      "ArrayList",
      "HashSet",
      "TreeMap"
    ],
    "answer": 1,
    "explanation": "ArrayList はサイズが自動的に拡張される配列の実装です。"
  },
  {
    "chapter": 6,
    "question": "要素を常に「ソートされた状態」に保つSetの実装クラスは？",
    "options": [
      "HashSet",
      "TreeSet",
      "SortedSet",
      "LinkedHashSet"
    ],
    "answer": 1,
    "explanation": "TreeSet は二分探索木を用いて要素を常に昇順に保ちます。"
  },
  {
    "chapter": 6,
    "question": "PriorityQueue をデフォルトで使うと、何が先に出てきますか？",
    "options": [
      "最後に入れた要素",
      "最初に入れた要素",
      "最小の要素",
      "最大の要素"
    ],
    "answer": 2,
    "explanation": "デフォルトでは昇順（最小値が先）です。"
  },
  {
    "chapter": 6,
    "question": "Queue の実装として、LinkedList よりもキャッシュ効率が良くて推奨されるクラスは？",
    "options": [
      "ArrayDeque",
      "PriorityQueue",
      "Vector",
      "Stack"
    ],
    "answer": 0,
    "explanation": "ArrayDeque は配列ベースの双方向キューで、高速に動作します。"
  },
  {
    "chapter": 6,
    "question": "コレクションにプリミティブ型(int等)を直接入れることはできる？",
    "options": [
      "できる",
      "できない",
      "特定のコレクションのみ可能",
      "設定変更で可能"
    ],
    "answer": 1,
    "explanation": "コレクションには参照型しか入れられません。Integer などのラッパークラスを使います。"
  },
  {
    "chapter": 6,
    "question": "ArrayList の先頭（インデックス0）に要素を挿入・削除する計算量は？",
    "options": [
      "O(1)",
      "O(log N)",
      "O(N)",
      "O(N²)"
    ],
    "answer": 2,
    "explanation": "後ろの要素を全てズラす必要があるため、O(N) の時間がかかります。"
  },
  {
    "chapter": 6,
    "question": "HashSetが重複判定に内部で使用するメソッドは？",
    "options": [
      "compare() と diff()",
      "hashCode() と equals()",
      "sameAs()",
      "isEqual()"
    ],
    "answer": 1,
    "explanation": "まず hashCode() で場所を探し、衝突したら equals() で判定します。"
  },
  {
    "chapter": 6,
    "question": "Mapで、キーと値のペアを登録・上書きするメソッドは？",
    "options": [
      "add()",
      "insert()",
      "put()",
      "set()"
    ],
    "answer": 2,
    "explanation": "Map への登録には put(key, value) メソッドを使用します。"
  },
  {
    "chapter": 6,
    "question": "PriorityQueue を降順（最大値から取り出す）にする方法は？",
    "options": [
      "new PriorityQueue(true)",
      "new PriorityQueue(Collections.reverseOrder())",
      "pq.reverse()",
      "降順は不可"
    ],
    "answer": 1,
    "explanation": "Collections.reverseOrder() をコンストラクタに渡します。"
  },
  {
    "chapter": 6,
    "question": "「ある値が存在するかどうか」を高速に判定するデータ構造は？",
    "options": [
      "ArrayList",
      "ArrayDeque",
      "HashSet",
      "Queue"
    ],
    "answer": 2,
    "explanation": "HashSet (Setインターフェース) が最適です。"
  },
  {
    "chapter": 7,
    "question": "カスタムソートで a[0] - b[0] の代わりに何を使うべきですか？",
    "options": [
      "Math.compare()",
      "Integer.compare()",
      "Objects.compare()",
      "Arrays.compare()"
    ],
    "answer": 1,
    "explanation": "引き算はオーバーフローのリスクがあるため、Integer.compare() を使います。"
  },
  {
    "chapter": 7,
    "question": "プリミティブ型の配列 (int[]) を Collections.reverseOrder() で降順ソートできる？",
    "options": [
      "できる",
      "できない",
      "Java 11以降ならできる",
      "エラーにはならないが無視される"
    ],
    "answer": 1,
    "explanation": "Collections.reverseOrder() はオブジェクト型 (Integer[] 等) にしか使えません。"
  },
  {
    "chapter": 7,
    "question": "Javaの標準ソートで、オブジェクト配列（Integer等）に使われるアルゴリズムは？",
    "options": [
      "バブルソート",
      "クイックソート",
      "TimSort",
      "ヒープソート"
    ],
    "answer": 2,
    "explanation": "オブジェクトのソートには、安定ソートである TimSort（マージソートの派生）が使われます。"
  },
  {
    "chapter": 7,
    "question": "Comparableインターフェースを実装する際にオーバーライドするメソッドは？",
    "options": [
      "compare()",
      "compareTo()",
      "equals()",
      "sort()"
    ],
    "answer": 1,
    "explanation": "compareTo(T o) メソッドを実装して、自然な順序を定義します。"
  },
  {
    "chapter": 7,
    "question": "compareToメソッドが負の整数を返した場合の意味は？",
    "options": [
      "等しい",
      "自分が相手より大きい（後ろ）",
      "自分が相手より小さい（前）",
      "エラー"
    ],
    "answer": 2,
    "explanation": "負の値を返すと、自分が相手より「前（小さい）」と判定されます。"
  },
  {
    "chapter": 7,
    "question": "Arrays.sort(arr) の平均計算量は？",
    "options": [
      "O(N)",
      "O(N log N)",
      "O(N²)",
      "O(log N)"
    ],
    "answer": 1,
    "explanation": "標準的なソートの計算量は O(N log N) です。"
  },
  {
    "chapter": 7,
    "question": "Java8から導入された、カスタムルールを短く書ける「->」を使った記法を何と呼ぶ？",
    "options": [
      "ラムダ式",
      "アロー関数",
      "無名クラス",
      "ポインタ"
    ],
    "answer": 0,
    "explanation": "Javaではこれをラムダ式と呼び、Comparatorなどの記述を簡略化できます。"
  },
  {
    "chapter": 7,
    "question": "要素の元の並び順が保存されるソートの性質を何と呼ぶ？",
    "options": [
      "高速ソート",
      "安定ソート",
      "完全ソート",
      "不変ソート"
    ],
    "answer": 1,
    "explanation": "同じ値の要素が、ソート前と同じ順序で並ぶことを安定（Stable）ソートと呼びます。"
  },
  {
    "chapter": 7,
    "question": "ArrayList をソートする正しいメソッド呼び出しは？",
    "options": [
      "list.sort() または Collections.sort(list)",
      "Arrays.sort(list)",
      "list.order()",
      "Collections.order(list)"
    ],
    "answer": 0,
    "explanation": "Collections.sort() または Java 8以降は list.sort() が使えます。"
  },
  {
    "chapter": 7,
    "question": "2次元配列 pairs を始点の昇順でソートするラムダ式は？",
    "options": [
      "(a,b)->a>b",
      "(a,b)->Integer.compare(a[0],b[0])",
      "(a,b)->a[0]-b[0]",
      "(a,b)->b[0]-a[0]"
    ],
    "answer": 1,
    "explanation": "Integer.compare を使うのが最も安全で正しい記法です。"
  },
  {
    "chapter": 8,
    "question": "累積和を使うと、区間 [L, R] の合計を求める計算量は？",
    "options": [
      "O(N)",
      "O(log N)",
      "O(1)",
      "O(R-L)"
    ],
    "answer": 2,
    "explanation": "累積和配列を事前に作っておけば sum[R] - sum[L-1] で O(1) です。"
  },
  {
    "chapter": 8,
    "question": "DFS（深さ優先探索）の実装で一般的に使う手法は？",
    "options": [
      "キュー",
      "再帰関数",
      "累積和",
      "ソート"
    ],
    "answer": 1,
    "explanation": "DFSは再帰関数を使って「行けるところまで深く進む」のが一般的です。"
  },
  {
    "chapter": 8,
    "question": "辺のコストが全て等しい場合の最短経路を求めるのに適したアルゴリズムは？",
    "options": [
      "DFS",
      "BFS",
      "累積和",
      "ソート"
    ],
    "answer": 1,
    "explanation": "BFS（幅優先探索）はQueueを使って近い頂点から順に探索します。"
  },
  {
    "chapter": 8,
    "question": "めぐる式二分探索の while ループの終了条件として一般的なものは？",
    "options": [
      "ok == ng",
      "Math.abs(ok - ng) > 1",
      "ok > ng",
      "mid == 0"
    ],
    "answer": 1,
    "explanation": "境界値の差が 1 になるまで（隣接するまで）ループを回します。"
  },
  {
    "chapter": 8,
    "question": "二分探索 (Binary Search) の計算量は？",
    "options": [
      "O(1)",
      "O(log N)",
      "O(N)",
      "O(N log N)"
    ],
    "answer": 1,
    "explanation": "探索範囲を半分ずつ狭めていくため、O(log N) と非常に高速です。"
  },
  {
    "chapter": 8,
    "question": "累積和配列 `sum` を作るとき、元の配列サイズが N の場合、sum のサイズはいくつにするのが便利？",
    "options": [
      "N-1",
      "N",
      "N+1",
      "2N"
    ],
    "answer": 2,
    "explanation": "1-indexed にして sum[0]=0 とすることで、区間の計算式がスッキリします。"
  },
  {
    "chapter": 8,
    "question": "Bit全探索で、「選ぶか選ばないか」を全探索する時の最大要素数 N の目安は？",
    "options": [
      "N=20",
      "N=100",
      "N=1000",
      "N=100000"
    ],
    "answer": 0,
    "explanation": "2^20 は約100万なので間に合いますが、2^30は10億になり間に合いません。"
  },
  {
    "chapter": 8,
    "question": "1 << N の演算が意味するものは？",
    "options": [
      "Nの階乗",
      "2のN乗",
      "Nの2乗",
      "Nの半分"
    ],
    "answer": 1,
    "explanation": "1を左にNビットシフトするため、2^N を表します。"
  },
  {
    "chapter": 8,
    "question": "(i >> j) & 1 が意味するものは？",
    "options": [
      "iとjの掛け算",
      "iのj番目のビットが1かどうか",
      "iの右からj番目を消す",
      "iをj倍する"
    ],
    "answer": 1,
    "explanation": "iを右にjずらして1と論理積をとることで、j番目のビットの状態を取得します。"
  },
  {
    "chapter": 8,
    "question": "BFSでキューの先頭から要素を取り出すメソッドは？",
    "options": [
      "pop()",
      "poll()",
      "shift()",
      "dequeue()"
    ],
    "answer": 1,
    "explanation": "JavaのQueueインターフェースでは poll() または remove() を使います。"
  },
  {
    "chapter": 9,
    "question": "グラフの頂点と辺のつながりを保存する一般的なデータ構造は？",
    "options": [
      "2次元配列のみ",
      "隣接リスト (ArrayList の配列など)",
      "キュー",
      "TreeSet"
    ],
    "answer": 1,
    "explanation": "メモリ効率の良い「隣接リスト」が最も一般的に使われます。"
  },
  {
    "chapter": 9,
    "question": "Union-Find が得意な処理はどれ？",
    "options": [
      "最短経路の計算",
      "配列のソート",
      "要素が同じグループかの判定と結合",
      "文字列の検索"
    ],
    "answer": 2,
    "explanation": "グラフの連結成分を高速に管理するためのデータ構造です。"
  },
  {
    "chapter": 9,
    "question": "Union-Findの `root(x)` メソッド内で、親を辿りながら直接根に繋ぎ直す高速化手法を何と呼ぶ？",
    "options": [
      "サイズ最適化",
      "経路圧縮",
      "メモ化",
      "枝刈り"
    ],
    "answer": 1,
    "explanation": "経路圧縮により、次からの探索がほぼ O(1) になります。"
  },
  {
    "chapter": 9,
    "question": "ダイクストラ法で、探索する頂点を管理するために使うデータ構造は？",
    "options": [
      "Stack",
      "Queue",
      "PriorityQueue",
      "HashSet"
    ],
    "answer": 2,
    "explanation": "「暫定距離が最も短い頂点」から探索を広げるため、PriorityQueueを使います。"
  },
  {
    "chapter": 9,
    "question": "ダイクストラ法が使えないグラフの条件は？",
    "options": [
      "頂点数が多い",
      "有向グラフ",
      "負のコストの辺がある",
      "閉路がある"
    ],
    "answer": 2,
    "explanation": "負の辺があると「一度確定した最短距離が後から覆る」ため、ダイクストラ法は使えません。"
  },
  {
    "chapter": 9,
    "question": "タスクの依存関係を順序立てて並べるグラフアルゴリズムは？",
    "options": [
      "ダイクストラ法",
      "トポロジカルソート",
      "クラスカル法",
      "ワーシャルフロイド法"
    ],
    "answer": 1,
    "explanation": "依存関係（有向グラフ）を矛盾なく並べるのをトポロジカルソートと呼びます。"
  },
  {
    "chapter": 9,
    "question": "トポロジカルソートの実装で、最初にキューに入れるのはどんな頂点？",
    "options": [
      "入次数が最大",
      "入次数が0",
      "出次数が0",
      "ランダム"
    ],
    "answer": 1,
    "explanation": "自分に向かってくる辺がない（依存先がない）頂点から処理を始めます。"
  },
  {
    "chapter": 9,
    "question": "グラフ全体の辺を最小コストで繋ぐ「最小全域木」を求めるアルゴリズムは？",
    "options": [
      "クラスカル法",
      "ダイクストラ法",
      "DFS",
      "ベルマンフォード法"
    ],
    "answer": 0,
    "explanation": "辺をコストの昇順にソートし、Union-Findで繋いでいくのがクラスカル法です。"
  },
  {
    "chapter": 9,
    "question": "クラスカル法で辺をソートするために使うインターフェースは？",
    "options": [
      "Runnable",
      "Comparable",
      "Serializable",
      "Cloneable"
    ],
    "answer": 1,
    "explanation": "EdgeクラスにComparableを実装し、weightで比較できるようにします。"
  },
  {
    "chapter": 9,
    "question": "トポロジカルソート後、出力された頂点数がNより少ない場合は何を意味する？",
    "options": [
      "成功",
      "グラフが非連結",
      "グラフに閉路(循環)がある",
      "バグ"
    ],
    "answer": 2,
    "explanation": "閉路（A→B→C→A）があると入次数が0にならず、ソートが途中で止まります。"
  },
  {
    "chapter": 10,
    "question": "動的計画法 (DP) の基本的な考え方は？",
    "options": [
      "ランダムに試す",
      "大きな問題を、小さな問題の結果を利用して解く",
      "全てのパターンを列挙する",
      "常に最善手を選ぶ"
    ],
    "answer": 1,
    "explanation": "過去の計算結果を配列にメモしておくことで計算を効率化します。"
  },
  {
    "chapter": 10,
    "question": "DPで「現在の自分の値が確定したとして、未来の値を更新しにいく」実装を何と呼ぶ？",
    "options": [
      "貰うDP",
      "配るDP",
      "再帰DP",
      "戻るDP"
    ],
    "answer": 1,
    "explanation": "未来の状態へ遷移（更新）していく方式を「配るDP (Push DP)」と呼びます。"
  },
  {
    "chapter": 10,
    "question": "ナップサックDPの実装で一般的に使われるデータ構造は？",
    "options": [
      "1次元配列",
      "2次元配列",
      "PriorityQueue",
      "HashMap"
    ],
    "answer": 1,
    "explanation": "「何個目まで見たか」「その時の重さ合計」の2つの状態を持つため、2次元配列が基本です。"
  },
  {
    "chapter": 10,
    "question": "DP配列の初期化で、最小化問題の場合によく使われる初期値は？",
    "options": [
      "0",
      "-1",
      "非常に大きな数 (Long.MAX_VALUE 等)",
      "ランダム"
    ],
    "answer": 2,
    "explanation": "Math.minで更新していくため、初期値は無限大にしておく必要があります。"
  },
  {
    "chapter": 10,
    "question": "部分和問題のDP配列の型として最適なのは？",
    "options": [
      "int[][]",
      "long[][]",
      "boolean[][]",
      "String[][]"
    ],
    "answer": 2,
    "explanation": "作れるか・作れないかの「判定」なので、boolean型がメモリ効率が良いです。"
  },
  {
    "chapter": 10,
    "question": "フィボナッチ数列を再帰関数で素直に書くとTLEする理由は？",
    "options": [
      "配列が大きすぎる",
      "同じ計算を何度も繰り返して指数時間になるから",
      "メモリリークするから",
      "再帰が深すぎるから"
    ],
    "answer": 1,
    "explanation": "F(N-1)とF(N-2)で同じ関数を何度も呼び出すため、O(2^N) の時間がかかります。"
  },
  {
    "chapter": 10,
    "question": "配るDPで「1個先へのジャンプ」を更新する式は？",
    "options": [
      "dp[i] = dp[i-1] + 1",
      "dp[i+1] = Math.min(dp[i+1], dp[i] + cost)",
      "dp[i] = min",
      "dp[i+1] = 0"
    ],
    "answer": 1,
    "explanation": "現在の値 dp[i] にコストを足した値で、未来の値 dp[i+1] を更新します。"
  },
  {
    "chapter": 10,
    "question": "ナップサックDPで、i番目の品物を【選ばない】場合の遷移先は？",
    "options": [
      "dp[i+1][w] = dp[i][w]",
      "dp[i][w+1] = dp[i][w]",
      "dp[i+1][w] = 0",
      "更新しない"
    ],
    "answer": 0,
    "explanation": "重さは増えないため、そのまま次の状態へ価値を引き継ぎます。"
  },
  {
    "chapter": 10,
    "question": "ナップサックDPで、i番目の品物を【選ぶ】場合の条件は？",
    "options": [
      "価値が正である",
      "重さの合計が W を超えない (w + weight[i] <= W)",
      "偶数である",
      "常に選べる"
    ],
    "answer": 1,
    "explanation": "ナップサックの容量Wをオーバーするような選び方はできません。"
  },
  {
    "chapter": 10,
    "question": "DPを使うべき問題のサイン（特徴）は？",
    "options": [
      "Nが10^5以上",
      "Nが100程度で、選び方の最大化や判定を求める",
      "全て0",
      "文字列の検索"
    ],
    "answer": 1,
    "explanation": "全探索するとO(2^N)になるが、Nが数千〜数万以内で、状態をまとめられる場合に有効です。"
  },
  {
    "chapter": 11,
    "question": "足し算・掛け算の途中で Mod (余り) をとっても、最終結果の余りは変わらない。○か×か？",
    "options": [
      "○",
      "×",
      "足し算のみ",
      "掛け算のみ"
    ],
    "answer": 0,
    "explanation": "計算のどのタイミングで余りをとっても最終結果は同じになる強力な性質があります。"
  },
  {
    "chapter": 11,
    "question": "Javaの引き算のMod計算 `(a - b) % MOD` における罠は？",
    "options": [
      "遅い",
      "負の余りになる可能性がある",
      "オーバーフローする",
      "0で割る"
    ],
    "answer": 1,
    "explanation": "Javaでは負の数の % は負になるため、`if (sub < 0) sub += MOD;` などの処理が必要です。"
  },
  {
    "chapter": 11,
    "question": "最大公約数(GCD)を O(log(min(A,B))) で求める超高速なアルゴリズムは？",
    "options": [
      "ダイクストラ法",
      "ユークリッドの互除法",
      "フェルマーの小定理",
      "クラスカル法"
    ],
    "answer": 1,
    "explanation": "「a を b で割った余りを r としたとき、gcd(a, b) = gcd(b, r)」という性質を利用します。"
  },
  {
    "chapter": 11,
    "question": "最小公倍数(LCM)を求める正しい計算順序は？",
    "options": [
      "a * b / gcd(a,b)",
      "a / gcd(a,b) * b",
      "a * gcd(a,b)",
      "a + b"
    ],
    "answer": 1,
    "explanation": "a * b を先に計算するとオーバーフローする危険があるため、先に割り算を行います。"
  },
  {
    "chapter": 11,
    "question": "Nが素数か判定するとき、ループはどこまで回せば十分か？",
    "options": [
      "N",
      "N / 2",
      "√N (Math.sqrt(N))",
      "log N"
    ],
    "answer": 2,
    "explanation": "約数はペアになるため、√N まで調べればすべての約数を網羅できます。"
  },
  {
    "chapter": 11,
    "question": "1からNまでの素数を列挙する O(N log log N) のアルゴリズムは？",
    "options": [
      "エラトステネスの篩",
      "ニュートン法",
      "ユークリッドの互除法",
      "素数定理"
    ],
    "answer": 0,
    "explanation": "素数の倍数を次々に「ふるい落としていく」アルゴリズムです。"
  },
  {
    "chapter": 11,
    "question": "組み合わせ (nCr) の計算で、階乗(!)を素直に計算するとどうなる？",
    "options": [
      "速い",
      "メモリ不足になる",
      "すぐにオーバーフローする",
      "常に正しい"
    ],
    "answer": 2,
    "explanation": "20! の時点でlongの上限を超えるため、パスカルの三角形等の工夫が必要です。"
  },
  {
    "chapter": 11,
    "question": "競プロでよく使われる巨大な素数のModとして代表的なものは？",
    "options": [
      "10000",
      "998244353",
      "123456789",
      "10^18"
    ],
    "answer": 1,
    "explanation": "998244353 や 1000000007 (10^9+7) が非常によく使われます。"
  },
  {
    "chapter": 11,
    "question": "パスカルの三角形を使って nCr のテーブルを作る際、C[i][j] はどう計算する？",
    "options": [
      "C[i-1][j-1] + C[i-1][j]",
      "C[i][j-1] * j",
      "i * j",
      "1"
    ],
    "answer": 0,
    "explanation": "直上の2つの値を足し合わせることで組み合わせの数を計算できます。"
  },
  {
    "chapter": 11,
    "question": "割り算の Mod を求めるために必要な数学的定理は？",
    "options": [
      "三平方の定理",
      "フェルマーの小定理",
      "ピタゴラスの定理",
      "オイラーの公式"
    ],
    "answer": 1,
    "explanation": "フェルマーの小定理を用いて「逆元」を計算し、割り算を掛け算に変換する必要があります。"
  },
  {
    "chapter": 12,
    "question": "N=10⁵ のとき、O(N²) のアルゴリズムは間に合いますか？",
    "options": [
      "余裕で間に合う",
      "ギリギリ間に合う",
      "確実にTLE",
      "問題による"
    ],
    "answer": 2,
    "explanation": "10⁵×10⁵=10¹⁰（100億回）。10⁸の法則から確実にTLEです。"
  },
  {
    "chapter": 12,
    "question": "PrintWriter で出力した後、最後に必ず呼ぶメソッドは？",
    "options": [
      "close()",
      "flush()",
      "end()",
      "finish()"
    ],
    "answer": 1,
    "explanation": "flush()を呼ばないとバッファに溜まったまま出力されません。"
  },
  {
    "chapter": 12,
    "question": "競技プログラミングにおいて、1秒間に処理できるループ回数の目安（法則）は？",
    "options": [
      "約10⁴（1万）回",
      "約10⁶（100万）回",
      "約10⁸（1億）回",
      "約10¹⁰（100億）回"
    ],
    "answer": 2,
    "explanation": "約10⁸（1億）回が目安です。これを超えるとTLEの危険性が高まります。"
  },
  {
    "chapter": 12,
    "question": "N=10⁵ の制約で許容される一般的な計算量オーダーは？",
    "options": [
      "O(N!)",
      "O(N²)",
      "O(N log N)",
      "O(2^N)"
    ],
    "answer": 2,
    "explanation": "10⁵ * log2(10⁵) ≈ 10⁵ * 17 ≈ 1.7×10⁶ なので余裕で間に合います。"
  },
  {
    "chapter": 12,
    "question": "java.util.Scanner が大量の入力データで遅い主な理由は？",
    "options": [
      "ディスクアクセスが遅いから",
      "正規表現を使ってパースしているから",
      "メモリを食うから",
      "バグがあるから"
    ],
    "answer": 1,
    "explanation": "内部で正規表現エンジンを使用して区切り文字を判定しているため、処理が重くなります。"
  },
  {
    "chapter": 12,
    "question": "N=20 の制約のときに想定されるアルゴリズム（計算量）は？",
    "options": [
      "O(N log N)",
      "O(N²)",
      "O(2^N) bit全探索",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "2^20 は約100万なので、全パターンの探索（bit全探索など）が可能です。"
  },
  {
    "chapter": 12,
    "question": "FastScanner がScannerより高速な理由は？",
    "options": [
      "C++で書かれているから",
      "InputStreamから直接バイトを読み自力で数値化するから",
      "マルチスレッドだから",
      "AIを使っているから"
    ],
    "answer": 1,
    "explanation": "正規表現や余計なオブジェクト生成を省き、生のバイト配列から直接計算するからです。"
  },
  {
    "chapter": 12,
    "question": "PrintWriter が System.out.println より高速な理由は？",
    "options": [
      "文字を圧縮するから",
      "バッファリングしてI/Oの回数を減らすから",
      "非同期で動くから",
      "文字コードを変えるから"
    ],
    "answer": 1,
    "explanation": "出力のたびにOSへ通信するのを避け、メモリに溜めて一気に出力するからです。"
  },
  {
    "chapter": 12,
    "question": "O(N) のアルゴリズムが意味するものは？",
    "options": [
      "入力サイズ N に比例して時間がかかる",
      "常に1秒で終わる",
      "Nの2乗の時間がかかる",
      "ループを使わない"
    ],
    "answer": 0,
    "explanation": "O(N) は入力サイズ N に対して線形に（比例して）計算量が増えることを意味します。"
  },
  {
    "chapter": 12,
    "question": "N=10 の制約のときに想定されるアルゴリズム（計算量）は？",
    "options": [
      "二分探索",
      "累積和",
      "O(N!) 順列全探索",
      "ダイクストラ法"
    ],
    "answer": 2,
    "explanation": "10! = 3,628,800 なので、全順列を試す探索が十分間に合います。"
  }
];
