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
      <h2 class="title">
        <img class="currency-icon" :src="currencyData.icon" alt="" />
        {{ currencyData.name }}
      </h2>
    </div>
    <Header :currencyData="currencyData" />
    <Chart />
    <AboutCurrency />
    <Menu :currencyData="currencyData" />
    <Footer />
  </div>
</template>

<script setup>
import Chart from "./Components/Chart.vue";
import Header from "./Components/Header.vue";
import AboutCurrency from "./Components/AboutCurrency.vue";
import Menu from "./Components/Menu.vue";
import Footer from "@/components/Footer/Footer.vue";
import { useCurrencyActions } from "@/composables/currencyAction";
const { getSelectedItem } = useCurrencyActions();

import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const currencyData = ref({});

const router = useRouter();

const navigateTo = (page) => {
  router.push(page);
};

const getDataCurrency = () => {
  currencyData.value = getSelectedItem();
  console.log(currencyData.value);
};

onMounted(getDataCurrency);
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Равное расстояние между компонентами */
  padding: 16px;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
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
  font-size: 26px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.out-svg {
  position: absolute;
  left: 16px;
}

.currency-icon {
  width: 30px;
}
</style>
