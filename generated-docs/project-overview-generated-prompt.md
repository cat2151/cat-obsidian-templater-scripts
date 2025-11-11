Last updated: 2025-11-11


# プロジェクト概要生成プロンプト（来訪者向け）

## 生成するもの：
- projectを3行で要約する
- プロジェクトで使用されている技術スタックをカテゴリ別に整理して説明する
- プロジェクト全体のファイル階層ツリー（ディレクトリ構造を図解）
- プロジェクト全体のファイルそれぞれの説明
- プロジェクト全体の関数それぞれの説明
- プロジェクト全体の関数の呼び出し階層ツリー

## 生成しないもの：
- Issues情報（開発者向け情報のため）
- 次の一手候補（開発者向け情報のため）
- ハルシネーションしそうなもの（例、存在しない機能や計画を勝手に妄想する等）

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Project Overview

## プロジェクト概要
[以下の形式で3行でプロジェクトを要約]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 技術スタック
[使用している技術をカテゴリ別に整理して説明]
- フロントエンド: [フロントエンド技術とその説明]
- 音楽・オーディオ: [音楽・オーディオ関連技術とその説明]
- 開発ツール: [開発支援ツールとその説明]
- テスト: [テスト関連技術とその説明]
- ビルドツール: [ビルド・パース関連技術とその説明]
- 言語機能: [言語仕様・機能とその説明]
- 自動化・CI/CD: [自動化・継続的統合関連技術とその説明]
- 開発標準: [コード品質・統一ルール関連技術とその説明]

## ファイル階層ツリー
```
[プロジェクトのディレクトリ構造をツリー形式で表現]
```

## ファイル詳細説明
[各ファイルの役割と機能を詳細に説明]

## 関数詳細説明
[各関数の役割、引数、戻り値、機能を詳細に説明]

## 関数呼び出し階層ツリー
```
[関数間の呼び出し関係をツリー形式で表現]
```
```


以下のプロジェクト情報を参考にして要約を生成してください：

## プロジェクト情報
名前: 
説明: # Obsidian Templater Scripts
- User scripts for Obsidian Templater Plugin.
## 対象読者は？
- Templaterコミュニティプラグインをある程度使っていて、APIのもっと初歩的で具体的なサンプルがほしい人。
- 例えば、「Templaterコミュニティプラグインって、templateにJavaScriptが書けるらしいね。
  - そこからObsidianのAPIが呼べるので、いろいろできそう。
  - でも、うまくいかなかった。よくわからない。」
## 用途は？
- 便利な機能の共有用
    - 後述の `sakuraeditor-bookmark-like` と `insert-file` の機能が使えるようになります。
- ノウハウの共有用
    - Templaterプラグインは、JavaScriptでObsidianのAPIを呼べるので、便利ですよね。
    - テキストエディタのマクロのようなことができます。
        - 例えば秀丸エディタ、テキストエディター「Mery」、サクラエディタ、のような。
        - コミュニティプラグインに比べて、手早くObsidianに機能追加をしたいときに向きます。
    - さわってみたところ、例えば `Hello, World!` がすぐできるような資料があると楽そう、と感じました。
    - そこで後述の `templater-js-hot` と `insert-file` を公開します。何かの参考になれば幸いです。
## 何ができるの？
- `sakuraeditor-bookmark-like`
    - どんな機能？：
        - 現在行をハイライトします。トグル動作します。
        - 範囲選択した場合は、Obsidian標準機能の「ハイライトをトグル」と同じ動作です。
    - 他のエディタの機能で例えると：
        - サクラエディタの「ブックマーク設定・解除」（`CTRL + F2`）
        - 秀丸エディタの「現在行をマーク」
- `sakuraeditor-bookmark-next`
    - サクラエディタの「次のブックマークへ」（`F2`）
- `sakuraeditor-bookmark-prev`
    - サクラエディタの「前のブックマークへ」（`SHIFT + F2`）
- `insert-file`
    - どんな機能？：
        - 現在行に指定したファイルを挿入します。（現在行は削除します）
    - 用途は？：
        - 例えばデイリーノートのテンプレートに組み込みます。
            - 例えば `20時のタスクをここに挿入する` という行を用意して、20時にそれをクリック。すると、`20時のタスクをここに挿入する` という行は削除され、そこに、用意しておいたTemplatesファイルが挿入されます。さらにそのファイルの末尾に `21時のタスクをここに挿入する` と書く使い方もできます。
        - あくまで一例です。人によってもっとマッチする使い方がある想定です。
- `templater-js-hot`
    - スニペット的なものです。
        - `Hello, World!` のように、小さく、単体で動作するコード群です。
        - コメントアウトされています。
        - それぞれアンコメントすることで、実際に動作します。
    - 筆者は `CTRL + T` に割り当てて使っています。
        - `sakuraeditor-bookmark-like` と `insert-file` は、これを使って開発しました。
    - メリットは小規模ゆえ導入コストと運用コストが低いこと、
        - デメリットは（ほかの大規模開発環境に比べて）開発サポート機能が少ないことです。
        - まず導入して小規模scriptを書いてみる、という用途に向く想定です。
## どうやって使うの？
- `sakuraeditor-bookmark-like`
    - Templater
        - Obsidianに、Templaterコミュニティプラグインをインストールします。
    - フォルダ
        - Templater設定の「User Script Functions」の「Script files folder location」を設定します。
            - 例えば `TemplaterJS`
    - ファイル配置
        - vault配下のディレクトリ `Templates` と `TemplaterJS` ディレクトリに、
            - 当リポジトリの `Templates` と `TemplaterJS` ディレクトリの内容をコピーします。
            - （MarkdownファイルとJavaScriptファイルです）
    - ホットキー
        - Templater設定の「Template Hotkeys」欄に、例えば `Templates/sakuraeditor_bookmark_like.md` を入力します。
        - 近くにある「+」ボタンをクリックし、ホットキー設定を開き、右上欄に `sakura` を入力して、「Templater: Insert Templates/sakuraeditor_bookmark_like.md」が表示されたことを確認し、
        - 右の「+」ボタンをクリックし、
        - 例えば `CTRL + F2` キーを押して、キーを割り当てます。
    - 動作確認
        - `CTRL + F2`キーを押し、現在行がハイライトされることを確認します。
        - 再度押して、現在行のハイライトが消える（トグル動作する）ことを確認します。
- `sakuraeditor-bookmark-next`
    - 筆者はひとまず、使わずに様子見しています。
        - Obsidianの標準機能の `F2`（ノートのリネーム）と衝突するためです。
            - 筆者はひとまず、ノートのリネームを優先しています。
- `sakuraeditor-bookmark-prev`
    - 導入
        - 前提は、`sakuraeditor-bookmark-like`の作業を実施済みであること。
        - 同様に、`sakuraeditor_bookmark_like_prev.md` を `SHIFT + F2` に割り当てます。
    - 動作確認
        - `SHIFT + F2` キーを押し、ハイライトした行にジャンプすることを確認します。
- `insert-file`
    - 導入
        - 前提は、`sakuraeditor-bookmark-like`の作業を実施済みであること。
        - Advanced URI
            - [Advanced URI コミュニティプラグイン](https://github.com/Vinzent03/obsidian-advanced-uri) をinstallします。
            - Advanced URI のオプション画面を開き、`Open file on write`等の設定をすべてoffにします。動作確認を確実に行うためです。なお筆者はそのまますべてoffで使っています。
        - Template command 登録
            - Templater設定の「Template Hotkeys」欄に、例えば以下の2つを登録します：
                - `Templates/insert_file.md`
                - `Templates/insert_fileを書く用テンプレ.md`
    - 動作確認
        - コマンドパレットで `insert_file` と入力するか、スラッシュコマンドで `/insert_file` と入力します。
        - 候補から `insert Templates/insert_fileを書く用テンプレ.md` を選びます。
        - 現在行に `[test用mdを挿入（現在行は削除）](obsidian://adv-uri?commandid=templater-obsidian:Templates/insert_file.md&insert-filename=Templates/insert_fileを書く用テンプレ用test.md)` が挿入されることを確認します。
        - それをクリックします。
        - 現在行が `これは insert_fileを書く用テンプレ用test.md の中身です` となることを確認します。
    - 補足
        - [Shukuchi(縮地)コミュニティプラグイン](https://github.com/tadashi-aikawa/shukuchi) があるとキーボードだけで素早く使えて便利です。
        - あたかも「便利なボタン」を「キーボードで素早く押す」かのように使えます。筆者はこの方法で毎日使っています。
- `templater-js-hot`
    - 導入
        - 前提は、`sakuraeditor-bookmark-like`の作業を実施済みであること。
        - 同様に、`Templater_js_hot.md` を `CTRL + T` に割り当てます。
    - 編集
        - `Templater_js_hot.js` を編集します。
            - `hello, world` の行をアンコメントします。
    - 動作確認
        - `CTRL + T` キーを押し、カーソルのある場所に「Hello, World!」が挿入されることを確認します。

# 参考リンク
- [Script User Functions](https://minerva.mamansoft.net/Notes/Script+User+Functions)
    - TemplaterのScript User Functionsの説明です。
        - 当リポジトリも、Script User Functionsの方式をとっています。
- [Obdisian Editor API](https://docs.obsidian.md/Reference/TypeScript+API/Editor)
    - editorのAPIリファレンスです。
- [Templater File Module API](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html)
    - Templater tp.file のAPIリファレンスです。
- [📕Templaterでよく使うコマンド・スニペット](https://minerva.mamansoft.net/Notes/%F0%9F%93%95Templater%E3%81%A7%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%83%BB%E3%82%B9%E3%83%8B%E3%83%9A%E3%83%83%E3%83%88)
    - scriptを書くとき参考になります。
- [Obsidian Tempura](https://tadashi-aikawa.github.io/obsidian-tempura/)
    - Script User Functionsと、Templater scriptの統合開発環境です。


依存関係:
{}

## ファイル階層ツリー
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

## ファイル詳細分析
**TemplaterJS/Templater_js_hot.js** (279行, 10406バイト)
  - 関数: Templater_js_hot, selectNowLine, findHeader, findHighlight, findPartialHighlight, search, if, while
  - インポート: なし

**TemplaterJS/insert_file.js** (27行, 868バイト)
  - 関数: Templater_js_hot, if
  - インポート: なし

**TemplaterJS/sakuraeditor_bookmark_like.js** (61行, 1804バイト)
  - 関数: Templater_js_hot, selectNowLine, findHeader, findHighlight, findPartialHighlight, if
  - インポート: なし

**TemplaterJS/sakuraeditor_bookmark_next.js** (29行, 1055バイト)
  - 関数: Templater_js_hot, search, while, if
  - インポート: なし

**TemplaterJS/sakuraeditor_bookmark_prev.js** (27行, 1299バイト)
  - 関数: Templater_js_hot, search, for
  - インポート: なし

## 関数呼び出し階層
- if (TemplaterJS/Templater_js_hot.js)
  - Templater_js_hot (TemplaterJS/Templater_js_hot.js)
    - selectNowLine ()
      - findHeader ()
      - findHighlight ()
      - findPartialHighlight ()
      - search ()
- while (TemplaterJS/Templater_js_hot.js)
- for (TemplaterJS/sakuraeditor_bookmark_prev.js)


## プロジェクト構造（ファイル一覧）
README.ja.md
README.md
TemplaterJS/Templater_js_hot.js
TemplaterJS/insert_file.js
TemplaterJS/sakuraeditor_bookmark_like.js
TemplaterJS/sakuraeditor_bookmark_next.js
TemplaterJS/sakuraeditor_bookmark_prev.js
Templates/Templater_js_hot.md
Templates/insert_file.md
Templates/insert_fileを書く用テンプレ.md
Templates/insert_fileを書く用テンプレ用test.md
Templates/sakuraeditor_bookmark_like.md
Templates/sakuraeditor_bookmark_like_next.md
Templates/sakuraeditor_bookmark_like_prev.md

上記の情報を基に、プロンプトで指定された形式でプロジェクト概要を生成してください。
特に以下の点を重視してください：
- 技術スタックは各カテゴリごとに整理して説明
- ファイル階層ツリーは提供された構造をそのまま使用
- ファイルの説明は各ファイルの実際の内容と機能に基づく
- 関数の説明は実際に検出された関数の役割に基づく
- 関数呼び出し階層は実際の呼び出し関係に基づく


---
Generated at: 2025-11-11 09:21:18 JST
