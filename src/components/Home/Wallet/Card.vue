<template>
  <div class="cont">
    <div class="wallet">
      <h2>{{ walletData.name }}</h2>
      <span>$ {{ formattedBalance }}</span>
      <p>{{ maskedCardNumber }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { getWalletData } from "@/composables/wallet";

const walletData = ref({});

const maskedCardNumber = computed(() => {
  if (!walletData.value.number) return "";
  const num = walletData.value.number.toString();
  return num
    .match(/.{1,4}/g)
    .map((group, index) => (index % 2 === 0 ? group : "****"))
    .join("");
});

const formattedBalance = computed(() => {
  if (!walletData.value.balance) return "0";
  return Number(walletData.value.balance).toLocaleString("en-US");
});

const getData = () => {
  walletData.value = getWalletData();
  console.log(walletData.value);
};

onMounted(getData);
</script>

<style scoped>
.wallet {
  width: 360px;
  height: 200px;
  padding: 30px;
  border-radius: 30px;
  fill: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(100px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.cont {
  width: 330px;
  height: 200px;
  background-color: orange;
  border-radius: 30px;
}

h2 {
  font-weight: 500;
  font-size: 18px;
  color: #fff;
}

span {
  font-weight: 600;
  color: #fff;
  font-size: 32px;
}

p {
  font-weight: 400;
  font-size: 16px;
  color: #fff;
}
</style>
