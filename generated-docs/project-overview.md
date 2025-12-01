Last updated: 2025-12-02

# Project Overview

## プロジェクト概要
- ObsidianのTemplaterプラグインの機能を拡張するJavaScriptスクリプトと活用ノウハウ集です。
- テキストエディタのマクロのように、Obsidianに便利な機能を手軽に追加するためのサンプルを提供します。
- 現在行のハイライト（ブックマーク）やファイルの挿入など、実用的な機能のスクリプトを含みます。

## 技術スタック
- フロントエンド: Obsidian (ノート作成・管理アプリケーション)、Templater (Obsidian上でJavaScriptテンプレートを実行し、機能を拡張するためのコミュニティプラグイン)
- 音楽・オーディオ: 特になし
- 開発ツール: Advanced URI (ObsidianのURIスキームを拡張し、コマンド実行やファイル操作を可能にするコミュニティプラグイン)、Shukuchi (キーボード操作で素早くコマンドを実行するためのObsidianコミュニティプラグイン)
- テスト: 特になし
- ビルドツール: 特になし
- 言語機能: JavaScript (Templaterスクリプトの記述に使用)、Markdown (Obsidianのノート、テンプレート、ドキュメントの記述に使用)
- 自動化・CI/CD: 特になし
- 開発標準: 特になし

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
🌐 googled947dc864c270e07.html
```

## ファイル詳細説明
- `.gitignore`: Gitのバージョン管理から除外するファイルやディレクトリを指定する設定ファイルです。
- `LICENSE`: 本プロジェクトのソフトウェアライセンス情報が記載されています。
- `README.ja.md`: プロジェクトの日本語での概要、使い方、機能などの説明が記載されたドキュメントです。
- `README.md`: プロジェクトの概要、使い方、機能などが英語（または主要言語）で記載されたドキュメントです。
- `TemplaterJS/`: Templaterプラグインの「User Script Functions」として登録・実行されるJavaScriptスクリプトを格納するディレクトリです。
    - `TemplaterJS/Templater_js_hot.js`: TemplaterプラグインでJavaScriptを試すための小規模なスニペット集です。`Hello, World!`のような基本的なコード例を含み、JavaScript開発の学習用・検証用として活用されます。
    - `TemplaterJS/insert_file.js`: 現在カーソルがある行に、指定された別のMarkdownファイルを挿入する機能を提供するJavaScriptスクリプトです。デイリーノートの自動化などに利用できます。
    - `TemplaterJS/sakuraeditor_bookmark_like.js`: 現在行のハイライト（ブックマーク）設定・解除をトグルする機能を提供するJavaScriptスクリプトです。サクラエディタのようなブックマーク機能をObsidianで実現します。
    - `TemplaterJS/sakuraeditor_bookmark_next.js`: 次にハイライト（ブックマーク）された行へジャンプする機能を提供するJavaScriptスクリプトです。
    - `TemplaterJS/sakuraeditor_bookmark_prev.js`: 前にハイライト（ブックマーク）された行へジャンプする機能を提供するJavaScriptスクリプトです。
- `Templates/`: Templaterプラグインで使用されるMarkdownテンプレートファイルを格納するディレクトリです。これらのファイルは、特定のJavaScriptスクリプトを呼び出すトリガーとして機能したり、挿入されるコンテンツそのものとして利用されます。
    - `Templates/Templater_js_hot.md`: `Templater_js_hot.js` スクリプトを呼び出すためのTemplaterテンプレートファイルです。ホットキーに割り当てることで、JavaScriptスニペットの実行を容易にします。
    - `Templates/insert_file.md`: `insert_file.js` スクリプトを呼び出すためのTemplaterテンプレートファイルです。Advanced URIプラグインと連携し、指定したファイルを現在のノートに挿入する機能を実行します。
    - `Templates/insert_fileを書く用テンプレ.md`: `insert_file.md` 機能の使用例として、内容が挿入されることを想定したサンプルテンプレートファイルです。
    - `Templates/insert_fileを書く用テンプレ用test.md`: `insert_file.md` 機能によって実際に挿入される、テスト用のコンテンツファイルです。
    - `Templates/sakuraeditor_bookmark_like.md`: `sakuraeditor_bookmark_like.js` スクリプトを呼び出すためのTemplaterテンプレートファイルです。ホットキーに割り当てることで、行のハイライトをトグルできます。
    - `Templates/sakuraeditor_bookmark_like_next.md`: `sakuraeditor_bookmark_next.js` スクリプトを呼び出すためのTemplaterテンプレートファイルです。次のブックマーク行への移動をトリガーします。
    - `Templates/sakuraeditor_bookmark_like_prev.md`: `sakuraeditor_bookmark_prev.js` スクリプトを呼び出すためのTemplaterテンプレートファイルです。前のブックマーク行への移動をトリガーします。
- `_config.yml`: GitHub Pagesなどの静的サイトジェネレーター（Jekyllなど）で使用される設定ファイルです。
- `generated-docs/`: 生成されたドキュメントや静的サイトの出力ファイルを格納するためのディレクトリです。
- `googled947dc864c270e07.html`: Googleのサイト所有権確認などの目的で使用されるファイルです。

## 関数詳細説明
- `Templater_js_hot`:
    - 役割: 各JavaScriptファイルにおいて、Templaterプラグインから呼び出されるエントリポイントとなる主要な関数です。スクリプトが提供する具体的な機能（例：ハイライト、ファイル挿入）の実装を担います。
    - 引数: Templaterの実行環境から渡される `tp` オブジェクト (Templater API) や `editor` オブジェクト (Obsidian Editor API) など、スクリプト実行に必要なコンテキスト情報。
    - 戻り値: スクリプトの処理結果、あるいは直接ノートに挿入されるテキストなど。
    - 機能: ファイルごとに異なる動作を実行し、主にObsidianのエディタ操作やファイルシステム操作を行います。
- `selectNowLine`:
    - 役割: 現在カーソルがある行全体を選択します。
    - 引数: エディタオブジェクト（推測）。
    - 戻り値: なし。
    - 機能: エディタ操作において、現在行をハイライトしたり、特定の範囲として操作する際に使用されます。
- `findHeader`:
    - 役割: Obsidianノート内の見出し要素（例: `# Header`）を検索します。
    - 引数: エディタオブジェクト、検索条件など（推測）。
    - 戻り値: 検索された見出しの情報（例: 行番号、テキスト）。
    - 機能: ノート内で構造的な要素を特定し、その位置に基づいて操作を行う際に利用されます。
- `findHighlight`:
    - 役割: ノート内でハイライト（例: `==ハイライト==`）されているテキストを検索します。
    - 引数: エディタオブジェクト、検索条件など（推測）。
    - 戻り値: 検索されたハイライトの情報（例: 位置、内容）。
    - 機能: 既存のハイライトを見つけ出し、その範囲や内容を操作するために使用されます。
- `findPartialHighlight`:
    - 役割: ノート内で部分的にハイライトされているテキストを検索します。`findHighlight`と同様ですが、より柔軟な部分一致検索に対応している可能性があります。
    - 引数: エディタオブジェクト、検索条件など（推測）。
    - 戻り値: 検索された部分ハイライトの情報。
    - 機能: 特定の文字列やパターンが部分的にハイライトされているケースに対応し、その位置や内容を操作します。
- `search`:
    - 役割: ノート内で特定のテキストやパターンを検索します。
    - 引数: 検索クエリ、検索方向（前方/後方）、エディタオブジェクトなど（推測）。
    - 戻り値: 検索結果（見つかった行番号、テキスト、位置情報など）。
    - 機能: ブックマークの次/前への移動機能などで、特定のマーカーやパターンをノート全体から効率的に見つけ出すために利用されます。

## 関数呼び出し階層ツリー
```
- Templater_js_hot (TemplaterJS/Templater_js_hot.js)
  - selectNowLine ()
    - findHeader ()
    - findHighlight ()
    - findPartialHighlight ()
    - search ()

---
Generated at: 2025-12-02 07:04:42 JST
