import { drawCircle, drawPoint } from "./drawSimpleFigure";

/**
 * Draws connected segments on Canvas.
 * @param {CanvasRenderingContext2D} ctx - canvas context.
 * @param {number} x - current center x coordinate.
 * @param {number} y - current center y coordinate.
 * @param {number} radius - current radius.
 * @param {number} angle - angle for calculating next point.
 * @param {number} depth - depth of recursion.
 */
export function drawSegments(ctx, x, y, radius, angle, depth, radiusMultiplier) {
  if (depth === 0) return;

  // draw current segment
  drawPoint(ctx, x, y, "red");
  drawCircle(ctx, x, y, radius, "black", 2);

  // calculate next point
  const newX = x + radius * Math.cos(angle);
  const newY = y + radius * Math.sin(angle);

  // draw line to next point
  // drawLine(ctx, x, y, newX, newY, 'green', 2);

  const newAngle = angle + Math.PI / 90;

  // draw next segment recursively
  drawSegments(ctx, newX, newY, radius * radiusMultiplier, newAngle, depth - 1, radiusMultiplier);
}

/**
 * Main draw function.
 * @param {CanvasRenderingContext2D} ctx - canvas context.
 */
export function draw(ctx, depth = 5, initialRadius = 100, initialAngle = 0, radiusMultiplier = 0.9, headPositionX = ctx.canvas.width / 2, headPositionY = ctx.canvas.height / 2) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  drawSegments(ctx, headPositionX, headPositionY, initialRadius, initialAngle, depth, radiusMultiplier);
}
