import { draw } from "./drawSegments";
import "./style.css";
import { setCanvasSize } from "./utils";

const appContainer = document.querySelector("#app");

const canvas = document.createElement("canvas");
appContainer.appendChild(canvas);

setCanvasSize(canvas);

const ctx = canvas.getContext("2d");

const depthSlider = document.getElementById('depth');
const depthValue = document.getElementById('depthValue');

const initialRadiusSlider = document.getElementById('initialRadius');
const initialRadiusValue = document.getElementById('initialRadiusValue');

const angleSlider = document.getElementById('angle');
const angleValue = document.getElementById('angleValue');

const radiusMultiplierSlider = document.getElementById('radiusMultiplier');
const radiusMultiplierValue = document.getElementById('radiusMultiplierValue');

let depth = parseInt(depthSlider.value);
let initialRadius = parseInt(initialRadiusSlider.value);
let angle = parseInt(angleSlider.value) * (Math.PI / 180); // turn degrees to radians
let radiusMultiplier = parseFloat(radiusMultiplierSlider.value);

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

let headPositionX = canvas.width / 2;
let headPositionY = canvas.height / 2;

function updateAndDraw() {
  depth = parseInt(depthSlider.value);
  initialRadius = parseInt(initialRadiusSlider.value);
  angle = parseInt(angleSlider.value) * (Math.PI / 180);
  radiusMultiplier = parseFloat(radiusMultiplierSlider.value);

  depthValue.textContent = depth;
  initialRadiusValue.textContent = initialRadius;
  angleValue.textContent = angleSlider.value;
  radiusMultiplierValue.textContent = radiusMultiplierSlider.value;

  draw(ctx, depth, initialRadius, angle, radiusMultiplier, headPositionX, headPositionY);
}

draw(ctx, depth, initialRadius, angle, radiusMultiplier, headPositionX, headPositionY);

depthSlider.addEventListener('input', updateAndDraw);
initialRadiusSlider.addEventListener('input', updateAndDraw);
angleSlider.addEventListener('input', updateAndDraw);
radiusMultiplierSlider.addEventListener('input', updateAndDraw);

canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mousePositionX = e.clientX - rect.left;
  const mousePositionY = e.clientY - rect.top;

  const dx = mousePositionX - headPositionX;
  const dy = mousePositionY - headPositionY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < initialRadius) {
    isDragging = true;
    offsetX = headPositionX - mousePositionX;
    offsetY = headPositionY - mousePositionY;
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const rect = canvas.getBoundingClientRect();
    headPositionX = e.clientX - rect.left + offsetX;
    headPositionY = e.clientY - rect.top + offsetY;
    
    updateAndDraw();
  }
});

canvas.addEventListener('mouseup', () => {
  isDragging = false;
});

canvas.addEventListener('mouseleave', () => {
  isDragging = false;
});

window.addEventListener("resize", () => {
  setCanvasSize(canvas)
  draw(ctx, depth, initialRadius, angle, radiusMultiplier, headPositionX, headPositionY);
});