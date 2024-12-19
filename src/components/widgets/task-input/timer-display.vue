<script setup lang="ts">
const { timeInSeconds } = defineProps<{
  timeInSeconds: number;
}>();

const digitalFormat = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const digitalTimer = computed(() => digitalFormat(timeInSeconds));
</script>

<template>
  <span class="font-mono text-sm">{{ digitalTimer }}</span>
</template>
