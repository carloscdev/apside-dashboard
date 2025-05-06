<script setup lang="ts">
import { ref } from 'vue'
import Card from './Card.vue'
import TagStatus from './TagStatus.vue'
import type { InteraccionResponse, StatusType } from '../interfaces/dashboardInterface'

const props = defineProps<{
  interacciones: InteraccionResponse[]
  loading: boolean
}>()

const expandedRow = ref<number | null>(null)

const toggleRow = (index: number) => {
  expandedRow.value = expandedRow.value === index ? null : index
}
</script>

<template>
  <Card title="Interacciones" icon="bi-table">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th class="px-6 py-3">Canal</th>
            <th class="px-6 py-3">Tipo</th>
            <th class="px-6 py-3">Costo (USD)</th>
            <th class="px-6 py-3">Fecha</th>
            <th class="px-6 py-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(interaccion, index) in props.interacciones"
            :key="index"
            class="bg-white border-t border-gray-100 hover:bg-gray-50 cursor-pointer"
            @click="toggleRow(index)">
            <td class="px-6 py-4 font-medium whitespace-nowrap">{{ interaccion.canal }}</td>
            <td class="px-6 py-4">{{ interaccion.tipo }}</td>
            <td class="px-6 py-4">${{ interaccion.costo.total.toFixed(2) }}</td>
            <td class="px-6 py-4">{{ interaccion.fecha }}</td>
            <td class="px-6 py-4">
              <TagStatus :status="interaccion.estado as StatusType" />
            </td>
          </tr>
        </tbody>
      </table>
  </Card>
</template>
