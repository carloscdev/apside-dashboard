<script setup lang="ts">
import Card from './Card.vue'

defineProps({
  total: {
    type: Number,
    required: true
  },
  loading: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <Card title="Total Invertido (USD)" icon="bi-cash-coin">
    <div v-if="loading" class="animate-pulse h-[48px] w-56 bg-gray-200 rounded"></div>
    <p v-else class="text-5xl font-bold text-gray-800">
      $ {{ total }}
    </p>
  </Card>
</template>
