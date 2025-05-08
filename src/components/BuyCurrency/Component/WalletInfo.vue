<template>
  <div class="block-cont">
    <div class="block">
      <span class="balance-name">with Wallet</span>
      <span class="balance-text">{{ formattedBalance }}</span>
      <div class="svg-wallet-cont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          class="svg-wallet-icon"
        >
          <g
            fill="none"
            stroke="#727272"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6zm0 2h20"
            />
            <path d="M2 12h7c0 1 .6 3 3 3s3-2 3-3h7" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { getWalletData } from "@/composables/wallet";

const walletData = ref({});

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
.title {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #000;
}

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
}

.svg-wallet-cont {
  padding: 6px;
  background-color: #e0e0e0;
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  border-radius: 100%;
}

.svg-wallet-icon {
}

.balance-text {
  font-weight: 500;
  font-size: 16px;
  color: #000;
}

.balance-name {
  font-weight: 400;
  font-size: 14px;
  color: #727272;
}
</style>
