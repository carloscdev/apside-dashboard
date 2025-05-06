<script setup lang="ts">

</script>

<template>
  <header>
    <nav class="flex items-center justify-between py-4">
      <div>
        <img src="../assets/apside.png" alt="Logo" width="150" />
      </div>
      <div class="flex items-center gap-2">
        <div class="size-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow border-gray-200">
          <v-icon name="bi-gear-fill" size="24" class="" />
        </div>
        <div class="size-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow border-gray-200 relative">
          <v-icon name="bi-bell-fill" size="24" class="" />
          <span class="absolute top-0 right-0 flex size-3">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex size-3 rounded-full bg-primary"></span>
          </span>
        </div>
        <figure class="flex items-center gap-2 cursor-pointer">
          <img src="../assets/user.jpg" alt="Logo" width="40" height="40" class="rounded-full" />
          <figcaption class="text-sm text-gray-600">
            John Doe
            <span class="block font-semibold text-xs">CTO</span>
          </figcaption>
        </figure>
      </div>
    </nav>
  </header>
</template>
