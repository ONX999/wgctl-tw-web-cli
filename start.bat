@echo off
REM wgctl-tw Web CLI 本地伺服器啟動腳本 (Windows)

echo ========================================
echo   wgctl-tw Web CLI 本地伺服器
echo ========================================
echo.

REM 檢查 Python 3
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [1] Python 3 (推薦)
    set HAS_PYTHON=1
) else (
    set HAS_PYTHON=0
)

REM 檢查 Node.js
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [2] Node.js
    set HAS_NODE=1
) else (
    set HAS_NODE=0
)

REM 檢查 PHP
php --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [3] PHP
    set HAS_PHP=1
) else (
    set HAS_PHP=0
)

echo [0] 取消
echo.

REM 檢查是否有可用工具
if %HAS_PYTHON%==0 if %HAS_NODE%==0 if %HAS_PHP%==0 (
    echo 錯誤：找不到可用的工具！
    echo 請安裝 Python 3、Node.js 或 PHP
    pause
    exit /b 1
)

set /p choice="請選擇啟動方式 [1]: "
if "%choice%"=="" set choice=1

if %choice%==1 (
    if %HAS_PYTHON%==1 (
        echo.
        echo 使用 Python 3 啟動伺服器...
        echo 伺服器網址: http://localhost:8000
        echo 按 Ctrl+C 停止伺服器
        echo.
        python -m http.server 8000
    ) else (
        echo 錯誤：找不到 Python！
        pause
        exit /b 1
    )
)

if %choice%==2 (
    if %HAS_NODE%==1 (
        echo.
        echo 使用 Node.js 啟動伺服器...
        echo 按 Ctrl+C 停止伺服器
        echo.
        npx serve . -p 8000
    ) else (
        echo 錯誤：找不到 Node.js！
        pause
        exit /b 1
    )
)

if %choice%==3 (
    if %HAS_PHP%==1 (
        echo.
        echo 使用 PHP 啟動伺服器...
        echo 伺服器網址: http://localhost:8000
        echo 按 Ctrl+C 停止伺服器
        echo.
        php -S localhost:8000
    ) else (
        echo 錯誤：找不到 PHP！
        pause
        exit /b 1
    )
)

if %choice%==0 (
    echo 已取消
    exit /b 0
)

pause
