<script setup lang="ts">
import { useTaskStore } from "@/store/tasks.store";
import TimerDisplay from "./task-input/timer-display.vue";

const { tasks } = useTaskStore();
</script>

<template>
  <div class="space-y-4">
    <Card
      v-for="task in tasks"
      :key="task.id"
      class="flex items-center justify-between p-4"
    >
      {{ task.title }}
      <TimerDisplay :time-in-seconds="task.durationInSeconds" />
    </Card>
  </div>
</template>
