<template>
  <div class="stock-chart">
    <!-- Вертикальная ось с ценами -->
    <div class="chart-y-axis">
      <span>175,00</span>
      <span>150,00</span>
      <span>125,00</span>
      <span class="current-price-level">{{
        formatPrice(stock.currentPrice)
      }}</span>
      <span>75,00</span>
      <span>50,00</span>
    </div>

    <!-- Основной график -->
    <div class="chart-main">
      <canvas
        ref="chartCanvas"
        @mousemove="handleHover"
        @mouseleave="hideTooltip"
      ></canvas>

      <!-- Всплывающая подсказка -->
      <div
        v-if="tooltip.visible"
        class="chart-tooltip"
        :style="{
          left: tooltip.x + 'px',
          top: tooltip.y + 'px',
        }"
      >
        <div class="tooltip-date">{{ tooltip.date }}</div>
        <div class="tooltip-price">{{ tooltip.price }} ₽</div>
        <div class="tooltip-change" :class="{ negative: tooltip.change < 0 }">
          {{ tooltip.change > 0 ? "+" : "" }}{{ tooltip.change }}%
        </div>
      </div>

      <!-- Вертикальная линия при наведении -->
      <div
        v-if="tooltip.visible"
        class="tooltip-line"
        :style="{ left: tooltip.x + 'px' }"
      ></div>
    </div>

    <!-- Текущая цена и изменение -->
    <div class="chart-info">
      <span class="current-price">{{ formatPrice(stock.currentPrice) }} ₽</span>
      <span :class="['price-change', { negative: stock.change24h < 0 }]">
        {{ stock.change24h > 0 ? "+" : "" }}{{ stock.change24h.toFixed(2) }}%
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Chart from "chart.js/auto";

const stock = ref({
  currentPrice: 97.13,
  change24h: 1.25,
  chartData: Array.from({ length: 30 }, (_, i) => {
    const date = new Date(Date.now() - (29 - i) * 86400000);
    return {
      date: date.toLocaleDateString(),
      dateFull: date,
      price: 90 + Math.random() * 15,
      change: (Math.random() - 0.5) * 5,
    };
  }),
});

const tooltip = ref({
  visible: false,
  x: 0,
  y: 0,
  date: "",
  price: "",
  change: 0,
});

const chartCanvas = ref(null);
let chartInstance = null;

const formatPrice = (price) => {
  return price.toLocaleString("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const handleHover = (event) => {
  if (!chartInstance) return;

  const canvas = chartCanvas.value;
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const points = chartInstance.getElementsAtEventForMode(
    event,
    "nearest",
    { intersect: false },
    true
  );

  if (points.length) {
    const point = points[0];
    const dataIndex = point.index;
    const datasetIndex = point.datasetIndex;

    const data = chartInstance.data.datasets[datasetIndex].data[dataIndex];
    const label = chartInstance.data.labels[dataIndex];
    const change = stock.value.chartData[dataIndex].change;

    tooltip.value = {
      visible: true,
      x: x,
      y: y - 50, // Смещаем выше курсора
      date: stock.value.chartData[dataIndex].dateFull.toLocaleDateString(
        "ru-RU",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      ),
      price: formatPrice(data),
      change: change.toFixed(2),
    };
  }
};

const hideTooltip = () => {
  tooltip.value.visible = false;
};

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d");

    chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: stock.value.chartData.map((item) => item.date),
        datasets: [
          {
            label: "Price",
            data: stock.value.chartData.map((item) => item.price),
            borderColor: stock.value.change24h >= 0 ? "#4CAF50" : "#F44336",
            backgroundColor:
              stock.value.change24h >= 0
                ? "rgba(76, 175, 80, 0.1)"
                : "rgba(244, 67, 54, 0.1)",
            borderWidth: 2,
            tension: 0.1,
            fill: true,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
            },
            min: 50,
            max: 175,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
          axis: "x",
        },
      },
    });
  }
});

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});
</script>

<style scoped>
.stock-chart {
  border-radius: 30px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 0 4px rgba(0, 0, 0, 0.04);
  height: 100%;
  position: relative;
}

.chart-y-axis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 8px;
  font-size: 12px;
  color: #757575;
}

.chart-y-axis .current-price-level {
  color: #000;
  font-weight: bold;
}

.chart-main {
  flex: 1;
  position: relative;
}

.chart-info {
  position: absolute;
  top: 12px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.current-price {
  font-size: 16px;
  font-weight: 700;
}

.price-change {
  font-size: 14px;
  color: #4caf50;
  font-weight: 500;
}

.price-change.negative {
  color: #f44336;
}

/* Стили для всплывающей подсказки */
.chart-tooltip {
  position: absolute;
  background: white;
  border-radius: 6px;
  padding: 8px 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  z-index: 10;
  transform: translateX(-50%);
  min-width: 120px;
}

.tooltip-date {
  font-size: 12px;
  color: #757575;
  margin-bottom: 4px;
}

.tooltip-price {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2px;
}

.tooltip-change {
  font-size: 12px;
  color: #4caf50;
}

.tooltip-change.negative {
  color: #f44336;
}

.tooltip-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(0, 0, 0, 0.1);
  pointer-events: none;
  z-index: 5;
}
</style>
