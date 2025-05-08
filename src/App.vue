<template>
  <div class="app">
    <router-view></router-view>
    <slot></slot>
  </div>
</template>

<script setup>
import Home from "./views/Home.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<style>
/* Подключаем шрифт Poppins из Google Fonts */

:root {
  --max-width: 1200px;
  --side-padding: 1rem;
  --font-primary: "Poppins", -apple-system, BlinkMacSystemFont, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  font-family: var(--font-primary);
  /* Улучшаем рендеринг шрифта */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  width: 100%;
  max-width: var(--max-width);
  padding: 0 var(--side-padding);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Адаптация для мобильных */
@media (max-width: 768px) {
  :root {
    --side-padding: 0.75rem;
  }
}
</style>
