# wgctl-tw Web CLI 模擬平台

本專案提供一個 **網頁版 CLI 模擬器**，用於展示與教學 `wgctl-tw` 工具的功能。  
支援 **QR 匯出、APN 診斷、多用戶管理**，並內建 **中英文介面切換**（預設繁體中文）。  
同時相容 iOS Safari，可透過 **Web Worker 背景執行**，模擬真實 CLI 使用體驗。

---

## ✨ 功能特色

- 📦 **QR 匯出模組**：模擬 `wgctl-tw export --qr`，並生成 QR code 預覽
- 📡 **APN 診斷模組**：模擬 `wgctl-tw diagnose --apn`
- 👥 **多用戶管理模組**：模擬 `wgctl-tw user --list`
- 🈳 **語系切換**：支援 zh-TW / en
- 📱 **iOS Safari 相容**：Web Worker 背景執行
- 🌐 **GitHub Pages 部署**：可直接作為教學展示平台

---

## 📂 專案結構
wgctl-tw-web-cli/
├── index.html           # 主頁面，整合 CLI 模擬器
├── main.js              # 控制 CLI 模擬、語系切換、QR 匯出
├── cli-worker.js        # Web Worker 模擬 CLI 執行邏輯
├── qr-export.js         # QR code 匯出模組
├── lang.js              # 語系資料包（zh-TW / en）
├── README.md            # 專案說明文件
├── .gitignore           # Git 忽略規則
├── docs/                # 教學文件
│   ├── zh-TW.md         # 繁體中文教學
│   └── en.md            # 英文教學
├── assets/              # 圖示與資源（可選）
│   └── logo.svg
├── manifest.json        # PWA 設定檔（選用）
└── service-worker.js    # PWA 背景執行模組（選用）
