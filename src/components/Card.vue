<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-xs">
    <div class="flex items-center gap-2 mb-4" v-if="title && icon">
      <div class="size-8 border border-gray-200 rounded flex items-center justify-center">
        <v-icon :name="icon" size="20" class="text-primary" />
      </div>
      <h3 class="">
        {{ title }}
      </h3>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
