import { langPack } from './lang.js';
import { generateQR } from './qr-export.js';

// DOM 元素
const langSwitcher = document.getElementById('langSwitcher');
const introText = document.getElementById('introText');
const moduleSelect = document.getElementById('moduleSelect');
const cliInput = document.getElementById('cliInput');
const sendBtn = document.getElementById('sendBtn');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');
const cliOutput = document.getElementById('cliOutput');
const qrPreview = document.getElementById('qrPreview');
const qrCanvas = document.getElementById('qrCanvas');

// 全局狀態
let currentLang = 'zh-TW';
let worker;

// 初始化 Web Worker
function initWorker() {
  try {
    worker = new Worker('cli-worker.js');
    
    worker.onmessage = function(e) {
      const result = e.data;
      cliOutput.textContent = result;
    };
    
    worker.onerror = function(error) {
      console.error('Worker 錯誤:', error);
      cliOutput.textContent = `❌ 執行錯誤：${error.message}`;
    };
  } catch (error) {
    console.error('無法初始化 Worker:', error);
    cliOutput.textContent = '❌ Web Worker 初始化失敗，將使用同步模式';
  }
}

// 發送 CLI 指令
function sendCLI() {
  const command = cliInput.value.trim();
  
  if (!command) {
    cliOutput.textContent = currentLang === 'zh-TW' 
      ? '⚠️ 請輸入指令' 
      : '⚠️ Please enter a command';
    return;
  }

  cliOutput.textContent = `⏳ ${currentLang === 'zh-TW' ? '執行中' : 'Running'}：${command}`;

  // 使用 Worker 處理指令
  if (worker) {
    worker.postMessage({ command });
  } else {
    // 降級處理（無 Worker）
    setTimeout(() => {
      processCommandSync(command);
    }, 500);
  }

  // 處理 QR code 生成
  if (command.includes('--qr') || command.includes('export')) {
    qrPreview.classList.remove('hidden');
    try {
      generateQR(command, qrCanvas);
    } catch (error) {
      console.error('QR 生成錯誤:', error);
      cliOutput.textContent += '\n⚠️ QR code 生成失敗';
    }
  } else {
    qrPreview.classList.add('hidden');
  }
}

// 同步處理指令（降級方案）
function processCommandSync(command) {
  let result = `✅ 指令已處理完成：${command}`;

  if (command.includes('--qr') || command.includes('export')) {
    result += '\n📦 QR 匯出模組已啟動。';
  } else if (command.includes('--apn') || command.includes('diagnose')) {
    result += '\n📡 APN 診斷模組已啟動。';
    result += '\n\n檢測結果：';
    result += '\n✓ APN: internet.iot';
    result += '\n✓ 連線狀態: 正常';
    result += '\n✓ 延遲: 45ms';
  } else if (command.includes('user') || command.includes('--list')) {
    result += '\n👥 多用戶管理模組已啟動。';
    result += '\n\n用戶列表：';
    result += '\n1. admin (管理員)';
    result += '\n2. user01 (一般用戶)';
    result += '\n3. user02 (一般用戶)';
  } else {
    result += '\n\n支援的指令：';
    result += '\n  wgctl-tw export --qr      # QR 匯出';
    result += '\n  wgctl-tw diagnose --apn   # APN 診斷';
    result += '\n  wgctl-tw user --list      # 用戶列表';
  }

  cliOutput.textContent = result;
}

// 複製指令到剪貼簿
async function copyCLI() {
  const command = cliInput.value.trim();
  
  if (!command) {
    alert(currentLang === 'zh-TW' ? '沒有可複製的指令' : 'No command to copy');
    return;
  }

  try {
    await navigator.clipboard.writeText(command);
    const originalText = copyBtn.textContent;
    copyBtn.textContent = currentLang === 'zh-TW' ? '✓ 已複製' : '✓ Copied';
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  } catch (error) {
    console.error('複製失敗:', error);
    alert(currentLang === 'zh-TW' ? '複製失敗' : 'Copy failed');
  }
}

// 清除輸出
function clearOutput() {
  cliInput.value = '';
  cliOutput.textContent = currentLang === 'zh-TW' 
    ? '等待輸入指令…' 
    : 'Waiting for input…';
  qrPreview.classList.add('hidden');
  moduleSelect.value = '';
}

// 切換語言
function switchLanguage() {
  currentLang = langSwitcher.value;
  updateUILanguage();
}

// 更新介面語言
function updateUILanguage() {
  const lang = langPack[currentLang];
  
  introText.textContent = lang.intro;
  sendBtn.textContent = lang.send;
  copyBtn.textContent = lang.copy;
  clearBtn.textContent = lang.clear || (currentLang === 'zh-TW' ? '清除' : 'Clear');
  
  if (cliOutput.textContent === '等待輸入指令…' || cliOutput.textContent === 'Waiting for input…') {
    cliOutput.textContent = lang.output;
  }
  
  // 更新模組選擇器
  updateModuleSelect();
}

// 更新模組選擇器
function updateModuleSelect() {
  const isZhTW = currentLang === 'zh-TW';
  moduleSelect.innerHTML = `
    <option value="">${isZhTW ? '-- 選擇模組 --' : '-- Select Module --'}</option>
    <option value="qr">📦 ${isZhTW ? 'QR 匯出' : 'QR Export'} (export --qr)</option>
    <option value="apn">📡 ${isZhTW ? 'APN 診斷' : 'APN Diagnostics'} (diagnose --apn)</option>
    <option value="multi">👥 ${isZhTW ? '多用戶管理' : 'Multi-user Management'} (user --list)</option>
  `;
}

// 模組選擇變更
function onModuleChange() {
  const baseCommand = 'wgctl-tw';
  const module = moduleSelect.value;
  let command = '';

  switch (module) {
    case 'qr':
      command = `${baseCommand} export --qr`;
      break;
    case 'apn':
      command = `${baseCommand} diagnose --apn`;
      break;
    case 'multi':
      command = `${baseCommand} user --list`;
      break;
    default:
      command = '';
  }

  if (command) {
    cliInput.value = command;
  }
}

// 事件監聽器
langSwitcher.addEventListener('change', switchLanguage);
sendBtn.addEventListener('click', sendCLI);
copyBtn.addEventListener('click', copyCLI);
clearBtn.addEventListener('click', clearOutput);
moduleSelect.addEventListener('change', onModuleChange);

// Enter 鍵發送指令
cliInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    e.preventDefault();
    sendCLI();
  }
});

// 初始化
initWorker();
updateUILanguage();
