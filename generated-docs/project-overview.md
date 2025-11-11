Last updated: 2025-11-12

# Project Overview

## プロジェクト概要
- ObsidianのTemplaterプラグイン向けに、便利な機能とJavaScript活用ノウハウを提供するスクリプト集です。
- 行のハイライトやファイルの挿入、JavaScriptスニペットなど、テキストエディタのような機能拡張を可能にします。
- ObsidianのAPIをJavaScriptから手軽に利用し、ワークフローをカスタマイズしたいユーザー向けに開発されました。

## 技術スタック
- フロントエンド: Obsidian: Electronベースのノートアプリケーションであり、Web技術を基盤としています。このプロジェクトのスクリプトはObsidianのノート編集画面上で動作し、ユーザーインターフェースを直接操作します。
- 音楽・オーディオ: 該当する技術は使用していません。
- 開発ツール: Templaterコミュニティプラグイン: Obsidian内でJavaScriptを実行するための環境を提供し、ObsidianのAPIへのアクセスを可能にします。Advanced URI: 特定のURIスキームを通じてObsidianのコマンドを実行できるコミュニティプラグインで、ファイル挿入機能に利用されます。Shukuchi: キーボード操作でURIを素早く実行できるコミュニティプラグインで、操作性を向上させます。
- テスト: プロジェクト情報に明記されたテスト関連技術はありません。主に手動による動作確認が行われます。
- ビルドツール: 特段のビルドツールは使用されていません。JavaScriptファイルが直接Templaterプラグインによって解釈・実行されます。
- 言語機能:
    - JavaScript: Templaterスクリプトの記述に用いられる主要なプログラミング言語です。ObsidianのAPIを呼び出し、様々な機能を実現します。
    - Markdown: Obsidianの標準的なノート形式であり、Templaterのテンプレートファイルやドキュメントの記述に利用されます。
- 自動化・CI/CD: プロジェクト情報に明記された自動化・継続的統合関連技術はありません。スクリプトの導入は手動でのファイル配置が基本です。
- 開発標準: プロジェクト情報に明記されたコード品質や統一ルール関連技術はありません。

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
- **README.ja.md / README.md**: このプロジェクトの概要、目的、提供される機能、使用方法、対象読者などを説明する多言語対応のドキュメントファイルです。
- **TemplaterJS/Templater_js_hot.js**: Templater向けに用意されたJavaScriptスニペット集です。`Hello, World!`のような基本的なコードから、より複雑な機能のベースとなるコードまで、コメントアウトされた状態で含まれています。アンコメントすることで、ObsidianでのJavaScriptスクリプト開発の学習や試行錯誤に利用できます。
- **TemplaterJS/insert_file.js**: 現在のカーソル位置に、指定したファイルの内容を挿入する機能を提供するJavaScriptスクリプトです。既存の行を削除して新しい内容を挿入するため、デイリーノートなどでの動的なテンプレート展開や、定型タスクリストの挿入などに活用できます。
- **TemplaterJS/sakuraeditor_bookmark_like.js**: 現在の行をハイライト（ブックマーク）し、再度実行することでハイライトを解除するトグル機能を提供するJavaScriptスクリプトです。範囲選択時にはObsidian標準のハイライト機能と同様に動作し、サクラエディタや秀丸エディタのブックマーク機能に似た体験を提供します。
- **TemplaterJS/sakuraeditor_bookmark_next.js**: 次のハイライト（ブックマーク）された行へカーソルを移動させる機能を提供するJavaScriptスクリプトです。サクラエディタの「次のブックマークへ」機能に相当します。
- **TemplaterJS/sakuraeditor_bookmark_prev.js**: 前のハイライト（ブックマーク）された行へカーソルを移動させる機能を提供するJavaScriptスクリプトです。サクラエディタの「前のブックマークへ」機能に相当します。
- **Templates/Templater_js_hot.md**: `Templater_js_hot.js`スクリプトをObsidianのホットキーから実行するためのトリガーとなるMarkdownテンプレートファイルです。
- **Templates/insert_file.md**: `insert_file.js`スクリプトを呼び出すためのMarkdownテンプレートファイルです。ObsidianのAdvanced URIプラグインと連携し、特定のファイル内容を動的に挿入するリンクを生成します。
- **Templates/insert_fileを書く用テンプレ.md**: `insert_file.md`の機能の動作確認や、`insert_file`機能を用いた具体的なワークフローの例を示すためのMarkdownテンプレートファイルです。
- **Templates/insert_fileを書く用テンプレ用test.md**: `insert_file.js`機能によって挿入される、テスト用の内容が記述されたMarkdownファイルです。
- **Templates/sakuraeditor_bookmark_like.md**: `sakuraeditor_bookmark_like.js`スクリプトをObsidianのホットキーから実行するためのトリガーとなるMarkdownテンプレートファイルです。
- **Templates/sakuraeditor_bookmark_like_next.md**: `sakuraeditor_bookmark_next.js`スクリプトをObsidianのホットキーから実行するためのトリガーとなるMarkdownテンプレートファイルです。
- **Templates/sakuraeditor_bookmark_like_prev.md**: `sakuraeditor_bookmark_prev.js`スクリプトをObsidianのホットキーから実行するためのトリガーとなるMarkdownテンプレートファイルです。
- **_config.yml**: GitHub Pagesでこのリポジトリのドキュメントサイトを構築する際に使用されるJekyllの設定ファイルです。
- **generated-docs/**: GitHub Pagesによって自動生成される静的ドキュメントファイルやウェブサイトコンテンツが格納されるディレクトリです。

## 関数詳細説明
- **`Templater_js_hot`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/insert_file.js, TemplaterJS/sakuraeditor_bookmark_like.js, TemplaterJS/sakuraeditor_bookmark_next.js, TemplaterJS/sakuraeditor_bookmark_prev.js)
    - **役割**: 各JavaScriptファイルの主要な処理ロジックをカプセル化し、Templaterプラグインからスクリプトが実行される際のエントリーポイントとして機能します。
    - **引数**: 通常、Templaterスクリプトには`tp` (Templater APIオブジェクト)、`app` (Obsidianアプリケーションオブジェクト)、`editor` (現在のエディタオブジェクト)などの引数が暗黙的に渡され、これらの引数を内部で利用してObsidianの機能にアクセスします。
    - **戻り値**: 明示的な戻り値がない場合が多いですが、エディタへのテキスト挿入や状態変更など、スクリプトの実行結果として副作用をもたらします。
    - **機能**: `Templater_js_hot.js`では各種スニペットの実行、その他のファイルではそれぞれの機能（ブックマーク設定、ファイル挿入など）の核となる処理を実行します。
- **`selectNowLine`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/sakuraeditor_bookmark_like.js)
    - **役割**: 現在カーソルがある行全体を選択状態にする補助関数です。
    - **引数**: 明示的な引数はありませんが、内部でObsidianエディタオブジェクトを操作します。
    - **戻り値**: なし。エディタの選択範囲を直接変更します。
    - **機能**: 行のハイライトやコピー、削除などの操作を行う前に、対象となる行を正確に指定するために利用されます。
- **`findHeader`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/sakuraeditor_bookmark_like.js)
    - **役割**: 現在のカーソル位置から最も近い見出し（ヘッダー）をドキュメント内で検索する補助関数です。
    - **引数**: 明示的な引数はありませんが、内部でObsidianエディタオブジェクトを通じてドキュメントの内容を解析します。
    - **戻り値**: 見つかったヘッダーの行番号やテキスト内容などの情報、または見つからなかった場合はnullを返します。
    - **機能**: ドキュメント構造に基づいて特定のセクションへジャンプする際に使用される可能性があります。
- **`findHighlight`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/sakuraeditor_bookmark_like.js)
    - **役割**: ドキュメント内で特定形式のハイライトされたテキストを検索する補助関数です。
    - **引数**: 明示的な引数はありませんが、内部でObsidianエディタオブジェクトを通じてドキュメントの内容を解析します。
    - **戻り値**: 見つかったハイライトの行番号やテキスト範囲などの情報、または見つからなかった場合はnullを返します。
    - **機能**: `sakuraeditor_bookmark_like`機能で設定されたハイライトや、Obsidian標準のハイライトを特定するために利用されます。
- **`findPartialHighlight`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/sakuraeditor_bookmark_like.js)
    - **役割**: ドキュメント内で部分的にハイライトされたテキストを検索する補助関数です。`findHighlight`よりも柔軟な条件でハイライトを検出するために用いられる可能性があります。
    - **引数**: 明示的な引数はありませんが、内部でObsidianエディタオブジェクトを通じてドキュメントの内容を解析します。
    - **戻り値**: 見つかった部分ハイライトの行番号やテキスト範囲などの情報、または見つからなかった場合はnullを返します。
    - **機能**: `findHighlight`と同様に、特定のマークアップやテキストパターンを見つける際に利用されます。
- **`search`** (TemplaterJS/Templater_js_hot.js, TemplaterJS/sakuraeditor_bookmark_next.js, TemplaterJS/sakuraeditor_bookmark_prev.js)
    - **役割**: ドキュメント内で特定のパターンやテキストを検索する汎用的な補助関数です。
    - **引数**: 検索対象の文字列や正規表現、検索を開始する位置、検索方向（前方/後方）などが渡されると推測されます。
    - **戻り値**: 見つかった検索結果（マッチしたテキスト、行番号、列番号など）の情報、または見つからなかった場合はnullを返します。
    - **機能**: `sakuraeditor_bookmark_next`や`sakuraeditor_bookmark_prev`のような、特定のマーカーやブックマークを効率的に見つけるために使用されます。
- **`if`, `while`, `for`**:
    - **役割**: これらはJavaScriptの言語構造であり、独立した関数ではありません。コード内で条件分岐（`if`）、繰り返し処理（`while`, `for`）を記述するために使用されます。ファイル解析ツールによって関数として検出されることがありますが、プログラミング言語の基本的な制御フローを構成する要素です。

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
Generated at: 2025-11-12 07:05:02 JST
