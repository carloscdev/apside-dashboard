<script setup lang="ts">
import type { InteraccionPorCanal } from '../interfaces/dashboardInterface';
import Card from './Card.vue'

defineProps({
  interaccionesPorCanal: {
    type: Array as () => InteraccionPorCanal[],
    required: true
  },
  loading: {
    type: Boolean,
    default: true
  }
})

const getIcon = (canal: string) => {
  switch (canal) {
    case 'WhatsApp':
      return 'bi-whatsapp'
    case 'Teléfono':
      return 'bi-telephone'
    case 'Email':
      return 'bi-envelope'
    default:
      return ''
  }
}
</script>

<template>
  <Card title="Interacciones por canal" icon="bi-columns-gap">
    <div v-if="loading" class="animate-pulse h-[53px] w-56 bg-gray-200 rounded"></div>
    <ul v-else class="flex items-center gap-2">
      <li v-for="(item, index) in interaccionesPorCanal" :key="index">
        <span class="rounded size-10 bg-primary flex items-center justify-center">
          <v-icon :name="getIcon(item.canal)" size="16" class="text-white" />
        </span>
        <span class="text-xs text-gray-500 block text-center">{{ item.cantidad }}</span>
      </li>
    </ul>
  </Card>
</template>