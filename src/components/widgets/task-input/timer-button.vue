<script setup lang="ts">
import { TimerStatus } from "@/utils/constants/timer-status";
import { Play, Square } from "lucide-vue-next";

const { status } = defineProps<{
  status: TimerStatus;
  enable: boolean;
}>();
</script>

<template>
  <Button variant="outline" @click="$emit('toggle')" :disabled="!enable">
    <Play v-if="status === TimerStatus.IDLE" />
    <Square v-if="status === TimerStatus.RUNNING" fill="white" />
  </Button>
</template>
