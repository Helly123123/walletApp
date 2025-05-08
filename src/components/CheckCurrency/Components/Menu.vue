<template>
  <div class="cont">
    <button class="sale">Sale</button>
    <button class="buy" @click="handleBuy">Buy</button>
  </div>
</template>

<script setup>
import { addCurrency } from "@/composables/briefcase";
import { toRefs, defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  currencyData: {
    type: Object,
    required: true,
  },
});

const { currencyData } = toRefs(props);

const handleBuy = () => {
  // addCurrency(currencyData.value);
  navigateTo("/buy");
};

const router = useRouter();

const navigateTo = (page) => {
  router.push(page);
};
</script>

<style scoped>
.cont {
  border-radius: 30px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 0 4px rgba(0, 0, 0, 0.04);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.sale {
  width: 130px;
  border-radius: 10px;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  background-color: rgb(61, 61, 61);
  color: rgb(255, 255, 255);
}

.buy {
  height: 40px;
  width: 130px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}
</style>
