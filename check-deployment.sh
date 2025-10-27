#!/bin/bash

# GitHub Pages 部署狀態檢查腳本

REPO_OWNER="ONX999"
REPO_NAME="wgctl-tw-web-cli"
PAGES_URL="https://${REPO_OWNER}.github.io/${REPO_NAME}/"

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                                                                ║"
echo "║         📊 GitHub Pages 部署狀態檢查                           ║"
echo "║                                                                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# 檢查網站是否可訪問
echo "🔍 檢查網站狀態..."
echo "   URL: $PAGES_URL"
echo ""

HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$PAGES_URL" 2>/dev/null || echo "000")

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ 網站已成功部署！"
    echo "   HTTP 狀態碼: $HTTP_CODE"
    echo ""
    echo "🌐 您的網站網址："
    echo "   $PAGES_URL"
    echo ""
    echo "📱 在瀏覽器中開啟："
    if command -v xdg-open &> /dev/null; then
        echo "   執行: xdg-open $PAGES_URL"
    elif command -v open &> /dev/null; then
        echo "   執行: open $PAGES_URL"
    else
        echo "   請手動開啟上述網址"
    fi
    echo ""
    
    # 提供測試連結
    echo "🧪 測試功能："
    echo "   • 主頁面: $PAGES_URL"
    echo "   • 測試頁面: ${PAGES_URL}test.html"
    echo "   • 中文文件: ${PAGES_URL}docs/zh-TW.md"
    echo "   • 英文文件: ${PAGES_URL}docs/en.md"
    
elif [ "$HTTP_CODE" = "404" ]; then
    echo "⚠️  網站尚未部署或部署中..."
    echo "   HTTP 狀態碼: $HTTP_CODE"
    echo ""
    echo "可能的原因："
    echo "   1. GitHub Pages 尚未啟用"
    echo "   2. 正在部署中（需要 1-3 分鐘）"
    echo "   3. 部署失敗"
    echo ""
    echo "請執行以下操作："
    echo "   1. 檢查 Pages 設定："
    echo "      https://github.com/$REPO_OWNER/$REPO_NAME/settings/pages"
    echo ""
    echo "   2. 檢查部署狀態："
    echo "      https://github.com/$REPO_OWNER/$REPO_NAME/actions"
    echo ""
    echo "   3. 稍後再次執行此腳本檢查"
    
elif [ "$HTTP_CODE" = "000" ]; then
    echo "❌ 無法連線到網站"
    echo "   可能是網路問題或網站尚未部署"
    echo ""
    echo "請檢查："
    echo "   • 網路連線是否正常"
    echo "   • GitHub Pages 是否已啟用"
    echo "   • 部署是否完成"
    
else
    echo "⚠️  未預期的狀態"
    echo "   HTTP 狀態碼: $HTTP_CODE"
    echo ""
    echo "請檢查 GitHub Pages 設定："
    echo "   https://github.com/$REPO_OWNER/$REPO_NAME/settings/pages"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 快速連結："
echo "   • 倉庫: https://github.com/$REPO_OWNER/$REPO_NAME"
echo "   • Pages 設定: https://github.com/$REPO_OWNER/$REPO_NAME/settings/pages"
echo "   • Actions: https://github.com/$REPO_OWNER/$REPO_NAME/actions"
echo ""
