# wgctl-tw Web CLI 模擬平台

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E)](https://www.javascript.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)

本專案提供一個 **網頁版 CLI 模擬器**，用於展示與教學 `wgctl-tw` 工具的功能。  
支援 **QR 匯出、APN 診斷、多用戶管理**，並內建 **中英文介面切換**（預設繁體中文）。  
同時相容 iOS Safari，可透過 **Web Worker 背景執行**，模擬真實 CLI 使用體驗。

---

## ✨ 功能特色

- 📦 **QR 匯出模組**：模擬 `wgctl-tw export --qr`，並生成 QR code 預覽
- 📡 **APN 診斷模組**：模擬 `wgctl-tw diagnose --apn`，顯示網路連線資訊
- 👥 **多用戶管理模組**：模擬 `wgctl-tw user --list`，列出用戶清單
- 🈳 **語系切換**：支援 zh-TW（繁體中文）/ en（英文）
- 📱 **iOS Safari 相容**：Web Worker 背景執行，不阻塞 UI
- 🌐 **GitHub Pages 部署**：可直接作為教學展示平台
- ⌨️ **快捷鍵支援**：Ctrl+Enter 快速執行指令
- 📋 **複製功能**：一鍵複製指令到剪貼簿
- 🎨 **響應式設計**：適配桌面與行動裝置

---

## 📂 專案結構

```
wgctl-tw-web-cli/
├── index.html               # 主頁面，整合所有模組
├── main.js                  # 主程式：CLI 模擬、語系切換、事件處理
├── cli-worker.js            # Web Worker 模擬 CLI 執行邏輯
├── qr-export.js             # QR code 生成與下載模組
├── lang.js                  # 語系資料包（zh-TW / en）
├── style.css                # 自訂 CSS 樣式
├── package.json             # 專案配置檔
├── LICENSE                  # MIT 授權條款
├── README.md                # 專案說明文件（本檔案）
├── .gitignore               # Git 忽略規則
├── docs/                    # 教學文件資料夾
│   ├── zh-TW.md             # 繁體中文完整教學
│   └── en.md                # 英文完整教學
└── .github/
    └── workflows/
        └── deno.yml         # GitHub Actions 工作流程
```

---

## 🚀 快速開始

### 方法 1：直接開啟（推薦）

1. 克隆此儲存庫：
   ```bash
   git clone https://github.com/universe/wgctl-tw-web-cli.git
   cd wgctl-tw-web-cli
   ```

2. 用瀏覽器開啟 `index.html` 即可使用

### 方法 2：本地伺服器

使用任一方式啟動本地伺服器：

```bash
# Python 3
python3 -m http.server 8000

# Node.js (使用 serve)
npx serve .

# PHP
php -S localhost:8000

# Python 2
python -m SimpleHTTPServer 8000
```

然後在瀏覽器開啟 `http://localhost:8000`

### 方法 3：GitHub Pages 部署

1. Fork 此儲存庫到您的 GitHub 帳號
2. 前往 `Settings` → `Pages`
3. 選擇 `main` 分支作為來源
4. 儲存後即可透過 `https://你的用戶名.github.io/wgctl-tw-web-cli/` 訪問

---

## 📖 使用說明

### 基本操作

1. **選擇模組**：使用下拉選單快速選擇常用指令
2. **輸入指令**：在文字區域輸入 CLI 指令
3. **執行指令**：
   - 點擊「傳送指令」按鈕
   - 或按 `Ctrl + Enter` 快捷鍵
4. **查看結果**：在輸出區域查看執行結果
5. **複製指令**：點擊「複製指令」按鈕複製到剪貼簿
6. **清除內容**：點擊「清除」按鈕重置介面

### 支援的指令

```bash
# QR 匯出
wgctl-tw export --qr

# APN 診斷
wgctl-tw diagnose --apn

# 用戶管理
wgctl-tw user --list

# 說明
wgctl-tw help
wgctl-tw --help

# 版本資訊
wgctl-tw version
wgctl-tw --version
```

### 語言切換

使用右上角的語言選擇器：
- **繁體中文 (zh-TW)** - 預設語言
- **English (en)** - 英文介面

---

## 🛠️ 技術架構

### 前端技術

- **HTML5**：語意化標記
- **Tailwind CSS**：實用優先的 CSS 框架
- **Vanilla JavaScript**：ES6 模組化開發
- **Web Workers**：背景執行，不阻塞 UI
- **QRCode Generator**：第三方 QR code 生成庫

### 核心模組

1. **main.js**
   - 主要控制邏輯
   - 事件監聽與處理
   - 語系切換
   - UI 更新

2. **cli-worker.js**
   - Web Worker 背景執行
   - CLI 指令解析與模擬
   - 非阻塞式處理

3. **qr-export.js**
   - QR code 生成
   - Canvas 繪製
   - 圖片下載功能

4. **lang.js**
   - 多語言支援
   - 語系資料包
   - 介面文字管理

---

## 🧪 測試與除錯

### 瀏覽器支援

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+ (包括 iOS)
- ✅ Edge 90+

### 已知問題

無重大已知問題。如發現問題請[回報 issue](https://github.com/universe/wgctl-tw-web-cli/issues)。

---

## 📚 文件

- [繁體中文教學](docs/zh-TW.md) - 完整的中文使用指南
- [English Guide](docs/en.md) - Complete English user guide

---

## 🤝 貢獻

歡迎貢獻！請遵循以下步驟：

1. Fork 此專案
2. 建立您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 開發建議

- 遵循現有的程式碼風格
- 添加適當的註解
- 測試所有變更
- 更新相關文件

---

## 📄 授權條款

本專案採用 [MIT License](LICENSE) 授權。

---

## 📧 聯絡方式

- **問題回報**：[GitHub Issues](https://github.com/universe/wgctl-tw-web-cli/issues)
- **功能建議**：[GitHub Discussions](https://github.com/universe/wgctl-tw-web-cli/discussions)

---

## 🙏 致謝

- [WireGuard](https://www.wireguard.com/) - 優秀的 VPN 協定
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [QRCode Generator](https://github.com/kazuhikoarase/qrcode-generator) - QR code 生成庫
- [Termux](https://termux.dev/) - Android 終端機模擬器

---

## ⭐ Star History

如果這個專案對您有幫助，請給個 Star ⭐️

---

**注意**：這是一個用於展示和教學的網頁模擬器。實際的 WireGuard 配置請使用官方 CLI 工具或手機應用程式。
