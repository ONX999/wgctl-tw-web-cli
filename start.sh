#!/bin/bash

# wgctl-tw Web CLI 本地伺服器啟動腳本
# 支援多種方式啟動本地測試伺服器

echo "🚀 wgctl-tw Web CLI 本地伺服器"
echo "================================"
echo ""

# 檢查可用的工具
HAS_PYTHON3=false
HAS_PYTHON2=false
HAS_NODE=false
HAS_PHP=false

if command -v python3 &> /dev/null; then
    HAS_PYTHON3=true
fi

if command -v python &> /dev/null; then
    HAS_PYTHON2=true
fi

if command -v node &> /dev/null; then
    HAS_NODE=true
fi

if command -v php &> /dev/null; then
    HAS_PHP=true
fi

# 顯示可用選項
echo "可用的啟動方式："
echo ""

option=1
if [ "$HAS_PYTHON3" = true ]; then
    echo "  $option. Python 3 (推薦)"
    ((option++))
fi

if [ "$HAS_NODE" = true ]; then
    echo "  $option. Node.js (npx serve)"
    ((option++))
fi

if [ "$HAS_PHP" = true ]; then
    echo "  $option. PHP"
    ((option++))
fi

if [ "$HAS_PYTHON2" = true ]; then
    echo "  $option. Python 2"
    ((option++))
fi

echo "  0. 取消"
echo ""

# 讀取使用者選擇
read -p "請選擇啟動方式 [1]: " choice
choice=${choice:-1}

# 預設埠號
PORT=8000

case $choice in
    1)
        if [ "$HAS_PYTHON3" = true ]; then
            echo ""
            echo "✨ 使用 Python 3 啟動伺服器..."
            echo "📡 伺服器網址: http://localhost:$PORT"
            echo "🛑 按 Ctrl+C 停止伺服器"
            echo ""
            python3 -m http.server $PORT
        elif [ "$HAS_NODE" = true ]; then
            echo ""
            echo "✨ 使用 Node.js 啟動伺服器..."
            echo "🛑 按 Ctrl+C 停止伺服器"
            echo ""
            npx serve . -p $PORT
        elif [ "$HAS_PHP" = true ]; then
            echo ""
            echo "✨ 使用 PHP 啟動伺服器..."
            echo "📡 伺服器網址: http://localhost:$PORT"
            echo "🛑 按 Ctrl+C 停止伺服器"
            echo ""
            php -S localhost:$PORT
        else
            echo "❌ 找不到可用的工具！"
            echo "請安裝 Python 3、Node.js 或 PHP"
            exit 1
        fi
        ;;
    2)
        if [ "$HAS_NODE" = true ]; then
            echo ""
            echo "✨ 使用 Node.js 啟動伺服器..."
            echo "🛑 按 Ctrl+C 停止伺服器"
            echo ""
            npx serve . -p $PORT
        elif [ "$HAS_PHP" = true ]; then
            echo ""
            echo "✨ 使用 PHP 啟動伺服器..."
            echo "📡 伺服器網址: http://localhost:$PORT"
            echo "🛑 按 Ctrl+C 停止伺服器"
            echo ""
            php -S localhost:$PORT
        elif [ "$HAS_PYTHON2" = true ]; then
            echo ""
            echo "✨ 使用 Python 2 啟動伺服器..."
            echo "📡 伺服器網址: http://localhost:$PORT"
            echo "🛑 按 Ctrl+C 停止伺服器"
            echo ""
            python -m SimpleHTTPServer $PORT
        else
            echo "❌ 找不到可用的工具！"
            exit 1
        fi
        ;;
    3)
        if [ "$HAS_PHP" = true ]; then
            echo ""
            echo "✨ 使用 PHP 啟動伺服器..."
            echo "📡 伺服器網址: http://localhost:$PORT"
            echo "🛑 按 Ctrl+C 停止伺服器"
            echo ""
            php -S localhost:$PORT
        elif [ "$HAS_PYTHON2" = true ]; then
            echo ""
            echo "✨ 使用 Python 2 啟動伺服器..."
            echo "📡 伺服器網址: http://localhost:$PORT"
            echo "🛑 按 Ctrl+C 停止伺服器"
            echo ""
            python -m SimpleHTTPServer $PORT
        else
            echo "❌ 找不到可用的工具！"
            exit 1
        fi
        ;;
    4)
        if [ "$HAS_PYTHON2" = true ]; then
            echo ""
            echo "✨ 使用 Python 2 啟動伺服器..."
            echo "📡 伺服器網址: http://localhost:$PORT"
            echo "🛑 按 Ctrl+C 停止伺服器"
            echo ""
            python -m SimpleHTTPServer $PORT
        else
            echo "❌ 找不到 Python 2！"
            exit 1
        fi
        ;;
    0)
        echo "👋 已取消"
        exit 0
        ;;
    *)
        echo "❌ 無效的選擇"
        exit 1
        ;;
esac
