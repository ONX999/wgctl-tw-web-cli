# 快速參考卡

## 🚀 快速啟動

### 本地測試
```bash
# Linux/Mac
./start.sh

# Windows
start.bat

# 或直接用瀏覽器開啟
open index.html  # Mac
xdg-open index.html  # Linux
start index.html  # Windows
```

### 使用本地伺服器
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

然後訪問：`http://localhost:8000`

---

## 📖 支援的指令

```bash
wgctl-tw export --qr         # QR 匯出
wgctl-tw diagnose --apn      # APN 診斷  
wgctl-tw user --list         # 用戶列表
wgctl-tw help               # 說明
wgctl-tw version            # 版本
```

---

## ⌨️ 快捷鍵

- `Ctrl + Enter` - 執行指令
- 點擊模組選擇器 - 快速填入指令

---

## 📂 專案結構

```
wgctl-tw-web-cli/
├── index.html              # 主頁面
├── main.js                 # 主程式
├── cli-worker.js           # Worker
├── qr-export.js            # QR 模組
├── lang.js                 # 語系
├── style.css               # 樣式
├── test.html               # 測試
├── docs/                   # 文件
│   ├── zh-TW.md
│   └── en.md
└── README.md               # 說明
```

---

## 🔧 快速修改

### 修改語言
編輯 `lang.js` 添加新語言或修改現有翻譯

### 添加新指令
編輯 `cli-worker.js` 中的 `processCommand()` 函數

### 修改樣式
編輯 `style.css` 或在 HTML 中使用 Tailwind 類別

### 添加新功能
在 `main.js` 中添加新函數並綁定事件

---

## 🧪 測試

開啟 `test.html` 確認所有功能正常

---

## 🚀 部署

### GitHub Pages
1. 推送到 GitHub
2. Settings → Pages → 選擇 main 分支
3. 完成

### Vercel/Netlify
拖放資料夾或連接 Git repository

---

## 📞 獲取幫助

- [README.md](README.md) - 完整說明
- [CONTRIBUTING.md](CONTRIBUTING.md) - 貢獻指南
- [DEPLOYMENT.md](DEPLOYMENT.md) - 部署指南
- [docs/zh-TW.md](docs/zh-TW.md) - 中文教學
- [docs/en.md](docs/en.md) - 英文教學

---

## ✅ 檢查清單

部署前確認：
- [ ] 在本地測試所有功能
- [ ] 開啟 test.html 通過測試
- [ ] 檢查所有連結
- [ ] 測試響應式設計
- [ ] 測試語言切換

---

**專案版本**: 1.0.0  
**最後更新**: 2025-10-27
