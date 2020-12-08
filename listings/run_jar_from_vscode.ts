const command = "java";
const jar = context.asAbsolutePath(path.join("lib", "ecore-tool-process.jar"));
const args: string[] = ["-jar", jar, "stdio"];
const cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;

// Start process
const childProcess = child_process.spawn(command, args, {
  cwd,
  windowsHide: true, // hide console windows on Windows
  detached: false, // false = end when parent process ends
});

// Read process output and display it as a popup
childProcess.stdout.on("data", (data: Buffer) => {
  const commandOutput = data.toString("utf-8");
  console.log("Got data:", commandOutput);
  vscode.window.showInformationMessage(command + ":\n" + commandOutput);
});

// Send a message to be echoed
childProcess.stdin.write("Hello", (err) => {
  if (err) {
    console.error(err);
  }
  childProcess.stdin.end();
});