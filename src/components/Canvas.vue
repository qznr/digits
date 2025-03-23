<template>
  <div class="canvas-container">
    <canvas
      ref="canvasRef"
      width="28"
      height="28"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
      aria-label="Drawing Canvas"
    ></canvas>
    <button @click="clearCanvas" class="clear-button">Clear</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canvasRef = ref(null);
const isDrawing = ref(false);
const lastX = ref(0);
const lastY = ref(0);
const ctx = ref(null);
const imageData = ref(new Array(28 * 28).fill(0));

const emit = defineEmits(['update:imageData', 'clear-prediction']);

onMounted(() => {
  if (canvasRef.value) {
    ctx.value = canvasRef.value.getContext('2d');
    ctx.value.fillStyle = 'black';
    ctx.value.fillRect(0, 0, 28, 28);
    clearCanvas(); // Initial clear
  }
});

const startDrawing = (event) => {
  isDrawing.value = true;
  [lastX.value, lastY.value] = getCoordinates(event);
  drawPixel(lastX.value, lastY.value);
  updateImageData(); // Emit after initial pixel
};

const draw = (event) => {
  if (!isDrawing.value) return;
  const [x, y] = getCoordinates(event);
  drawLine(lastX.value, lastY.value, x, y);
  lastX.value = x;
  lastY.value = y;
  updateImageData(); // Emit after every draw step
};

const stopDrawing = () => {
  isDrawing.value = false;
  // No need to emit here, as we're emitting on every draw
};

const getCoordinates = (event) => {
  const rect = canvasRef.value.getBoundingClientRect();
  const x = Math.floor((event.clientX - rect.left) / (rect.width / 28));
  const y = Math.floor((event.clientY - rect.top) / (rect.height / 28));
  const boundedX = Math.max(0, Math.min(x, 27));
  const boundedY = Math.max(0, Math.min(y, 27));
  return [boundedX, boundedY];
};

const drawLine = (x1, y1, x2, y2) => {
    ctx.value.beginPath();
    ctx.value.moveTo(x1 + 0.5, y1 + 0.5);
    ctx.value.lineTo(x2 + 0.5, y2 + 0.5);
    ctx.value.strokeStyle = 'white';
    ctx.value.lineWidth = 2;
    ctx.value.lineCap = 'round';
    ctx.value.stroke();
    drawPixel(x1,y1);
    drawPixel(x2,y2);

};

const drawPixel = (x, y) => {
  const index = y * 28 + x;
  imageData.value[index] = 1;  // Set pixel in imageData
  ctx.value.fillStyle = 'white'; // Set drawing color
  ctx.value.fillRect(x, y, 1, 1); // Draw pixel on canvas
};


const clearCanvas = () => {
  ctx.value.fillStyle = 'black';
  ctx.value.fillRect(0, 0, 28, 28);
  imageData.value = new Array(28 * 28).fill(0);
  emit('update:imageData', imageData.value); // Clear image data
  emit('clear-prediction'); // Emit to clear prediction
};


const updateImageData = () => {
    const imgData = ctx.value.getImageData(0, 0, 28, 28);
    const grayscaleData = [];
    for (let i = 0; i < imgData.data.length; i += 4) {
        const avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
        grayscaleData.push(avg / 255); // Normalize to 0-1 range
    }
    imageData.value = grayscaleData;
    emit('update:imageData', imageData.value);
}

</script>

<style scoped>
.canvas-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

canvas {
  image-rendering: pixelated;
  background-color: black;
    width: 280px; /* Scale up for better visibility */
  height: 280px;
    cursor: crosshair;
}

.clear-button {
  margin-top: 5px;
  padding: 5px 10px;
  color: black;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>