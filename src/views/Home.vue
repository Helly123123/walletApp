<template>
  <div class="home-container">
    <CreateWallet />
    <WalletCard />
    <Menu />
    <Briefcase />
    <Footer />
  </div>
</template>

<script setup>
import WalletCard from "../components/Home/Wallet/Card.vue";
import Briefcase from "../components/Home/Briefcase/Briefcase.vue";
import Menu from "../components/Home/Menu/Menu.vue";
import Footer from "@/components/Footer/Footer.vue";
import CreateWallet from "@/components/CreateWallet/CreateWallet.vue";
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Равное расстояние между компонентами */
  padding: 16px;
  height: 100vh;
  box-sizing: border-box;
}

.home-container > * {
  width: 100%;
}

.home-container > :last-child {
  flex-grow: 1; /* Briefcase занимает все доступное пространство */
}
</style>

<!-- <template>
  <div class="mesh-generator">
    <h2>4-Corner Mesh Gradient</h2>

    <div class="controls">
      <div class="color-controls">
        <div class="point-control">
          <h3>Top Left</h3>
          <input type="color" v-model="points[0].color" />
          <div class="coordinates">Position: 0%, 0%</div>
        </div>

        <div class="point-control">
          <h3>Top Right</h3>
          <input type="color" v-model="points[1].color" />
          <div class="coordinates">Position: 100%, 0%</div>
        </div>

        <div class="point-control">
          <h3>Bottom Left</h3>
          <input type="color" v-model="points[2].color" />
          <div class="coordinates">Position: 0%, 100%</div>
        </div>

        <div class="point-control">
          <h3>Bottom Right</h3>
          <input type="color" v-model="points[3].color" />
          <div class="coordinates">Position: 100%, 100%</div>
        </div>
      </div>
    </div>

    <div
      class="gradient-preview"
      :style="gradientStyle"
      @click="copyToClipboard"
    >
      <div class="copy-hint">Click to copy CSS</div>
    </div>

    <div class="css-output">
      <h3>CSS Code:</h3>
      <pre>{{ cssCode }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const points = ref([
  { color: "#ff9a9e", x: 0, y: 0 }, // Top-left
  { color: "#fad0c4", x: 100, y: 0 }, // Top-right
  { color: "#fbc2eb", x: 0, y: 100 }, // Bottom-left
  { color: "#a18cd1", x: 100, y: 100 }, // Bottom-right
]);

const gradientStyle = computed(() => {
  const gradients = points.value
    .map((point) => {
      return `radial-gradient(150% 150% at ${point.x}% ${point.y}%, ${point.color} 0%, transparent 70%)`;
    })
    .join(", ");

  return {
    background: gradients,
    backgroundBlendMode: "overlay",
  };
});

const cssCode = computed(() => {
  return `.gradient-element {
  background: ${gradientStyle.value.background};
  background-blend-mode: overlay;
}`;
});

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(cssCode.value);
    alert("CSS copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
</script>

<style scoped>
.mesh-generator {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Inter", sans-serif;
}

h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.controls {
  margin-bottom: 2rem;
}

.color-controls {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.point-control {
  background: white;
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.point-control h3 {
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.1rem;
}

.point-control input[type="color"] {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.coordinates {
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.5rem;
}

.gradient-preview {
  width: 100%;
  height: 350px;
  border-radius: 12px;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.copy-hint {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.2s;
}

.gradient-preview:hover .copy-hint {
  opacity: 1;
}

.css-output {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
}

.css-output h3 {
  margin-top: 0;
  color: #2c3e50;
  text-align: center;
}

pre {
  background: #2b2d42;
  color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style> -->
