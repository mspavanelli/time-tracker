<script setup lang="ts">
import TimerButton from "./timer-button.vue";
import TimerDisplay from "./timer-display.vue";

const {
  canEditTask,
  isTimerEnabled,
  handleToggle,
  taskName,
  timer,
  timerStatus,
} = useTimer();
</script>

<template>
  <Card class="flex items-center gap-4 p-4">
    <Input
      placeholder="Qual tarefa você deseja iniciar?"
      v-model="taskName"
      :disabled="!canEditTask"
    />
    <TimerDisplay :time-in-seconds="timer" />
    <TimerButton
      :status="timerStatus"
      :enable="isTimerEnabled"
      @toggle="handleToggle"
    />
  </Card>
</template>
