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

function updateAndDraw() {
  depth = parseInt(depthSlider.value);
  initialRadius = parseInt(initialRadiusSlider.value);
  angle = parseInt(angleSlider.value) * (Math.PI / 180);
  radiusMultiplier = parseFloat(radiusMultiplierSlider.value);

  depthValue.textContent = depth;
  initialRadiusValue.textContent = initialRadius;
  angleValue.textContent = angleSlider.value;
  radiusMultiplierValue.textContent = radiusMultiplierSlider.value;

  draw(ctx, depth, initialRadius, angle, radiusMultiplier);
}

draw(ctx, depth, initialRadius, angle, radiusMultiplier);

depthSlider.addEventListener('input', updateAndDraw);
initialRadiusSlider.addEventListener('input', updateAndDraw);
angleSlider.addEventListener('input', updateAndDraw);
radiusMultiplierSlider.addEventListener('input', updateAndDraw);

window.addEventListener("resize", () => {
  setCanvasSize(canvas)
  draw(ctx, depth, initialRadius, angle, radiusMultiplier);
});