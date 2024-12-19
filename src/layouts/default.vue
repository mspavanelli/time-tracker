<script setup lang="ts">
import Sidebar from "@/components/widgets/Sidebar/index.vue";
</script>

<template>
  <div class="flex h-screen">
    <Sidebar />
    <main class="flex-1 p-4">
      <slot />
    </main>
  </div>
</template>
