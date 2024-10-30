import { drawSegments } from "./drawSegments";

// test
export function animate(ctx) {
  let animationAngle = 0;

  function frame() {
    animationAngle += 0.01;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const initialRadius = 100;
    const depth = 5;

    drawSegments(ctx, centerX, centerY, initialRadius, animationAngle, depth);

    requestAnimationFrame(frame);
  }

  frame();
}
