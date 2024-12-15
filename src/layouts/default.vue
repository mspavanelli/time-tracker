<script setup lang="ts">
import Sidebar from "@/components/widgets/Sidebar/index.vue";
</script>

<template>
  <div class="h-screen">
    <Sidebar />
    <slot />
  </div>
</template>
