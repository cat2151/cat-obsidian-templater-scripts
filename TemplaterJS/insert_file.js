async function Templater_js_hot(tp) {

  // ◆現在行を [comment](URI-head&insert-filename=filePath) 形式でパースし、filePathの内容で置き換える
  const editor = app.workspace.activeLeaf.view.editor
  const lineNumber = editor.getCursor().line
  const line = editor.getLine(lineNumber)
  const regex = /.*\[([^\]]+)\]\(([^&]+)&insert-filename=([^\)]+)\)/
  const match = line.match(regex)
  if (match) {
    const comment = match[1]
    const uriHead = match[2]
    const filePath = match[3]
    console.log('comment:', comment)
    console.log('URI-head:', uriHead)
    console.log('filePath:', filePath)
    let pos = { ch: 0, line: editor.getCursor().line }
    str = await tp.file.include(`[[${filePath}]]`)
    editor.setLine(lineNumber, str)
    editor.setCursor(pos)
  } else {
    console.log('パースできませんでした:', line)
  }

}

module.exports = Templater_js_hot
