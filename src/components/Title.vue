<script setup lang="ts">
import Card from './Card.vue'
import { ref } from 'vue'

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

const fromDate = ref(formatDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1)))
const toDate = ref(formatDate(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)))

</script>

<template>
  <Card class="bg-white shadow-md rounded-lg p-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p class="text-gray-600">Bienvenido al panel de control</p>
      </div>
      <div class="flex items-end gap-1">
        <label for="fromDate" class="grid">
          <span class="text-xs text-gray-400">Desde:</span>
          <input type="date" v-model="fromDate" />
        </label>
        <label for="toDate" class="grid">
          <span class="text-xs text-gray-400">Hasta:</span>
          <input type="date" v-model="toDate" />
        </label>
        <button class="bg-primary text-white rounded-lg p-2 size-10 flex items-center justify-center">
          <v-icon name="bi-search" class="text-white" />
        </button>
      </div>
    </div>
  </Card>
</template>
