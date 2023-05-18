// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-sample" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World!!!');

		// vscode.commands.executeCommand('editor.action.addCommentLine');

		const activeDocument = vscode.window.activeTextEditor?.document;
		if (!activeDocument) {
			return;
		}

		const filePath = activeDocument.fileName;

		console.log('filePath', filePath);

		const result = await vscode.workspace.findFiles('**/index.ts');

		console.log('result', result);

		const first = result.at(0);
		if (first) {
			console.log('open', first);
			const document = await vscode.workspace.openTextDocument(first);
			await vscode.window.showTextDocument(document);
		}
	});

	context.subscriptions.push(disposable);
}
