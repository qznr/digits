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
      @touchstart="startDrawing"
      @touchmove="draw"
      @touchend="stopDrawing"
      @touchcancel="stopDrawing"
      aria-label="Drawing Canvas"
    ></canvas>
    <div class="controls">
      <button @click="clearCanvas" class="clear-button">Clear</button>
      <button @click="toggleEraseMode" :class="{ 'erase-button': true, 'active': isEraseMode }">
        {{ isEraseMode ? 'Draw' : 'Erase' }}
      </button>
      <div class="brush-size-controls">
        <label for="brush-size">Brush Size: {{ brushSize }}</label>
        <input
          type="range"
          id="brush-size"
          min="1"
          max="3"
          v-model.number="brushSize"
          @change="updateBrushSize"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canvasRef = ref(null);
const isDrawing = ref(false);
const isEraseMode = ref(false); // Track erase mode
const lastX = ref(0);
const lastY = ref(0);
const ctx = ref(null);
const imageData = ref(new Array(28 * 28).fill(0));
const brushSize = ref(2);

const emit = defineEmits(['update:imageData', 'clear-prediction']);

onMounted(() => {
  if (canvasRef.value) {
    ctx.value = canvasRef.value.getContext('2d');
    ctx.value.fillStyle = 'black';
    ctx.value.fillRect(0, 0, 28, 28);
    clearCanvas(); // Initial clear
  }
});

const toggleEraseMode = () => {
  isEraseMode.value = !isEraseMode.value;
};

const startDrawing = (event) => {
  isDrawing.value = true;
  if (event.type.startsWith('touch')) {
    event.preventDefault();
  }
  [lastX.value, lastY.value] = getCoordinates(event);
  // Don't call drawPixels here.  moveTo is enough to start.
  updateImageData();
};

const draw = (event) => {
  if (!isDrawing.value) return;
  if (event.type.startsWith('touch')) {
    event.preventDefault();
  }
  const [x, y] = getCoordinates(event);
  drawLine(lastX.value, lastY.value, x, y);
  lastX.value = x;
  lastY.value = y;
  updateImageData();
};

const stopDrawing = () => {
  isDrawing.value = false;
};

const getCoordinates = (event) => {
  const rect = canvasRef.value.getBoundingClientRect();
  let clientX, clientY;

  if (event.type.startsWith('touch')) {
    clientX = event.touches[0].clientX;
    clientY = event.touches[0].clientY;
  } else {
    clientX = event.clientX;
    clientY = event.clientY;
  }

  const x = Math.floor((clientX - rect.left) / (rect.width / 28));
  const y = Math.floor((clientY - rect.top) / (rect.height / 28));
  const boundedX = Math.max(0, Math.min(x, 27));
  const boundedY = Math.max(0, Math.min(y, 27));
  return [boundedX, boundedY];
};

const drawLine = (x1, y1, x2, y2) => {
    ctx.value.beginPath();
    ctx.value.moveTo(x1 + 0.5, y1 + 0.5);  // +0.5 for center of pixel
    ctx.value.lineTo(x2 + 0.5, y2 + 0.5);
    ctx.value.strokeStyle = isEraseMode.value ? 'black' : 'white';
    ctx.value.lineWidth = brushSize.value;
    ctx.value.lineCap = 'round'; // Crucial for smooth lines
    ctx.value.stroke(); // This does the actual drawing AND anti-aliasing

    // VERY IMPORTANT: Remove the calls to drawPixels
    // drawPixels(x1, y1);  // REMOVE THIS
    // drawPixels(x2, y2);  // REMOVE THIS
};


// Remove drawPixels entirely!
// const drawPixels = (x, y) => { ... };


const clearCanvas = () => {
  ctx.value.fillStyle = 'black';
  ctx.value.fillRect(0, 0, 28, 28);
  imageData.value = new Array(28 * 28).fill(0);
  emit('update:imageData', imageData.value);
  emit('clear-prediction');
};

const updateBrushSize = () => {
    //You could emit the new brushSize to a parent component if needed
    //emit('update:brushSize', brushSize.value);
};


const updateImageData = () => {
    const imgData = ctx.value.getImageData(0, 0, 28, 28);
    const grayscaleData = [];
    for (let i = 0; i < imgData.data.length; i += 4) {
        const avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
        grayscaleData.push(avg / 255);
    }
    imageData.value = grayscaleData;
    emit('update:imageData', imageData.value);
}

</script>

<style scoped>
/* (The styles are unchanged) */
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
    touch-action: none; /* Very important for preventing default touch behaviors */
}

.controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px; /* Spacing between controls */
  margin-top: 10px;
}
.clear-button {
  padding: 5px 10px;
  color: black;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
}

.erase-button {
  padding: 5px 10px;
  color: black;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
}

.erase-button.active {
  background-color: #ddd; /* Slightly darker when active */
}

.brush-size-controls {
    display:flex;
    flex-direction: column;
}
</style>