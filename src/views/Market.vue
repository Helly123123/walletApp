<template>
  <div class="home-container">
    <h2 class="title">Market</h2>
    <Search />
    <SearchList />
    <Footer />
  </div>
</template>

<script setup>
import Search from "@/components/Market/Search.vue";
import SearchList from "@/components/Market/SearchList.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<style scoped>
.title {
  font-weight: 600;
  font-size: 28px;
  color: #000;
}

.home-container {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Равное расстояние между компонентами */
  padding: 16px;
  height: 100vh;
  box-sizing: border-box;
}

.home-container > * {
  width: 100%;
}

.home-container > :last-child {
  flex-grow: 1; /* Briefcase занимает все доступное пространство */
}
</style>
