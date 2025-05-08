<template>
  <div class="cont">
    <h2>$ {{ currencyData.cost }}</h2>
    <span>+{{ currencyData.profitPercent }}%</span>
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
.cont {
  position: relative;
  width: 360px;
  border-radius: 20px;
  padding: 30px;
  height: 86px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.04);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  font-weight: 600;
  font-size: 28px;
  text-align: center;
  color: #000;
}

span {
  font-weight: 400;
  font-size: 16px;
  color: #1ea740;
  position: absolute;
  right: 30px;
  bottom: 10px;
}
</style>
