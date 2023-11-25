// サクラエディタ SHIFT + F2風：現在行の上からノート先頭まで == を検索し、カーソルをhit行の末尾に移動する。ただしサクラエディタとは違い、先頭まで探して見つからない場合は1周するまで末尾から探しなおす
async function Templater_js_hot(tp) {
  const editor = app.workspace.activeLeaf.view.editor
  search(editor, '==')
  function search(editor, target) {
    const numOfLines = editor.lastLine() // 1周したかの判別用
    const initialLineNumber = editor.getCursor().line
    let currentLineNumber = initialLineNumber - 1 // 現在行の先頭にはカーソルを移動できない（移動するとカーソルが見えなくなってユーザーが混乱する）。なので現在行の1つ上からを対象にする
    for (searchedCount = 0; searchedCount < numOfLines; searchedCount++) {
//      console.log(currentLineNumber)
      let line = editor.getLine(currentLineNumber)
      if (line.includes(target)) {
        let pos = { ch: line.length, line: currentLineNumber } // chが2だと「# foo」のfにカーソルがあたらずカーソルが表示されなかった。3ならoにカーソルがあたった。カーソルが見えることを優先し、末尾にカーソルを当てるとする
        editor.setCursor(pos)
//        const e = { from: pos, to:pos }
//        editor.scrollIntoView(e, true) // センタリングしたい場合用、ひとまずナシで様子見する
        break
      }
//      console.log(line)
      currentLineNumber--
      if (currentLineNumber < 0) currentLineNumber = editor.lastLine() // 先頭まで探し、見つからない場合は一番下から探しなおす。F2がObsidianの標準機能のnoteのrenameで使われているので、それを優先し、ひとまずSHIFT + F2だけで運用を試す用
    }
  }
}

module.exports = Templater_js_hot
