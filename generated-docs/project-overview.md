Last updated: 2025-11-11

# Project Overview

## プロジェクト概要
- 本プロジェクトは、ObsidianのTemplaterコミュニティプラグイン向けにJavaScriptで記述されたユーザー・スクリプト集です。
- テキストエディタのブックマーク機能やファイル挿入機能など、Obsidianの編集作業を効率化する便利な機能を提供します。
- TemplaterプラグインのJavaScript API利用例として、実践的なコードスニペットやノウハウを共有し、ユーザーの学習と開発を支援します。

## 技術スタック
- フロントエンド: Obsidian (ノート作成・編集環境), Templater Plugin (Obsidian内でJavaScriptを実行する環境), Advanced URI Plugin (URIによるObsidianコマンド実行), Shukuchi Plugin (キーボード操作による効率的なコマンド実行支援)
- 音楽・オーディオ: 該当なし
- 開発ツール: 該当なし (Obsidian自体がスクリプトの実行環境として機能します)
- テスト: 該当なし (主に手動による動作確認が行われます)
- ビルドツール: 該当なし (スクリプトファイルとMarkdownファイルの直接配置が中心です)
- 言語機能: JavaScript (Templaterスクリプト記述), Markdown (テンプレートファイルおよびドキュメント記述)
- 自動化・CI/CD: 該当なし (Obsidianのホットキー設定による手動でのスクリプト実行が自動化の役割を担います)
- 開発標準: 該当なし (コード品質や統一ルールに関する特定のツールや標準は明示されていません)

## ファイル階層ツリー
```
📄 .gitignore
📄 LICENSE
📖 README.ja.md
📖 README.md
📁 TemplaterJS/
  📜 Templater_js_hot.js
  📜 insert_file.js
  📜 sakuraeditor_bookmark_like.js
  📜 sakuraeditor_bookmark_next.js
  📜 sakuraeditor_bookmark_prev.js
📁 Templates/
  📖 Templater_js_hot.md
  📖 insert_file.md
  📖 insert_fileを書く用テンプレ.md
  📖 insert_fileを書く用テンプレ用test.md
  📖 sakuraeditor_bookmark_like.md
  📖 sakuraeditor_bookmark_like_next.md
  📖 sakuraeditor_bookmark_like_prev.md
📄 _config.yml
📁 generated-docs/
```

## ファイル詳細説明
-   **README.ja.md / README.md**: プロジェクトの目的、提供機能、利用方法、対象読者、技術スタックなど、プロジェクト全体を日本語および英語で説明するメインドキュメントです。
-   **TemplaterJS/**: Templaterコミュニティプラグインの「User Script Functions」として機能するJavaScriptスクリプトファイルを格納するディレクトリです。
    -   **TemplaterJS/Templater_js_hot.js**: Templaterスクリプト開発の入門用テンプレートとして機能するJavaScriptファイルです。`Hello, World!` などの基本的な操作例が含まれており、コメントを外すことで実際に動作を確認できます。
    -   **TemplaterJS/insert_file.js**: 現在のカーソル位置に指定したファイルの内容を挿入するJavaScriptスクリプトです。既存の行を削除し、その場所にファイルの内容を挿入する用途に用いられます。
    -   **TemplaterJS/sakuraeditor_bookmark_like.js**: 現在行をハイライト（ブックマーク）設定・解除する機能をトグルで提供するJavaScriptスクリプトです。範囲選択時にはObsidian標準のハイライト機能と同様に動作します。
    -   **TemplaterJS/sakuraeditor_bookmark_next.js**: 次にハイライト（ブックマーク）された行へカーソルを移動させるJavaScriptスクリプトです。
    -   **TemplaterJS/sakuraeditor_bookmark_prev.js**: 前にハイライト（ブックマーク）された行へカーソルを移動させるJavaScriptスクリプトです。
-   **Templates/**: Templaterプラグインが使用するMarkdownテンプレートファイルを格納するディレクトリです。これらのファイルは、特定のJavaScriptスクリプトを呼び出すトリガーや、機能の導入手順の一部として機能します。
    -   **Templates/Templater_js_hot.md**: `Templater_js_hot.js` スクリプトを呼び出すためのMarkdownテンプレートです。Obsidianのホットキーに割り当てることで、スクリプトを素早く実行できます。
    -   **Templates/insert_file.md**: `insert_file.js` スクリプトを呼び出すためのMarkdownテンプレートです。Advanced URIプラグインと連携し、特定ファイルを挿入するURIリンクを生成します。
    -   **Templates/insert_fileを書く用テンプレ.md**: `insert_file` 機能の動作確認や、ユーザーが独自のファイル挿入機能を定義する際の参考となるテンプレートファイルです。
    -   **Templates/insert_fileを書く用テンプレ用test.md**: `insert_file` 機能によって実際に挿入される内容のサンプルを示すMarkdownファイルです。
    -   **Templates/sakuraeditor_bookmark_like.md**: `sakuraeditor_bookmark_like.js` スクリプトを呼び出すためのMarkdownテンプレートです。ホットキーに割り当てることで、行のブックマーク設定・解除を直接操作できます。
    -   **Templates/sakuraeditor_bookmark_like_next.md**: `sakuraeditor_bookmark_next.js` スクリプトを呼び出すためのMarkdownテンプレートです。次のブックマーク行への移動に利用されます。
    -   **Templates/sakuraeditor_bookmark_like_prev.md**: `sakuraeditor_bookmark_prev.js` スクリプトを呼び出すためのMarkdownテンプレートです。前のブックマーク行への移動に利用されます。
-   **.gitignore**: Gitによるバージョン管理から除外するファイルやディレクトリを指定する設定ファイルです。
-   **LICENSE**: 本プロジェクトの利用許諾条件を定義するライセンス情報ファイルです。
-   **_config.yml**: GitHub Pagesなどの静的サイトジェネレーターでドキュメントサイトを構築する際の設定ファイルです。
-   **generated-docs/**: 生成されたドキュメントや関連ファイルを格納するディレクトリです。

## 関数詳細説明
-   **Templater_js_hot**:
    -   **役割**: 各JavaScriptファイル (`TemplaterJS/*.js`) における主要な処理を実行するエントリーポイント関数として機能します。Templaterプラグインがスクリプトを呼び出す際に、この関数を通じてファイル固有の機能が実行されます。
    -   **引数**: Templaterプラグインのコンテキストオブジェクト（`tp`など）を受け取る場合がありますが、利用者からは意識されにくいです。
    -   **戻り値**: 通常はなし（主にObsidianエディタへの直接的な変更や情報提示が主目的です）。
    -   **機能**: 各スクリプトファイルが定義する、Obsidianエディタを操作する具体的な処理（例: テキスト挿入、行のハイライト、カーソル移動など）を実行します。
-   **selectNowLine**:
    -   **役割**: Obsidianエディタで現在カーソルがある行全体を選択状態にするための補助関数です。主に`sakuraeditor_bookmark_like.js`などで、行のハイライトや操作の対象を決定するために使用されます。
    -   **引数**: なし
    -   **戻り値**: なし（Obsidianエディタの選択状態を直接変更します）。
    -   **機能**: 現在の行を選択し、後続の処理でその行に対する操作を可能にします。
-   **findHeader**:
    -   **役割**: Obsidianノートのコンテンツ内からMarkdownの見出し（ヘッダー）を検索する補助関数です。ノート内の構造を解析し、特定の見出しの位置を特定する際に利用されます。
    -   **引数**: なし（Obsidianエディタの現在のノートコンテンツから検索します）。
    -   **戻り値**: 検索されたヘッダーの情報（例: ヘッダーのテキスト、行番号、開始位置、終了位置など）を返します。
    -   **機能**: ノート内の見出し要素を見つけ出し、その情報を取得します。
-   **findHighlight**:
    -   **役割**: Obsidianノート内で特定のハイライト（マーク）が適用されたテキストブロックを検索する補助関数です。`sakuraeditor_bookmark_like` 機能でブックマークとして設定された行を特定するために使用されます。
    -   **引数**: なし（Obsidianエディタの現在のノートコンテンツから検索します）。
    -   **戻り値**: ハイライトされたテキストの範囲情報（例: 開始行・列、終了行・列など）を返します。
    -   **機能**: ノート内のハイライトされている部分を特定し、その位置情報を提供します。
-   **findPartialHighlight**:
    -   **役割**: `findHighlight` と同様に、Obsidianノート内で部分的にハイライトされたテキストを検索する補助関数です。特定の条件に基づいてハイライトの検索をより詳細に行う場合に使用されます。
    -   **引数**: なし（Obsidianエディタの現在のノートコンテンツから検索します）。
    -   **戻り値**: 部分的にハイライトされたテキストの範囲情報（例: 開始行・列、終了行・列など）を返します。
    -   **機能**: ノート内の部分的なハイライトを特定し、その位置情報を提供します。
-   **search**:
    -   **役割**: Obsidianノート内で特定の文字列やパターンを検索するための汎用的な補助関数です。`sakuraeditor_bookmark_next.js` や `sakuraeditor_bookmark_prev.js` で、次または前のブックマーク行を効率的に探索する際に利用されます。
    -   **引数**: 検索するテキストやパターン、検索の開始位置、検索方向（前方/後方）などが考えられます。
    -   **戻り値**: 検索結果（例: 見つかったテキスト、その行番号、開始位置、終了位置など）を返します。一致する箇所がない場合は特定の値を返します。
    -   **機能**: テキストコンテンツ内を特定の条件で検索し、一致する箇所を特定します。

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
Generated at: 2025-11-11 09:21:47 JST
