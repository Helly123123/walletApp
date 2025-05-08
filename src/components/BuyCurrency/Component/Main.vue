<template>
  <div class="briefcase-container">
    <WalletInfo />
    <PurchaseLogic :currencyData="currencyData" />
  </div>
</template>

<script setup>
import WalletInfo from "./WalletInfo.vue";
import PurchaseLogic from "./PurchaseLogic.vue";
import { toRefs } from "vue";
const props = defineProps({
  currencyData: {
    type: Object,
  },
});
const { currencyData } = toRefs(props);
</script>

<style scoped>
.briefcase-container {
  position: relative;
  border-radius: 30px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 0 4px rgba(0, 0, 0, 0.04);
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
