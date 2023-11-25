async function Templater_js_hot(tp) {
  // ◆hello, world
//  tp.file.cursor_append('Hello, World!')

  // ◆現在行の両端に == == を付与する
//  const editor = app.workspace.activeLeaf.view.editor
//  const lineNumber = editor.getCursor().line
//  const line = editor.getLine(lineNumber)
//  editor.setLine(lineNumber, '==' + line + '==')

  // ◆現在行の行番号を得る(x,yのy)
//  const editor = app.workspace.activeLeaf.view.editor
//  tp.file.cursor_append(editor.getCursor().line.toString())

  // ◆カーソル位置の カラム位置 を得る(x,yのx、UTF-16単位、𠮷なら2)
//  const editor = app.workspace.activeLeaf.view.editor
//  tp.file.cursor_append(editor.getCursor().ch.toString())

  // ◆カーソル行の文字数（UTF-16単位）を得る（𠮷なら2）
//  const editor = app.workspace.activeLeaf.view.editor
//  const lineNumber = editor.getCursor().line
//  const line = editor.getLine(lineNumber)
//  tp.file.cursor_append(line.length.toString())

  // ◆現在行を範囲選択する
  // ただし範囲選択したままだと、その行が空になる。なぜなら事後にTemplaterが「選択範囲に空文字を挿入して選択解除」するため。
  // なので、「範囲選択を解除」とセットで使う
//  const editor = app.workspace.activeLeaf.view.editor
//  const line = editor.getLine(editor.getCursor().line)
//  const ofs = editor.posToOffset(editor.getCursor())
//  const offsetFrom = ofs - editor.getCursor().ch
//  const offsetTo = offsetFrom + line.length
//  editor.setSelection(editor.offsetToPos(offsetFrom), editor.offsetToPos(offsetTo))

  // ◆範囲選択を解除する
//  const editor = app.workspace.activeLeaf.view.editor
//  const line = editor.getLine(editor.getCursor().line)
//  const ofs = editor.posToOffset(editor.getCursor())
//  editor.setSelection(editor.offsetToPos(ofs))

  // ◆範囲選択中かを得る
//  const editor = app.workspace.activeLeaf.view.editor
//  tp.file.cursor_append(editor.somethingSelected().toString())

  // ◆選択範囲の両端に == == を付与する
//  const editor = app.workspace.activeLeaf.view.editor
//  const line = editor.getSelection()
//  editor.replaceSelection('==' + line + '==')

  // ◆選択範囲先頭が「# 」「- 」「- [ ] 」等かどうかを得る
//  const editor = app.workspace.activeLeaf.view.editor
//  const line = editor.getSelection()
//  const regex = /^(\s*\- \[.\]|\s*\-|#+) /
//  const found = line.match(regex)
//  tp.file.cursor_append(found[0].length.toString())

  // ◆選択範囲先頭（offsetが小さいほう）を得る
//  const editor = app.workspace.activeLeaf.view.editor
//  tp.file.cursor_append(editor.getCursor('from').ch.toString())

  // ◆選択範囲末尾（offsetが大きい方）を得る
//  const editor = app.workspace.activeLeaf.view.editor
//  tp.file.cursor_append(editor.getCursor('to').ch.toString())

  // ◆選択範囲が先頭と末尾に「=」を含むかを得る（Markdownのハイライトかを得る）
//  const editor = app.workspace.activeLeaf.view.editor
//  const line = editor.getSelection()
//  const regex = /^==.*==$/
//  const found = line.match(regex)
//  tp.file.cursor_append(found[0].length.toString())

  // ◆選択範囲の先頭と末尾の「=」を削除する（Markdownのハイライトを解除する）
//  const editor = app.workspace.activeLeaf.view.editor
//  let line = editor.getSelection()
//  line = line.replace(/^==(.+)==$/, '$1')
//  tp.file.cursor_append(line)

  // ◆選択範囲なしなら、現在行を範囲選択する
  // ※既存パーツの組み合わせのサンプル用
//  const editor = app.workspace.activeLeaf.view.editor
//  if (!editor.somethingSelected()) {
//    selectNowLine(editor)
//  }
//  function selectNowLine(editor) {
//    const line = editor.getLine(editor.getCursor().line)
//    const ofs = editor.posToOffset(editor.getCursor())
//    const offsetFrom = ofs - editor.getCursor().ch
//    const offsetTo = offsetFrom + line.length
//    editor.setSelection(editor.offsetToPos(offsetFrom), editor.offsetToPos(offsetTo))
//  }

  // ◆選択範囲先頭が「- 」「# 」「- [ ] 」なら、選択範囲を縮める
  // ※既存パーツの組み合わせのサンプル用
//  const editor = app.workspace.activeLeaf.view.editor
//  let offsetFrom = editor.posToOffset(editor.getCursor('from'))
//  const found = findHeader(editor)
//  if (found) {
//    offsetFrom += found[0].length
//  }
//  editor.setSelection(editor.offsetToPos(offsetFrom), editor.getCursor('to'))
//  function findHeader(editor) {
//    const line = editor.getSelection()
//    const regex = /^(\s*\- \[.\]|\s*\-|#+) /
//    return line.match(regex)
//  }

  // ◆選択範囲が先頭と末尾に「=」を含むなら、それを削除する。含まないなら、「=」を付与する
  // ※既存パーツの組み合わせのサンプル用
//  const editor = app.workspace.activeLeaf.view.editor
//  let line = editor.getSelection()
//  if (findHighlight(editor)) {
//    line = line.replace(/^==(.+)==$/, '$1')
//    tp.file.cursor_append(line)
//  } else {
//    editor.replaceSelection('==' + line + '==')
//  }
//  function findHighlight(editor) {
//    const line = editor.getSelection()
//    const regex = /^==.*==$/
//    return line.match(regex)
//  }

  // ◆自動で行選択する。自動で選択範囲が「# 」を含まないようにする。トグルで「=」をつけ外しする。
  // ※「サクラエディタ CTRL + F2 風」機能
  // ※既存パーツの組み合わせのサンプル用
//  const editor = app.workspace.activeLeaf.view.editor
//  {
//    const line = editor.getLine(editor.getCursor().line)
//    if (!line) return // 空行は処理対象外にする。こうしないと「====」が生成されてしまう
//  }
//
//  let oldPos = editor.getCursor()
//  if (!editor.somethingSelected()) {
//    selectNowLine(editor)
//  }
//
//  let offsetFrom = editor.posToOffset(editor.getCursor('from'))
//  const found = findHeader(editor)
//  if (found) {
//    offsetFrom += found[0].length
//  }
//  editor.setSelection(editor.offsetToPos(offsetFrom), editor.getCursor('to'))
//
//  let line = editor.getSelection()
//  if (findHighlight(editor)) {
//    line = line.replace(/^==(.+)==$/, '$1')
//    tp.file.cursor_append(line)
//  } else {
//    if (findPartialHighlight(editor)) { // 先頭末尾以外にハイライトがある行は対象外にする。そうしないとシンプルなハイライトのトグルができない
//      editor.setSelection(oldPos)
//      return
//    }
//
//    editor.replaceSelection('==' + line + '==')
//  }
//
//  function selectNowLine(editor) {
//    const line = editor.getLine(editor.getCursor().line)
//    const ofs = editor.posToOffset(editor.getCursor())
//    const offsetFrom = ofs - editor.getCursor().ch
//    const offsetTo = offsetFrom + line.length
//    editor.setSelection(editor.offsetToPos(offsetFrom), editor.offsetToPos(offsetTo))
//  }
//  function findHeader(editor) {
//    const line = editor.getSelection()
//    const regex = /^(\s*\- \[.\]|\s*\-|#+) /
//    return line.match(regex)
//  }
//  function findHighlight(editor) {
//    const line = editor.getSelection()
//    const regex = /^==.*==$/
//    return line.match(regex)
//  }
//  function findPartialHighlight(editor) {
//    const line = editor.getSelection()
//    const regex = /^[^=].*==.*[^=]$/
//    return line.match(regex)
//  }

}

module.exports = Templater_js_hot
