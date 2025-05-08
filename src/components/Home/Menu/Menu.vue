<template>
  <div class="cont">
    <nav>
      <ul>
        <li>
          <img src="/menuIcon/operations.svg" alt="" />
          <span>Operations</span>
        </li>
        <li>
          <img src="/menuIcon/deposit.svg" alt="" />
          <span>Deposit</span>
        </li>
        <li>
          <img src="/menuIcon/settings.svg" alt="" />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
.cont {
  padding: 30px;
  width: 360px;
  border-radius: 20px;
  height: 77px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
}
</style>
