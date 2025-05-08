<template>
  <div class="briefcase-container">
    <div class="card-list">
      <div
        @click="openCurrency(item)"
        v-for="item in purchases"
        :key="item.id"
        class="card"
      >
        <div class="card-content">
          <div class="card-icon-cont">
            <img :src="item.icon" alt="" class="currency-icon" />
            <div class="currency-info">
              <span class="name">{{ item.name }}</span>
              <!-- <span class="cost"></span> -->
            </div>
          </div>
          <div class="user-data-cont">
            <span class="costUser">$ {{ item.cost }}</span>
            <span class="profit">+ $ {{ item.profit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

import { getAllCurrency } from "@/composables/currency";
import { useCurrencyActions } from "@/composables/currencyAction";
const { openCurrencyPage } = useCurrencyActions();
const purchases = ref([]);

const getPurchases = () => {
  purchases.value = getAllCurrency();
};

const openCurrency = (item) => {
  openCurrencyPage(item);
};

onMounted(getPurchases);
</script>

<style scoped>
.briefcase-container {
  border-radius: 30px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 0 4px rgba(0, 0, 0, 0.04);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #000;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  overflow-y: auto;
}

.card {
  background: #f8f8f8;
  border-radius: 16px;
  padding: 12px;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.card-icon-cont {
  display: flex;
  align-items: center;
  gap: 12px;
}

.currency-icon {
  width: 40px;
  height: 40px;
}

.currency-info {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 700;
  font-size: 1rem;
  color: #000;
}

.cost {
  font-weight: 300;
  font-size: 0.875rem;
  color: #7b7b7b;
}

.user-data-cont {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.costUser {
  font-weight: 300;
  font-size: 0.875rem;
  color: #000;
}

.profit {
  font-weight: 300;
  font-size: 0.75rem;
  color: #1ea740;
}

@media (max-width: 480px) {
  .briefcase-container {
    padding: 16px;
    border-radius: 20px;
  }

  .title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .card {
    padding: 10px;
  }

  .currency-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
