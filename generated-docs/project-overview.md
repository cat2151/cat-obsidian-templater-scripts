Last updated: 2026-01-08

# Project Overview

## プロジェクト概要
- ObsidianのTemplaterコミュニティプラグイン向けに、便利なJavaScriptスクリプトとテンプレートを提供します。
- サクラエディタのような「現在行のハイライト（ブックマーク）」や「指定ファイル挿入」などのマクロ機能を実現し、ノート編集の効率を高めます。
- Templater API活用の具体的なサンプルを通じて、ユーザーが独自のスクリプト開発を行うためのノウハウを共有することを目的としています。

## 技術スタック
- フロントエンド:
    - **Obsidian**: 高機能なノートテイキングアプリケーション。このプロジェクトで作成されたスクリプトとテンプレートは、Obsidianのエディタ上で動作します。
    - **Templater Community Plugin**: Obsidianのコミュニティプラグインで、JavaScriptを使用してテンプレートやスクリプトを記述し、ノートの作成、編集、操作を自動化するための強力なフレームワークを提供します。
- 音楽・オーディオ: なし（このプロジェクトには直接関連する技術はありません）
- 開発ツール:
    - **Advanced URI Community Plugin**: ObsidianのURIスキームを拡張し、Obsidian内のコマンド実行やファイル操作を外部（または他のスクリプト）から制御可能にするコミュニティプラグイン。`insert_file`機能で利用されます。
    - **Shukuchi Community Plugin**: ObsidianのURIコマンドをキーボードショートカットで素早く呼び出すことを可能にするコミュニティプラグイン。`insert_file`機能と組み合わせることで、操作性が向上します。
- テスト: なし（このプロジェクトには明示的なテストフレームワークや手法は含まれていません）
- ビルドツール: なし（JavaScriptスクリプトは直接実行されるため、特定のビルドプロセスは不要です）
- 言語機能:
    - **JavaScript**: Templaterプラグイン内でスクリプトを記述するための主要なプログラミング言語。Obsidianの内部APIやTemplaterのAPIを呼び出して、高度なドキュメント操作を実現します。
- 自動化・CI/CD: なし（スクリプトの実行は主にホットキーやコマンドパレットによる手動トリガーに基づいています）
- 開発標準: なし（このプロジェクトには特定のコード品質や開発標準のツールは含まれていません）

## ファイル階層ツリー
```
📄 .gitignore
📄 LICENSE
📖 README.ja.md
📖 README.md
📁 TemplaterJS/
  📜 Templater_js_hot.js
  📜 insert_file.js
  📜 insert_yesterday_todo.js
  📜 sakuraeditor_bookmark_like.js
  📜 sakuraeditor_bookmark_next.js
  📜 sakuraeditor_bookmark_prev.js
📁 Templates/
  📖 Templater_js_hot.md
  📖 insert_file.md
  📖 insert_fileを書く用テンプレ.md
  📖 insert_fileを書く用テンプレ用test.md
  📖 insert_yesterday_todo.md
  📖 sakuraeditor_bookmark_like.md
  📖 sakuraeditor_bookmark_like_next.md
  📖 sakuraeditor_bookmark_like_prev.md
📄 _config.yml
📁 generated-docs/
🌐 googled947dc864c270e07.html
```

## ファイル詳細説明
-   **`.gitignore`**: Gitリポジトリで管理対象としないファイルやディレクトリを指定するための設定ファイルです。
-   **`LICENSE`**: このプロジェクトのソフトウェアライセンス情報が記載されています。
-   **`README.ja.md`**: このプロジェクトの概要、機能、使い方などを日本語で詳細に説明するドキュメントファイルです。
-   **`README.md`**: このプロジェクトの概要、機能、使い方などを英語（またはプロジェクトの主要言語）で説明するドキュメントファイルです。
-   **`TemplaterJS/`**: ObsidianのTemplaterプラグインが「User Script Functions」として認識し、実行するJavaScriptスクリプトが格納されるディレクトリです。
    -   **`TemplaterJS/Templater_js_hot.js`**: `Hello, World!`のような基本的な動作確認や、小規模なスクリプト開発の学習用・基盤として利用されるJavaScriptスニペット集です。コメントアウトされたコードをアンコメントすることで、様々な機能を試すことができます。
    -   **`TemplaterJS/insert_file.js`**: 指定されたMarkdownファイルの内容を現在のカーソル位置に挿入する機能を実装したJavaScriptスクリプトです。現在の行を置き換える形でファイルが挿入されます。
    -   **`TemplaterJS/insert_yesterday_todo.js`**: (プロジェクト情報には詳細説明がありませんが、ファイル名から) 前日のToDoリストや特定の情報を取得し、現在のノートに挿入するためのJavaScriptスクリプトと推測されます。
    -   **`TemplaterJS/sakuraeditor_bookmark_like.js`**: サクラエディタのブックマーク機能に似た、現在行のハイライト設定・解除をトグル動作で行う機能を実装したJavaScriptスクリプトです。
    -   **`TemplaterJS/sakuraeditor_bookmark_next.js`**: サクラエディタのブックマーク移動機能に似た、次にハイライトされた行へジャンプする機能を実装したJavaScriptスクリプトです。
    -   **`TemplaterJS/sakuraeditor_bookmark_prev.js`**: サクラエディタのブックマーク移動機能に似た、前にハイライトされた行へジャンプする機能を実装したJavaScriptスクリプトです。
-   **`Templates/`**: ObsidianのTemplaterプラグインで使用されるMarkdown形式のテンプレートファイルが格納されるディレクトリです。これらのファイルはホットキーやコマンドから呼び出され、対応するJavaScriptスクリプトを実行します。
    -   **`Templates/Templater_js_hot.md`**: `Templater_js_hot.js`スクリプトを呼び出すためのTemplaterテンプレートファイルです。ホットキーに割り当てて、スクリプトを実行します。
    -   **`Templates/insert_file.md`**: `insert_file.js`スクリプトを呼び出すためのTemplaterテンプレートファイルです。
    -   **`Templates/insert_fileを書く用テンプレ.md`**: `insert_file`機能の動作確認や、利用例として提供されるMarkdownテンプレートファイルです。このテンプレート自身が `insert_file` の利用例を含んでいます。
    -   **`Templates/insert_fileを書く用テンプレ用test.md`**: `insert_file`機能で実際に挿入される、テスト用のMarkdownファイルです。
    -   **`Templates/insert_yesterday_todo.md`**: `insert_yesterday_todo.js`スクリプトを呼び出すためのTemplaterテンプレートファイルです。
    -   **`Templates/sakuraeditor_bookmark_like.md`**: `sakuraeditor_bookmark_like.js`スクリプトを呼び出すためのTemplaterテンプレートファイルです。ホットキーに割り当てて使用します。
    -   **`Templates/sakuraeditor_bookmark_like_next.md`**: `sakuraeditor_bookmark_next.js`スクリプトを呼び出すためのTemplaterテンプレートファイルです。
    -   **`Templates/sakuraeditor_bookmark_like_prev.md`**: `sakuraeditor_bookmark_prev.js`スクリプトを呼び出すためのTemplaterテンプレートファイルです。
-   **`_config.yml`**: GitHub Pagesの設定ファイルであり、サイトのビルドや表示に関する設定が含まれています。
-   **`generated-docs/`**: ドキュメント生成ツールなどによって自動生成されたファイルやディレクトリが格納される場所です。
-   **`googled947dc864c270e07.html`**: Google Search Consoleなどのサービスでサイトの所有権を確認するために使用される認証ファイルです。

## 関数詳細説明
-   **`Templater_js_hot(tp)`** (TemplaterJS/*.js):
    -   **役割**: 各JavaScriptスクリプトの主要なエントリポイント関数です。Templaterプラグインによって呼び出され、スクリプトの主たる処理を開始します。
    -   **引数**: `tp` (Templater APIオブジェクト) - ObsidianのAPIやTemplaterが提供する様々な機能にアクセスするためのインターフェースです。
    -   **戻り値**: なし（主にObsidianノートの内容を直接操作します）
    -   **機能**: 現在のノートのコンテンツ操作、ファイルの読み書き、UIへのフィードバック表示など、各スクリプト固有の目的を達成するためのロジックを実行します。
-   **`selectNowLine()`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/sakuraeditor_bookmark_like.js):
    -   **役割**: 現在カーソルがある行全体を選択状態にする補助関数です。
    -   **引数**: なし
    -   **戻り値**: なし
    -   **機能**: 行単位での操作（例: ハイライト、削除、コピー）の準備として、エディタ上で現在の行を選択します。
-   **`findHeader()`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/sakuraeditor_bookmark_like.js):
    -   **役割**: 現在のノート内からMarkdownのヘッダー（見出し）を検索する補助関数です。
    -   **引数**: なし
    -   **戻り値**: なし（または見つかったヘッダーに関する情報）
    -   **機能**: ノートの構造を解析し、特定のヘッダーに関連する処理（例: ナビゲーション、コンテンツの抽出）を行う際に利用される可能性があります。
-   **`findHighlight()`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/sakuraeditor_bookmark_like.js):
    -   **役割**: 現在のノート内でObsidian標準またはこのスクリプトによって付与されたハイライト（マーク）を検索する補助関数です。
    -   **引数**: なし
    -   **戻り値**: なし（または見つかったハイライトに関する情報）
    -   **機能**: 既存のハイライトを見つけ出し、それに続く操作（例: 次のハイライトへ移動、ハイライトの解除）の対象を特定します。
-   **`findPartialHighlight()`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/sakuraeditor_bookmark_like.js):
    -   **役割**: 現在のノート内で、特定のパターンに一致する部分的なハイライト（文字列）を検索する補助関数です。
    -   **引数**: なし
    -   **戻り値**: なし（または見つかった部分ハイライトに関する情報）
    -   **機能**: テキストの一部だけがハイライトされているケースを検出するために使用されます。
-   **`search()`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/sakuraeditor_bookmark_next.js, TemplaterJS/sakuraeditor_bookmark_prev.js):
    -   **役割**: ノート内のコンテンツに対して特定の条件で検索を実行する汎用的な補助関数です。
    -   **引数**: 検索条件やオプション（実装による）
    -   **戻り値**: 検索結果（例: マッチした行番号、テキスト内容）
    -   **機能**: 次/前のブックマークを特定したり、特定のテキストパターンを持つ行を見つけたりするために利用されます。
-   **`if`**:
    -   **役割**: JavaScriptの条件分岐構文です。指定された条件式が真である場合に特定のコードブロックを実行します。
    -   **引数**: 条件式
    -   **戻り値**: なし（実行フローの制御）
    -   **機能**: スクリプトの動作を動的に制御し、様々な状況に応じて異なる処理を実行するために使用されます。
-   **`while`**:
    -   **役割**: JavaScriptの繰り返し構文です。指定された条件式が真である間、コードブロックを繰り返し実行します。
    -   **引数**: 条件式
    -   **戻り値**: なし（繰り返し処理）
    -   **機能**: 検索結果が見つかるまで、または特定の状態が満たされるまで、一連の処理を繰り返すために使用されます。
-   **`for`** (TemplaterJS/sakuraeditor_bookmark_prev.js):
    -   **役割**: JavaScriptの繰り返し構文です。初期化、条件、増分を指定して、コードブロックを繰り返し実行します。
    -   **引数**: 初期化式、条件式、増分式
    -   **戻り値**: なし（繰り返し処理）
    -   **機能**: 主に、配列の要素を順に処理したり、特定の回数だけ操作を行ったりする際に利用されます。

## 関数呼び出し階層ツリー
```
- if (TemplaterJS/Templater_js_hot.js)
  - Templater_js_hot (TemplaterJS/Templater_js_hot.js)
    - selectNowLine ()
      - findHeader ()
      - findHighlight ()
      - findPartialHighlight ()
      - search ()
- while (TemplaterJS/Templater_js_hot.js)
- for (TemplaterJS/sakuraeditor_bookmark_prev.js)

---
Generated at: 2026-01-08 07:04:29 JST
