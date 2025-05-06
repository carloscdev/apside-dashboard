<script setup lang="ts">
import { ref, computed } from 'vue'
import { DoughnutChart, PieChart, BarChart, LineChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import Card from './Card.vue'
import type { InteraccionPorCanal, InteraccionPorTipo } from '../interfaces/dashboardInterface'

Chart.register(...registerables)

const props = defineProps({
  interaccionesPorCanal: {
    type: Array as () => InteraccionPorCanal[],
    required: true,
  },
  interaccionesPorTipo: {
    type: Array as () => InteraccionPorTipo[],
    required: true,
  },
  loading: {
    type: Boolean,
    default: true,
  },
})

const chartType = ref<'doughnut' | 'pie' | 'bar' | 'line'>('doughnut')
const dataView = ref<'canal' | 'tipo'>('canal')

const datasets = computed(() => ({
  canal: {
    labels: props.interaccionesPorCanal.map((item) => item.canal),
    datasets: [
      {
        label: 'Canal',
        data: props.interaccionesPorCanal.map((item) => item.cantidad),
        backgroundColor: ['#9B00FF', '#d493ff', '#53008b'],
      },
    ],
  },
  tipo: {
    labels: props.interaccionesPorTipo.map((item) => item.tipo),
    datasets: [
      {
        label: 'Tipo',
        data: props.interaccionesPorTipo.map((item) => item.cantidad),
        backgroundColor: ['#9B00FF', '#d493ff', '#53008b'],
      },
    ],
  },
}))

const chartData = computed(() => datasets.value[dataView.value])

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
          <option value="tipo">Tipo</option>
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
    <div v-if="loading" class="animate-pulse aspect-square w-full bg-gray-200 rounded"></div>
    <component v-else :is="chartComponent" :chart-data="chartData" :options="chartOptions" style="height: 300px" />
  </Card>
</template>
