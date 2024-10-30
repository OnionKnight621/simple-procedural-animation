/**
 * Draws dot on Canvas.
 * @param {CanvasRenderingContext2D} ctx - canvas context.
 * @param {number} x 
 * @param {number} y
 * @param {string} color
 */
export function drawPoint(ctx, x, y, color = "red") {
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

/**
 * Draws circle on Canvas.
 * @param {CanvasRenderingContext2D} ctx - canvas context.
 * @param {number} x - center x coordinate.
 * @param {number} y - center y coordinate.
 * @param {number} radius
 * @param {string} strokeColor
 * @param {number} lineWidth
 */
export function drawCircle(ctx, x, y, radius, strokeColor = 'black', lineWidth = 2) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}