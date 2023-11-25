# Obsidian Templater Scripts
- user scripts for Obsidian Templater Plugin
## 用途は？
- 便利な機能の共有用
    - 後述の `sakuraeditor-bookmark-like` の機能が使えるようになります。
- ノウハウの共有用
    - Templaterプラグインは、JavaScriptでObsidianのAPIを呼べるので、便利ですよね。
    - テキストエディタのマクロのようなことができます。
        - 例えば秀丸エディタ、テキストエディター「Mery」、サクラエディタ、のような。
        - コミュニティプラグインに比べて、手早くObsidianに機能追加をしたいときに向きます。
    - さわってみたところ、例えば `Hello, World!` がすぐできるような資料があると楽そう、と感じました。
    - そこで後述の `templater-js-hot` を公開します。何かの参考になれば幸いです。
## 何ができるの？
- `sakuraeditor-bookmark-like`
    - どんな機能？：
        - 現在行をハイライトします。トグル動作します。
        - 範囲選択した場合は、Obsidian標準機能の「ハイライトをトグル」と同じ動作です。
    - 他のエディタの機能で例えると：
        - サクラエディタのブックマーク（`CTRL + F2`）
        - 秀丸エディタの「現在行をマーク」
- `templater-js-hot`
    - スニペット的なものです。
        - `Hello, World!` のように、小さく、単体で動作するコード群です。
        - コメントアウトされています。
        - それぞれアンコメントすることで、実際に動作します。
    - 筆者は `CTRL + T` に割り当てて使っています。
        - `sakuraeditor-bookmark-like` は、これを使って開発しました。
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
- `templater-js-hot`
    - 導入
        - 前提は、`sakuraeditor-bookmark-like`の作業を実施済みであること。
        - 同様に、`Templater_js_hot.md` を `CTRL + T` に割り当てます。
    - 編集
        - `Templater_js_hot.js` を編集します。
            - `hello, world` の行をコメントアウトします。
    - 動作確認
        - `CTRL + T` キーを押し、カーソルのある場所に「Hello, World!」が挿入されることを確認します。

# 参考リンク
- https://minerva.mamansoft.net/Notes/Script+User+Functions
    - TemplatorのScript User Functionsの説明です。
        - 当リポジトリも、Script User Functionsの方式をとっています。
- https://docs.obsidian.md/Reference/TypeScript+API/Editor
    - editorのAPIリファレンスです。
- https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html
    - Templator tp のAPIリファレンスです。
- https://minerva.mamansoft.net/Notes/%F0%9F%93%95Templater%E3%81%A7%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%83%BB%E3%82%B9%E3%83%8B%E3%83%9A%E3%83%83%E3%83%88
    - scriptを書くとき参考になります。
- https://tadashi-aikawa.github.io/obsidian-tempura/
    - Script User Functionsと、Templater scriptの統合開発環境です。
