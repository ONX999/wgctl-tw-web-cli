const moduleSelect = document.getElementById("moduleSelect");

export function sendCLI() {
  const baseCommand = "wgctl-tw";
  const module = moduleSelect.value;
  let command = "";

  switch (module) {
    case "qr":
      command = `${baseCommand} export --qr`;
      break;
    case "apn":
      command = `${baseCommand} diagnose --apn`;
      break;
    case "multi":
      command = `${baseCommand} user --list`;
      break;
    default:
      command = baseCommand;
  }

  inputEl.value = command;
  outputEl.textContent = `⏳ ${currentLang === "zh-TW" ? "執行中" : "Running"}：${command}`;
  worker.postMessage({ command });

  if (command.includes("--qr")) {
    qrPreview.classList.remove("hidden");
    generateQR(command, qrCanvas);
  } else {
    qrPreview.classList.add("hidden");
  }
}
