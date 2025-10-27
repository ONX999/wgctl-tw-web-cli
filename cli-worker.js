self.onmessage = function (e) {
  const { command } = e.data;
  let result = `✅ 指令已處理完成：${command}`;

  if (command.includes("--qr")) {
    result += "\n📦 QR 匯出模組已啟動。";
  } else if (command.includes("--apn")) {
    result += "\n📡 APN 診斷模組已啟動。";
  } else if (command.includes("--multi")) {
    result += "\n👥 多用戶管理模組已啟動。";
  }

  self.postMessage(result);
}
