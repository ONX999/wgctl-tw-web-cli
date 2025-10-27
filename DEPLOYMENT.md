# 部署指南

本文件說明如何將 `wgctl-tw-web-cli` 部署到各種平台。

## 📋 目錄

- [GitHub Pages](#github-pages)
- [Vercel](#vercel)
- [Netlify](#netlify)
- [本地伺服器](#本地伺服器)

---

## 🚀 GitHub Pages

### 方法 1：透過 GitHub 網頁介面

1. **上傳檔案到 GitHub**
   - 建立新的 repository
   - 上傳所有專案檔案

2. **啟用 GitHub Pages**
   - 前往 repository 的 `Settings`
   - 左側選單點選 `Pages`
   - `Source` 選擇 `Deploy from a branch`
   - `Branch` 選擇 `main` 和 `/ (root)`
   - 點擊 `Save`

3. **等待部署**
   - 部署通常需要 1-2 分鐘
   - 完成後會顯示網址：`https://你的用戶名.github.io/wgctl-tw-web-cli/`

### 方法 2：透過命令列

```bash
# 1. 初始化 Git (如果尚未初始化)
git init

# 2. 添加所有檔案
git add .

# 3. 提交變更
git commit -m "Initial commit"

# 4. 連結到 GitHub repository
git remote add origin https://github.com/你的用戶名/wgctl-tw-web-cli.git

# 5. 推送到 GitHub
git branch -M main
git push -u origin main

# 6. 前往 GitHub 網頁啟用 Pages（見方法 1 步驟 2）
```

---

## ⚡ Vercel

### 透過 Vercel CLI

```bash
# 1. 安裝 Vercel CLI
npm install -g vercel

# 2. 登入 Vercel
vercel login

# 3. 部署專案
vercel

# 4. 按照提示完成設定
# - Project name: wgctl-tw-web-cli
# - Directory: ./
# - Build settings: 保持預設

# 5. 部署到正式環境
vercel --prod
```

### 透過 Vercel 網頁介面

1. 前往 [vercel.com](https://vercel.com)
2. 點擊 `New Project`
3. 匯入 GitHub repository
4. 保持預設設定
5. 點擊 `Deploy`

完成後會獲得網址：`https://你的專案名.vercel.app`

---

## 🌐 Netlify

### 透過 Netlify Drop

1. 前往 [netlify.com/drop](https://app.netlify.com/drop)
2. 將專案資料夾拖放到頁面上
3. 等待上傳完成
4. 獲得臨時網址（可在設定中自訂）

### 透過 Netlify CLI

```bash
# 1. 安裝 Netlify CLI
npm install -g netlify-cli

# 2. 登入 Netlify
netlify login

# 3. 初始化專案
netlify init

# 4. 部署
netlify deploy

# 5. 部署到正式環境
netlify deploy --prod
```

### 透過 Git

1. 前往 [netlify.com](https://www.netlify.com)
2. 點擊 `Add new site` → `Import an existing project`
3. 選擇 Git 提供商（GitHub/GitLab/Bitbucket）
4. 選擇 repository
5. 保持預設設定
6. 點擊 `Deploy site`

---

## 💻 本地伺服器

### Python 3

```bash
# 進入專案目錄
cd wgctl-tw-web-cli

# 啟動伺服器
python3 -m http.server 8000

# 或指定其他埠號
python3 -m http.server 3000
```

開啟瀏覽器訪問：`http://localhost:8000`

### Python 2

```bash
python -m SimpleHTTPServer 8000
```

### Node.js (serve)

```bash
# 使用 npx (無需安裝)
npx serve .

# 或安裝後使用
npm install -g serve
serve .

# 指定埠號
serve . -p 8000
```

### Node.js (http-server)

```bash
# 安裝
npm install -g http-server

# 啟動
http-server

# 指定埠號
http-server -p 8000
```

### PHP

```bash
php -S localhost:8000
```

### Live Server (VS Code 擴充功能)

1. 安裝 `Live Server` 擴充功能
2. 在 VS Code 中開啟 `index.html`
3. 右鍵點選 `Open with Live Server`

---

## 🔧 設定說明

### GitHub Pages 自訂網域

1. 在專案根目錄建立 `CNAME` 檔案
2. 內容寫入您的網域：
   ```
   example.com
   ```
3. 在網域註冊商設定 DNS：
   ```
   Type: CNAME
   Name: www
   Value: 你的用戶名.github.io
   ```

### 環境變數

本專案不需要環境變數，所有設定都在程式碼中。

---

## 📊 效能優化

### 建議設定

1. **啟用 HTTPS**
   - GitHub Pages：自動提供
   - Vercel/Netlify：自動提供

2. **啟用壓縮**
   - 大部分平台預設啟用 gzip

3. **設定快取**
   - 靜態檔案建議快取 1 年
   - HTML 檔案建議不快取或短時間快取

### CDN 設定

本專案使用的 CDN：
- Tailwind CSS：`cdn.tailwindcss.com`
- QR Code Generator：`cdn.jsdelivr.net`

這些 CDN 在全球都有良好的覆蓋。

---

## 🐛 常見問題

### 1. GitHub Pages 404 錯誤

**解決方法**：
- 確認 repository 是 public
- 確認 Pages 設定正確
- 確認分支名稱正確（main 或 master）

### 2. 檔案路徑問題

**解決方法**：
- 使用相對路徑而非絕對路徑
- 確認所有檔案都在同一目錄或正確的子目錄

### 3. Web Worker 無法載入

**解決方法**：
- 確認使用 HTTP/HTTPS 協定（不能使用 file://）
- 本地測試必須使用本地伺服器

---

## ✅ 部署檢查清單

部署前請確認：

- [ ] 所有檔案都已提交
- [ ] 測試頁面 (test.html) 通過所有測試
- [ ] 在本地伺服器測試正常
- [ ] 更新了 README.md 的網址
- [ ] 檢查了所有連結是否正常
- [ ] 確認 CORS 設定正確（如需要）

---

## 📞 支援

部署遇到問題？

- [GitHub Issues](https://github.com/universe/wgctl-tw-web-cli/issues)
- [GitHub Discussions](https://github.com/universe/wgctl-tw-web-cli/discussions)

---

**祝部署順利！** 🎉
