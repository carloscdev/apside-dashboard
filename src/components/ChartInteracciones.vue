<script setup lang="ts">
import { ref, computed } from 'vue'
import { DoughnutChart, PieChart, BarChart, LineChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import Card from './Card.vue'

Chart.register(...registerables)

const chartType = ref<'doughnut' | 'pie' | 'bar' | 'line'>('doughnut')
const dataView = ref<'canal' | 'interaccion'>('canal')

const datasets = {
  canal: {
    labels: ['Whatsapp', 'Teléfono', 'Mail'],
    datasets: [
      {
        label: 'Canal',
        data: [1050, 1400, 650],
        backgroundColor: ['#9B00FF', '#d493ff', '#53008b'],
      },
    ],
  },
  interaccion: {
    labels: ['Cobranzas', 'Notificaciones', 'Soporte'],
    datasets: [
      {
        label: 'Interacción',
        data: [900, 1100, 700],
        backgroundColor: ['#9B00FF', '#d493ff', '#53008b'],
      },
    ],
  },
}

const chartData = computed(() => datasets[dataView.value])

const chartOptions = computed(() => ({
  plugins: {
    legend: {
      display: chartType.value !== 'bar' && chartType.value !== 'line',
      position: 'bottom',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
}))

const chartComponent = computed(() => {
  switch (chartType.value) {
    case 'bar': return BarChart
    case 'pie': return PieChart
    case 'line': return LineChart
    default: return DoughnutChart
  }
})
</script>

<template>
  <Card title="Gráficos" icon="bi-graph-up-arrow" class="md:col-start-3 md:col-span-1">
    <div class="grid grid-cols-2 gap-4 mb-4">
      <label for="type" class="grid">
        <span class="text-xs text-gray-400">Mostrar por:</span>
        <select v-model="dataView" id="type">
          <option value="canal">Canal</option>
          <option value="interaccion">Interacción</option>
        </select>
      </label>
      <label for="type" class="grid">
        <span class="text-xs text-gray-400">Tipo de gráfico:</span>
        <select v-model="chartType" id="type">
          <option value="doughnut">Dona</option>
          <option value="pie">Pie</option>
          <option value="bar">Barra</option>
          <option value="line">Línea</option>
        </select>
      </label>
    </div>

    <component :is="chartComponent" :chart-data="chartData" :options="chartOptions" style="height: 300px" />
  </Card>
</template>
