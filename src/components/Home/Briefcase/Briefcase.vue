<template>
  <div class="cont">
    <h2 class="title">Briefcase</h2>
    <div class="card-list">
      <div v-for="item in purchases" :key="item.id" class="card">
        <div class="card-icon-cont">
          <img :src="item.icon" alt="" />
          <div>
            <span class="name">{{ item.name }}</span>
            <div>
              <span class="cost"
                >$ {{ item.cost }} • <span>{{ item.count }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="user-data-cont">
          <span class="costUser">$ {{ item.costUser }}</span>
          <span class="profit">+ $ {{ item.profit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const purchases = ref([
  {
    id: 1,
    icon: "/currencyIcon/eth.svg",
    name: "ETH",
    cost: 42302,
    count: "34",
    costUser: 23043,
    profit: 32,
  },
  {
    id: 1,
    icon: "/currencyIcon/eth.svg",
    name: "ETH",
    cost: 42302,
    count: "34",
    costUser: 23043,
    profit: 32,
  },
  {
    id: 1,
    icon: "/currencyIcon/eth.svg",
    name: "ETH",
    cost: 42302,
    count: "34",
    costUser: 23043,
    profit: 32,
  },
  {
    id: 1,
    icon: "/currencyIcon/eth.svg",
    name: "ETH",
    cost: 42302,
    count: "34",
    costUser: 23043,
    profit: 32,
  },
]);

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("ru-RU", options);
};
</script>

<style scoped>
.cont {
  border-radius: 30px;
  width: 362px;
  height: 366px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.04);
  background: #fff;
  padding: 30px;
}

.title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 24px;
}

.card-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

.card {
  display: flex;
  align-items: center;
  gap: 85px;
}

.card-icon-cont {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-data-cont {
  display: flex;
  /* align-items: flex-start; */
  flex-direction: column;
  gap: 6px;
}

.name {
  font-weight: 700;
  font-size: 20px;
  color: #000;
}

.cost {
  font-weight: 300;
  font-size: 16px;
  color: #7b7b7b;
}

.costUser {
  font-weight: 300;
  font-size: 16px;
  color: #000;
}

.profit {
  font-weight: 300;
  font-size: 14px;
  text-align: right;
  color: #1ea740;
}
</style>
