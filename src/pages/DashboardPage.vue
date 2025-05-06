<script setup lang="ts">
import Header from '../components/Header.vue'
import Title from '../components/Title.vue'
import TableList from '../components/TableList.vue'
import TotalInteracciones from '../components/TotalInteracciones.vue'
import TotalInvertido from '../components/TotalInvertido.vue'
import InteraccionesCanal from '../components/InteraccionesCanal.vue'
import ChartInteracciones from '../components/ChartInteracciones.vue'
import { ref, type Ref } from 'vue'
import type { DashboardResponse, InteraccionResponse } from '../interfaces/dashboardInterface'
import { fetchDashboard, fetchInteracciones } from '../services/dashboardService'

const dashboardData: Ref<DashboardResponse | null> = ref(null)
const interaccionesData: Ref<InteraccionResponse[]> = ref([])

const isLoadingDashboard = ref(true)
const isLoadingInteracciones = ref(true)

const getDashboard = async () => {
  try {
    const response = await fetchDashboard()
    dashboardData.value =  await response
    setTimeout(() => {
      isLoadingDashboard.value = false
    }, 2300)
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
  }
}

const getInteracciones = async () => {
  try {
    const response = await fetchInteracciones()
    interaccionesData.value = await response
    setTimeout(() => {
      isLoadingInteracciones.value = false
    }, 2300)
  } catch (error) {
    console.error('Error fetching interacciones data:', error)
  }
}

getDashboard()
getInteracciones()
</script>

<template>
  <div>
    <Header />
    <main class="grid gap-4 py-8">
      <Title />
      <div class="grid md:grid-cols-3 gap-4">
        <TotalInteracciones :total="dashboardData?.totalInteracciones || 0" :loading="isLoadingDashboard" />
        <TotalInvertido :total="dashboardData?.totalInvertido || 0" :loading="isLoadingDashboard" />
        <InteraccionesCanal :interaccionesPorCanal="dashboardData?.interaccionesPorCanal || []" :loading="isLoadingDashboard" />
      </div>
      <div class="grid md:grid-cols-3 gap-4">
        <TableList :interacciones="interaccionesData" :loading="isLoadingInteracciones" class="md:col-start-1 md:col-span-2" />
        <ChartInteracciones class="md:col-start-3 md:col-span-1" />
      </div>
    </main>
  </div>
</template>
