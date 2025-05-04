<template>
  <div class="cont">
    <div class="wallet">
      <h2>Wallet</h2>
      <span>$ 54,248</span>
      <p>7758 **** 7485 ****</p>
    </div>
  </div>
</template>

<script setup></script>

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
