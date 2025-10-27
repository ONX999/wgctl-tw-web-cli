# wgctl-tw 使用教學（繁體中文）# wgctl-tw 使用教學（繁體中文）



## 📦 工具簡介## 📦 工具簡介

`wgctl-tw` 是一款專為 Android / Termux 設計的 WireGuard CLI 工具，支援：`wgctl-tw` 是一款專為 Android / Termux 設計的 WireGuard CLI 工具，支援：



- QR code 匯出- QR code 匯出

- APN 診斷- APN 診斷

- 多用戶管理- 多用戶管理

- zh-TW / en 語系切換- zh-TW / en 語系切換



## 🚀 安裝方式（Termux）## 🚀 安裝方式（Termux）

```bash```bash

pkg install gitpkg install git

git clone https://github.com/universe/wgctl-twgit clone https://github.com/universe/wgctl-tw

cd wgctl-twcd wgctl-tw

bash install.shbash install.sh

```

## 📖 使用說明

### 1. QR 匯出功能
生成 WireGuard 設定檔的 QR code：
```bash
wgctl-tw export --qr
```

**功能特色：**
- 從 WireGuard 設定檔生成 QR code
- 可直接用 WireGuard 手機應用程式掃描
- 快速匯入設定

### 2. APN 診斷功能
檢測 APN 網路連線狀態：
```bash
wgctl-tw diagnose --apn
```

**診斷項目：**
- APN 設定檢查
- 連線狀態檢測
- IP 位址偵測
- 延遲測量
- 頻寬測試

### 3. 多用戶管理
列出所有 WireGuard 用戶：
```bash
wgctl-tw user --list
```

**顯示資訊：**
- 用戶名稱
- 角色（管理員/一般用戶/訪客）
- 最後登入時間
- 用戶總數

### 4. 說明指令
查看可用指令：
```bash
wgctl-tw help
# 或
wgctl-tw --help
```

### 5. 版本資訊
查看工具版本：
```bash
wgctl-tw version
# 或
wgctl-tw --version
```

## 🌐 網頁版 CLI 模擬器

本專案包含一個網頁版 CLI 模擬器，用於展示與教學。

### 功能特色：
- 📦 QR 匯出模擬與即時預覽
- 📡 APN 診斷模擬
- 👥 多用戶管理模擬
- 🈳 語系切換（zh-TW / en）
- 📱 iOS Safari 相容
- 🌐 可部署到 GitHub Pages

### 快速開始：
1. 在瀏覽器中開啟 `index.html`
2. 從下拉選單選擇模組或直接輸入指令
3. 點擊「傳送指令」執行（或按 Ctrl+Enter）
4. 在輸出區域查看結果

### 支援的指令：
```bash
wgctl-tw export --qr          # QR code 匯出
wgctl-tw diagnose --apn       # APN 診斷
wgctl-tw user --list          # 列出用戶
wgctl-tw help                 # 顯示說明
wgctl-tw version              # 顯示版本
```

## 🔧 設定說明

### 語系設定
網頁介面支援語言切換：
- **繁體中文 (zh-TW)** - 預設語言
- **English (en)** - 英文

使用右上角的語言選擇器進行切換。

## 📱 行動裝置使用

### iOS Safari：
- 完整支援 Web Worker 背景執行
- 響應式設計適配手機螢幕
- 觸控友善介面

### Android：
- 相容所有現代瀏覽器
- 可加入主畫面作為 PWA

## 🚀 部署方式

### GitHub Pages：
1. 將程式碼推送到 GitHub 儲存庫
2. 前往 Settings → Pages
3. 選擇 main 分支作為來源
4. 透過 `https://你的用戶名.github.io/wgctl-tw-web-cli/` 訪問

### 本地主機：
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

然後在瀏覽器開啟 `http://localhost:8000`。

## 🛠️ 技術細節

### 專案結構：
```
wgctl-tw-web-cli/
├── index.html           # 主頁面
├── main.js              # CLI 模擬控制器
├── cli-worker.js        # Web Worker 背景處理
├── qr-export.js         # QR code 生成模組
├── lang.js              # 語系資料包（zh-TW / en）
├── README.md            # 專案說明
└── docs/                # 教學文件
    ├── zh-TW.md         # 繁體中文教學
    └── en.md            # 英文教學
```

### 使用技術：
- **HTML5** - 語意化標記
- **Tailwind CSS** - 實用優先的樣式框架
- **Vanilla JavaScript** - ES6 模組
- **Web Workers** - 背景處理
- **QRCode Generator** - QR code 生成庫

## 💡 使用技巧

### 快捷鍵：
- **Ctrl + Enter** - 執行指令
- 直接在輸入框輸入指令後按送出

### 模組選擇：
- 使用下拉選單快速選擇常用指令
- 選擇後會自動填入對應指令

### 複製功能：
- 點擊「複製指令」按鈕快速複製當前指令
- 可用於分享或記錄指令

## 📚 相關資源

- [GitHub 儲存庫](https://github.com/universe/wgctl-tw)
- [WireGuard 官方網站](https://www.wireguard.com/)
- [Termux 文件](https://termux.dev/)

## 📄 授權條款

本專案採用 MIT 授權條款開源。

## 🤝 貢獻指南

歡迎貢獻！請隨時提交 Pull Request。

## 📧 聯絡方式

如有問題或建議，請在 GitHub 上開啟 issue。

---

**注意：** 這是一個用於展示的網頁模擬器。實際 WireGuard 設定請使用官方 CLI 工具或手機應用程式。
