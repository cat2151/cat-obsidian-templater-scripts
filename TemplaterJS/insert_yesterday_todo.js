async function Templater_js_hot(tp) {

  const editor = app.workspace.activeLeaf.view.editor
  const lineNumber = editor.getCursor().line
  const yesterday = moment(tp.file.title, "YYYY-MM-DD")
    .subtract(1, "days")
    .format("YYYY-MM-DD");

  const yesterdayFile = tp.file.find_tfile(yesterday);

  if (yesterdayFile) {
    const content = await app.vault.read(yesterdayFile);
    const match = content.match(/# 明日の.*タスク.*?\n([\s\S]*?)(?=\n#|$)/);

    if (match && match[1]) {
      editor.setLine(lineNumber, match[1].trim());
    } else {
      editor.setLine(lineNumber, "前日からのタスクなし");
    }
  } else {
    editor.setLine(lineNumber, "前日のノートが見つからない");
  }
  
  let pos = { ch: 0, line: lineNumber }
  editor.setCursor(pos)

}

module.exports = Templater_js_hot
