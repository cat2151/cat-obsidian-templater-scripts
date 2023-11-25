// サクラエディタ F2風：現在位置からノート末尾まで == を検索し、カーソルをhit行の末尾に移動する
async function Templater_js_hot(tp) {
  const editor = app.workspace.activeLeaf.view.editor
  search(editor, '==')
  function search(editor, target) {
    const initialLineNumber = editor.getCursor().line
    let currentLineNumber = initialLineNumber
    while (true) {
//      console.log(currentLineNumber)
      let line = editor.getLine(currentLineNumber)
      if (currentLineNumber == initialLineNumber) {
        line = line.slice(editor.getCursor().ch)
      }
      if (line.includes(target)) {
        let pos = { ch: line.length, line: currentLineNumber } // chが2だと「# foo」のfにカーソルがあたらずカーソルが表示されなかった。3ならoにカーソルがあたった。カーソルが見えることを優先し、末尾にカーソルを当てるとする
        editor.setCursor(pos)
//        const e = { from: pos, to:pos }
//        editor.scrollIntoView(e, true) // センタリングしたい場合用、ひとまずナシで様子見する
        break
      }
//      console.log(line)
      currentLineNumber++
      if (currentLineNumber > editor.lastLine()) break
    }
  }
}

module.exports = Templater_js_hot
