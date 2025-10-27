# 貢獻指南

感謝您對 `wgctl-tw-web-cli` 專案的興趣！我們歡迎各種形式的貢獻。

## 🤝 如何貢獻

### 回報問題 (Bug Report)

如果您發現了 bug，請：

1. 先檢查 [Issues](https://github.com/universe/wgctl-tw-web-cli/issues) 確認問題尚未被回報
2. 建立新的 Issue，並包含：
   - 清楚的標題
   - 問題描述
   - 重現步驟
   - 預期行為
   - 實際行為
   - 螢幕截圖（如適用）
   - 瀏覽器版本和作業系統

### 提出功能建議 (Feature Request)

1. 先檢查是否有類似的建議
2. 建立新的 Issue，標記為 `enhancement`
3. 詳細描述功能需求和使用場景

### 提交程式碼 (Pull Request)

1. **Fork 專案**
   ```bash
   git clone https://github.com/你的用戶名/wgctl-tw-web-cli.git
   cd wgctl-tw-web-cli
   ```

2. **建立功能分支**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **進行修改**
   - 遵循現有的程式碼風格
   - 添加適當的註解
   - 確保程式碼可運作

4. **測試變更**
   - 在多個瀏覽器測試（Chrome、Firefox、Safari）
   - 測試響應式設計
   - 開啟 `test.html` 確認所有測試通過

5. **提交變更**
   ```bash
   git add .
   git commit -m "feat: 添加新功能描述"
   ```

6. **推送到 GitHub**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **建立 Pull Request**
   - 提供清楚的標題和描述
   - 說明變更的原因和影響
   - 引用相關的 Issue（如有）

## 📝 程式碼風格

### JavaScript

- 使用 ES6+ 語法
- 使用 2 空格縮排
- 使用單引號 `'` 而非雙引號 `"`
- 函數和變數使用駝峰命名法 (camelCase)
- 常數使用大寫蛇形命名法 (UPPER_SNAKE_CASE)
- 添加 JSDoc 註解說明函數用途

範例：
```javascript
/**
 * 發送 CLI 指令
 * @param {string} command - CLI 指令
 */
function sendCLI(command) {
  if (!command) {
    console.error('未提供指令');
    return;
  }
  // 實作...
}
```

### HTML

- 使用 2 空格縮排
- 屬性使用雙引號 `"`
- 語意化標籤優先
- 添加適當的 ARIA 屬性

### CSS

- 使用 Tailwind CSS 優先
- 自訂樣式放在 `style.css`
- 使用有意義的類別名稱
- 添加註解說明複雜樣式

## 🧪 測試

### 手動測試

1. 在瀏覽器開啟 `index.html`
2. 測試所有功能：
   - 語言切換
   - 模組選擇
   - 指令執行
   - QR 生成
   - 複製功能
   - 清除功能

3. 開啟 `test.html` 確認所有測試通過

### 瀏覽器相容性測試

確保在以下瀏覽器測試：
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版，包括 iOS)
- Edge (最新版)

## 📋 Commit 訊息規範

使用語意化的 commit 訊息：

- `feat:` 新功能
- `fix:` 錯誤修正
- `docs:` 文件更新
- `style:` 格式調整（不影響程式碼運作）
- `refactor:` 重構
- `test:` 測試相關
- `chore:` 建置或輔助工具變動

範例：
```
feat: 添加深色模式支援
fix: 修正 QR code 在 Safari 上的顯示問題
docs: 更新 README 安裝說明
```

## 🌍 多語言支援

當添加新的 UI 文字時：

1. 在 `lang.js` 中同時添加 `zh-TW` 和 `en` 的翻譯
2. 確保鍵名一致
3. 使用清楚的鍵名（例如 `buttonSend` 而非 `btn1`）

## 📚 文件更新

當修改功能時，請記得更新：

- `README.md` - 如果影響主要功能
- `docs/zh-TW.md` - 繁體中文文件
- `docs/en.md` - 英文文件
- 程式碼註解

## ✅ Pull Request 檢查清單

提交前請確認：

- [ ] 程式碼遵循專案風格指南
- [ ] 已在多個瀏覽器測試
- [ ] 通過所有測試（test.html）
- [ ] 添加/更新了必要的註解
- [ ] 更新了相關文件
- [ ] Commit 訊息符合規範
- [ ] 沒有包含不必要的檔案（如 node_modules）

## 🎯 優先開發項目

目前歡迎的貢獻：

- 🌙 深色模式支援
- 📱 PWA 功能實現
- 🧪 自動化測試
- 🌐 更多語言支援
- ♿ 無障礙功能改進
- 📊 效能優化

## 💬 交流方式

- GitHub Issues - 問題回報和功能建議
- GitHub Discussions - 一般討論
- Pull Requests - 程式碼貢獻

## 📄 授權

提交的程式碼將採用 [MIT License](LICENSE) 授權。

---

再次感謝您的貢獻！ 🙏
