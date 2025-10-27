/**
 * QR Code 生成模組
 * 使用 qrcode-generator 庫生成 QR code
 */

export function generateQR(text, canvas) {
  if (!window.qrcode) {
    console.error('QR code 庫未載入');
    return;
  }

  try {
    const qr = qrcode(0, 'L');
    qr.addData(text);
    qr.make();

    const cellSize = 4;
    const margin = 4;
    const size = qr.getModuleCount() * cellSize + margin * 2;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.height = size;
    
    // 白色背景
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);
    
    // 黑色模組
    ctx.fillStyle = "#000000";

    for (let row = 0; row < qr.getModuleCount(); row++) {
      for (let col = 0; col < qr.getModuleCount(); col++) {
        if (qr.isDark(row, col)) {
          ctx.fillRect(
            margin + col * cellSize,
            margin + row * cellSize,
            cellSize,
            cellSize
          );
        }
      }
    }
  } catch (error) {
    console.error('QR code 生成錯誤:', error);
    throw error;
  }
}

/**
 * 下載 QR code 為圖片
 */
export function downloadQR(canvas, filename = 'wgctl-tw-qr.png') {
  try {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('QR code 下載失敗:', error);
    throw error;
  }
}
