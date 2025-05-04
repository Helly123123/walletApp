<template>
  <footer>
    <nav>
      <ul>
        <li>
          <img src="/navIcon/home.svg" alt="" />
          <span>Home</span>
        </li>
        <li>
          <img src="/navIcon/market.svg" alt="" />
          <span>Market</span>
        </li>
        <li>
          <img src="/navIcon/pfofile.svg" alt="" />
          <span>Profile</span>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  width: 360px;
  height: 76px;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 65px;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
}
</style>
