<template>
  <div class="block-cont">
    <div class="block">
      <span class="title">Number of lots</span>
      <span class="lots" :class="{ error: currentLots > lotsCount }">{{
        currentLots
      }}</span>
      <div class="button">
        <button class="btn" @click="decrement" :disabled="currentLots <= 0">
          -
        </button>
        <button
          class="btn"
          @click="increment"
          :disabled="currentLots >= lotsCount"
        >
          +
        </button>
      </div>
    </div>
    <span class="available-text">Available {{ lotsCount }}</span>
  </div>
  <div class="buy-button-cont">
    <button
      class="buy-button"
      @click="buyCurrency"
      :disabled="currentLots === 0 || currentLots > lotsCount"
    >
      Buy
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { getWalletData } from "@/composables/wallet";
import { useCurrencyActions } from "@/composables/currencyAction";
import { addCurrency } from "@/composables/briefcase"; // Импортируем функцию добавления

const { getSelectedItem } = useCurrencyActions();
const walletData = ref({});
const currencyData = ref({});
const currentLots = ref(0);

const lotsCount = computed(() => {
  if (!currencyData.value.cost || !walletData.value.balance) return 0;
  return Math.floor(walletData.value.balance / currencyData.value.cost);
});

const increment = () => {
  if (currentLots.value < lotsCount.value) {
    currentLots.value++;
  }
};

const decrement = () => {
  if (currentLots.value > 0) {
    currentLots.value--;
  }
};

// Функция покупки валюты
const buyCurrency = () => {
  if (currentLots.value > 0 && currencyData.value) {
    addCurrency({
      ...currencyData.value,
      count: currentLots.value, // Используем выбранное количество лотов
    });

    // Можно добавить уведомление об успешной покупке
    alert(
      `Successfully bought ${currentLots.value} lots of ${currencyData.value.name}`
    );

    // Сброс счётчика после покупки (опционально)
    currentLots.value = 0;
  }
};

const getDataCurrency = () => {
  currencyData.value = getSelectedItem();
};

const getData = () => {
  walletData.value = getWalletData();
};

onMounted(() => {
  getData();
  getDataCurrency();
});
</script>

<style scoped>
.block-cont {
  position: relative;
}

.block {
  padding: 20px;
  border-radius: 9px;
  width: 301px;
  height: 60px;
  background: #f0f0f0;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
}

.lots {
  font-weight: 500;
  font-size: 16px;
  color: #000;
  transition: color 0.3s ease;
}

.lots.error {
  color: #ff3b30;
  font-weight: bold;
}

.title {
  font-weight: 400;
  font-size: 14px;
  color: #727272;
}

.button {
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn {
  width: 35px;
  height: 35px;
  background: #d8d8d8;
  border-radius: 5px;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn:hover:not(:disabled) {
  background: #c8c8c8;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.available-text {
  font-weight: 400;
  font-size: 14px;
  color: #727272;
  margin-top: 8px;
  display: block;
}

.buy-button-cont {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.buy-button {
  width: 300px;
  border-radius: 10px;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  background-color: rgb(61, 61, 61);
  color: rgb(255, 255, 255);
}
</style>
