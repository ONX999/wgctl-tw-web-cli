/**
 * CLI Worker - 背景執行 CLI 指令模擬
 * 用於非阻塞式處理指令
 */

self.onmessage = function (e) {
  const { command } = e.data;
  
  if (!command) {
    self.postMessage('❌ 錯誤：未提供指令');
    return;
  }

  // 模擬處理延遲
  setTimeout(() => {
    const result = processCommand(command);
    self.postMessage(result);
  }, 300);
};

/**
 * 處理指令並返回結果
 */
function processCommand(command) {
  let result = `✅ 指令已處理完成：${command}\n`;

  // QR 匯出模組
  if (command.includes('--qr') || command.includes('export')) {
    result += '\n📦 QR 匯出模組已啟動';
    result += '\n生成時間：' + new Date().toLocaleTimeString('zh-TW');
    result += '\n格式：WireGuard 設定檔';
    result += '\n狀態：✓ 已生成 QR code';
  } 
  // APN 診斷模組
  else if (command.includes('--apn') || command.includes('diagnose')) {
    result += '\n📡 APN 診斷模組已啟動';
    result += '\n\n正在檢測網路連線...';
    result += '\n\n檢測結果：';
    result += '\n  ✓ APN: internet.iot';
    result += '\n  ✓ 連線狀態: 已連線';
    result += '\n  ✓ IP 位址: 10.0.0.1';
    result += '\n  ✓ 延遲: 45ms';
    result += '\n  ✓ 頻寬: 下載 50Mbps / 上傳 20Mbps';
  } 
  // 多用戶管理模組
  else if (command.includes('user') || command.includes('--list')) {
    result += '\n👥 多用戶管理模組已啟動';
    result += '\n\n用戶列表：';
    result += '\n  1. admin      (管理員)    最後登入: 2025-10-27 10:30';
    result += '\n  2. user01     (一般用戶)  最後登入: 2025-10-27 09:15';
    result += '\n  3. user02     (一般用戶)  最後登入: 2025-10-26 18:45';
    result += '\n  4. guest      (訪客)      最後登入: 2025-10-25 14:20';
    result += '\n\n總計：4 位用戶';
  } 
  // 說明指令
  else if (command.includes('help') || command.includes('--help') || command.includes('-h')) {
    result = getHelpText();
  }
  // 版本資訊
  else if (command.includes('version') || command.includes('--version') || command.includes('-v')) {
    result = 'wgctl-tw version 1.0.0\n';
    result += 'WireGuard CLI Tool for Taiwan\n';
    result += 'Build: 2025-10-27\n';
  }
  // 未知指令
  else {
    result = `❌ 未知指令：${command}\n\n`;
    result += '請使用 "wgctl-tw help" 查看可用指令';
  }

  return result;
}

/**
 * 獲取說明文字
 */
function getHelpText() {
  return `wgctl-tw - WireGuard CLI Tool

使用方式：
  wgctl-tw <command> [options]

可用指令：
  export --qr          生成 QR code 設定檔
  diagnose --apn       診斷 APN 網路連線
  user --list          列出所有用戶
  help                 顯示此說明
  version              顯示版本資訊

範例：
  wgctl-tw export --qr
  wgctl-tw diagnose --apn
  wgctl-tw user --list

更多資訊請訪問：https://github.com/universe/wgctl-tw`;
}

self.onerror = function(error) {
  console.error('Worker 錯誤:', error);
  self.postMessage(`❌ Worker 執行錯誤：${error.message}`);
};
