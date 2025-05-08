import { reactive } from "vue";

const userCurrency = reactive([]);

// Функция для получения списка валют
export function getUserCurrency() {
  return userCurrency;
}

// Функция для добавления валюты с проверкой
export function addCurrency(currency) {
  const existingCurrency = userCurrency.find((item) => item.id === currency.id);

  if (existingCurrency) {
    // Если валюта уже есть - увеличиваем count
    existingCurrency.count += currency.count || 1;
    console.log(
      `Увеличено количество валюты ${currency.name} (ID: ${currency.id})`
    );
  } else {
    // Если нет - добавляем новую запись
    userCurrency.push({
      ...currency,
      count: currency.count || 1, // Добавляем count=1 если его нет
    });
    console.log(`Добавлена новая валюта ${currency.name} (ID: ${currency.id})`);
  }
}
