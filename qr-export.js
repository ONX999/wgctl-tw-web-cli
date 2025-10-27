export function generateQR(text, canvas) {
  const qr = qrcode(0, 'L');
  qr.addData(text);
  qr.make();

  const cellSize = 4;
  const margin = 4;
  const size = qr.getModuleCount() * cellSize + margin * 2;

  const ctx = canvas.getContext("2d");
  canvas.width = canvas.height = size;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);
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
}
