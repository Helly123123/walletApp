<template>
  <div class="home-container">
    <div class="conts">
      <svg
        @click="navigateTo('market')"
        class="out-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 20 20"
      >
        <path
          fill="#727272"
          d="M13 3v2h2v10h-2v2h4V3zm0 8V9H5.4l4.3-4.3l-1.4-1.4L1.6 10l6.7 6.7l1.4-1.4L5.4 11z"
        />
      </svg>
      <h2 class="title">Purchase</h2>
    </div>
    <Header :currencyData="currencyData" />
    <Main :currencyData="currencyData" />
    <Footer />
  </div>
</template>

<script setup>
import Main from "./Component/Main.vue";
import Header from "./Component/Header.vue";
import WalletInfo from "./Component/WalletInfo.vue";
import Footer from "@/components/Footer/Footer.vue";

import { useCurrencyActions } from "@/composables/currencyAction";
const { getSelectedItem } = useCurrencyActions();

import { onMounted, ref } from "vue";

const currencyData = ref({});

const getDataCurrency = () => {
  currencyData.value = getSelectedItem();
  console.log(currencyData.value);
};

onMounted(getDataCurrency);
</script>

<style scoped>
.home-container {
  position: relative;
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

.conts {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-weight: 600;
  font-size: 24px;
  color: #000;
}

.out-svg {
  position: absolute;
  left: 16px;
}
</style>
