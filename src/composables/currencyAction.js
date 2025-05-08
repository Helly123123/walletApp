import { ref } from "vue";
import { useRouter } from "vue-router";

// Создаем реактивное состояние
const selectedItem = ref({});

export function useCurrencyActions() {
  const router = useRouter(); // Теперь useRouter вызывается внутри композабла

  const openCurrencyPage = (item) => {
    console.log(item);
    selectedItem.value = item;
    router.push("/currency"); // Добавил слеш в начало пути
  };

  const getSelectedItem = () => selectedItem.value;

  return {
    openCurrencyPage,
    getSelectedItem,
  };
}
