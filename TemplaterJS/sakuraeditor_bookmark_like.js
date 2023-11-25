// サクラエディタ CTRL + F2 風
async function Templater_js_hot(tp) {
  const editor = app.workspace.activeLeaf.view.editor

  {
    const line = editor.getLine(editor.getCursor().line)
    if (!line) return // 空行は処理対象外にする。こうしないと「====」が生成されてしまう
  }

  let oldPos = editor.getCursor()
  if (!editor.somethingSelected()) {
    selectNowLine(editor)
  }

  let offsetFrom = editor.posToOffset(editor.getCursor('from'))
  const found = findHeader(editor)
  if (found) {
    offsetFrom += found[0].length
  }
  editor.setSelection(editor.offsetToPos(offsetFrom), editor.getCursor('to'))

  let line = editor.getSelection()
  if (findHighlight(editor)) {
    line = line.replace(/^==(.+)==$/, '$1')
    tp.file.cursor_append(line)
  } else {
    if (findPartialHighlight(editor)) { // 先頭末尾以外にハイライトがある行は対象外にする。そうしないとシンプルなハイライトのトグルができない
      editor.setSelection(oldPos)
      return
    }

    editor.replaceSelection('==' + line + '==')
  }

  function selectNowLine(editor) {
    const line = editor.getLine(editor.getCursor().line)
    const ofs = editor.posToOffset(editor.getCursor())
    const offsetFrom = ofs - editor.getCursor().ch
    const offsetTo = offsetFrom + line.length
    editor.setSelection(editor.offsetToPos(offsetFrom), editor.offsetToPos(offsetTo))
  }
  function findHeader(editor) {
    const line = editor.getSelection()
    const regex = /^(\s*\- \[.\]|\s*\-|#+) /
    return line.match(regex)
  }
  function findHighlight(editor) {
    const line = editor.getSelection()
    const regex = /^==.*==$/
    return line.match(regex)
  }
  function findPartialHighlight(editor) {
    const line = editor.getSelection()
    const regex = /^([^=].*==.*|.*==.*[^=])$/
    return line.match(regex)
  }

}

module.exports = Templater_js_hot
