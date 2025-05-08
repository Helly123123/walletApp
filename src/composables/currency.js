import { ref, reactive } from "vue";

// Создаем реактивное состояние
const stationMenu = ref(false);

const currency = reactive([
  {
    id: 1,
    icon: "/currencyIcon/eth.svg",
    name: "ETH",
    cost: 42302,
    count: 0,
    costUser: 23043,
    profit: 32,
    profitPercent: 1.223,
  },
]);

// Функция для изменения состояния
export function setStationMenu() {
  stationMenu.value = !stationMenu.value;
}

// Функция для получения состояния
export function getAllCurrency() {
  return currency;
}
