<script setup lang="ts">
import { computed } from 'vue'
import type { StatusType } from '../interfaces/dashboardInterface'

const props = defineProps({
  status: {
    type: String as () => StatusType, // Usar el tipo Status
    default: 'Enviado'
  }
})

const statusMap = {
  Enviado:      { text: 'Enviado',      bg: 'bg-blue-100',    textColor: 'text-blue-800' },
  Finalizado:   { text: 'Finalizado',   bg: 'bg-green-100',   textColor: 'text-green-800' },
  'En Proceso': { text: 'En Proceso',   bg: 'bg-yellow-100',  textColor: 'text-yellow-800' },
  Cancelado:    { text: 'Cancelado',    bg: 'bg-red-100',     textColor: 'text-red-800' },
  Pendiente:    { text: 'Pendiente',    bg: 'bg-orange-100',  textColor: 'text-orange-800' },
  Rechazado:    { text: 'Rechazado',    bg: 'bg-gray-200',    textColor: 'text-gray-800' },
  Aprobado:     { text: 'Aprobado',     bg: 'bg-emerald-100', textColor: 'text-emerald-800' },
  'En Espera':  { text: 'En Espera',    bg: 'bg-purple-100',  textColor: 'text-purple-800' }
}

const current = computed(() => statusMap[props.status] || { text: props.status, bg: 'bg-gray-100', textColor: 'text-gray-800' })
</script>

<template>
  <span :class="`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${current.textColor} ${current.bg}`">
    {{ current.text }}
  </span>
</template>
