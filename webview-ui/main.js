const vscode = acquireVsCodeApi();

window.addEventListener("load", main);

function main() {
  const libraryGetButton = document.getElementById("library_get");
  libraryGetButton.addEventListener("click", libraryGetButtonClick);
  const librarySelectButton = document.getElementById("library_select");
  librarySelectButton.addEventListener("click", librarySelectButtonClick);


  window.addEventListener('message', event => {
    const message = event.data; // The JSON data our extension sent
    console.log(message);
    switch (message.command) {
      case 'set_library_progress':
        libraryLoadingStatus(message.data);
        break;
      case 'set_default_config':
        setDefaultConfig(message.data);
        break;
      // some set 
      case 'set_library_path':
        const libraryPathText = document.getElementById("library_path");
        libraryPathText.value = message.data;
        break;
      case 'set_library_url':
        const libraryUrlText = document.getElementById("library_url");
        libraryUrlText.value = message.data;
        break;
    }
  });
}

function libraryLoadingStatus(isShow) {
  const libraryRing = document.getElementById("library_ring");
  if (isShow) {
    libraryRing.style.visibility = "visible";
  } else {
    libraryRing.style.visibility = "hidden";
  }
}

function setDefaultConfig(args) {
  const libraryUrlText = document.getElementById("library_url");
  libraryUrlText.value = args.libraryUrl;
  const libraryPathText = document.getElementById("library_path");
  libraryPathText.value = args.libraryPath;
}

function libraryGetButtonClick() {
  const libraryUrlText = document.getElementById("library_url");
  postMessage("library_get", libraryUrlText.value);

}

function librarySelectButtonClick() {
  const libraryPathText = document.getElementById("library_path");
  postMessage("library_select", libraryPathText.value);
}

function postMessage(command, args) {
  vscode.postMessage({ command: command, data: args });
}