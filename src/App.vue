<script setup>
import { ref, onMounted } from 'vue';
import Canvas from './components/Canvas.vue';  // Make sure the path is correct
import * as ort from 'onnxruntime-web';

const imageData = ref(new Array(28 * 28).fill(0)); // Initialize with white
const prediction = ref(null);
const session = ref(null);
const logits = ref(new Array(11).fill(0)); // Store the logits, including "Not a Number" (index 10)
const modelLoading = ref(true); // Add a loading state

// Load the ONNX model
onMounted(async () => {
    try {
        session.value = await ort.InferenceSession.create(`${import.meta.env.BASE_URL}models/mnist_cnn_ood_v4.onnx`);
        modelLoading.value = false; // Set loading to false once the model is loaded
    } catch (e) {
        console.error("Failed to load model:", e);
        alert('Failed to load the model.'); // More user-friendly error
        modelLoading.value = false; // Ensure loading is set to false even on error
    }
});

const handleImageDataUpdate = (newImageData) => {
    imageData.value = newImageData;
    // Automatically predict whenever the image data changes.
    predictDigit();
};

const predictDigit = async () => {
    if (!session.value) {
        console.error("Model not loaded yet!");
        return;
    }
      // Check if the canvas is empty (all pixels are 0)
    if (imageData.value.every(pixel => pixel === 0)) {
        prediction.value = null; // No prediction if canvas is empty
        logits.value = new Array(11).fill(0); // Reset logits
        return;
    }

    // Create the tensor with the correct dimensions (1x1x28x28)
    const tensor = new ort.Tensor('float32', imageData.value, [1, 1, 28, 28]);

    try {
        // Run inference
        const results = await session.value.run({ [session.value.inputNames[0]]: tensor });
        const outputTensor = results[session.value.outputNames[0]];


        // Apply softmax to get probabilities, handling potential NaN/Infinity
        const expData = outputTensor.data.map(x => {
            const expX = Math.exp(x);
            return Number.isFinite(expX) ? expX : 0; // Avoid NaN/Infinity issues
        });
        const sumExp = expData.reduce((a, b) => a + b, 0);

        const softmaxData = sumExp === 0 ? new Array(11).fill(0) : expData.map(x => x / sumExp); // Prevent division by zero
        logits.value = softmaxData;

       // Find the index with the highest probability (predicted digit)
        const predictedClass = logits.value.indexOf(Math.max(...logits.value));
        prediction.value = predictedClass;


    } catch (e) {
        console.error("Inference error:", e);
        alert('Prediction failed.'); // Provide user feedback
    }
};

const clearPrediction = () => {
    prediction.value = null;
    logits.value = new Array(11).fill(0); // Also clear the logits

};

</script>

<template>
  <div class="app-container">
    <div v-if="modelLoading" class="loading-message">Loading model...</div>
    <template v-else>
        <Canvas @update:imageData="handleImageDataUpdate" @clear-prediction="clearPrediction"/>
      <div class="prediction-result" v-if="prediction !== null">
        Prediction: {{ prediction === 10 ? 'Not a Number' : prediction }}
      </div>
      <div class="logits-panel">
        <div v-for="(logit, index) in logits" :key="index" class="logit-bar-container">
          <div class="logit-label">{{ index === 10 ? 'NaN' : index }}</div>
          <div class="logit-bar" :style="{ width: `${logit * 100}%`, backgroundColor: index === prediction ? 'lightgreen' : 'skyblue' }"></div>
          <div class="logit-value">{{ (logit * 100).toFixed(2) }}%</div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.app-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;  /* Viewport width */
    height: 100vh; /* Viewport height */

}
.prediction-result {
  margin-top: 10px;
  font-size: 1.2em;
  font-weight: bold;
}

.logits-panel {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 80%; /* Adjust as needed */
  max-width: 400px; /* Limit maximum width */
}

.logit-bar-container {
  display: flex;
  align-items: center;
  margin-bottom: 5px; /* Space between bars */
  width: 100%;

}
.logit-label{
  margin-right: 5px;
  width: 30px; /* Increased width for "NaN" */
  text-align: center;
}

.logit-bar {
  height: 20px;
  /* background-color: skyblue; */
  transition: width 0.3s ease;  /* Smooth transition for bar width */
}

.logit-value {
  margin-left: 10px; /* Space between bar and percentage */
  white-space: nowrap;
}

.loading-message {
  font-size: 1.5em;
  color: gray;
}
</style>