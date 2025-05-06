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
</script>

<template>
  <Card title="Interacciones por canal" icon="bi-columns-gap">
    <div v-if="loading" class="animate-pulse h-[48px] w-56 bg-gray-200 rounded"></div>
    <ul v-else class="flex items-center gap-4">
      <li>
        <span class="rounded size-10 bg-primary flex items-center justify-center">
          <v-icon name="bi-whatsapp" size="16" class="text-white" />
        </span>
        <span class="text-xs text-gray-500 block text-center">1,250</span>
      </li>
      <li>
        <span class="rounded size-10 bg-primary flex items-center justify-center">
          <v-icon name="bi-telephone" size="16" class="text-white" />
        </span>
        <span class="text-xs text-gray-500 block text-center">550</span>
      </li>
      <li>
        <span class="rounded size-10 bg-primary flex items-center justify-center">
          <v-icon name="bi-envelope" size="16" class="text-white" />
        </span>
        <span class="text-xs text-gray-500 block text-center">2,250</span>
      </li>
    </ul>
  </Card>
</template>
