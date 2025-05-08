<template>
  <div @click="openCurrency(item)" class="card">
    <div class="card-content">
      <div class="card-icon-cont">
        <img :src="currencyData.icon" alt="" class="currency-icon" />
        <div class="currency-info">
          <span class="name">{{ currencyData.name }}</span>
        </div>
      </div>
      <div class="user-data-cont">
        <span class="costUser">$ {{ currencyData.cost }}</span>
        <span class="profit">+ $ {{ currencyData.profit }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
  currencyData: {
    type: Object,
  },
});
const { currencyData } = toRefs(props);
</script>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 0 4px rgba(0, 0, 0, 0.04);
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
