import * as vscode from "vscode";

function pasteWithComma() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;

    vscode.env.clipboard.readText().then((text) => {
      // Replace any whitespace with ,
      const newText = text.replace(/\s+/g, ",");

      editor.edit((editBuilder) => {
        if (editor.selection.isEmpty) {
          editBuilder.insert(editor.selection.active, newText);
        } else {
          editor.selections.forEach((sel) => {
            const range = sel.isEmpty
              ? document.getWordRangeAtPosition(sel.start) || sel
              : sel;
            editBuilder.replace(range, newText);
          });
        }
      });
    });
  } else {
    vscode.window.showErrorMessage("Can't paste outside an editor");
  }
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "paste-comma-separated.pasteCommaSeparated",
    () => {
      pasteWithComma();
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
